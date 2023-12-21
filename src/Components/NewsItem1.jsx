import React from 'react'
const NewsItem =(props)=> {
  
    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
  <div>
    <div className="card">
      <div style={{
      display: 'flex',
      justifyContent: 'flex-end',
      position: 'absolute',
      right: '0',
      fontSize: '0.95em',
       }
    }>
    <span className=" badge rounded-pill bg-info " >
    {source}
  </span>
  </div>
      <img src={imageUrl?imageUrl: "https://www.hindustantimes.com/ht-img/img/2023/12/17/1600x900/Screenshot_2023-12-17_194005_1702822216079_1702822224615.jfif"} className="card-img-top" alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}...</p>
        <p className='card-text'><small className='text-mutes'>By {author? author: "Unknown"} on {new Date(date).toGMTString()}</small></p>
        <a href={newsUrl} target="_blank" className="btn btn-dark">Read More</a>
      </div>
    </div>
    </div>
    )
  }

export default NewsItem