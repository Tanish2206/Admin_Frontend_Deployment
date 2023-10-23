import React, { ChangeEvent } from 'react';
import { BiChevronDown, BiCloudDownload, BiCloudUpload } from 'react-icons/bi';
import {
  Box,
  Button,
  Image,
  Menu,
  VStack,
  MenuButton,
  MenuList,
  MenuItem,
  Select,
  Td,
  Text, 
  Tr,
} from '@chakra-ui/react';
import { Header,DataItem } from '@/Utils/interface';
const TableRow: React.FC<{
    item: DataItem;
    headers: Header[];
    isAction?: boolean;
    onhandleFileChange: (item: DataItem) => void;
    onEdit: (item: DataItem) => void;
    onhandleShowProject:(item:any)=>void|any;
    onDelete: (id: string) => void;
    handleStatusChange: (value: string, data: DataItem) => void;
    handleDownload:(item:any)=>void;
    handleUpload:(item:any)=>void;
  }> = ({
    item,
    headers,
    isAction,
    onhandleFileChange,
    onEdit,
    onhandleShowProject,
    onDelete,
    handleStatusChange,
    handleDownload,
    handleUpload,
  }) => {
    const handleChangeStatus = (event: ChangeEvent<HTMLSelectElement>) => {
      const value = event.target.value;
      handleStatusChange(value, item);
    };

    return (
      <Tr key={item.id}> 
        {headers?.map((header) => (
          <Td key={header.id}>
            {header?.key === 'image' ? (
              header?.isDesign ? (
                <Image
                  src={item.designImagesUrls[0] || 'd1.jpg'}
                  alt='daji-design-images'
                  boxSize="50px"
                  objectFit="cover"
                  fallbackSrc="d1.jpg"
                />
              ) : (
                <Image
                  src={item?.siteImagesUrls && item?.siteImagesUrls[0] || 'd1.jpg'}
                  alt='daji-site-images'  
                  boxSize="50px"
                  objectFit="cover"
                  fallbackSrc="d1.jpg"
                />
              )
            ) : header.key === 'isPaymentDone' ? (
              <Text>{item.isPaymentDone ? 'Paid' : 'unPaid'}</Text>
            ) : header.unique ? (

              header.key === 'firstName' ? (
                `${item.user.firstName} ${item.user.lastName}`
              ) : (
                item.user[header.key]
              )
            ) : header.key === 'status' ? (
              <Box position="relative" display="inline-block">
                <Select
                  value={item[header.key]}
                  onChange={handleChangeStatus}
                  width="110px"
                >
                  <option value="0">Inactive</option>
                  <option value="1">Active</option>
                </Select>
              </Box>
            ) : header.key === 'isFree' ? (
              item.isFree ? <Text>Free</Text> : <Text>Paid</Text>
            ) : (
              header?.designer ?
              item?.designer[header.key]
              :
              header?.designerName ?
              `${item?.designer["firstName"]} - ${item?.designer["lastName"]}`
             :
             header?.key==="projectCount"?
             <Text color="facebook.900" fontWeight="bold" cursor="pointer"
             onClick={()=>{onhandleShowProject(item)}}>{item[header.key]}</Text>:
             header?.key==="isAccepted"?
             item[header.key] ? "Accept":"Reject"

             :
             header.key === 'submission' ? (
              <VStack spacing={2} alignItems="center">
                <Button
                  colorScheme="teal"
                  leftIcon={<BiCloudDownload />}
                  onClick={()=>handleDownload(item)}
                >
                  Download
                </Button>
                <Button
                colorScheme="purple"
                leftIcon={<BiCloudUpload />}
                onClick={() =>handleUpload(item)}
              >
                Upload
              </Button>
              
              </VStack>)
             :item[header.key] ?  item[header.key]:"----")}
          </Td>
        ))}    
        {isAction && (
          <Td>
            <Menu>
              <MenuButton as={Button} rightIcon={<BiChevronDown />}>
                Actions
              </MenuButton>
              <MenuList>
                {item.user ||item?.designer ? (
                  '' // Render nothing if `item.user` exists
                ) : (
                  <MenuItem onClick={() => onhandleFileChange(item)}>
                    View
                  </MenuItem>
                )}
                <MenuItem onClick={() => onEdit(item)}>Edit</MenuItem>
                {item.user ||item?.designer ? (

                  '' // Render nothing if `item.user` exists

                ) : (
                  <MenuItem onClick={() => onDelete(item.id)}>Delete</MenuItem>
                )}
              </MenuList>
            </Menu>
          </Td>
        )}
      </Tr>
    );
  };
  export default TableRow;