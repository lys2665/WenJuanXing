import React from "react";
import useLoadQuestion from "../../../hooks/useLoadQuestionData";

import styles from './index.module.scss'
import EditCanvas from "./EditCanvas";
import { useDispatch } from "react-redux";
import { changeSelectedId } from "../../../store/ComponentsReducer";

const Edit = () => {
    const dispatch = useDispatch()

    const { loading } = useLoadQuestion()

    function clearSelectedId() {
        dispatch(changeSelectedId(''))
    }

    return (
        <div className={styles.container}>
            <div style={{ backgroundColor: '#fff', height: '40px' }}>Header</div>
            <div className={styles['content-wrapper']}>
                <div className={styles.content}>
                    <div className={styles.left}>Left</div>
                    <div className={styles.main} onClick={clearSelectedId}>
                        <div className={styles['canvas-wrapper']}>
                            <div style={{ height: '900px' }}><EditCanvas  loading={loading}/></div>
                        </div>
                    </div>
                    <div className={styles.right}>Right</div>
                </div>
            </div>
        </div>
    )
}

export default Edit