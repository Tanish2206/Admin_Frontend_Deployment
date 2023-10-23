'use client'
import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import Search from "@/Components/Common/search/Search";
import ReusableTable from "@/Components/table/table";
import AddEditComponent from "./addUpdateProject/EditProject";
import ProjectView from "./projectView/ProjectView";
import { useRouter } from "next/navigation";
import AuthService from "@/Utils/AuthService";
import { categoryHeader } from "@/Utils/string";
import {toast } from 'react-toastify';
import TosterMessage from "../Common/tosterMessage/TosterMessage";
const ProjectMenu: React.FC = () => {
  // State variables
  const [product, setProduct] = useState<any[]>([]);
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
    AuthService?.getProduct()
      .then((response) => {
      
        if(response?.response_code===200){
        setProduct(response?.response_data);
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
    if (id) {
      editProductApi(data, id);
      setIsModalOpen(false);
    } else {
     
      addProductApi(data);
      setIsModalOpen(false);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setFormData(undefined);
  };

  const addProductApi = async(data: any) => {
    const config = {
          headers: { "content-type": "multipart/form-data" },
        };
  await  AuthService.addProject(data,config)
      .then((response:any) => {
        if(response?.status===200){
          setIsModalOpen(false);
          toast.success("Add Project successfully")
          setMessage(response);
         }
         else{
          toast.error("can't  Added Project");
         }
        setMessage(response);
      })
      .catch((error) => {
        // Handle error
      });
  };

  const editProductApi = async(data: any, id: any) => {
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
   await AuthService.editProject(data, id,config)
      .then((response:any) => {
        if(response?.status===200){
          setIsModalOpen(false);
          toast.success("Edit Project successfully")
          setMessage(response);
         }
         else{
          toast.error("can't  edit Project");
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
    deleteProduct(id);
  };

  const deleteProduct = (id: any) => {
    AuthService?.deleteProduct(id)
      .then((response:any) => {
        if(response?.status===200){
          setIsModalOpen(false);
          toast.success("delete  successfully")
          setMessage(response);
         }
         else{
          toast.error("can't  delete ");
         }
        setMessage(response);
      })
      .catch((error: any) => {
        // Handle error
      });
  };

  // Filter the data based on search query
  const filteredData = product?.filter((item: any) => {
    const title = item.title.toLowerCase();
    const projectType = item.projectType.toLowerCase();


    const query = searchQuery.toLowerCase();
    return title.includes(query) 
     || projectType.includes(query)
     
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
                Add Project
              </Button>
            </Box>
          </Flex>
          <Box mt={4}>
            <ReusableTable
              headers={categoryHeader}
              data={currentData}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              isAction={true}
              onhandleFileChange={handleFileChange}
              onEdit={handleEditTable}
              onDelete={handleDelete} handleStatus={function (value: string, data: any): void {
                throw new Error("Function not implemented.");
              } } onhandleShowProject={function (item: any): void {
                throw new Error("Function not implemented.");
              } }            />
          </Box>
        </>
      ) : (
        <ProjectView setShow={setShow} showProject={showProject} />
      )}
      <AddEditComponent
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        initialData={editProject || undefined}
      />
    </Box>
  );
};

export default ProjectMenu;
