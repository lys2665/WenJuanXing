import React from "react";
import useLoadQuestion from "../../../hooks/useLoadQuestionData";

const Edit = () => {

    const { loading, data } = useLoadQuestion()

    return (
        <div>
            <p>Edit page</p>
            {loading ? <p>loading</p> : <p>{JSON.stringify(data)}</p>}
        </div>
    )
}

export default Edit