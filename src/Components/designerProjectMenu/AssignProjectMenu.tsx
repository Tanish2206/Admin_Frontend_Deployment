import { Text } from "@chakra-ui/react"
import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import Search from "@/Components/Common/search/Search";
import ReusableTable from "@/Components/table/table";
import { allDesignerProjectHeader} from "@/Utils/string";
import AuthService from "@/Utils/AuthService";
import {toast } from 'react-toastify';
import TosterMessage from "../Common/tosterMessage/TosterMessage";
import AssignProjectModal from "./AssignProjectModal";
import AssignProjectView from "./AssignProjectView";
const AssignProjectMenu=()=>{

    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [designer,setDesigner]=useState([]);
    const [editDesigner,setEditDesigner]=useState<any>();
    const [message,setMessage]=useState<any>();
    const [assignProjectView,setAssignProject]=useState();
    const [isProjectOpen, setIsProjectOpen] = useState(false);
    const [designerProData,setDesignerProData]=useState<any>([]);

    const [show, setShow] = useState(false);
  

    useEffect(()=>{
       AuthService.getDesignerProject().then((response:any)=>{

        if(response.status===200){
          
             setDesigner(response?.data?.AllProjects);
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
      const firstName = item?.firstName?.toLowerCase();
       const lastName = item?.lastName?.toLowerCase();
       const email = item?.email?.toLowerCase();
       const mobile = item?.mobile?.toLowerCase();
  
        const query = searchQuery?.toLowerCase();
        return (
          firstName?.includes(query) ||
           lastName?.includes(query) ||
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
  
  
   
  
    const handleCloseModal = () => {
      setEditDesigner("");
      setIsModalOpen(false);
    };
  
    const handleSaveUser = (project:any) => {
    createDesignerProject(project);  
    };
  

    const createDesignerProject=(payload:any)=>{
      AuthService.projectAssign(payload).then((response:any)=>{
        if(response?.status===200){
          toast.success("Assign Projct Successfully");
          setMessage(response);
        }else{
          toast.error("can't edit user");
        }
  
      }).catch((error:any)=>{
     
      })
    } 

    const onhandleStatus=(e:any,data:any)=>{

    }
  


    const handleCreateUser = () => {
      setIsModalOpen(true);
    };

    
    const handleShowProject=(item:any)=>{
      setDesignerProData(item?.assignedProjects)
      setIsProjectOpen(true);

    }

    const handleFileChange = (data: any) => {
      
      setAssignProject(data);
      setShow(true);
    };

    const onhandleDownload=(item:any)=>{
    
    }

    const onhandleUpload=(item:any)=>{
     
    }
    return(
      <Box p={4}>
      <TosterMessage />
      {!show ?
      <>
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
          ASSIGN PROJECT
        </Button>
      </Flex>
      <Box mt={4}>
        {/* ReusableTable component */}
        <ReusableTable
          headers={allDesignerProjectHeader}
          data={designer}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          onEdit={handleEdit}
          onhandleShowProject={handleShowProject}
          isAction={true}
          onDelete={handleDelete}
          onhandleFileChange={handleFileChange}
          handleStatus={onhandleStatus}
          handleDownload={()=>onhandleDownload}
          handleUpload={()=>onhandleUpload}
        />
        <AssignProjectModal
          onSave={handleSaveUser}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          editUser={editDesigner} 
        />
      </Box>
      </>
      :
      <Box>
        <AssignProjectView  setShow={setShow} assignProjectView={assignProjectView}/>
      </Box>
}
    </Box>
    )
}
export default AssignProjectMenu;