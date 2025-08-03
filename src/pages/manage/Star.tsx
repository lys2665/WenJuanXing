import React, { useState } from "react";
import { useTitle } from "ahooks";
import { Empty, Typography } from "antd";

import styles from"./common.module.scss"
import QuestionCard from "../../components/QuestionCard";
import ListSearch from "../../components/ListSearch";

const rawQuestionList = [
    {_id: 'q1', title: '问卷1', isPublished: false, isStar: true, answerCount: 5, createAt: '3月10日 13:23'},
    {_id: 'q2', title: '问卷2', isPublished: true, isStar: true, answerCount: 3, createAt: '3月11日 13:23'},
    {_id: 'q3', title: '问卷3', isPublished: false, isStar: true, answerCount: 6, createAt: '3月12日 13:23'},
]

const Star = () => {
    useTitle('YoYo问卷 - 星标问卷')
    const [questionList, setQuestionList] = useState(rawQuestionList)
    const { Title } = Typography
    return (
        <>
            <div className={styles.header}>
                <div className={styles.left}>
                    <Title level={3}>星标问卷</Title>
                </div>

                <div className={styles.right}>
                    <ListSearch />
                </div>
            </div>

            <div className={styles.content}>
                {questionList.length === 0 && <Empty description="暂无数据" />}
                {questionList.length > 0 && questionList.map(q => {
                    const { _id } = q
                    return <QuestionCard key={ _id } {...q} />
                })}
            </div>

            <div className={styles.footer}>分页</div>

        </>
    )
}

export default Star