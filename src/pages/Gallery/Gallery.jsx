import React, { useEffect, useState } from 'react';
import { ImageList, ImageListItem, ImageListItemBar, useMediaQuery } from '@material-ui/core';

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([])
  const tablet = useMediaQuery('(min-width:481px)');
  const desktop = useMediaQuery('(min-width:769px)');

  const fetchGalleryData = async () => {
    const response = await fetch('./data.json');
    const data = await response.json();
    setGalleryItems(data);
  }

  useEffect(() => {
    try {
      fetchGalleryData()
    } catch (error) {
      // console.log(error.message);
    }
  }, [fetchGalleryData]);

  let numberOfCoulmns = 1;

  if (tablet) {
    numberOfCoulmns = 2;
  }

  if (desktop) {
    numberOfCoulmns = 4;
  }

  return (
    <ImageList variant='masonry' cols={numberOfCoulmns} gap={20}>
      {galleryItems.map((galleryItem) => (
        <ImageListItem key={galleryItem.name}>
          <img src={galleryItem.images.thumbnail} loading='lazy' />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default Gallery;
