import React, { useState } from 'react';
import { VStack, Image, HStack, Box, IconButton, Tooltip } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

interface ImageType {
  siteImagesUrls: string[];
  videosUrls: string[];
  name: string;
  type: 'image' | 'video';
}

interface ImagesListProps {
  images: ImageType;
}

const ImagesList: React.FC<ImagesListProps> = ({ images }:any) => {
  const mediaData=images && images?.siteImagesUrls ? images?.siteImagesUrls : images?.designImagesUrls;
  const [scrollIndex, setScrollIndex] = useState(0);
  const showImages = 3; // Number of images to show at a time
  const totalImages = mediaData?.length + images?.videosUrls?.length;
  const maxScrollIndex = totalImages;

  const scrollImages = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setScrollIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else {
      setScrollIndex((prevIndex) => Math.min(prevIndex + 1, maxScrollIndex - 1 ));
    }
  };

  return (
    <Box maxWidth="100%">
      <Box position="relative" w="408px" h="408px" borderRadius="lg" overflow="hidden">
        {images?.videosUrls?.length > 0 && scrollIndex >= mediaData?.length && (
          <video
            src={images?.videosUrls[scrollIndex - mediaData?.length]}
            width="100%"
            height="100%"
            controls
            style={{ maxWidth: '100%', height: 'auto' }}
          >
            Your browser does not support the video tag.
          </video>
        )}
        {mediaData?.length > 0 && scrollIndex < mediaData?.length && (
          <Image
            src={mediaData[scrollIndex]}
            boxSize="100%"
            objectFit="cover"
            alt={`Image ${scrollIndex}`}
          />
        )}
      </Box>

      <HStack mt={2} justify="center" overflowX="auto">
        <IconButton
          aria-label="Scroll Left"
          icon={<ChevronLeftIcon />}
          variant="ghost"
          onClick={() => scrollImages('left')}
          isDisabled={scrollIndex === 0}
        />

        {mediaData?.concat(images?.videosUrls)?.slice(scrollIndex, scrollIndex + showImages)
        ?.map((url:any, index:any) => (
          <Tooltip key={index} label={`Item ${index}`}>
            <Box
              w="75px"
              h="75px"
              overflow="hidden"
              borderRadius="lg"
              cursor="pointer"
              onClick={() => setScrollIndex(index)}
              opacity={index >= scrollIndex && index < scrollIndex + showImages ? 1 : 0.5}
              transition="opacity 0.3s ease-in-out"
            >
              {index < mediaData?.length ? (
                <Image src={url} boxSize="100%" objectFit="cover" alt={`Image ${index}`} />
              ) : (
                <video width="100%" height="100%" style={{ maxWidth: '100%', height: 'auto' }}>
                  <source src={url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </Box>
          </Tooltip>
        ))}

        <IconButton
          aria-label="Scroll Right"
          icon={<ChevronRightIcon />}
          variant="ghost"
          onClick={() => scrollImages('right')}
          isDisabled={scrollIndex >= maxScrollIndex - 1}
        />
      </HStack>
    </Box>
  );
};

export default ImagesList;