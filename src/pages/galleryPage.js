import React, { useState } from 'react';
import { Gallery } from 'react-grid-gallery';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import '../css/App.css'; // Make sure the path is correct

function createOverlay(filename) {
    // Remove the file extension from the filename
    const cleanCaption = filename.replace(/\.[^/.]+$/, "");
    return (
        <div className="custom-overlay__caption">
            {cleanCaption}
        </div>
    );
}

function importAll(r) {
  let images = [];
  r.keys().forEach((item) => { 
    images.push({
      src: r(item),
      thumbnail: r(item),
      thumbnailWidth: 320,
      thumbnailHeight: 200,
      customOverlay: createOverlay(item.replace('./', '')) // Remove './' and pass to createOverlay
    });
  });
  return images;
}

const images = importAll(require.context('../Gallery/', false, /\.(png|jpe?g|svg)$/));

const GalleryPage = () => {
    const [index, setIndex] = useState(-1); // -1 means no image is selected

    const currentImage = images[index];
    const nextIndex = (index + 1) % images.length;
    const prevIndex = (index + images.length - 1) % images.length;

    const handleClick = (idx) => setIndex(idx);
    const handleClose = () => setIndex(-1);
    const handleMovePrev = () => setIndex(prevIndex);
    const handleMoveNext = () => setIndex(nextIndex);

    return (
        <div className="gallery-container">
            <Gallery
                images={images.map((img, idx) => ({
                    ...img,
                    onClick: () => handleClick(idx)
                }))}
                enableImageSelection={false}
                columnCount={"auto"}
                columnWidth={230}
                gapSize={24}
            />
            {index !== -1 && (
                <Lightbox
                    mainSrc={currentImage.src}
                    imageTitle={currentImage.caption}
                    mainSrcThumbnail={currentImage.thumbnail}
                    nextSrc={images[nextIndex].src}
                    nextSrcThumbnail={images[nextIndex].thumbnail}
                    prevSrc={images[prevIndex].src}
                    prevSrcThumbnail={images[prevIndex].thumbnail}
                    onCloseRequest={handleClose}
                    onMovePrevRequest={handleMovePrev}
                    onMoveNextRequest={handleMoveNext}
                />
            )}
        </div>
    );
}

export default GalleryPage;
