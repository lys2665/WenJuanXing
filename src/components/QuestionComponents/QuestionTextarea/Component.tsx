import React, {FC} from "react";
import { QuestionTextareaDefaultProps, QuestionTextareaPropsType } from "./interface";
import { Input, Typography } from "antd";


const { Paragraph } = Typography
const { TextArea } = Input

const QuestionInput: FC <QuestionTextareaPropsType>= (props: QuestionTextareaPropsType) => {
    const { title, placeholder } = {...QuestionTextareaDefaultProps, ...props} as QuestionTextareaPropsType
    return(
        <div>
            <Paragraph strong>{title}</Paragraph>
            <div>
                <TextArea placeholder={placeholder}></TextArea>
            </div>
        </div>
    )
}


export default QuestionInput