import React from "react";
import "./News.css";

function News({ title, image, url }) {
  return (
    <a href={url} target="_blank" rel="noreferrer noopener">
      <figure className="news-container">
        <img
          className="news-container-image"
          src={image}
          alt="relevant to news story"
        />
        <figcaption className="news-container-text">{title}</figcaption>
      </figure>
    </a>
  );
}

export default News;
