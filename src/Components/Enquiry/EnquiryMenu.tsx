import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import Search from "@/Components/Common/search/Search";
import ReusableTable from "@/Components/table/table";
import { enquiryHeader } from "@/Utils/string";
// import EnquiryModal from "@/Components/enquiryMenu/editEnquiry";
import AuthService from "@/Utils/AuthService";

const EnquiryMenu: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [enquiry, setEnquiry] = useState([]);
  const [editEnquiry, setEditEnquiry] = useState<any>();
  const [message, setMessage] = useState<any>();

  useEffect(() => {
    AuthService?.getEnquiries()
      .then((response: any) => {
        if(response?.status===200){
        setEnquiry(response?.data?.enquiries);
        setMessage("");
        }
      })
      .catch((error: any) => {});
  }, [message]);
  // Filter the data based on search query
  const filteredData = enquiry?.filter((item: any) => {
    const name = item?.name.toLowerCase();
    const message = item?.message.toLowerCase();
    const email = item?.email.toLowerCase();
    const mobile = item?.mobile.toLowerCase();

    const query = searchQuery.toLowerCase();
    return (
      name.includes(query) ||
      message.includes(query) ||
      email?.includes(query) ||
      mobile?.includes(query)
    );
  });

  const itemsPerPage = 5; // Replace with the actual number of items per page

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
    setEditEnquiry(item);

    setIsModalOpen(true);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Perform search logic here using the query
    // e.g., make an API request or filter data
  };

  //enquiryModal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCreateEnquiry = () => {
    setIsModalOpen(true);
  };
  return (
    <Box p={4}>
      <Flex direction={{ base: "column", md: "row" }} align={{ md: "center" }}>
        <Search onSearch={handleSearch} />
        <Spacer />
        {/* <Button
          colorScheme="blue"
          onClick={handleCreateEnquiry}
          mb={{ base: 4, md: 0 }}
        >
          Create enquiry
        </Button> */}
      </Flex>
      <Box mt={4}>
      <ReusableTable
         headers={enquiryHeader}
         data={currentData}
         currentPage={currentPage}
         totalPages={totalPages}
         onPageChange={handlePageChange}
         onEdit={handleEdit}
         isAction={false}
         onDelete={handleDelete}
        onhandleFileChange={() => {
          // Implement the logic for onhandleFileChange
          }}
        handleStatus={() => {
        // Implement the logic for handleStatus
         }}
        onhandleShowProject={(project) => {
          // Implement the logic for onhandleShowProject
         }}
/>

         {/* <EnquiryModal
          onSave={function (): void {
            throw new Error("Function not implemented.");
          }}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          editEnquiry={editEnquiry}
        /> */}
      </Box>
    </Box>
  );
};

export default EnquiryMenu;
