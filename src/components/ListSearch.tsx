import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { Input } from "antd";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { LIST_SEARCH_PARAM_KEY } from "../constant";


const { Search } = Input
const ListSearch: FC = () => {
    const nav = useNavigate()
    const { pathname } = useLocation()
    const [value, setValue] = useState('')
    const [searchParams] = useSearchParams()

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value)
    }

    // 获取路由上的参数，放在搜索框
    useEffect(() => {
        const curVal = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
        setValue(curVal)
    }, [searchParams])

    function handleSearch(value: string) {
        nav({
            pathname,
            search: `${LIST_SEARCH_PARAM_KEY}=${value}`
        })
    }
    return (
        <Search 
            placeholder="输入关键字" 
            value={value} onChange={handleChange} 
            onSearch={handleSearch} 
            size="large" 
            allowClear 
            style={{width: '200px'}}/>
    )
}

export default ListSearch