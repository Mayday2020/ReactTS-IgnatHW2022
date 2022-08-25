import React from 'react'
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import {Route, Routes} from "react-router";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";


export const PRE_JUNIOR = '/pre-junior'
export const JUNIOR = '/junior'
export const JUNIOR_plus = '/junior_plus'

function RoutesComponent() {
    return (
        <div>
            <Routes>
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
                <Route path={'/'}/>
                <Route path={PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={JUNIOR} element={<Junior/>}/>
                <Route path={JUNIOR_plus} element={<JuniorPlus/>}/>
                // add routes

                <Route path={'*'} element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default RoutesComponent
