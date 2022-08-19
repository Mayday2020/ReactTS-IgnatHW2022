import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>
            <img src={props.avatar} alt="ava"/>
            <div className={s.messageContent}>
                <p className={s.name}>{props.name}</p>
                <span className={s.messageText}>{props.message}</span>
                <span className={s.time}> {props.time}</span>
            </div>
        </div>
    )
}

export default Message
