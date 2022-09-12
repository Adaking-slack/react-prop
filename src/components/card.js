import React from "react";
import { FaMapMarker } from "react-icons/fa";

export default function Card(prop) {
    return (
        <>
            <div className="card">

                <div className="card-image">
                <img src={`${prop.item.imageUrl}`} alt="Japan" className="card-img" />
                </div>

                

                <div className="card-location">
                    <FaMapMarker />

                <h4 >{prop.item.location}</h4>
                
                <a href={`${prop.item.googleMapsUrl}`} className="map"> view on goggle map</a>
                </div>

                <div className="card-details">
                <h2 className="location">{prop.item.title}</h2>
                <h3>{prop.item.startDate} - {prop.item.endDate}</h3>
                <p>{prop.item.description}</p>
              
               
               </div>
            </div>
            
            
        </>

    )
}
