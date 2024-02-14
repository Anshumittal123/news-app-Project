import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className='container my-3'>   
      <div className="card" style={{width: '18rem'}}>
        <img src={!imageUrl?"https://static.toiimg.com/thumb/msid-107659148,width-1070,height-580,imgsize-782647,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg":imageUrl} style={{height: '155px'}} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title.length>=45?title+'...':title}</h5>
          <p className="card-text">{description.length>=88?description+'...':description+"..."}</p>
          <a href= {newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>
      </div>
    )
  }
}
