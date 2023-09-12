import React from "react";

const NewsItem = (props)=> {
  
 
    let { title, description, imageurl, newsurl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card">
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{zIndex: '1', left: '90%'}}>
              {source}</span>
          <img src={!imageurl?"https://i0.wp.com/d2dybsqaihwlah.cloudfront.net/wp-content/uploads/2017/03/18071917/compression.jpg?resize=1000%2C667&ssl=1": imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              {title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown Source":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} className="btn btn-sm btn-dark" target="_blank">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }

export default NewsItem;
