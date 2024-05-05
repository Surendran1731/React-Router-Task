import React from 'react'
export function Card({details}) {    
  return (
    <>
 
      <div className="card" style={{width:"420px",padding:"10px",margin:"30px"}}>
        <img className="card-img-top" src={details.img} alt="Card image" />
        <div className="card-body">
          <h4 className="card-title">{details.title}</h4>
          <p className="card-text">{details.description}</p>
          <p className="card-text">{details.content}<br />{details.date}</p>
          <a href="/" className="card-text text-success">Read more</a>
        </div>
      </div>
    
    </>

  )
}

export default Card
