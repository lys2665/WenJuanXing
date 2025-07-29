import { useTitle } from "ahooks";
import { Typography, Empty, Table, Tag, Space, Button, Modal } from "antd";
import React, { useState } from "react";


import styles from './common.module.scss'
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { Title } = Typography
const { confirm } = Modal

const rawQuestionList = [
    {_id: 'q1', title: '问卷1', isPublished: false, isStar: true, answerCount: 5, createAt: '3月10日 13:23'},
    {_id: 'q2', title: '问卷2', isPublished: true, isStar: false, answerCount: 3, createAt: '3月11日 13:23'},
    {_id: 'q3', title: '问卷3', isPublished: false, isStar: false, answerCount: 6, createAt: '3月12日 13:23'},
]
const Trash = () => {
    useTitle('YoYo问卷 - 回收站')
    const [questionList, setQustionList] = useState(rawQuestionList)


    const [seledtedIds, setSelectedIds] = useState<string[]>([])

    function del() {
        confirm({
            title: '确认删除问卷',
            icon: <ExclamationCircleOutlined />,
            content:'删除以后不可以找回',
            onOk: () => {
                alert(`删除 ${JSON.stringify(seledtedIds)}`)
            }
        })
    }

    const tableColums = [
        {
            title: '标题',
            dataIndex: 'title'
        }, 
        {
            title: '是否发布',
            dataIndex: 'isPublished',
            render: (isPublished: boolean) => {
                return isPublished ? <Tag color="processing">已发布</Tag> : <Tag>未发布</Tag>
            }
        },
        {
            title: '答卷数量',
            dataIndex: 'answerCount'
        },
        {
            title: '创建时间',
            dataIndex: 'createAt'
        }
    ]

    const TableElem = (
        <>
            <div style={{marginBottom: '16px'}}>
                <Space>
                    <Button type="primary" disabled={seledtedIds.length === 0}>恢复</Button>
                    <Button danger disabled={seledtedIds.length === 0} onClick={del}>删除</Button>
                </Space>
            </div>
            <Table 
                dataSource={questionList} 
                columns={tableColums} 
                pagination={false} 
                rowKey={(q) => q._id}
                rowSelection={{
                    type:'checkbox',
                    onChange: (selectdRowKeys) => {
                        setSelectedIds(selectdRowKeys as string[])
                    }
                }} />
        </>

    )
    return (
        <>
            <div className={styles.header}>
                <div className={styles.left}>
                    <Title level={3}>回收站</Title>
                </div>

                <div className={styles.right}>
                    (搜索)
                </div>
            </div>


             <div className={styles.content}>
                {questionList.length === 0 && <Empty description="暂无数据" />}
                {questionList.length > 0 && TableElem}
            </div>

        </>
    )
}

export default Trash