import React from "react";
import "./sidebar.css";
import Photo from "../Photo";
import Img from "gatsby-image";

const Bio = ({ author, tagline }) => {
  const { fixed: photo } = Photo();
  return (
    <div>
      <Img className="profile-img" fixed={photo} alt="Ferry" title="7sferry" />
      <h3 className="mt-2 author-bio">{author}</h3>
      <small className="text-muted">{tagline}</small>
    </div>
  );
};

export default Bio;
