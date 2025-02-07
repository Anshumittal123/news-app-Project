import React from 'react'

const NewsItem =(props)=> {
    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className='container my-3'>   
      <div className="card">
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          right: 0,
        }}>
          <span className="badge rounded-pill bg-danger Source-badge">
          {source?source:"Unknown"}</span>
       </div>
        <img src={!imageUrl?"https://static.toiimg.com/thumb/msid-107659148,width-1070,height-580,imgsize-782647,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg":imageUrl} style={{height: '155px'}} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title.length>=45?title+'...':title}</h5>
          <p className="card-text">{description.length>=88?description+'...':description+"..."}</p>
          <p className="card-text"><small className='text-muted'>By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
          <a href= {newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>
      </div>
    )
  }

  export default NewsItem
