import React, { useContext, useState } from "react";
import styled from "styled-components";
import { CustomButton } from "../../Components";
import imgCover from "../../images/loginImage.png";
import { ReactComponent as Google } from "../../images/googleIcon.svg";
import { ReactComponent as Facebook } from "../../images/facebook.svg";
import {
  signInWithFacebook,
  signInWithGoogle,
} from "../../firebase/firebase.utils";
import { Link, withRouter } from "react-router-dom";

const LoginPage = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <img src={imgCover} alt="cake cover" className="img" />
      <div className="right">
        <h1>
          Log <span>in</span>
        </h1>
        <CustomButton
          isgoogle="true"
          className="custom-btn"
          onClick={signInWithGoogle}
        >
          <Google className="logo" />
          Use Google Account
        </CustomButton>
        <CustomButton
          isfacebook="true"
          className="custom-btn"
          onClick={signInWithFacebook}
        >
          <Facebook className="logo" />
          Use Facebook Account
        </CustomButton>
        <div className="or">or</div>
        <form onSubmit={handleSubmit}>
          <div className="email">
            <label>E-mail</label> <br />
            <input
              type="email"
              value={email}
              onchange={(e) => setEmail(e.target.value)}
            />{" "}
            <br />
          </div>
          <div className="password">
            <label>Password</label>
            <br />
            <input
              type="password"
              value={password}
              onchange={(e) => setPassword(e.target.value)}
            />{" "}
            <br />
          </div>
          <CustomButton className="login">Login</CustomButton>
          <span className="forget">Forget password?</span>
        </form>
        <div className="signUp">
          <div className="signUp-left">
            <h2>Don't have an account ? </h2>
            <Link onClick={() => history.push("/signup")}>Sign Up</Link>
          </div>
          <h2>Cake</h2>
        </div>
      </div>
    </Wrapper>
  );
};

export default withRouter(LoginPage);

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

    .signUp {
      width: 80%;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .signUp-left {
        display: flex;
        align-items: center;
      }
    }

    form {
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

      .password {
        margin: 30px 0;
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

  .login {
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
`;
