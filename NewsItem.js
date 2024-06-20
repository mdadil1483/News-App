import React from 'react'

 const NewsItem=(props)=>  {
 
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
          }
          }>
            <span className="badge rounded-pill bg-danger" >{source} </span>
          </div >
          <img src={!imageUrl ? "https://s.yimg.com/ny/api/res/1.2/1boFug3itQsZ3DXw0cy_8g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzY-/https://s.yimg.com/os/creatr-uploaded-images/2024-05/50f10300-0984-11ef-9efd-82de402695c0" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className='card-title'>{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
 
}
export default  NewsItem 
