import React, {useState} from 'react';
import "./styles/ReservationsContent.css"; 

 

function LoginForm() {
    
    const [formData, setFormData] = useState({
        email: "",
        password: ""
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
        
        if (formData.email === "") {
            err.email = "* Email required!" 
        }if(formData.password === ""){
            err.password = "* Password required!"
        }else{
            let regex =   /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/
            if(!regex.test(formData.email)) {
                err.email = "Email not valid!"
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
                    <label htmlFor="email">Password</label>
                    <input
                        type="password"
                        placeholder="Enter Your Password"
                        name="password"
                        onChange={onChangeHandler}
                    />
                    <span className="non-valid">{formError.password}</span>
                </div>
                
                <button className="submit-btn" type="submit">Login</button>
            </fieldset>
        </form>
  )
}

export default LoginForm;