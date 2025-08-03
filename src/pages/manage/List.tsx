import React, { FC, useState } from "react";
import QuestionCard from "../../components/QuestionCard"
import styles from './common.module.scss'
import { useSearchParams } from "react-router-dom";
import { useTitle } from "ahooks";
import { Typography } from "antd";
import ListSearch from "../../components/ListSearch";

const rowQuestionLIst = [
    {_id: 'q1', title: '问卷1', isPublished: false, isStar: false, answerCount: 5, createAt: '3月10日 13:23'},
    {_id: 'q2', title: '问卷2', isPublished: true, isStar: true, answerCount: 3, createAt: '3月11日 13:23'},
    {_id: 'q3', title: '问卷3', isPublished: false, isStar: false, answerCount: 6, createAt: '3月12日 13:23'},
    {_id: 'q4', title: '问卷4', isPublished: true, isStar: false, answerCount: 2, createAt: '3月9日 13:23'}
]

const List: FC = () => {
    useTitle("YOYO问卷-我的问卷")
    const [searchParams] = useSearchParams()
    const [questionList, setQuestionList] = useState(rowQuestionLIst)
    const { Title } = Typography
    return (
        <>
            <div className={styles.header}>
                <div className={styles.left}>
                    <Title level={3}>我的问卷</Title>
                </div>

                <div className={styles.right}>
                    <ListSearch />
                </div>
            </div>

            <div className={styles.content}>
                {questionList.map(q => {
                    const { _id } = q
                    return <QuestionCard key={ _id } {...q} />
                })}
            </div>

            <div className={styles.footer}>
                loadMore 上划加载更多...
            </div>
        </>
    )
}

export default List