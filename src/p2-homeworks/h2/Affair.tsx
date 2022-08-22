import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }
    let colorPriority = () => {
        switch (props.affair.priority) {
            case "middle":
                return 'blue'
            case 'low' :
                return 'green'
            case 'high' :
                return 'orange'
        }
    }
    return (
        <div className={s.affair}>
            <div style={{color: 'darkslategray'}}>{props.affair.name}</div>
            <div style={{color: colorPriority()}}>{props.affair.priority}</div>
            <div>
                <SuperButton onClick={deleteCallback}>X</SuperButton>
            </div>
        </div>
    )
}

export default Affair
