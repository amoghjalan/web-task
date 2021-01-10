import React from "react";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";

const LazyImage = ({ src, alt }) => {
  const refPlaceholder = React.useRef();

  const removePlaceholder = () => {
    refPlaceholder.current.remove();
  };

  return (
    <div className="image">
      <div className="image-placeholder" ref={refPlaceholder} />
      <LazyLoad>
        <img
          onLoad={removePlaceholder}
          onError={removePlaceholder}
          src={src}
          alt={alt}
        />
      </LazyLoad>
    </div>
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default LazyImage;
