import React from "react";
import { Space, Typography } from "antd";
import { FormOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import styles from './Logo.module.scss'


const { Title } = Typography

const Logo = () => {
    return (
        <div>
            <Link to={'/'}>
                <Space className={styles.container}>
                    <Title>
                        <FormOutlined />
                    </Title>
                    <Title>YoYo问卷</Title>
                </Space>
            </Link>
        </div>
    )
}

export default Logo