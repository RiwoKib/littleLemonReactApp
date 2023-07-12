import React, {useState} from 'react';
import "./styles/ReservationsContent.css"; 

 

function SignUpForm() {
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        telephone: "",
        password: "",
        cpasswd: ""
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
        }
        if (formData.password === "") {
            err.password = "* Password required!" 
        }
        if (formData.cpasswd === "") {
            err.cpasswd = "* Confirm Password!" 
        }if (formData.password !== formData.cpasswd) {
            err.cpasswd = "* Password Does Not Match!" 
        }else{
            let regex =   /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/
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
                <div className="field">
                    <label htmlFor="email">Password</label>
                    <input
                        type="password"
                        placeholder="Enter Your Password"
                        name="password"
                        onChange={onChangeHandler}
                    />
                    <span className="non-valid">{formError.password}</span>
                </div>
                <div className="field">
                    <label htmlFor="email">Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Confirm Your Password"
                        name="cpasswd"
                        onChange={onChangeHandler}
                    />
                    <span className="non-valid">{formError.cpasswd}</span>
                </div>
                <button className="signup-btn submit-btn" type="submit">Join Us</button>
            </fieldset>
        </form>
  )
}

export default SignUpForm