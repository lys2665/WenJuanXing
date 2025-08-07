import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import QuestionCard from "../../components/QuestionCard"
import styles from './common.module.scss'
import { useSearchParams } from "react-router-dom";
import { useDebounceFn, useRequest, useTitle } from "ahooks";
import { Empty, Spin, Typography } from "antd";
import ListSearch from "../../components/ListSearch";
import { getQuestionListService } from "../../services/question";
import { LIST_PAGE_SIZE, LIST_SEARCH_PARAM_KEY } from "../../constant";

const { Title } = Typography

const List: FC = () => {
    useTitle("YOYO问卷-我的问卷")
    
    const [started, setStarted] = useState(false) //是否已经开始加载（防抖，有延迟时间）
    const [page, setPage] = useState(1)
    const [list, setList] = useState([]) //全部的列表数据，上划加载更多，累计的
    const [total, setTotal] = useState(0)
    const [searchParams] = useSearchParams()

    const haveMoreData = total > list.length

    const containerRef = useRef<HTMLDivElement>(null)

    const keyword = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''

    useEffect(() => {
        setStarted(false)
        setPage(1)
        setList([])
        setTotal(0)
    }, [keyword])

    // 真正加载
    const { run: load, loading} = useRequest(async () => {
        const data = await getQuestionListService({
            page,
            pageSize: LIST_PAGE_SIZE,
            keyword
        })
        return data
    }, {
        manual: true,
        onSuccess(result) {
            const { list: l = [], total = 0 } = result
            setList(list.concat(l)) // 累计
            setTotal(total)
            setPage(page + 1)
        }
    })


    // 防抖-触发加载
    const { run: tryLoadMore } = useDebounceFn(() => {
        const elem = containerRef.current
        if (elem === null)  return
        const domRect = elem.getBoundingClientRect()
        if (domRect === null) return
        const { bottom } = domRect
        if (bottom <= document.body.clientHeight) {
            load()
            setStarted(true)
        } 
    }, {
        wait: 1000
    })

    // 1.当页面加载，后者url参数（keyword）变化时，触发加载
    useEffect (() => {
        tryLoadMore()
    }, [searchParams])

    // 2.当页面滚动时，尝试出发加载
    useEffect(() => {
        if (haveMoreData) {
        window.addEventListener('scroll', tryLoadMore)
        }

        return () => {
            window.removeEventListener('scroll', tryLoadMore) //解绑事件
        }
    }, [searchParams, haveMoreData])

    const loadMoreContentElem = useMemo(() => {
        if (!started || loading) return <Spin />
        if (total === 0) return <Empty description='暂无数据'/>
        if (!haveMoreData) return <span>没有更多了...</span>
        return <span>开始加载下一页</span>
    }, [started, loading, total, haveMoreData])

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
                {list.length > 0 &&
                    list.map((q: any) => {
                        const { _id } = q
                        return <QuestionCard key={ _id } {...q} />
                    })}
            </div>

            <div className={styles.footer}>
                <div ref={containerRef}>
                    {loadMoreContentElem}
                </div>
            </div>
        </>
    )
}

export default List