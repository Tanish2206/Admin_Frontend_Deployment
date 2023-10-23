import React, { useState, useCallback, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
  Grid,
  GridItem,
  CloseButton,
  Button,
  Textarea,
  Checkbox,
  Select,
  Image,
  ButtonGroup
} from "@chakra-ui/react";

import {
  designOption,
  designType,
  propertyOption,
  propertyType,
} from "@/Utils/string";
import InputField from "./InputField";
import { designFields } from "@/Utils/string";
import { FormDataInt } from "@/Utils/interface";
import { AddEditComponentProps } from "@/Utils/interface";

const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png"];
const ALLOWED_VIDEO_TYPES = ["video/mp4", "video/mpeg", "video/quicktime"];

const AddUpdateDesign: React.FC<AddEditComponentProps> = ({
  isOpen,
  initialData,
  onSubmit,
  onCancel,
  onClose,
}) => {
  const [designId, setDesignId] = useState<any>(initialData?.id || null);
  const [formData, setFormData] = useState<FormDataInt>(() => {
    if (initialData) {
      return { ...initialData };
    } else {
      return {
        title: "",
        description: null,
        designCategory: "",
        designType: "",
        propertyCategory: "",
        propertyType: "",
        isFree: false,
        amount:"0",
        plotArea: "",
        facing: "",
        numberOfFloors: "",
        bedrooms: "",
        bathrooms: "",
        balcony: "",
        kitchens: "",
        livingrooms: "",
        dinningrooms: "",
        garageCapacity: "",
        constructionYear: "",
        vastu: false,
        unitType: "",
        designImagesUrls: [],
        videosUrls: [],
        width: "",
        length: "",
        masterRoom:"",
        guestRoom:"",
        Kidsroom:"",
        drawingHall:"",
        diningRoom:"",
        toilets:"",
        temple:"",
        storeRoom:"",
        washArea:"",
        garden:"",
        Porche:"",
        garage:"",
        swimingPool:"",
        bar:"",
        lift:"",
        shopType:"",
        shops:"",
        flats:"",
        resaturent:"",
        marrigeHall:"",
        parking:"",
        classrooms:"",
      officeCabin:"",
      sportsGraden:"",
      };
    }
  });
  const [errors, setErrors] = useState<any>({});

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
      setDesignId(initialData?.id as any);
    }
  }, [initialData]);

  const handleChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const { name, value, type, checked }: any = e.target;
      const fieldValue = type === "checkbox" ? checked : value;
      setFormData((prevData) => ({
        ...prevData,
        [name]: fieldValue,
      }));
    },
    []
  );

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = event.target?.files;
    if (files) {
      const updatedImages: File[] = Array.from(files);
      setFormData((prevData) => ({
        ...prevData,
        designImagesUrls: [...(prevData.designImagesUrls || []), ...updatedImages],
      }));
    }
  };

  const handleVideoChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files) {
        const updatedVideos: File[] = Array.from(files);
        setFormData((prevData) => ({
          ...prevData,
          videosUrls: [...(prevData.videosUrls || []), ...updatedVideos],
        }));
      }
    },
    []
  );

  const handleRemoveImage = useCallback((index: number) => {
    setFormData((prevData) => {
      const updatedImages = prevData?.designImagesUrls.filter(
        (_designImagesUrls, i) => i !== index
      );
      return {
        ...prevData,
        designImagesUrls: updatedImages,
      };
    });
  }, []);

  const handleRemoveVideo = useCallback((index: number) => {
    setFormData((prevData) => {
      const updatedVideos = prevData.videosUrls.filter((_videosUrls, i) => i !== index);
      return {
        ...prevData,
        videosUrls: updatedVideos,
      };
    });
  }, []);

  const validateForm = (): boolean => {
    const {
      title,
     
    } = formData;
    const errors: any = {};

    if (!title.trim()) {
      errors.title = "Title is required.";
    }

    // if (!designCategory) {
    //   errors.designDetailId = "Design Detail is required.";
    // }

    // if (!designType) {
    //   errors.designType = "Property Detail is required.";
    // }
    // if (!propertyCategory) {
    //   errors.propertyCategory = "Design Detail is required.";
    // }

    // if (!propertyType) {
    //   errors.propertyType = "Property Detail is required.";
    // }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        const form: any = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
          if (key === "designImagesUrls" || key === "videosUrls") {
            value.forEach((file: File) => {
              form.append(key, file);
            });
          } else {
            form.append(key, value);
          }
        });
        onSubmit(form, designId);

        setDesignId("");
        setFormData({
          title: "",
          description: null,
          designCategory: "",
          designType: "",
          propertyCategory: "",
          propertyType: "",
          isFree: false,
          amount:"0",
          plotArea: "",
          facing: "",
          numberOfFloors: "",
          bedrooms: "",
          bathrooms: "",
          balcony: "",
          kitchens: "",
          livingrooms: "",
          dinningrooms: "",
          garageCapacity: "",
          constructionYear: "",
          vastu: false,
          unitType: "",
          designImagesUrls: [],
          videosUrls: [],
          width: "",
          length: "",
          masterRoom:"",
          guestRoom:"",
          Kidsroom:"",
          drawingHall:"",
          diningRoom:"",
          toilets:"",
          temple:"",
          storeRoom:"",
          washArea:"",
          garden:"",
          Porche:"",
          garage:"",
          swimingPool:"",
          bar:"",
          lift:"",
          shopType:"",
          shops:"",
          flats:"",
          resaturent:"",
          marrigeHall:"",
          parking:"",
          classrooms:"",
          officeCabin:"",
          sportsGraden:"",
        });
      } catch (error) {
      }
    }
  };

  const handleCancel = () => {
    setDesignId("");
    setFormData({
      title: "",
      description: null,
      designCategory: "",
      designType: "",
      propertyCategory: "",
      propertyType: "",
      isFree: false,
      amount:"0",
      plotArea: "",
      facing: "",
      numberOfFloors: "",
      bedrooms: "",
      bathrooms: "",
      balcony: "",
      kitchens: "",
      livingrooms: "",
      dinningrooms: "",
      garageCapacity: "",
      constructionYear: "",
      vastu: false,
      unitType: "",
      designImagesUrls: [],
      videosUrls: [],
      width: "",
      length: "",
      masterRoom:"",
      guestRoom:"",
      Kidsroom:"",
      drawingHall:"",
      diningRoom:"",
      toilets:"",
      temple:"",
      storeRoom:"",
      washArea:"",
      garden:"",
      Porche:"",
      garage:"",
      swimingPool:"",
      bar:"",
      lift:"",
      shopType:"",
      shops:"",
      flats:"",
      resaturent:"",
      marrigeHall:"",
      parking:"",
      classrooms:"",
      officeCabin:"",
      sportsGraden:"",
    });
    onCancel();
  };

  const handleClose=()=>{
    
    handleCancel();
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{designId ? "Edit Design" : "Add Design"}</ModalHeader>
        <ModalCloseButton 
          onClick={handleClose}
        /> 
        <ModalBody>
          <VStack spacing={4}>
            <FormControl isRequired isInvalid={!!errors.title}>
              <FormLabel>Title</FormLabel>
              <Input
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
              {errors.title && <Text color="red">{errors.title}</Text>}
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Textarea
                name="description"
                value={formData?.description || ""}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Design Category</FormLabel>
              <Select
                name="designCategory"
                typeof="text"
                defaultValue={""}
                value={formData?.designCategory ||""}
                onChange={handleChange}
              >
                {designOption?.map((item) => (
                  <option key={item?.id} value={item?.value}>
                    {item?.value}
                  </option>
                ))}
              </Select>
              {/* {errors.designCategory && (
                <Text color="red">{errors.designCategory}</Text>
              )} */}
            </FormControl>
            <FormControl>
              <FormLabel>Design Type</FormLabel>
              <Select
                name="designType"
                typeof="text"
                defaultValue={""}
                value={formData?.designType||""}
                onChange={handleChange}
              >
                {formData?.designCategory === "" ? (
                  <option value="">Select option</option>
                ) : (
                  ""
                )}
                {designType?.map((item) => (
                  formData?.designCategory === item?.designHead ? (
                    <option key={item?.id} value={item?.typeValue}>
                      {item?.typeValue}
                    </option>
                  ) : (
                    ""
                  )
                ))}
              </Select>
              {/* {errors.designType && (
                <Text color="red">{errors.designType}</Text>
              )} */}
            </FormControl>
            <FormControl>
              <FormLabel>Property Category</FormLabel>
              <Select
                name="propertyCategory"
                typeof="text"
                defaultValue={""}
                value={formData?.propertyCategory||""}
                onChange={handleChange}
              >
                {propertyOption?.map((item) => (
                  <option key={item?.id} value={item?.value}>
                    {item?.value}
                  </option>
                ))}
              </Select>
              {/* {errors.propertyCategory && (
                <Text color="red">{errors.propertyCategory}</Text>
              )} */}
            </FormControl>
            <FormControl isRequired isInvalid={!!errors.propertyType}>
              <FormLabel>Property Type</FormLabel>
              <Select
                name="propertyType"
                typeof="text"
                defaultValue={""}
                value={formData?.propertyType||""}
                onChange={handleChange}
              >
                {formData?.propertyCategory === "" ? (
                  <option value="">Select option</option>
                ) : (
                  ""
                )}
                {propertyType?.map((item) => (
                  formData?.propertyCategory === item?.designHead ? (
                    <option key={item?.id} value={item?.typeValue}>
                      {item?.typeValue}
                    </option>
                  ) : (
                    ""
                  )
                ))}
              </Select>
              {errors.propertyType && (
                <Text color="red">{errors.propertyType}</Text>
              )}
            </FormControl>
            <Checkbox
              name="isFree"
              isChecked={formData?.isFree}
              onChange={handleChange}
            >
              Free
            </Checkbox>
            <FormControl>
              <FormLabel>Amount</FormLabel>
              <Input
                name="amount"
                type="number"
                value={formData.amount||0||""}
                onChange={handleChange}
                disabled={formData?.isFree ? true : false}
              />
             
            </FormControl>
            <FormControl isRequired isInvalid={!!errors.plotArea}>
              <FormLabel>Plot Area</FormLabel>
              <Input
                name="plotArea"
                value={formData.plotArea}
                onChange={handleChange}
              />
              {errors.plotArea && <Text color="red">{errors.plotArea}</Text>}
            </FormControl>
            <FormControl isRequired isInvalid={!!errors.facing}>
              <FormLabel>Facing</FormLabel>
              <Select
                 name="facing"
                 typeof="text"
                 defaultValue={"Select Option"}
                 value={formData?.facing||""}
                 onChange={handleChange}
                 
              >
                <option value="">Select Facing</option>
                <option value="East" >East Facing</option>
                <option value="West" >West Facing</option>
                <option value="North" >North Facing</option>
                <option value="South">South Facing</option>
              </Select>
              {/* <Input
                name="facing"
                value={formData?.facing}
                onChange={handleChange}
              /> */}
              {errors.facing && <Text color="red">{errors.facing}</Text>}
            </FormControl>
            <FormControl>
              <FormLabel>Width</FormLabel>
              <Input
                name="width"
                value={formData.width}
                onChange={handleChange}
              />
            </FormControl>          
            <FormControl>
              <FormLabel>length</FormLabel>
              <Input
                name="length"
                type="number"
                value={formData.length||0||""}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Number of Floors</FormLabel>
              <Input
                name="numberOfFloors"
                type="number"
                value={formData.numberOfFloors||0||""}
                onChange={handleChange}
              />
              </FormControl>
              <FormControl>
              <FormLabel>construction Year</FormLabel>
              <Input
                name="constructionYear"
                type="number"
                value={formData.constructionYear||0||""}
                onChange={handleChange}
              />
              </FormControl>
              {designFields.map((field: any, index: number) => {
         if (field.optionType === formData.propertyType || field.option === formData.propertyCategory) {
           return (
           <InputField
             key={index}
             label={field.label}
             name={field.name}
             type={field.type}
             value={formData[field.name as keyof FormDataInt]}
             onChange={handleChange}
             options={field.options}
             error={errors[field.name]}
      />
    );
  }
  return null;
})}
            <Checkbox
              name="vastu"
              isChecked={formData?.vastu}
              onChange={handleChange}
            >
              Vastu
            </Checkbox>
            <FormControl>
              <FormLabel>Images</FormLabel>
              <Input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
              />
              <Grid templateColumns="repeat(5, 1fr)" gap={2}>
                {formData?.designImagesUrls?.map((image:any, index) => (
                  <GridItem key={index}>
                    <CloseButton
                      size="sm"
                      onClick={() => handleRemoveImage(index)}
                    />
                    <Image
                src={image instanceof File ? URL.createObjectURL(image) : image}

                      alt={`Image ${index}`}
                    />
                  </GridItem>
                ))}
              </Grid>
            </FormControl>
            <FormControl>
              <FormLabel>Videos</FormLabel>
              <Input
                type="file"
                accept="video/*"
                multiple
                onChange={handleVideoChange}
              />
              <Grid templateColumns="repeat(5, 1fr)" gap={2}>
                {formData?.videosUrls?.map((video:any, index:any) => (
                  <GridItem key={index}>
                    <CloseButton
                      size="sm"
                      onClick={() => handleRemoveVideo(index)}
                    />
                    <video 
                   src={video instanceof File ? URL.createObjectURL(video) : video}
                     controls />
                  </GridItem>
                ))}
              </Grid>
            </FormControl>
            <ButtonGroup spacing={4}>
            <Button colorScheme="blue" onClick={handleSubmit}>
              Submit
            </Button>
            <Button colorScheme="gray" onClick={handleCancel}>
              Cancel
            </Button>
          </ButtonGroup>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddUpdateDesign;
