import React from 'react'
import "../components/styles/Card.css"
import { MdDeliveryDining } from "react-icons/md"
import { NavLink } from 'react-router-dom'

const SpecialsCard = ({specialItems}) => {
    

     return(
        <div className='card'>
            {specialItems.map((specialItem) =>{
                const {id, image, title,price, description, order} = specialItem;
               return(
                <article key={id} className='card-container'>
                    <div className="image-container">
                        <img src={image} alt={title} />
                    </div>
                    <div className="card-text">
                        <div>
                            <h3>{title} <span className="price-tag">{price}</span></h3>
                            
                        </div>
                        <p>{description}</p>
                        <NavLink to="#">
                            <h4>
                                {order}
                                { <MdDeliveryDining size={30} style={{ color: "#333333", marginLeft: "10px",}} /> }
                            </h4>
                        </NavLink>
                    </div>
               </article>
               )
            })}
       </div>
     )
}

export default SpecialsCard
