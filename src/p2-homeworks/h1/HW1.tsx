import React from "react";
import Message from "./Message";


export type messageDataType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

export const messageData: messageDataType = {
    avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    name: "Roman",
    message: "Hi! How are you?",
    time: '15:15'
};

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />


        </div>
    );
}

export default HW1;
