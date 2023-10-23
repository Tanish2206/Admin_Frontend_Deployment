import { BoxProps, FlexProps } from "@chakra-ui/react";
import { ReactText } from "react";
import { IconType } from "react-icons";
 export interface Header {
  id: string|any;
  label: string|any;
  key: string|any;
  isDesign?: boolean|any;
  unique?: boolean|any;
  designer?:boolean|any;
  designerName?:boolean|any;
}

export interface DataItem {
  id: string;
  [key: string]: any;
}

export interface ReusableTableProps {
  headers:any[];
  data: DataItem[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onhandleFileChange: (item: DataItem) => void;
  onEdit: (item: DataItem) => void;
  onhandleShowProject:(item:any)=>void;
  onDelete: (id: string) => void;
  handleStatus: (value: string, data: DataItem) => void;
  isAction?: boolean;
  handleUpload?:(item: any) => void;
  handleDownload?:(item: any) => void;
}

 export interface ErrorPageProps{
    error :Error,
    reset:()=>void,
}
export interface SidebarProps extends BoxProps {
  onClose: () => void;
  handleLinkItemClick: (name: string) => void;
  isActiveLink: (name: string) => boolean;
  handleHomePage: () => void; // Add handleHomePage prop

}

export interface NavItemProps extends FlexProps {
  icon: IconType;
  onClick: () => void;
  isActive: boolean;
  children: ReactText;
}
export interface MobileProps extends FlexProps {
  onOpen: () => void;
  onhandleProfile:(data:any)=>void;
}

export interface DataTableProps {
  data: any[];
  onDelete: (id: number) => void;
  onEdit: (item: any) => void;
  onhandleShowProject:(item: any) => void;
}
export interface FormDataInt {
  title: string;
  description: string | null;
  designCategory: string|null;
  designType: string|null;
  propertyCategory:string|null,
  propertyType:string|null,
  isFree: boolean;
  amount:string;
  plotArea: string;
  facing:string|null;
  numberOfFloors: string|number|null;
  bedrooms: string|number|null;
  bathrooms: string;
  balcony:number|string|null,
  kitchens:number|String|null,
  livingrooms:number|String|null,
  dinningrooms:String|number|null,
  garageCapacity:String,
  constructionYear:string|number|null,
  vastu: boolean,
  unitType:string|null,
  designImagesUrls : File[];
  videosUrls: File[];
  width: string,
  length:string,
  masterRoom:string|number|null,
  guestRoom:string|number|null,
  drawingHall:string|number|null,
  Kidsroom:string|number|null,
      diningRoom:string|number|null,
      toilets:string|number|null,
      temple:string|number|null,
      storeRoom:string|number|null,
      washArea:string|number|null,
      garden:string|number|null,
      Porche:string|number|null,
      garage:string|number|null,
      swimingPool:string|number|null,
      bar:string|number|null,
      lift:string|number|null,
      shopType:string|number|null,
      shops:string|number|null,
      flats:string|number|null,
      resaturent:string|number|null,
      marrigeHall:string|number|null,
      parking:string|number|null,
      classrooms:string|number|null,
      officeCabin:string|number|null,
      sportsGraden:string|number|null,
}

export interface AddEditComponentProps {
  isOpen: boolean;
  initialData?: any;
  onSubmit: (formData: FormDataInt, id: any) => void;
  onCancel: () => void;
  onClose: () => void;
}

