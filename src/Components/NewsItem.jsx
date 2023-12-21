import React from 'react';
import { Card, Badge } from 'react-bootstrap';

const NewsItem = (props) => {
  const { title, description, imageUrl, newsUrl, author, date, source } = props;

  return (
    <div>
      <Card>
       
         
        
        <Card.Img
          src={imageUrl ? imageUrl : "https://www.hindustantimes.com/ht-img/img/2023/12/17/1600x900/Screenshot_2023-12-17_194005_1702822216079_1702822224615.jfif"}
          alt="..."
          variant='top'
        />
        <Card.Body>
          <Card.Title>{title}
          <Badge variant="info" className="rounded-pill" style={{margin: '6px'}}>
            {source}
          </Badge>
          </Card.Title>
          <Card.Text>{description}...</Card.Text>
          <Card.Text>
            <small className='text-muted'>By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small>
          </Card.Text>
          <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
            Read More
          </a>
        </Card.Body>
      </Card>
    </div>
  );
}

export default NewsItem;
