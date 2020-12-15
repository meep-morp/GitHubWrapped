import Axios from 'axios';
import React, { useEffect } from 'react';
import styled from "styled-components";

const Login = props => {

    useEffect(() => {
        Axios.get(`https://github.com/login/oauth/authorize?client_id=068fb816da1baeaace3e&allow_signup=false`).then(res => {
            localStorage.setItem('token', res.data.access_token)
        })
    }, [])

    return (
        <LoginContainer>
            <span role="button" className="login-button">
                <img src="https://www.flaticon.com/svg/static/icons/svg/733/733553.svg" alt="" />
                <p>Sign in with GitHub</p>
            </span>
        </LoginContainer>
    )
}

export default Login;


const LoginContainer = styled.div`
    font-family: sans-serif;

    .login-button {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 200px;
        background-color: black;
        color: white;
        font-weight: bold;
        padding: 10px;
        border-radius: 5px;

        img {
            width: 40px;
        }
    }

`