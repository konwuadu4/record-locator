import React from "react"

export default function Card(props){
    return(
        <div className="items">
            <section className="list-items">
                <img src={props.item.imageUrl}/>
                <div className="card">
                    <img src="../images/location.png"/>
                    <span className="item-location">{props.item.location.toUpperCase()}</span>
                    <a href={props.item.googleMapsUrl}><span> View on google maps </span></a>
                    <h1 className="card-title"> {props.item.title}</h1>
                    <p className="card-dates">{props.item.startDate} - {props.item.endDate}</p>
                    <p className="card-descrip"> {props.item.description}</p>
                </div>
            </section>
        </div>
    )
}