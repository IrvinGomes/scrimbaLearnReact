import { useId, useState } from "react"

const SignupForm:React.FC<any> = ()=>{
    const id = useId();
    const [signupData, setSignupData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        newsLetter: false
    })
    
    const handleSubmit=(event:any)=>{
        event.preventDefault()
        if(signupData.password===signupData.confirmPassword){
            console.log(signupData)
            signupData.newsLetter && console.log("Thanks for signing up for our newsletter!")
        }else{
            console.log("Password do not match!")
            return
        }
    }

    const handleChange=(event:any)=>{
        const {name, value, type, checked} = event.target;
        setSignupData((prevSignupData)=>({...prevSignupData, [name]: type === "checkbox" ? checked : value}))
    }

    return (
        <div className="signupWrapper">
            <h2>SignUp</h2>
            <form onSubmit={handleSubmit} className="form">
                <label htmlFor={id+"email"}>Email</label>
                <input 
                    type="email" 
                    name="email" 
                    id={id+"email"} 
                    className="form-input" 
                    onChange={handleChange} 
                    required
                />
                <label htmlFor={id+"password"}>Password</label>
                <input 
                    type="password" 
                    name="password" 
                    id={id+"password"} 
                    className="form-input" 
                    onChange={handleChange} 
                    required
                />
                <label htmlFor={id+"confirmPassword"}>Confirm Password</label>
                <input 
                    type="password" 
                    name="confirmPassword" 
                    id={id+"confirmPassword"} 
                    className={"form-input"} 
                    onChange={handleChange} 
                    required
                />
                {
                    signupData.password!==signupData.confirmPassword && 
                    <label htmlFor={id+"confirmPassword"} className="input-error-label">password does't match</label>
                }
                <div>
                    <input 
                        type="checkbox" 
                        name="newsLetter" 
                        id={id+"newsLetter"} 
                        onChange={handleChange} 
                        checked={signupData.newsLetter}
                    />
                    <label htmlFor={id+"newsLetter"}> I want to join newsletter</label>
                </div>
                <button className="form-input-button">Sign Up</button>
            </form>
        </div>
    )
}

export default SignupForm