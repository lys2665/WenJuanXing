import React, { FC, useState } from "react";
import styles from './QuestionCard.module.scss'
import { Button, Divider, message, Modal, Popconfirm, Space, Tag } from "antd";
import { CopyOutlined, DeleteOutlined, EditOutlined, ExclamationCircleOutlined, LineChartOutlined, StarOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useRequest } from "ahooks";
import { duplicateQuestionService, updateQuestionService } from "../services/question";

type PropsType = {
    _id: string,
    title: string,
    isStar: boolean,
    isPublished: boolean,
    answerCount: number,
    createAt: string
}

const QuestionCard: FC<PropsType> = (props: PropsType) => {
    const nav = useNavigate()
    const { _id, title, createAt, isPublished, isStar, answerCount } = props

    // 修改标星
    const [isStarState, setIsStarState] = useState(isStar)

    const {loading: changeStartLoading, run: changeStar} = useRequest(async () => {
        await updateQuestionService(_id, {isStar: !isStarState})
    }, {
        manual: true,
        onSuccess() {
            setIsStarState(!isStarState)
            message.success('已更新')
        }
    })

    const { confirm } = Modal

    const { loading: duplicateLoading, run: duplicate } = useRequest(async () => {
        const data = await duplicateQuestionService(_id)
        return data
    }, {
        manual: true,
        onSuccess(result) {
            message.success('复制成功')
            nav(`/question/edit/${result.id}`) //跳转到编辑页面
        }
    })

    // 删除
    const [isDeletedState, setIsDeletedState] = useState(false)
    const {loading: deletedLoading, run: deleteQuestion} = useRequest(async () => {
        await updateQuestionService(_id, {isDeleted: true})
    }, {
        manual: true,
        onSuccess() {
            message.success('删除成功')
            setIsDeletedState(true)
        }
    })

    const del = function() {
        confirm ({
            title: "确定删除该问卷？",
            icon: <ExclamationCircleOutlined />,
            onOk: deleteQuestion
        })
    }


    // 已经删除的问卷不要再渲染卡片
    if (isDeletedState) return null

    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>
                    <div className={styles.left}>
                        <Link to={isPublished ? `/question/stat/${_id}` : `/question/edit/${_id}`}>
                            <Space>
                                {isStarState && <StarOutlined style={{color: 'red'}} />}
                                {title}
                            </Space>
                        </Link>                    
                    </div>
                    <div className={styles.right}>
                        <Space>
                            {isPublished ? <Tag color="processing">已发布</Tag> : <Tag>未发布</Tag>}
                            <span>答卷：{answerCount}</span>
                            <span>{createAt}</span>
                        </Space>
                        
                    </div>
                </div>
                <Divider style={{margin: '12px'}}/>
                <div className={styles['button-container']}>
                    <div className={styles.left}>
                        <Space>
                            <Button icon={<EditOutlined />} type="text" size="small" onClick={() => nav(`/question/edit/${_id}`)}>编辑问卷</Button>
                            <Button icon={<LineChartOutlined />} type="text" size="small" onClick={() => nav(`/question/stat/${_id}`)} disabled={!isPublished}>数据统计</Button>
                        </Space>
                    </div>
                    <div className={styles.right}>
                        <span>
                            <Button icon={<StarOutlined />} type="text" size="small" onClick={changeStar} disabled={changeStartLoading}>{isStarState ? '取消标星' : '标星'}</Button>
                            <Popconfirm title="确定复制该问卷？" okText="确定" cancelText="取消"  onConfirm={duplicate}>
                                <Button icon={<CopyOutlined />} type="text" size="small" disabled={duplicateLoading}>复制</Button>
                            </Popconfirm>
                            <Button icon={<DeleteOutlined />} type="text" size="small" onClick={() => del()} disabled={deletedLoading}>删除</Button>
                        </span>
                    </div>
                </div>

            </div>

            <div>

            </div>
        </>
    )
}

export default QuestionCard