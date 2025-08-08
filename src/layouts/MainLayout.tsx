import React from "react";
import { Outlet } from "react-router-dom";
import { Layout, Spin } from "antd";

import styles from "./MainLayout.module.scss"
import Logo from "../components/Logo"
import UserInfo from "../components/UserInfo";
import useLoadUserData from "../hooks/useLoadUserData";
import useNavPage from '../hooks/useNavPage'

const { Header, Content, Footer } = Layout
const MainLayout = () => {
    const { waitingUserData } = useLoadUserData()
    useNavPage(waitingUserData)
    return (
        <Layout>
            <Header className={styles.header}>
                <div className={styles.left}>
                    <Logo />
                </div>
                <div className={styles.right}>
                    <UserInfo />
                </div>
            </Header>
            <Layout className={styles.main}>
                <Content>
                    { waitingUserData ? <div style={{ textAlign: 'center', marginTop: '60px' }}><Spin /></div> : <Outlet />}
                </Content>
            </Layout>
            <Footer className={styles.footer}>YoYo问卷 @2025 - present Created by liuyushuang</Footer>
        </Layout>
    )
}

export default MainLayout