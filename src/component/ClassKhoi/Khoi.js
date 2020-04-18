import React, { Component } from 'react';

function Sohai (props)
{
  return (
    <div className="col-6">
        <div className="card">
          <img className="card-img-top" src="https://via.placeholder.com/150x100" alt=""/>
          <div className="card-body">
            <h1 className="card-title">{props.tieude} </h1>
            <p className="card-text">{props.text}</p>            
          </div>
        </div>
    </div>        
  )
}


