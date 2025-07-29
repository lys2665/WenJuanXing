import React from "react";
import { useParams } from "react-router-dom";

const Edit = () => {
    const { id } = useParams()
    return (
        <>
            <p>Edit {id}</p> 
        </>
    )
}

export default Edit