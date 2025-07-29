import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const nav = useNavigate()
    return (
        <>
            <p>login</p>
            <div>
                <button onClick={() => nav(-1)}>返回</button>
            </div>
        </>
    )
}

export default Login