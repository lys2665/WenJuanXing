import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_PATHNAME } from "../router";
import { UserOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import { removeToken } from "../utils/user-token";
import useGetUserInfo from "../hooks/useGetUserInfo";
import { useDispatch } from "react-redux";
import { logoutReducer } from "../store/userReducer";

const UserInfo = () => {
    const nav = useNavigate()
    const dispatch = useDispatch()

    // const { data } = useRequest(getUserInfoService)
    // const { username, nickname } = data || {}

    const { username, nickname } = useGetUserInfo()

    function logout() {
        dispatch(logoutReducer())  // 清空 redux user 数据
        removeToken()
        message.success('退出成功')
        nav(LOGIN_PATHNAME)
    }

    const userInfo = (
        <>
            <span style={{ color: '#e8e8e8' }}>
                <UserOutlined />
                {nickname}
            </span>
            <Button type="link" onClick={logout}>退出</Button>
        </>
    )

    const Login = (
        <Link to={LOGIN_PATHNAME}>登录</Link>
    )

    return (
        <div>
            {username ? userInfo : Login}
        </div>
    )
}

export default UserInfo