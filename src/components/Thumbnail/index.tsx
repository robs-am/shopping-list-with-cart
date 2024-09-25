
import React from 'react';
import classes from './thumbnail.module.scss'; 
interface ThumbnailProps {
  src: string;
  alt: string;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={classes.thumbnail}
    />
  );
};

export default Thumbnail;
