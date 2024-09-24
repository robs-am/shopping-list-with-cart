// Thumbnail.tsx
import React from 'react';
import classes from './thumbnail.module.scss'; // Importe o arquivo de estilos

interface ThumbnailProps {
  src: string;
  alt: string;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={classes.thumbnail}// Classe CSS para estilizar
    />
  );
};

export default Thumbnail;
