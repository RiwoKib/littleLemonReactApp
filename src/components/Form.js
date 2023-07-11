import React, {useState} from 'react';
import "./styles/ReservationsContent.css"; 



function Form() {
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        telephone: "",
        occasion: "",
        guests: "",
        date: "",
    })

    const [formError, setFormError] = useState({})

    const onChangeHandler = (event) => {
        setFormData(()=>({
            ...formData,
            [event.target.name]: event.target.value
        }))
    }

    const validateForm = () => {
        let err = {}
        if (formData.name === "") {
            err.name = "* Full name required!" 
        }
        if (formData.email === "") {
            err.email = "* Email required!" 
        }else{
            let regex =  /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/
            if(!regex.test(formData.email)) {
                err.email = "Email not valid!"
            }
        }


        if (formData.telephone === "") {
            err.telephone = "* Phone number required!" 
        }else{
            let phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{3}[-\s.]?[0-9]{3}$/
            if(!phoneRegex.test(formData.telephone)) {
                err.telephone = "Telephone number not valid!"
            }
        }


        if (formData.guests === "") {
            err.guests = "* How many guests?" 
        }
        if (formData.date === "") {
            err.date = "* Please specify date and time!" 
        }

        setFormError({...err})
        return Object.keys(err).length < 1;
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.table(formData)

        let isValid = validateForm()
        if(isValid) {
            alert("Submitted")
        }
    }


    return (
        <form onSubmit={onSubmitHandler}>
            <fieldset>
                <div className="field">
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        placeholder="Little Lemon"
                        name="name"
                        onChange={onChangeHandler}
                    />
                    <span className="non-valid">{formError.name}</span>
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        placeholder="info@littlelemon.com"
                        name="email"
                        onChange={onChangeHandler}
                    />
                    <span className="non-valid">{formError.email}</span>
                </div>
                <div className="field">
                    <label htmlFor="telephone">Telephone</label>
                    <input
                        type="tel"
                        placeholder="+(254) 700-000-000"
                        name="telephone"
                        onChange={onChangeHandler}
                    />
                    <span className="non-valid">{formError.telephone}</span>
                </div>
                <div className="guestsdate">
                    <div className="field occasion">
                        <label htmlFor="occasion">Occasion (optional)</label>
                        <div className="options">
                            <select name="occasion" onChange={onChangeHandler}>
                                <option value="select">Select occasion</option>
                                <option value="birthday">Birthday</option>
                                <option value="engagement">Engagement</option>
                                <option value="anniversary">Anniversary</option>
                                <option value="anniversary">Graduation</option>
                            </select>
                        </div>
                    </div> 
                    <div className="field guest">
                        <label htmlFor="guests">Guests</label>
                        <input
                            type="number"
                            placeholder="1"
                            min='1'
                            name="guests"
                            onChange={onChangeHandler}
                        /> 
                        <span className="non-valid">{formError.guests}</span>
                    </div>
                </div>
               
                
                <div className="field">
                        <label htmlFor="date">Date & Time</label>
                        <input 
                            type="datetime-local" 
                            name="date"
                            onChange={onChangeHandler}
                        />
                        <span className="non-valid">{formError.date}</span>
                    </div>
                <button className="reserve-btn" type="submit">Reserve</button>
            </fieldset>
        </form>
  )
}

export default Form