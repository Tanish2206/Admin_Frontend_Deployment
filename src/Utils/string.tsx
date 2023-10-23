
import { IconType } from 'react-icons';
import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
    FiMenu,
    FiBell,
    FiChevronDown,
    FiUser,
    FiFileMinus,
    FiBookOpen,
    FiActivity, 
    FiDatabase
  } from 'react-icons/fi';
  
interface LinkItemProps {
    id:number;
    name: string;
    icon: IconType;
  }



export const LinkItems: Array<LinkItemProps> = [
    {id:1, name: 'User', icon: FiUser },
    { id:2, name: 'Project', icon: FiFileMinus },
    {id:3, name: 'Designs', icon: FiCompass },   
    {id:4, name: 'Enquiries', icon: FiActivity }, 
    {id:5,name:"Designers",icon :FiBookOpen},  
    {id:6,name:"DesignersProject",icon :FiDatabase}, 
  ];

 

  export const UserHeader = [
    {
      id: 1,
      key: "id",
      label: "ClientId",
      unique:true,

    },
    {
      id: 2,
      key: "firstName",
      label: "Customer",
      unique:true,

    },
    {
      id: 3,
      key: "mobile",
      label: "mobile-number",
      unique:true,
    },
    {
      id: 4,
      key: "email",
      label: "Email",
      unique:"true",
      
    },
    {
      id: 5,
      key: "projectCount",
      label: "Project",
     
    },
    {
      id: 6,
      key: "status",
      label: "status",
     
    },
  ];


  export const categoryHeader = [
    {
      id: 1,
      key: "id",
      label: "projectId",

    },
    {
      id: 2,
      key: "image",
      label: "image",

    },
    {
      id: 3,
      key: "title",
      label: "title",

    },
    {
      id: 4,
      key: "projectType",
      label: "projectType",
      
    },
    {
      id: 5,
      key: "isPaymentDone",
      label: "Payment",
    },
    {
      id: 6,
      key: "projectStatus",
      label: "Status",
    },
  ];
  export const designHeader = [
    {
      id: 1,
      key: "image",
      label: "image",
      isDesign:true

    },
    {
      id: 2,
      key: "title",
      label: "title",

    },
    {
      id: 3,
      key: "propertyCategory",
      label: "property Category",
      
    },
    {
      id: 4,
      key: "isFree",
      label: "Payment",
      isDesign:true
    },
    {
      id: 5,
      key: "designCategory",
      label: "design Category",
    },
  ];

  export const enquiryHeader = [
    {
      id: 1,
      key: "name",
      label: "name",
    },
    {
      id: 2,
      key: "email",
      label: "email",

    },
    {
      id: 3,
      key: "mobile",
      label: "mobile",
      
    },
    {
      id: 4,
      key: "message",
      label: "message",
     
    }
  ]

  export const designerHeader=[
    {
      id: 1,
      key: "id",
      label: "DesignerId",
      designer:true,
    },
    {
      id: 2,
      key: "firstName",
      label: "Designer",
      designerName:true,
    },
    // {
    //   id: 3,
    //   key: "lastName",
    //   label: "Designer",
    //   designerName:true,
    // },
    {
      id: 4,
      key: "address",
      label: "Address",
      designer:true,
    },
    {
      id: 5,
      key: "mobile",
      label: "mobile-number",
      designer:true,
    },
    // {
    //   id: 5,
    //   key: "email",
    //   label: "Email",
    //   designer:true,
      
    // },
    {
      id: 6,
      key: "projectCount",
      label: "Project",
     
    },
    {
      id: 7,
      key: "status",
      label: "status",
    },
  ]
  
  export const designOption =[
    {
      id:1,
      value:"Select Option"
    },
    {
      id:2,
      value:"Architectural Design"
    },
    {
      id:3,
      value:"Interior Design"
    },
    {
      id:4,
      value:"MEP Design"
    },
    {
      id:5,
      value:"Vaastu Consultency"
    },
    {
      id:6,
      value:"Building Permission"
    },
    {
      id:7,
      value:"Landscaping"
    },
    {
      id:8,
      value:"Walkthrough"
    }
  ]

  export const designType=[

    {
      id:1,
      typeValue:"Select Option",
      designHead:"Architectural Design"
    },
    {
      id:2,
      typeValue:"Floor Plan",
      designHead:"Architectural Design"
    },
    {
      id:3,
      typeValue:"Elevation",
      designHead:"Architectural Design"
    },
    {
      id:4,
      typeValue:"3D Floor Plan(ISO)",
      designHead:"Architectural Design"
    },
    {
      id:5,
      typeValue:"Structural",
      designHead:"Architectural Design"
    },
    {
      id:6,
      typeValue:"Design",
      designHead:"Architectural Design"
    },
    {
      id:1,
      typeValue:"Select Option",
      designHead:"Interior Design"
    },
    {
      id:2,
      typeValue:"Furniture Floor Plan",
      designHead:"Interior Design"
    },
    {
      id:3,
      typeValue:"Wall Elevation",
      designHead:"Interior Design"
    },
    {
      id:4,
      typeValue:"3D Views",
      designHead:"Interior Design"
    },
    {
      id:5,
      typeValue:"360° Views",
      designHead:"Interior Design"
    },
    {
      id:6,
      typeValue:"Working Drawing - Ceiling",
      designHead:"Interior Design"
    },
    {
      id:7,
      typeValue:"Working Drawing - Furniture",
      designHead:"Interior Design"
    },
    {
      id:8,
      typeValue:"Working Drawing - Wall",
      designHead:"Interior Design"
    },
    {
      id:1,
      typeValue:"Select Option",
      designHead:"MEP Design"
    },
    {
      id:2,
      typeValue:"Electrical Drawing",
      designHead:"MEP Design"
    },
    {
      id:3,
      typeValue:"Plumbing & Drainage",
      designHead:"MEP Design"
    },
    {
      id:4,
      typeValue:"Sanitary Drawing",
      designHead:"MEP Design"
    },
    {
      id:5,
      typeValue:"Mechanical Drawing",
      designHead:"MEP Design"
    },
    {
      id:6,
      typeValue:"Fire & Safety Drawing",
      designHead:"MEP Design"
    },
    {
      id:1,
      typeValue:"Select Option",
      designHead:"Vaastu Consultency"
    },
    {
      id:2,
      typeValue:"Griha Vaastu & Bhumi Vaastu",
      designHead:"Vaastu Consultency"
    },
    {
      id:3,
      typeValue:"Feng Shul & Colour Vaastu",
      designHead:"Vaastu Consultency"
    },
    {
      id:1,
      typeValue:"Select Option",
      designHead:"Building Permission"
    },
    {
      id:2,
      typeValue:"Residential",
      designHead:"Building Permission"
    },
    {
      id:3,
      typeValue:"Commercial",
      designHead:"Building Permission"
    },
    {
      id:4,
      typeValue:"Mix Land Use",
      designHead:"Building Permission"
    },
    {
      id:5,
      typeValue:"Educational",
      designHead:"Building Permission"
    },
    {
      id:6,
      typeValue:"Institutional",
      designHead:"Building Permission"
    },
    {
      id:1,
      typeValue:"Select Option",
      designHead:"Landscaping"
    },
    {
      id:2,
      typeValue:"Commercial Landscaping",
      designHead:"Landscaping"
    },
    {
      id:3,
      typeValue:"Pavement Landscaping",
      designHead:"Landscaping"
    },
    {
      id:4,
      typeValue:"Exterior Landscaping",
      designHead:"Landscaping"
    },
    {
      id:5,
      typeValue:"Soft Landscaping",
      designHead:"Landscaping"
    },
    {
      id:6,
      typeValue:"Hard Landscaping",
      designHead:"Landscaping"
    },
   
  ]

  export const propertyOption =[
    {
      id:1,
      value:"Select Option"
    },
    {
      id:2,
      value:"Residential"
    },
    {
      id:3,
      value:"Commercial"
    },
    {
      id:4,
      value:"Educational"
    },
    {
      id:5,
      value:"Institutional"
    },
    {
      id:6,
      value:"Assembly"
    },
  ]

  export const propertyType=[

    {
      id:1,
      typeValue:"Select Option",
      designHead:"Residential"
    },
    {
      id:2,
      typeValue:"Small House",
      designHead:"Residential"
    },
    {
      id:3,
      typeValue:"Apartments",
      designHead:"Residential"
    },
    {
      id:4,
      typeValue:"Villa",
      designHead:"Residential"
    },
    {
      id:5,
      typeValue:"Cottage",
      designHead:"Residential"
    },
    {
      id:6,
      typeValue:"Duplex",
      designHead:"Residential"
    },
    {
      id:7,
      typeValue:"Mansion",
      designHead:"Residential"
    },
    {
      id:1,
      typeValue:"Select Option",
      designHead:"Commercial"
    },
    {
      id:2,
      typeValue:"Shop",
      designHead:"Commercial"
    },
    {
      id:3,
      typeValue:"Complex",
      designHead:"Commercial"
    },
    {
      id:4,
      typeValue:"Mix Land Use Building",
      designHead:"Commercial"
    },
    {
      id:5,
      typeValue:"Hotel",
      designHead:"Commercial"
    },
    {
      id:6,
      typeValue:"Resort",
      designHead:"Commercial"
    },
    {
      id:7,
      typeValue:"Store",
      designHead:"Commercial"
    },
    {
      id:8,
      typeValue:"Showrooms",
      designHead:"Commercial"
    },
    {
      id:9,
      typeValue:"Office",
      designHead:"Commercial"
    },
    {
      id:1,
      typeValue:"Select Option",
      designHead:"Educational"
    },
    {
      id:2,
      typeValue:"School",
      designHead:"Educational"
    },
    {
      id:3,
      typeValue:"College",
      designHead:"Educational"
    },
    {
      id:4,
      typeValue:"Library",
      designHead:"Educational"
    },
    {
      id:1,
      typeValue:"Select Option",
      designHead:"Institutional"
    },
    {
      id:2,
      typeValue:"Hospital",
      designHead:"Institutional"
    },
    {
      id:3,
      typeValue:"Auditorium",
      designHead:"Institutional"
    },
    {
      id:4,
      typeValue:"Dharmshalas",
      designHead:"Institutional"
    },
    {
      id:1,
      typeValue:"Select Option",
      designHead:"Assembly"
    },
    {
      id:2,
      typeValue:"Theatres",
      designHead:"Assembly"
    },
    {
      id:3,
      typeValue:"Clubhouse",
      designHead:"Assembly"
    },
    {
      id:4,
      typeValue:"Town hall",
      designHead:"Assembly"
    },
    {
      id:5,
      typeValue:"Gym",
      designHead:"Assembly"
    },
    {
      id:6,
      typeValue:"Sports Complex",
      designHead:"Assembly"
    },
  ]


  export const designFields = [
    { label: "Number of Bed Room", name: "bedrooms", type: "number",option:"Residential"},
    { label: "Number of Bath Room", name: "bathrooms", type: "number",option:"Residential"},
    { label: "Number of Balcony", name: "balcony", type: "text",option:"Residential"},
    { label: "Number of kitchens", name: "kitchens", type: "text",option:"Residential"},
    { label: "Number of Living Room", name: "livingrooms", type: "text",option:"Residential"},
    { label: "Number of Dinning Rooms", name: "dinningrooms", type: "text",option:"Residential"},
    { label: "Number of Garage Capacity", name: "garageCapacity", type: "text",option:"Residential"},
    { label: "Number of Master BedRoom", name: "masterBedroom", type: "text",option:"Residential"},
    { label: "Number of Guest Room", name: "guestRooms", type: "text",option:"Residential"},
    { label: "Number of Kids Room", name: "kidsrooms", type: "text",option:"Residential"},
    { label: "Drawing Hall", name: "drawingHall", type: "text",option:"Residential"},
    { label: "Number of Toilet", name: "toilets", type: "text",option:"Residential"},
    { label: "Number of Temple", name: "temple", type: "text",option:"Residential"},
    { label: "Number of Store Room", name: "storeRooms", type: "text",option:"Residential"},
    { label: "Wash Area", name: "washArea", type: "text",option:"Residential"},
    { label: "Garden", name: "gardens", type: "text",option:"Residential"},
    { label: "Porche", name: "porche", type: "text",option:"Residential"},
    { label: "Bar", name: "bars", type: "text",option:"Residential"},
    { label: "Lift", name: "lifts", type: "text",option:"Residential"},
    { label: "Swiming Pool", name: "swimingPool", type: "text",option:"Residential"},
    
   
    
    { label: "Shop Type", name: "shopType", type: "text",optionType:"Shop"},
    { label: "Number of Shop", name: "shops", type: "text",optionType:"Complex"},

    { label: "Number of Shop", name: "shops", type: "text",optionType:"Mix Land Use Building"},
    { label: "Number of Flat", name: "flats", type: "text",optionType:"Mix Land Use Building"},

    { label: "Number of Room", name: "rooms", type: "text",optionType:"Hotel"},
    { label: "Resaturent", name: "resaturents", type: "text",optionType:"Hotel"},
    { label: "Swiming Pool", name: "swimingPool", type: "text",optionType:"Hotel"},
    { label: "Garden", name: "gardens", type: "text",optionType:"Hotel"},
    { label: "Marrige Hall", name: "marrigeHalls", type: "text",optionType:"Hotel"},
    { label: "parking", name: "Parkings", type: "text",optionType:"Hotel"},

    { label: "Number of Room", name: "rooms", type: "text",optionType:"Resort"},
    { label: "Resaturent", name: "resaturent", type: "text",optionType:"Resort"},
    { label: "Swiming Pool", name: "swimingPool", type: "text",optionType:"Resort"},
    { label: "Garden", name: "gardens", type: "text",optionType:"Resort"},
    { label: "Marrige Hall", name: "marrigeHalls", type: "text",optionType:"Resort"},
    { label: "parking", name: "Parkings", type: "text",optionType:"Resort"},

    { label: "Number of Class Room", name: "classrooms", type: "number",option:"Educational"},
    { label: "Office Cabin", name: "masterRoom", type: "number",option:"Educational"},
    { label: "sports Ground,", name: "sportsGround,", type: "number",option:"Educational"},
    { label: "Parking", name: "parkings", type: "number",option:"Educational"},
    { label: "Laboratory", name: "laboratory", type: "number",option:"Educational"},
    { label: "Library", name: "library", type: "number",option:"Educational"},
    { label: "Auditorium", name: "auditorium", type: "number",option:"Educational"},
    { label: "Confrence Room", name: "conferenceHalls", type: "number",option:"Educational"},
    { label: "Hall", name: "halls", type: "number",option:"Educational"},
    { label: "Server Room", name: "serverRoom", type: "text",option:"Educational"},
    { label: "Stairs", name: "stairs", type: "number",option:"Educational"},
    { label: "toilets", name: "toilets", type: "number",option:"Educational"},
    { label: " Store Room", name: " storeRooms", type: "number",option:"Educational"},
    { label: "guest Room", name: "guestRooms", type: "number",option:"Educational"},

    { label: "Number of Bed", name: "beds", type: "number",optionType:"Hospital"},
    { label: "Doctors Cabin", name: "doctorsCabins", type: "number",optionType:"Hospital"},
    { label: "OPD", name: "opd", type: "number",optionType:"Hospital"},
    { label: "Genral Ward", name: "genralWard", type: "number",optionType:"Hospital"},
    { label: "Emergency Ward", name: "emergencyWard", type: "number",optionType:"Hospital"},

    { label: "Seating Capacity", name: "seatingCapacity", type: "number",optionType:"Auditorium"},
    { label: "Parking", name: "parkings", type: "number",optionType:"Auditorium"},
    { label: "Garden", name: "gardens", type: "number",optionType:"Auditorium"},


    { label: "Number of Room", name: "rooms", type: "number",optionType:"Dharmshalas"},
    { label: "kitchen", name: "kitchens", type: "number",optionType:"Dharmshalas"},
    { label: "Number Of Hall", name: "halls", type: "number",optionType:"Dharmshalas"},
    { label: "Gathering Area", name: "gatheringArea", type: "number",optionType:"Dharmshalas"},
    { label: "Activity Area", name: "activityArea", type: "number",optionType:"Dharmshalas"},

    { label: "Number of Seat", name: "seats", type: "number",optionType:"Theatres"},
    { label: "Number of Screen", name: "screens", type: "number",optionType:"Theatres"},
    { label: "Cafe", name: "cafes", type: "number",optionType:"Theatres"},

    { label: "Cafe", name: "cafes", type: "number",optionType:"Clubhouse"},
    { label: "Banquet Hall", name: "banquetHall", type: "number",optionType:"Clubhouse"},
    { label: "Sports Area", name: " sportsArea", type: "number",optionType:"Clubhouse"},
    { label: "Swiming Pool", name: "swimmingPools", type: "number",optionType:"Clubhouse"},
    { label: "SPA", name: "spa", type: "number",optionType:"Clubhouse"},
    { label: "Medical", name: "medical", type: "number",optionType:"Clubhouse"},
    { label: "Theater", name: "theater", type: "number",optionType:"Clubhouse"},

    { label: "Seating Capacity", name: "seatingCapacity", type: "number",optionType:"Town hall"},
    { label: "Confrence Hall", name: "kitchen", type: "number",optionType:"Town hall"},
    { label: "Activity Hall", name: "activityHall", type: "number",optionType:"Town hall"},

    { label: "Seating Capacity", name: "seatingCapacity", type: "number",optionType:"exhibition hall"},
    { label: "Confrence Hall", name: "kitchen", type: "number",optionType:"exhibition hall"},
    { label: "Activity Hall", name: "activityHall", type: "number",optionType:"exhibition hall"},
   
    { label: "Machine Area", name: "machineAreas", type: "number",optionType:"Gym"},
    { label: "Cardio Area", name: "cardioArea", type: "number",optionType:"Gym"},
    { label: "Activity Area", name: "activityArea", type: "number",optionType:"Gym"},
    { label: "Weight Area", name: "weightArea", type: "number",optionType:"Gym"},

    { label: "Indoor Area", name: "indoorArea", type: "number",optionType:"Sports Complex"},
    { label: "Outdoor Area", name: "outdoorArea", type: "number",optionType:"Sports Complex"},
    { label: "Pool", name: "pool", type: "number",optionType:"Sports Complex"},
    { label: "Garden Area", name: "gardenArea", type: "number",optionType:"Sports Complex"},
    { label: "Auditorium", name: "auditorium", type: "number",optionType:"Sports Complex"},

    // Add other design fields here...
  ];
  
  export const singleDesignInfo=[
    {
      id: 1,
      key: "bedrooms",
      label: "Bedroom",
    }, 
    {
      id: 2,
      key: "bathrooms",
      label: "Bathroom",
    },
    {
      id: 3,
      key: "balcony",
      label: "Balcony",
    },
    {
      id: 4,
      key: "kitchens",
      label: "Kitchen",
    },
    {
      id: 5,
      key: "livingrooms",
      label: "Livingroom",
    },
    {
      id: 6,
      key: "garageCapacity",
      label: "GarageCapacity",
    },
    {
      id: 7,
      key: "masterBedroom",
      label: "MasterBedroom",
    },
    {
      id: 8,
      key: "guestRooms",
      label: "GuestRoom",
    },{
      id: 9,
      key: "kidsRooms",
      label: "KidsRoom",
    },
    {
      id: 10,
      key: "dinningrooms",
      label: "Dinningroom",
    },
    {
      id: 11,
      key: "drawingHall",
      label: "DrawingHall",
    },
    {
      id: 12,
      key: "toilets",
      label: "Toilet",
    },
    {
      id: 13,
      key: "temple",
      label: "Temple",
    },
    {
      id: 14,
      key: "storeRooms",
      label: "storeRooms",
    },
    {
      id: 15,
      key: "washArea",
      label: "WashArea",
    },
    {
      id: 16,
      key: "gardens",
      label: "Garden",
    },
    {
      id: 17,
      key: "porche",
      label: "Porche",
    },
    {
      id: 18,
      key: "swimmingPools",
      label: "SwimmingPool",
    },
    {
      id: 19,
      key: "bars",
      label: "Bar",
    },
    {
      id: 20,
      key: "lifts",
      label: "Lift",
    },
    {
      id: 21,
      key: "shopType",
      label: "shopType",
    },
    {
      id: 22,
      key: "shops",
      label: "Shop",
    },{
      id: 23,
      key: "flats",
      label: "Flat",
    },{
      id: 24,
      key: "parkings",
      label: "Parking",
    },{
      id: 25,
      key: "marriageHalls",
      label: "Marriage Hall",
    },{
      id: 26,
      key: "restaurants",
      label: "Restaurant",
    },{
      id: 27,
      key: "areto",
      label: "Areto",
    },{
      id: 28,
      key: "classrooms",
      label: "Classroom",
    },{
      id: 29,
      key: "officeCabins",
      label: "Office Cabin",
    },{
      id: 30,
      key: "sportsGrounds",
      label: "SportsGround",
    },{
      id: 31,
      key: "laboratory",
      label: "laboratory",
    },
    {
      id: 32,
      key: "library",
      label: "Library",
    },
    {
      id: 33,
      key: "auditorium",
      label: "Auditorium",
    },
    {
      id: 34,
      key: "conferenceRooms",
      label: "Conference Room",
    },
    {
      id: 35,
      key: "halls",
      label: "Hall",
    },
    {
      id: 36,
      key: "serverRooms",
      label: "Server Room",
    },
    {
      id: 37,
      key: "stairs",
      label: "Stair",
    },
    {
      id: 38,
      key: "beds",
      label: "Bed",
    },{
      id: 39,
      key: "doctorCabins",
      label: "Doctor Cabin",
    },{
      id: 40,
      key: "OPD",
      label: "OPD",
    },
    {
      id: 41,
      key: "genWard",
      label: "General Ward",
    },{
      id: 42,
      key: "emergencyWard",
      label: "EmergencyWard",
    },{
      id: 43,
      key: "seatingCapacity",
      label: "Seating Capacity",
    },{
      id: 44,
      key: "rooms",
      label: "Room",
    },{
      id: 45,
      key: "gatheringAreas",
      label: "Gathering Area",
    },
    {
      id: 46,
      key: "activityArea",
      label: "Activity Area",
    },
    {
      id: 47,
      key: "numberOfSeats",
      label: "Number Of Seat",
    },
    {
      id: 48,
      key: "screens",
      label: "Screen",
    },
    {
      id: 49,
      key: "cafes",
      label: "Cafe",
    },
    {
      id: 50,
      key: "banquetHalls",
      label: "Banquet Hall",
    },
    {
      id: 51,
      key: "sportsArea",
      label: "Sports Area",
    },
    {
      id: 52,
      key: "spa",
      label: "Spa",
    },
    {
      id: 53,
      key: "medical",
      label: "Medical",
    },
    {
      id: 54,
      key: "theater",
      label: "Theater",
    },
    {
      id: 55,
      key: "conferenceHalls",
      label: "Conference Hall",
    },
    {
      id: 56,
      key: "machineAreas",
      label: "machine Area",
    },
    {
      id: 57,
      key: "cardioArea",
      label: "Cardio Area",
    },
    {
      id: 58,
      key: "weightArea",
      label: "weight Area",
    },
    {
      id: 59,
      key: "indoorArea",
      label: "Indoor Area",
    },
    {
      id: 60,
      key: "outdoorArea",
      label: "outdoorArea",
    },
    {
      id: 61,
      key: "gardenArea",
      label: "Garden Area",
    },
  ]

  export const designerProjectHeader=[
     
    {
      id: 1,
      key: "id",
      label: "projectId",

    },
    {
      id: 2,
      key: "image",
      label: "image",

    },
    {
      id: 3,
      key: "title",
      label: "title",

    },
    {
      id: 4,
      key: "projectType",
      label: "projectType",
      
    },
    {
      id: 5,
      key: "isPaymentDone",
      label: "Payment",
    },
    {
      id: 6,
      key: "projectStatus",
      label: "Status",
    },
  ]
  export const allDesignerProjectHeader=[
    {
      id: 1,
      key: "id",
      label: "projectId",

    },
    {
      id: 2,
      key: "designerId",
      label: "designerId",

    },
    {
      id: 3,
      key: "firstName",
      label: "Designer",
     
    },
    {
      id: 4,
      key: "title",
      label: "title",

    },
    {
      id: 5,
      key: "projectType",
      label: "projectType",   
    },
    {
      id: 6,
      key: "projectStatusByDesigner",
      label: "projectStatus",   
    },
    {
      id: 7,
      key: "submission",
      label: "submission",   
    },
    {
      id: 8,
      key: "isAccepted",
      label: "Approval",   
    },

  ]
  