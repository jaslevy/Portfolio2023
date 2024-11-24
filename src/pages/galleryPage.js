import React from 'react';
import { Gallery } from 'react-grid-gallery';
import '../styles/GalleryPage.css';

function createOverlay(filename) {
    const cleanCaption = filename.replace(/\.[^/.]+$/, "")
        .replace(/-/g, ' ')  // Replace hyphens with spaces
        .replace(/([A-Z])/g, ' $1')  // Add space before capital letters
        .trim();
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
            thumbnailWidth: 350,
            thumbnailHeight: 240,
            customOverlay: createOverlay(item.replace('./', '')),
            isSelected: false,
        });
    });
    return images;
}

const images = importAll(require.context('../Gallery/', false, /\.(png|jpe?g|svg)$/));

const GalleryPage = () => {
    return (
        <div className="gallery-container">
            <div className="gallery-grid">
                <Gallery
                    images={images}
                    enableImageSelection={false}
                    rowHeight={240}
                    margin={12}
                    maxRows={20}
                    showLightboxThumbnails={true}
                />
            </div>
        </div>
    );
}

export default GalleryPage;
