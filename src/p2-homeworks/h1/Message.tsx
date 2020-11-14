import React from "react";
import {messageDataType} from "./HW1";
import style from './Message.module.css'

function Message(props: messageDataType) {
    return (
        <div className={style.message}>
            <div className={style.ava}>
                <img src={props.avatar}/>
            </div>
            <div className={style.block}>
                <div className={style.concave}>
                    <div className={style.left_concave}></div>
                </div>

                <div className={style.text_block}>

                    <div className={style.n}>{props.name}</div>
                    <div className={style.m}>{props.message} </div>
                    <div className={style.t}>{props.time}</div>
                </div>
            </div>
        </div>

    );
}


export default Message;