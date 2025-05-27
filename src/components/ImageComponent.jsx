import { useEffect, useState } from "react";
const ImageComponent = ({
  src,
  width,
  height,
  alt,
  className,
  placeholderImage,
}) => {
  const [currentSrc, setCurrentSrc] = useState(
    placeholderImage || `https://placehold.co/${width}x${height}?text=Loading`,
  );

  useEffect(() => {
    const img = new Image();
    if(src) {
      img.src = src;
      img.onload = () => {
        setCurrentSrc(src);
      };
      return;
    }
    setCurrentSrc(`https://placehold.co/${width}x${height}?text=No_Image`);
    return () => {
      // clean up function
      img.onload = null;
    };
  }, [src, width, height]);
  return (
    <img
      src={currentSrc}
      width={width}
      height={height}
      alt={alt}
      className={currentSrc === src ? className : `${className} blur-md`}
    />
  );
};
export default ImageComponent;
