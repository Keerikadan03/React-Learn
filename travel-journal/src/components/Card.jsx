import React from "react";

export default function Card(props){
    return(
        <div className="card-container">
             <img src={props.imageUrl} alt="" className="card-image" height="200px"/>
            <div className="card-content">
                <div className="card-location">
                    <img src="/loc-pin.png" alt="" className="card-loc-image" width="12px" />
                    <span className="card-country">{props.location}</span>
                    <span className="card-loc-image"><a href={props.googleMapsUrl} className="gray">View on Google Maps</a></span>
                 </div>
                 <h3 className="card-title bold">{props.title}</h3>
                 <div className="card-period bold">{`${props.startDate}-${props.endDate}`}</div>
                 <div className="card-description">{props.description}</div>
            </div>
        </div>
    )
}