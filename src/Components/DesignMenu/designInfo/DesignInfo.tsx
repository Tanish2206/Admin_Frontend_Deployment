import { VStack, Table, Tbody, Tr, Td, Tag, Heading } from '@chakra-ui/react';
import { singleDesignInfo,designFields } from '@/Utils/string';
interface Project {
  title: string;
  description: string;
  isFree: boolean;
  amount: number;
  plotArea: string;
  numberOfFloors: number;
  facing: string;
  bedrooms: number;
  bathrooms: number;
  balcony: boolean;
  kitchens: number;
  livingrooms: number;
  dinningrooms: number;
  garageCapacity: number;
  constructionYear: number;
  vastu: string;
  unitType: string;
  designCategory: string;
  designType: string;
  propertyCategory: string;
  propertyType: string;
  width: string;
  length: string;
  [key: string]: any; // Allow additional properties
}

interface DesignField {
   option?: string | number | any;
  label: string|number|any;
  name: keyof Project;
  optionType?: string;
}

interface DesignInfoProps {
  showProject?: Project;
}

const DesignInfo: React.FC<DesignInfoProps> = ({ showProject }) => {
  return (
    <VStack align="stretch" spacing={4}>
      <Heading
        as="h2"
        size="xl"
        color="orange.500"
        textAlign="center"
        bg="white"
        p={4}
        boxShadow="md"
      >
        {showProject?.title}
      </Heading>
      <Table variant="simple">
        <Tbody>
          <Tr>
            <Td>Description</Td>
            <Td>{showProject?.description}</Td>
          </Tr>
          <Tr>
            <Td>Payment</Td>
            <Td>
              {showProject?.isFree ? (
                <Tag colorScheme="green">Free</Tag>
              ) : (
                <Tag colorScheme="blue">Paid</Tag>
              )}
            </Td>
          </Tr>
          <Tr>
            <Td>Amount </Td>
            <Td>{showProject?.amount}</Td>
          </Tr>
          <Tr>
            <Td>Plot Area</Td>
            <Td>{showProject?.plotArea}</Td>
          </Tr>
          <Tr>
            <Td>Width</Td>
            <Td>{showProject?.width}</Td>
          </Tr>
          <Tr>
            <Td>Length</Td>
            <Td>{showProject?.length}</Td>
          </Tr>
          <Tr>
            <Td>Number of Floors</Td>
            <Td>{showProject?.numberOfFloors}</Td>
          </Tr>
          <Tr>
            <Td>Facing</Td>
            <Td>{showProject?.facing}</Td>
          </Tr>
          <Tr>
            <Td>Construction Year</Td>
            <Td>{showProject?.constructionYear}</Td>
          </Tr>
          <Tr>
            <Td>Vastu</Td>
            <Td>
              {showProject?.vastu ? (
                <Tag colorScheme="green">YES</Tag>
              ) : (
                <Tag colorScheme="blue">NO</Tag>
              )}
            </Td>
          </Tr>
          <Tr>
            <Td>Unit Type</Td>
            <Td>{showProject?.unitType}</Td>
          </Tr>
          <Tr>
            <Td>Design Category</Td>
            <Td>{showProject?.designCategory}</Td>
          </Tr>
          <Tr>
            <Td>Design Type</Td>
            <Td>{showProject?.designType}</Td>
          </Tr>
          <Tr>
            <Td>Property Category</Td>
            <Td>{showProject?.propertyCategory}</Td>
          </Tr>
          <Tr>
            <Td>Property Type</Td>
            <Td>{showProject?.propertyType}</Td>
          </Tr>
          {designFields?.map((elm: DesignField) => {
        const propertyValue = showProject ? showProject[elm.name] : '';
        const shouldRender =
          (elm.option === showProject?.propertyCategory ||
            (elm.optionType === showProject?.propertyType && elm.optionType)) &&
          propertyValue !== undefined;

        return shouldRender ? (
          <Tr key={elm.name}>
            <Td>{elm.label}</Td>
            <Td>{propertyValue}</Td>
          </Tr>
        ) : null;
      })}
        
        </Tbody>
      </Table>
    </VStack>
  );
};

export default DesignInfo;
