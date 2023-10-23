"use client";
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
} from "@chakra-ui/react";

import axios from "axios";

const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png"];
const ALLOWED_VIDEO_TYPES = ["video/mp4", "video/mpeg", "video/quicktime"];

interface FormData {
  clientId: string;
  title: string;
  description: string;
  location: string;
  projectType: string;
  projectStatus: string;
  latitude: string;
  longitude: string;
  width: string;
  length: string;
 
  totalAmount: string;
  paidAmount: string;
  isPaymentDone: boolean;
  currentIteration: string;
  maximumIterations: string;
  isSiteVisitRequired:boolean;
  isSiteIrregular:boolean;

  siteImagesUrls: File[];
  videosUrls: File[];
  
}

interface AddEditComponentProps {
  isOpen: boolean;
  initialData?: any;
  onSubmit: (formData: FormData, id: any) => void;
  onCancel: () => void;
  onClose: () => void;
}

const AddEditComponent: React.FC<AddEditComponentProps> = ({
  isOpen,
  initialData,
  onSubmit,
  onCancel,
  onClose,
}) => {
  const [projectId, setprojectId] = useState<any>();
  const [formData, setFormData] = useState<FormData>(() => {
    if (initialData) {
      return { ...initialData };
    } else {
      return {
        clientId: "",
        title: "",
        description: "",
        location: "",
        projectType: "",
        projectStatus: "",
        latitude: "",
        longitude: "",
        width: "",
        length: "",

        totalAmount: "",
        paidAmount: "",
        isPaymentDone: false,
        currentIteration: "",
        maximumIterations: "",
        isSiteVisitRequired:false,
        isSiteIrregular:false,
        siteImagesUrls: [],
        videosUrls: [],
      };
    }
  });
  const [errors, setErrors] = useState<any>({});

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
      setprojectId(initialData?.id as any);
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
        siteImagesUrls: [...(prevData.siteImagesUrls || []), ...updatedImages],
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
      const updatedImages = prevData.siteImagesUrls.filter(
        (_image, i) => i !== index
      );
      return {
        ...prevData,
        siteImagesUrls: updatedImages,
      };
    });
  }, []);

  const handleRemoveVideo = useCallback((index: number) => {
    setFormData((prevData) => {
      const updatedVideos = prevData.videosUrls.filter((_video, i) => i !== index);
      return {
        ...prevData,
        videosUrls: updatedVideos,
      };
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors: any = {};

    if (formData?.title?.trim() === "") {
      validationErrors.title = "Title is required.";
    }

    if (formData?.location?.trim() === "") {
      validationErrors.location = "Location is required.";
    }

    if (formData?.projectType?.trim() === "") {
      validationErrors.projectType = "Project type is required.";
    }

    
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const form: any = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === "siteImagesUrls" || key === "videosUrls") {
          value.forEach((file: File) => {
            form.append(key, file);
          });
        } else {
          form.append(key, value);
        }
      });

      onSubmit(form, projectId);
      setFormData({
        clientId: "",
        title: "",
        description: "",
        location: "",
        projectType: "",
        projectStatus: "",
        latitude: "",
        longitude: "",
        width: "",
        length: "",
  
        totalAmount: "",
        paidAmount: "",
        isPaymentDone: false,
        currentIteration: "",
        maximumIterations: "",
        isSiteVisitRequired:false,
        isSiteIrregular:false,
        siteImagesUrls: [],
        videosUrls: [],
        // media:[]
      });
    }
  };
  const handleCancel = () => {
    setFormData({
      clientId: "",
      title: "",
      description: "",
      location: "",
      projectType: "",
      projectStatus: "",
      latitude: "",
      longitude: "",
      width: "",
      length: "",
    
      totalAmount: "",
      paidAmount: "",
      isPaymentDone: false,
      currentIteration: "",
      maximumIterations: "",
      isSiteVisitRequired:false,
      isSiteIrregular:false,
      siteImagesUrls: [],
      videosUrls: [],
      // media:[]
    });
    setErrors({});
    onCancel();
  };

  const handleClose=()=>{

    handleCancel();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {initialData ? "Edit Project" : "Add Project"}
        </ModalHeader>
        <ModalCloseButton
        onClick={handleClose}
         />
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl isRequired isInvalid={!!errors.clientId}>
                <FormLabel>Client ID</FormLabel>
                <Input
                  type="text"
                  name="clientId"
                  value={formData.clientId}
                  onChange={handleChange}
                />
                {errors.clientId && <Text color="red">{errors.clientId}</Text>}
              </FormControl>
              <FormControl isRequired isInvalid={!!errors.title}>
                <FormLabel>Title</FormLabel>
                <Input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
                {errors.title && <Text color="red">{errors.title}</Text>}
              </FormControl>
              <FormControl
              // isRequired isInvalid={!!errors.description}
              >
                <FormLabel>Description</FormLabel>
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
                {/* {errors.description && <Text color="red">{errors.description}</Text>} */}
              </FormControl>
              <FormControl isRequired isInvalid={!!errors.location}>
                <FormLabel>Location</FormLabel>
                <Input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                />
                {errors.location && <Text color="red">{errors.location}</Text>}
              </FormControl>
              <FormControl isRequired isInvalid={!!errors.projectType}>
                <FormLabel>Project Type</FormLabel>
                <Select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="Interior">Interior</option>
                  <option value="Elevation">Elevation</option>
                  <option value="Planning">Planning</option>
                </Select>
                {errors.projectType && (
                  <Text color="red">{errors.projectType}</Text>
                )}
              </FormControl>
              <FormControl>
                <FormLabel>Project Status</FormLabel>
                <Select
                  name="projectStatus"
                  value={formData.projectStatus}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="NotStarted">Not Started</option>
                  <option value="PaymentDone">Payment Done</option>
                  <option value="SiteVisitDone">Site Visit Done</option>
                  <option value="DesignerAssigned">Designer Assigned</option>
                  <option value="DesignSubmitted">Design Submitted</option>
                  <option value="WaitingForApproval">
                    Waiting for Approval
                  </option>
                  <option value="ChangesInProgress">Changes In Progress</option>
                  <option value="FinalDesignSubmitted">
                    Final Design Submitted
                  </option>
                </Select>
              </FormControl>
              <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                <GridItem>
                  <FormControl isRequired isInvalid={!!errors.latitude}>
                    <FormLabel>Latitude</FormLabel>
                    <Input
                      type="text"
                      name="latitude"
                      value={formData.latitude}
                      onChange={handleChange}
                    />
                    {errors.latitude && (
                      <Text color="red">{errors.latitude}</Text>
                    )}
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl isRequired isInvalid={!!errors.longitude}>
                    <FormLabel>Longitude</FormLabel>
                    <Input
                      type="text"
                      name="longitude"
                      value={formData.longitude}
                      onChange={handleChange}
                    />
                    {errors.longitude && (
                      <Text color="red">{errors.longitude}</Text>
                    )}
                  </FormControl>
                </GridItem>
              </Grid>
              <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                <GridItem>
                  <FormControl isRequired isInvalid={!!errors.width}>
                    <FormLabel>Width</FormLabel>
                    <Input
                      type="text"
                      name="width"
                      value={formData.width}
                      onChange={handleChange}
                    />
                    {errors.width && <Text color="red">{errors.width}</Text>}
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl isRequired isInvalid={!!errors.length}>
                    <FormLabel>Length</FormLabel>
                    <Input
                      type="text"
                      name="length"
                      value={formData.length}
                      onChange={handleChange}
                    />
                    {errors.length && <Text color="red">{errors.length}</Text>}
                  </FormControl>
                </GridItem>
              </Grid>
              
              <FormControl isRequired isInvalid={!!errors.totalAmount}>
                <FormLabel>Total Amount</FormLabel>
                <Input
                  type="text"
                  name="totalAmount"
                  value={formData.totalAmount}
                  onChange={handleChange}
                />
                {errors.totalAmount && (
                  <Text color="red">{errors.totalAmount}</Text>
                )}
              </FormControl>
              <FormControl isRequired isInvalid={!!errors.paidAmount}>
                <FormLabel>Paid Amount</FormLabel>
                <Input
                  type="text"
                  name="paidAmount"
                  value={formData.paidAmount}
                  onChange={handleChange}
                />
                {errors.paidAmount && (
                  <Text color="red">{errors.paidAmount}</Text>
                )}
              </FormControl>
              <FormControl>
                <Checkbox
                  name="isPaymentDone"
                  isChecked={formData.isPaymentDone}
                  onChange={handleChange}
                >
                  Is Payment Done?
                </Checkbox>
              </FormControl>
              <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                <GridItem>
                  <FormControl isRequired isInvalid={!!errors.currentIteration}>
                    <FormLabel>Current Iteration</FormLabel>
                    <Input
                      type="text"
                      name="currentIteration"
                      value={formData.currentIteration}
                      onChange={handleChange}
                    />
                    {errors.currentIteration && (
                      <Text color="red">{errors.currentIteration}</Text>
                    )}
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl
                    isRequired
                    isInvalid={!!errors.maximumIterations}
                  >
                    <FormLabel>Maximum Iterations</FormLabel>
                    <Input
                      type="text"
                      name="maximumIterations"
                      value={formData?.maximumIterations}
                      onChange={handleChange}
                    />
                    {errors.maximumIterations && (
                      <Text color="red">{errors.maximumIterations}</Text>
                    )}
                  </FormControl>

                </GridItem>
              </Grid>

              <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                  <GridItem>
                  <FormControl>
                      <Checkbox
                       marginRight={3}
                         name="isSiteVisitRequired"
                         isChecked={formData.isSiteVisitRequired}
                         onChange={handleChange}
                       >
                          Is SiteVisit Required?
                      </Checkbox>
                   </FormControl>
                  </GridItem>
                  <GridItem>
                  <FormControl>
                      <Checkbox
                         name="isSiteIrregular"
                          marginLeft={2}
                         isChecked={formData?.isSiteIrregular}
                         onChange={handleChange}
                       >
                          Is Site Irregular?
                      </Checkbox>
                   </FormControl>
                  </GridItem>
              </Grid>
              <FormControl>
              <FormLabel>Images</FormLabel>
              <Input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
              />
              <Grid templateColumns="repeat(5, 1fr)" gap={2}>
                {formData?.siteImagesUrls?.map((image:any, index) => (
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
              <Button type="submit">{initialData ? "Update" : "Add"}</Button>
              <Button variant="ghost" onClick={handleCancel}>
                Cancel
              </Button>
            </VStack>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddEditComponent;
