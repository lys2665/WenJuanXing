import { useKeyPress } from "ahooks"
import { useDispatch } from "react-redux"
import { copySelectedComponent, pasteCopiedComponent, removeSelectedComponent, selectedNextComponent, selectedPrevComponent } from "../store/ComponentsReducer"

function useBindCanvasKeyPress() {
    const dispatch = useDispatch()
    function isActiveElementValid() {
        const activeElem = document.activeElement

        if (activeElem === document.body) return true
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

    //TODO 撤销重做
}

export default useBindCanvasKeyPress