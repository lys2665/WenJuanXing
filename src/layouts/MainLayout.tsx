import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

import styles from "./MainLayout.module.scss"
import Logo from "../components/Logo"
import UserInfo from "../components/UserInfo";

const { Header, Content, Footer } = Layout
const MainLayout = () => {
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
                    <Outlet />
                </Content>
            </Layout>
            <Footer className={styles.footer}>YoYo问卷 @2025 - present Created by liuyushuang</Footer>
        </Layout>
    )
}

export default MainLayout