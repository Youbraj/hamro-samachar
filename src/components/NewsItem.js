import React from 'react'

const NewsItem =(props)=> {
 
    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className='my-4'>
        <div className="card">
          <div>
            <span className="badge rounded-pill bg-danger" style={{display:'flex', justifyContent: 'flex-end', position:'absolute', right:'0'}}>
                {source}
            </span>
          </div>
  <img src={!imageUrl?"https://imgs.search.brave.com/LW3gcvQ7O435Kfv1RxyhnRRMcb7_N8pkwadPKm4BvzE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb3Vp/c3ZpbGxlLmVkdS9o/aXN0b3J5L2ltYWdl/cy9ub2ltYWdlLmpw/Zy9pbWFnZV9wcmV2/aWV3":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
        <h5 className="card-title">{title} 
      </h5>
    <p className="card-text">{description}</p>
    <p className="card-text text-danger"><small className="text-muted">By {author?author:"unknown author"} on {new Date(date).toGMTString()}</small></p>
    <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  
}

export default NewsItem
