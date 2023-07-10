import React from 'react'
import "../components/styles/SpecialsCard.css"
import { MdDeliveryDining } from "react-icons/md"
import { NavLink } from 'react-router-dom'

const SpecialsCard = ({specialItems}) => {
    

     return(
        <div className='special-card'>
            {specialItems.map((specialItem) =>{
                const {image, title,price, description, order} = specialItem;
               return(
                <article className='special-card-container'>
                    <div className="image-container">
                        <img src={image} alt="Special dessert" />
                    </div>
                    <div className="special-card-text">
                        <div className="special-card-title">
                            <h3>{title}</h3>
                            <h3 className="price-tag">{price}</h3>
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

// <NavLink to="#">
//                             <h4>
//                                 {order}
//                                 { <MdDeliveryDining size={30} style={{ color: "#333333", marginLeft: "10px",}} /> }
//                             </h4>
//                         </NavLink>