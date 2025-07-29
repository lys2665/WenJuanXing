import React from "react";
import { Outlet } from "react-router-dom";

const QuestionLayout = () => {
    return (
        <>
            <p>Question Layout</p>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default QuestionLayout