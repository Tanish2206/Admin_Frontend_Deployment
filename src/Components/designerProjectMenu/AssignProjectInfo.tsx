import React from 'react';
import {
  VStack,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
  Box,
  Tag,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

function AssignProjectInfo({showProject}:any) {
 
  
  return (
    <VStack align="stretch">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Value</Th>
          </Tr>
        </Thead>
        <Tbody>
        <Tr>
            <Td>DesignerId</Td>
            <Td>{showProject?.designerId}</Td>
        </Tr>
        <Tr>
            <Td>ProjectId</Td>
            <Td>{showProject?.id}</Td>
        </Tr>
          <Tr>
            <Td>ClientId</Td>
            <Td>{showProject?.clientId}</Td>
          </Tr>
          <Tr>
            <Td>DesignerName</Td>
            <Td>{showProject?.firstName}</Td>
          </Tr>
          <Tr>
            <Td>Due Date</Td>
            <Td>{showProject?.dueDate}</Td>
          </Tr>
          <Tr>
            <Td>Payment Due Date</Td>
            <Td>{showProject?.paymentDueDate}</Td>
          </Tr>
          <Tr>
            <Td>Title</Td>
            <Td>{showProject?.title}</Td>
          </Tr>
          <Tr>
            <Td>Description</Td>
            <Td>{showProject?.description}</Td>
          </Tr>
          <Tr>
            <Td>projectType</Td>
            <Td>{showProject?.projectType}</Td>
          </Tr>
          <Tr>
            <Td>Longitude</Td>
            <Td>{showProject?.longitude}</Td>
          </Tr>
          <Tr>
            <Td>latitude</Td>
            <Td>{showProject?.latitude}</Td>
          </Tr>
          <Tr>
            <Td>Length</Td>
            <Td>{showProject?.length}</Td>
          </Tr>
          <Tr>
            <Td>Width</Td>
            <Td>{showProject?.width}</Td>
          </Tr>
          <Tr>
            <Td>location</Td>
            <Td>{showProject?.location}</Td>
          </Tr>
          {/* <Tr>
            <Td>Sizes</Td>
            <Td>
              <Wrap>
                <WrapItem>
                  <Tag variant="outline" textTransform="uppercase">
                    50
                  </Tag>
                </WrapItem>
              </Wrap>
            </Td>
          </Tr> */}
          <Tr>
            <Td>Status</Td>
            <Td>{showProject?.projectStatus}</Td>
          </Tr>
          <Tr>
            <Td>Designer Status</Td>
            <Td>{showProject?.statusByDesigner}</Td>
          </Tr>
          <Tr>
            <Td>Payment</Td>
            <Td>{showProject?.isPaymentDone==="true"?"paid":"unpaid"}</Td>
          </Tr>
          <Tr>
            <Td>PaidAmount</Td>
            <Td>{showProject?.paidAmount}</Td>
          </Tr>
          <Tr>
            <Td>totalAmount</Td>
            <Td>{showProject?.totalAmount}</Td>
          </Tr>
          <Tr>
            <Td>currentIteration</Td>
            <Td>{showProject?.currentIteration}</Td>
          </Tr>
          <Tr>
            <Td>maximumIterations</Td>
            <Td>{showProject?.maximumIterations}</Td>
          </Tr>
        </Tbody>
      </Table>
    </VStack>
  );
}

export default AssignProjectInfo;
