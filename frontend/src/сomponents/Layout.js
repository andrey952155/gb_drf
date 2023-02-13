import React from "react";
import './style.css'
import {NavLink, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header>
                <NavLink to={'/'} className={"block-content"}>Главная</NavLink>
                <NavLink to={'/projects'} className={"block-content"}>Проекты</NavLink>
                <NavLink to={'/todo'} className={"block-content"}>Сообщения</NavLink>
                <NavLink to={'/users'} className={"block-content"}>Пользователи</NavLink>
            </header>
            <Outlet />
            <footer>2023</footer>
        </>
    )
}

export default Layout