"use client";
import React, { useEffect, useState } from "react";
import Project from "@/app/project/Project";
import { useRouter } from "next/navigation";
import Designs from "@/app/designs/designs";
import { SidebarProps, NavItemProps, MobileProps } from "@/Utils/interface";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Image,
} from "@chakra-ui/react";
import { FiMenu, FiBell, FiChevronDown } from "react-icons/fi";
import { LinkItems } from "@/Utils/string";
import User from "@/app/user/User";
import Designer from "@/app/designer/designer";
import secureLocalStorage from "react-secure-storage";
import AuthService from "@/Utils/AuthService";
import EnquiryMenu from "@/Components/Enquiry/EnquiryMenu";
import AdminProfile from "@/Components/profile/AdminProfile";
import AssignProjectMenu from "@/Components/designerProjectMenu/AssignProjectMenu";
export default function SidebarWithHeader() {
  const adminId = secureLocalStorage.getItem("id");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedComponent, setSelectedComponent] = useState("User");
  const router: any = useRouter();

  const handleLinkItemClick = (name: string) => {
    setSelectedComponent(name);
    // router.push(`/${name.toLowerCase()}`);
  };

  const isActiveLink = (name: string) => {
    return selectedComponent === name;
  };

  const handleHomePage = () => {
    // router.push('/')
  };
  function handleProfile(e: any): void {
    if (e?.target?.innerHTML === "profile") {
      setSelectedComponent(e?.target?.innerHTML);
      return;
    } else {
      secureLocalStorage.clear();
      router.push("/");
    }
  }

  useEffect(() => {
    AuthService.getProfile(adminId)
      .then((response) => {})
      .catch((error: any) => {});
  }, [adminId]);

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.50", "gray.800")}>
      <SidebarContent
        onClose={onClose}
        display={{ base: "none", md: "block" }}
        handleLinkItemClick={handleLinkItemClick}
        isActiveLink={isActiveLink}
        handleHomePage={handleHomePage} // Pass handleHomePage to SidebarContent
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent
            onClose={onClose}
            handleLinkItemClick={handleLinkItemClick}
            isActiveLink={isActiveLink}
            handleHomePage={handleHomePage} // Pass handleHomePage to SidebarContent
          />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} onhandleProfile={handleProfile} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {selectedComponent === "User" && <User />}
        {selectedComponent === "Project" && <Project />}
        {selectedComponent === "Designs" && <Designs />}
        {selectedComponent === "Enquiries" && <EnquiryMenu />}
        {selectedComponent === "profile" && <AdminProfile />}
        {selectedComponent === "Designers" && <Designer/>}
        {selectedComponent ==="DesignersProject" && <AssignProjectMenu/>}
      </Box>
    </Box>
  );
}

const SidebarContent = ({
  handleLinkItemClick,
  isActiveLink,
  onClose,
  handleHomePage,
  // Receive handleHomePage prop
  ...rest
}: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.700")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.600")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    > 
      <Flex
        h="20"
        alignItems="center"
        justifyContent="space-between"
        px="4"
        borderBottom="1px"
        borderBottomColor={useColorModeValue("gray.200", "gray.600")}
      >
        <Image
          src={"/logo.png"}
          alt="Logo"
          h={10}
          w={10}
          ml={2}
          onClick={handleHomePage} // Use handleHomePage as click handler
          cursor="pointer"
        />
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <VStack spacing="1" mt="6" alignItems="stretch">
        {LinkItems?.map((link: any) => (
          <NavItem
            key={link?.id}
            icon={link?.icon}
            onClick={() => handleLinkItemClick(link?.name)}
            isActive={isActiveLink(link?.name)}
          >
            {link?.name}
          </NavItem>
        ))}
      </VStack>
    </Box>
  );
};

// interface NavItemProps extends FlexProps {
//   icon: IconType;
//   onClick: () => void;
//   isActive: boolean;
//   children: ReactText;
// }

const NavItem = ({ icon, children, isActive, ...rest }: NavItemProps) => {
  const color = isActive ? "teal.500" : "gray.500";
  const bgColor = isActive ? "teal.100" : undefined;

  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "teal.50",
          color: "teal.500",
        }}
        bg={bgColor}
        color={color}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "teal.500",
            }}
            as={icon}
          />
        )}
        <Text fontWeight={isActive ? "bold" : "normal"} fontSize="sm">
          {children}
        </Text>
      </Flex>
    </Link>
  );
};

// interface MobileProps extends FlexProps {
//   onOpen: () => void;
// }

const MobileNav = ({ onOpen, onhandleProfile, ...rest }: MobileProps) => {
  // function handleProfile(e:any): void {

  // }

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.800")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.600")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
    
      <Flex alignItems="center">
        <Avatar
          size="md"
          src={"https://avatars.githubusercontent.com/u/12969501?v=4"}
        />
        <Box ml="2">
          <Text fontSize="md" fontWeight="medium">
            Admin
          </Text>
        </Box>
      </Flex>

      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          variant="ghost"
          aria-label="notifications"
          icon={<Icon as={FiBell} />}
        />
        <Menu>
          <MenuButton
            as={IconButton}
            variant="ghost"
            aria-label="options"
            icon={<Icon as={FiChevronDown} />}
          />
          <MenuList onClick={(e: any) => onhandleProfile(e)}>
            {/* {dropdownItem?.map((elm: any) => {
              function handleProfile(): void {
                throw new Error('Function not implemented.');
              } */}

            <MenuItem>profile</MenuItem>
            <MenuItem>Logout</MenuItem>

            {/* })} */}
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  );
};
