import { useKeyPress } from "ahooks"
import { useDispatch } from "react-redux"
import { copySelectedComponent, pasteCopiedComponent, removeSelectedComponent, selectedNextComponent, selectedPrevComponent } from "../store/ComponentsReducer"
import { ActionCreators } from "redux-undo"

function useBindCanvasKeyPress() {
    const dispatch = useDispatch()
    function isActiveElementValid() {
        const activeElem = document.activeElement
        // 没有增加 dnd-kit 之前
        // if (activeElem === document.body) return true

        // 增加 dnd-kit 之后
        if (activeElem === document.body) return true
        if (activeElem?.matches('div[role="button"]')) return true
        return false
    }
    // 删除组件
    useKeyPress(['backspace', 'delete'], () => {
        if (!isActiveElementValid()) return
        dispatch(removeSelectedComponent())
    })

    // 复制组件
    useKeyPress(['ctrl.c', 'meta.c'], () => {
        if (!isActiveElementValid()) return
        dispatch(copySelectedComponent())
    })

    // 粘贴组件
    useKeyPress(['ctrl.v', 'meta.v'], () => {
        if (!isActiveElementValid()) return
        dispatch(pasteCopiedComponent())
    })

    // 选中上一个
    useKeyPress(['uparrow'], () => {
        if (!isActiveElementValid()) return
        dispatch(selectedPrevComponent())
    })

    // 选中下一个
    useKeyPress(['downarrow'], () => {
        if (!isActiveElementValid()) return
        dispatch(selectedNextComponent())
    })

    // 撤销
    useKeyPress(['ctrl.z', 'meta.z'], () => {
        if (!isActiveElementValid()) return
        dispatch(ActionCreators.undo())
    }, {
        exactMatch: true // 严格匹配
    })

    // 重做
    useKeyPress(['ctrl.shift.z', 'meta.shift.z'], () => {
        if (!isActiveElementValid()) return
        dispatch(ActionCreators.redo())
    }, {
        exactMatch: true // 严格匹配
    })
}

export default useBindCanvasKeyPress