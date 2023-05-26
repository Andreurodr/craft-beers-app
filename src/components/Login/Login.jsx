import { useState } from "react"
import { useLocation } from "react-router-dom"

const initial_state = {
    email: "",
    password: ""
}

const Login = ({loginUser, loginError}) => {
    const location = useLocation()
    const {state} = location

    const [formData, setFormData] = useState(initial_state)

    const changeInput = (ev) => {
        const {name, value} = ev.target
        setFormData({...formData, [name]: value}) 
    }

    const submitForm = (ev) => {
        ev.preventDefault();
        loginUser(formData, state ? state.prevRoute : null)
        setFormData(initial_state)

    }

    return(<>
        <h1>LogIn</h1>
        <form className="login_form" onSubmit={submitForm}>
            <label htmlFor="email">Email
                <input type="email" name="email" id="email" onChange={changeInput} value={formData.email}></input>
            </label>
            <label htmlFor="pass">Contraseña
                <input type="password" name="password" id="pass" onChange={changeInput} value={formData.password}></input>
            </label>
            <div>
                <button className="login_button" type="submit">Log In</button>
            </div>
            {loginError ? <div style={{color: "red"}}>{loginError}</div> : null}
        </form>
        </>
    )
} 

export default Login