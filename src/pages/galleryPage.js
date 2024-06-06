import React from 'react';
import { Gallery } from 'react-grid-gallery';
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

    return (
        <div className="gallery-container">
            <Gallery
                images={images.map((img, idx) => ({
                    ...img,
                }))}
                enableImageSelection={false}
                columnCount={"auto"}
                columnWidth={230}
                gapSize={24}
            />
        </div>
    );
}

export default GalleryPage;
