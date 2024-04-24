import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { useState, useCallback, useEffect } from "react";
import ImageCaption from "./ImageCaption";

const BasicGallery = ({photos}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  // Add left/right key navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 37  && currentImage !== 0) {
        // left key
        setCurrentImage((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
      } else if (event.keyCode === 39  && currentImage !== photos.length - 1) {
        //region key
        setCurrentImage((prevIndex) => (prevIndex + 1) % photos.length);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentImage, photos.length]);

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((photo) => ({
                ...photo,
                srcset: photo.srcSet,
                caption: (
                  <ImageCaption photo={photo} />
                ),
                alt: Object.entries(photo)
                .filter(([key, value]) => value && ['name', 'medium', 'date', 'size'].includes(key))
                .map(([key, value]) => `${key}: ${value}`)
                .join(', ')
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default BasicGallery;
