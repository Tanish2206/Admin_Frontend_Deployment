import React, { ChangeEvent } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import {
  Box,
  Button,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Select,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  VStack,
  Tr,
} from '@chakra-ui/react';

import {Header } from '@/Utils/interface';
const TableHeader: React.FC<{ headers:any }> = ({ headers }) => (
    <Thead>
      <Tr>
        {headers?.map((header:any) => (
          <Th key={header.id}>{header.label}</Th>
        ))}
        <Th></Th>
      </Tr>
    </Thead>
  );
  export default TableHeader;
  