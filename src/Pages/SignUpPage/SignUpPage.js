import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import styled from 'styled-components'; 
import { CustomButton, Spinner } from '../../Components';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import imgCover from "../../images/loginImage.png"; 

const SignUpPage = () => { 
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        if(password !== confirmPassword) {
            setError("Password don't match") 
            return; 
        }          

        try {
            const { user } = auth.createUserWithEmailAndPassword(email, password); 
            await createUserProfileDocument(user);  
            setEmail("");
            setPassword("");
            setName("");
            setConfirmPassword("");
            setLoading(true); 
            
        } catch {
            console.log(error)
        }
        setLoading(false); 
    }

    return (
        <Wrapper> 
                <img src={imgCover} alt="cake cover" className="img" />  
            {loading ? ( 
                <Spinner />
            ) : (
                <div className="right">
                    <h1>Sign <span>up</span></h1> 
                    <form onSubmit={handleSubmit}>
                            <div className="option">
                                <label>Name</label> <br/>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>  <br />
                            </div>
                            <div className="option">
                                <label>E-mail</label> <br/>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>  <br />
                            </div>
                            <div className="option">
                                <label>Password</label><br />
                                <input type="password" value={password}  onChange={(e) => setPassword(e.target.value)}/>  <br />
                            </div>
                            <div className="option">
                                <label>Confirm your password</label><br />
                                <input type="password" value={confirmPassword}  onChange={(e) => setConfirmPassword(e.target.value)}/>  <br />
                                <span className="error">{error}</span>
                            </div>
                            <CustomButton className="signup" as="button" type="Submit">Sign up</CustomButton>  
                            <Link to="/login">I already have an account </Link>
                    </form>
            </div>
            )}
        </Wrapper>
    )
}

export default SignUpPage


const Wrapper = styled.div`
    display: flex; 

    .right {
        position: relative;
        width: 50%;
        padding: 55px 0 0 40px;

        h1 {
            margin-bottom: 60px;
        }
        .or {
            color: #959595;
            text-align: center; 
            margin: 40px 0;
            position: relative; 
            max-width: 80%;
        }
        .or::before {
            content: ""; 
            height: 1px; 
            background-color: #959595; 
            width: 45%; 
            position: absolute; 
            left: 0;
            top: 12px; 
        }
        .or::after {
            content: ""; 
            height: 1px; 
            background-color: #959595; 
            width: 45%; 
            position: absolute; 
            right: 0;
            top: 12px; 
        } 

        form  {
            max-width: 80%; 
            label {
                margin: 0 0 12px 5px; 
                font-weight: 400; 
                color: var(--primary-color); 
                font-weight: bold; 
            } 

            input {
                padding: 16px;
                width: 100%; 
                border: none; 
                outline: none; 
                box-shadow: 3px 5px 75px rgba(0, 0, 0, 0.15);
            }  

            .option {
                margin: 30px 0; 

                .error {
                    color: red; 
                    margin: 30px 5px;
                    font-size: 11px; 
                    font-weight: 600; 
                }
            } 

            .forget {
                display: flex; 
                justify-content: center; 
                margin-top: 30px; 
                font-size: 10px;
                font-weight: bold;
                color: #959595;
                cursor: pointer;
            }  

        a {
            text-align: center; 
        }

        }
    }
    

    .img {
        width: 900px; 
        height: 100vh; 
        object-fit: cover; 
    }

    .custom-btn {
        display: flex; 
        align-items: center; 
        max-width: 360px; 
        margin: 15px 0;
    }

    .logo {
        margin: 0 30px;
        width: 24px; 
        height: 24px;
    } 

    .signup {
        display: block;
        text-align: center; 
        color: #fff;
        margin-top: 58px;
        border-radius: 5px; 
        :hover {
            color: #fff;
            background-color: var(--primary-color); 
            border: none;
        }
    } 



`