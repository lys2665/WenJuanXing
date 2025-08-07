import React from "react";
import useLoadQuestion from "../../../hooks/useLoadQuestionData";

const Stat = () => {

    const { loading, data } = useLoadQuestion()

    return (
        <div>
            <p>Stat page</p>
            {loading ? <p>loading</p> : <p>{JSON.stringify(data)}</p>}
        </div>
    )
}

export default Stat