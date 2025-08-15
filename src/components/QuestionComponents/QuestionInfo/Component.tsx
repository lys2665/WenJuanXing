import React, { FC } from "react";
import { QuestionInfoDefaultProps, QuestionInfoPropsType } from "./interface";
import { Typography } from "antd";

const { Title, Paragraph } = Typography
const Component: FC<QuestionInfoPropsType> = (props: QuestionInfoPropsType) => {
    const { title, desc } = {...QuestionInfoDefaultProps, ...props}
    const descList = desc?.split('/n')
    return (
        <div style={{ textAlign: 'center' }}>
            <Title style={{ fontSize: '24px', }}>{title}</Title>
            <Paragraph>
                {descList?.map((t, index) => {
                    return (
                        <span key={index}>
                            {index > 0 && <br />}
                            {t}
                        </span>
                    )
                })}
            </Paragraph>
        </div>
    )

}


export default Component