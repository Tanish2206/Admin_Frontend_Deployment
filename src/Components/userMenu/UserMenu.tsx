
import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import Search from "@/Components/Common/search/Search";
import ReusableTable from "@/Components/table/table";
import { UserHeader } from "@/Utils/string";
import UserModal from "@/Components/userMenu/editUser";
import AuthService from "@/Utils/AuthService";
import {toast } from 'react-toastify';
import TosterMessage from "../Common/tosterMessage/TosterMessage";
import UserProjectModal from "./UserProjectModal";
const UserMenu: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user,setUser]=useState([]);
  const [editUser,setEditUser]=useState<any>();
  const [message,setMessage]=useState<any>();
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [userProData,setUserProData]=useState<any>([]);

  const closeModal = () => {
    setIsProjectOpen(false);
  };

  useEffect(()=>{
      AuthService?.getUser().then((response:any)=>{
            setUser(response?.userDetails);
            setMessage("");
      }).catch((error:any)=>{
     
      })
  },[message])
  // Filter the data based on search query
  const filteredData = user?.filter((item: any) => {
    const user = item.user?.firstName.toLowerCase();
     const lastName = item.user?.lastName.toLowerCase();
     const email = item.user?.email.toLowerCase();
     const mobile = item.user?.mobile.toLowerCase();

    const query = searchQuery.toLowerCase();
    return (
      user.includes(query) ||
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

      setEditUser(item?.user);
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
    setIsModalOpen(false);
  };

  const handleSaveUser = (user:any) => {
    const payload={
        firstName: user?.firstName,
        lastName: user?.lastName,
        mobile: user?.mobile,
        email :user?.email,
    }

    if(user?.id){
    updateUser(payload,user?.id)
  }
  else{
    createUser(payload)
  }
    // Do something with the user data, e.g., send an API request
   
  };


  const updateUser=(payload:any,id:any)=>{
    AuthService.editUser(payload,id).then((response:any)=>{
      if(response?.status===200){
        toast.success("edit User Successfully");
        setMessage(response);
        setEditUser("")
      }else{
        toast.error("can't edit user");
      }

    }).catch((error:any)=>{
   
    })
  }

  const createUser=async(data:any)=>{
  await  AuthService.createUser(data).then((response:any)=>{
    if(response?.status===200){
      toast.success("add User Successfully");
      setMessage(response);
      setEditUser("")
    }else{

      toast.error(response?.response?.data?.message);
    }

    }).catch((error:any)=>{
      
    })
  }
  const onhandleStatus=(e:any,data:any)=>{
      
      userStatusChange(e,data?.user?.id)
  }


  const userStatusChange=(status:any,id:any)=>{
   
    AuthService.changeUserStatus(status,id).then((response:any)=>{
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
   
   setUserProData(item?.projects)
    setIsProjectOpen(true);
  }
  return (
    <Box p={4}>
      <TosterMessage/>
    <Flex direction={{ base: "column", md: "row" }} align={{ md: "center" }}>
      <Search onSearch={handleSearch} />
      <Spacer />
      <Button
        colorScheme="blue"
        onClick={handleCreateUser}
        mb={{ base: 4, md: 0 }}
      >
        Create User
      </Button>
    </Flex>
    <Box mt={4}>
      <ReusableTable
        headers={UserHeader}
        data={currentData}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        onEdit={handleEdit}
        isAction={true}
        onDelete={handleDelete}
        onhandleFileChange={function (): void {
          throw new Error("Function not implemented.");
        }}
        handleStatus={onhandleStatus}
        onhandleShowProject={handleShowProject}
      />
      <UserModal
        onSave={handleSaveUser}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        editUser={editUser}
        setEditUser={setEditUser}
      />
    </Box>
    <Box >
      <UserProjectModal isOpen={isProjectOpen} onClose={closeModal} projectData={userProData} />
    </Box>
  </Box>
  );
};

export default UserMenu;
