import React from "react";

const NewsItem = (props) => {
  let { title, description, imgUrl, newsUrl, author, date, source } = props;
  return (
    <div>
      <div className="card my-2">
        <div className="d-flex justify-content-end">
          <span className="small position-absolute badge bg-danger rounded-pill">
            {source}
          </span>
        </div>
        <img className="card-img-top" src={imgUrl} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small>
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
