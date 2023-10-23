import { Text } from "@chakra-ui/react"
import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import Search from "@/Components/Common/search/Search";
import ReusableTable from "@/Components/table/table";
import { designerHeader } from "@/Utils/string";
import AuthService from "@/Utils/AuthService";
import {toast } from 'react-toastify';
import TosterMessage from "../Common/tosterMessage/TosterMessage";
import DesignerProjectModal from "./DesignerProject/DesignerProject";
import CreateUpdateDesigner from "./addUpdateDesigner/createUpdateDesigner";
const DesignerMenu=()=>{

    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [designer,setDesigner]=useState([]);
    const [editDesigner,setEditDesigner]=useState<any>();
    const [message,setMessage]=useState<any>();
    const [isProjectOpen, setIsProjectOpen] = useState(false);
    const [designerProData,setDesignerProData]=useState<any>([]);

  

  const closeModal = () => {
    setIsProjectOpen(false);
  };



    useEffect(()=>{
       AuthService.getDesigner().then((response:any)=>{

        if(response.status===200){
             setDesigner(response?.data?.designerDetails);
            setMessage("");

        }else{
        toast.error("Can't get Designer");
        }
        setMessage("");

       }).catch((error)=>{
        toast.error("Can't get Designer");
       })
    },[message])



    // Filter the data based on search query
  
    const filteredData = designer?.filter((item: any) => {
      const firstName = item.designer?.firstName.toLowerCase();
       const lastName = item.designer?.lastName.toLowerCase();
       const email = item.designer?.email.toLowerCase();
       const mobile = item.designer?.mobile.toLowerCase();
  
        const query = searchQuery.toLowerCase();
        return (
          firstName.includes(query) ||
           lastName.includes(query) ||
           email?.includes(query) ||
           mobile?.includes(query)
      );
    });
  
    const itemsPerPage = 10; // Replace with the actual number of items per page
  
    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
  
    // Get the current page of filtered data
    const currentData = filteredData?.slice(startIndex, endIndex);
  
    // Calculate the total number of pages
    const totalPages = Math.ceil(filteredData?.length / itemsPerPage);
  


    const handlePageChange = (page: number) => {
      setCurrentPage(page);
      // Fetch data for the new page here
    };
  


    const handleDelete = (id: string) => {
      // Implement your delete logic here
     
    };
  

    const handleEdit = (item: any) => {
      // Implement your edit logic here
      setEditDesigner(item?.designer);
   
      setIsModalOpen(true)
    };
  


    const handleSearch = (query: string) => {
      setSearchQuery(query);
      // Perform search logic here using the query
      // e.g., make an API request or filter data
    };
  
  
    //userModal
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setEditDesigner("");
      setIsModalOpen(false);
    };
  
    const handleSaveUser = (project:any) => {
    //createDesignerProject(project);
  
      const form = new FormData(); 
      Object.entries(project).forEach(([key, value]:any) => {
        form.append(key, value);
    });
    if(project?.id){
      updateDesigner(form,project?.id);
    }else{
      createDesigner(form);
    }
    
    };
  



    const createDesigner=(payload:any)=>{
      const config = {
        headers: { "content-type": "multipart/form-data" },
      };
        AuthService.createDesigner(payload,config).then((response:any)=>{
          if(response?.status===200){
            toast.success("Assign Projct Successfully");
            setMessage(response);
          }else{
            toast.error("can't edit user");
          }
    
        }).catch((error:any)=>{

          

        })
      }
  

      const updateDesigner=(payload:any,id:any)=>{
        const config = {
          headers: { "content-type": "multipart/form-data" },
        };
        AuthService.editDesigner(payload,id,config).then((response:any)=>{
          if(response?.status===200){
            toast.success("edit Designer  Successfully");
            setMessage(response);
            setEditDesigner("")
          }else{
            toast.error("can't edit user");
          }
    
        }).catch((error:any)=>{
       
        })
      }



    // const createDesignerProject=(payload:any)=>{
    //   AuthService.projectAssign(payload).then((response:any)=>{
    //     if(response?.status===200){
    //       toast.success("Assign Projct Successfully");
    //       setMessage(response);
    //     }else{
    //       toast.error("can't edit user");
    //     }
  
    //   }).catch((error:any)=>{
     
    //   })
    // }
  

    
    const onhandleStatus=(e:any,data:any)=>{
        
        designerStatusChange(e,data?.designer?.id)
    }
  

  
    const designerStatusChange=(status:any,id:any)=>{
      AuthService.changeDesginerStatus(status,id).then((response:any)=>{
        if(response?.status===200){
          toast.success("edit Status Successfully");
          setMessage(response);
        }else{
          toast.error("can't edit Status");
        }
  
      }).catch((error)=>{
       
      })
    }
    const handleCreateUser = () => {
      setIsModalOpen(true);
    };

    
    const handleShowProject=(item:any)=>{
      setDesignerProData(item?.assignedProjects)
      setIsProjectOpen(true);

    }


    return(
      <Box p={4}>
      <TosterMessage />
      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ md: "center" }}
      >
        <Search onSearch={handleSearch} />
        <Spacer />
        <Button
          colorScheme="blue"
          onClick={handleCreateUser}
          mb={{ base: 4, md: 0 }}
        >
           Create Designer
        </Button>
      </Flex>
      <Box mt={4}>
        {/* ReusableTable component */}
        <ReusableTable
          headers={designerHeader}
          data={currentData}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          onEdit={handleEdit}
          onhandleShowProject={handleShowProject}
          isAction={true}
          onDelete={handleDelete}
          onhandleFileChange={function (): void {
            throw new Error("Function not implemented.");
          }}
          handleStatus={onhandleStatus}
        />
        <CreateUpdateDesigner
          onSave={handleSaveUser}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          editUser={editDesigner}
        />
      </Box>
    </Box>

    )
}
export default DesignerMenu;