import React from "react";
import {AffairType} from "./HW2";
import s from "./Affairs.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    };// need to fix

    return (
        <div className={s.affair}>
            <div>
                {props.affair.name}
                <span className={s.button_del}>
                <button onClick={deleteCallback}>X</button>
                </span>
            </div>
            <div className={s.priority}>
                Priority: {props.affair.priority}
            </div>
        </div>
    );
}

export default Affair;
