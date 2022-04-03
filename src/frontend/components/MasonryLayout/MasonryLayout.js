import React from "react";
import Masonry from "react-masonry-css";
import "./MasonryLayout.css";

const breakpointColumnsObj = {
  default: 4,
  1000: 3,
  860: 2,
  600: 1,
};

const MasonryLayout = ({ children }) => {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {children}
    </Masonry>
  );
};
export { MasonryLayout };
