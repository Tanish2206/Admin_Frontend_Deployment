import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import Search from "@/Components/Common/search/Search";
import ReusableTable from "@/Components/table/table";
import { useRouter } from "next/navigation";
import AuthService from "@/Utils/AuthService";
import { designHeader } from "@/Utils/string";
import AddUpdateDesign from "@/Components/DesignMenu/addUpdateDesign/AddUpdateDesign";
import DesignView from "@/Components/DesignMenu/designView/designView";
import { DataItem } from "@/Utils/interface";
  import {toast } from 'react-toastify';
import TosterMessage from "../Common/tosterMessage/TosterMessage";



const DesignMenu: React.FC = () => {
  // State variables
  const [designs, setDesign] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [show, setShow] = useState(false);
  const [editProject, setEditProject] = useState<any>();
  const [showProject, setShowProject] = useState<any>();
  const [message, setMessage] = useState<any>();

  const router = useRouter();

  // Add/Edit Category Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData | undefined>(undefined);

  useEffect(() => {
    // Fetch product data
    AuthService?.getDesigns()
      .then((response) => {
        if (response?.response_code === 200) {
          
          setDesign(response?.response_data);
          setMessage("");
        }
      })
      .catch((error: any) => {
        // Handle error
      });
  }, [message, currentPage,isModalOpen]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData(undefined);
  };

  const handleSubmit = (data: any, id: any) => {
   console.log("DATA",data)
    if (id) {
      editDesignApi(data, id);
      setIsModalOpen(false);
      
    } else {
      addDesignApi(data);
      setIsModalOpen(false);
      
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setFormData(undefined);
  };

  const addDesignApi = async (data: any) => {
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    await AuthService.createDesigns(data, config)
      .then((response:any) => {
       if(response?.status===200){
       
        toast.success("Add Design successfully");
        setMessage(response);
       }
       else{
        toast.error("can't  Added Design");
        setIsModalOpen(false);
       }
       
      })
      .catch((error) => {
        // Handle error
      });
  };

  const editDesignApi = async (data: any, id: any) => {
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    await AuthService.editDesign(data, id, config)
      .then((response:any) => {
        if(response?.status===200){
          // setIsModalOpen(false);
          setMessage("Edit Design Successfully");
          toast.success("Edit Succssfully")
        }else{
          toast.error("can't edit Design");
        }

      })
      .catch((error) => {
        // Handle error
      });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page when performing a new search
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleFileChange = (data: any) => {
    setShowProject(data);
    setShow(true);
  };

  const handleEditTable = (item: any) => {
    setEditProject(item);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    deleteDesign(id);
  };

  const deleteDesign = (id: any) => {
    AuthService?.deleteDesign(id)
      .then((response:any) => {
        if(response?.status===200){
          toast.success("Delete Succesfully");
          setMessage(response);
        }
        else{
          toast.error("can't delete");
        }
      
      })
      .catch((error: any) => {
        // Handle error
      });
  };

  // Filter the data based on search query
  const filteredData = designs?.filter((item: any) => {
   
    const title = item?.title?.toLowerCase();
    const designCategory = item?.designCategory?.toLowerCase();
    const designType = item?.designType?.toLowerCase();
    const propertyCategory = item?.propertyCategory?.toLowerCase();

    const query = searchQuery.toLowerCase();
    return (
      title.includes(query) ||
      designCategory.includes(query) ||
      designType?.includes(query) ||
      propertyCategory?.includes(query)
    );
  });

  // Pagination
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData?.slice(startIndex, endIndex);
  const totalPages = Math?.ceil(filteredData?.length / itemsPerPage);
  
  return (
    <Box p={4}>
     
      <TosterMessage/>

      {!show ? (
        <>
          <Flex direction={{ base: "column", md: "row" }} alignItems="center">
            <Box flex={{ base: "1", md: "auto" }} mb={{ base: 4, md: 0 }}>
              <Search onSearch={handleSearch} />
            </Box>
            <Spacer />
            <Box>
              <Button colorScheme="blue" onClick={handleOpenModal}>
                Add Design
              </Button>
            </Box>
          </Flex>
          <Box mt={4}>
            <ReusableTable
              headers={designHeader}
              data={currentData}
              currentPage={currentPage}
              totalPages={totalPages}
              isAction={true}
              onPageChange={handlePageChange}
              onhandleFileChange={handleFileChange}
              onEdit={handleEditTable}
              onDelete={handleDelete}
              handleStatus={function (value: string, data: DataItem): void {
                throw new Error("Function not implemented.");
              } } onhandleShowProject={function (item: any): void {
                throw new Error("Function not implemented.");
              } } 
              />
          </Box>
        </>
      ) : (
        <DesignView setShow={setShow} showProject={showProject} />
      )}
      <AddUpdateDesign
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        initialData={editProject || undefined}
      />
    </Box>
  );
};

export default DesignMenu;
