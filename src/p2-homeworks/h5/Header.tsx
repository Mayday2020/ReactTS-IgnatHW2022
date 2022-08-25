import React from 'react'
import {NavLink} from "react-router-dom";
import {JUNIOR, JUNIOR_plus, PRE_JUNIOR} from "./RoutesComponent";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.header}>
            <div className={s.navPanel}>
                <div className={s.navPanelItems}>
                    <NavLink to={PRE_JUNIOR}>
                        <div>PreJunior</div>
                    </NavLink>
                    <NavLink to={JUNIOR}>
                        <div>Junior</div>
                    </NavLink>
                    <NavLink to={JUNIOR_plus}>
                        <div>JuniorPlus</div>
                    </NavLink>
                </div>
                <div>
                    <span className={s.panelFlag}> Panel </span>
                </div>
            </div>
        </div>
    )
}

export default Header
