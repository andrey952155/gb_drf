import React from "react";
import './style.css'
import {Link, NavLink, Outlet} from "react-router-dom";

const Layout = (props) => {
    return (
        <>
            <h1>{props.token}</h1>
            <h2>{props.token ? <button>Logout</button> : 'not token'}</h2>
            <header>
                <NavLink to={'/'} className={"block-content"}>Главная</NavLink>
                <NavLink to={'/projects'} className={"block-content"}>Проекты</NavLink>
                <NavLink to={'/todo'} className={"block-content"}>Сообщения</NavLink>
                <NavLink to={'/users'} className={"block-content"}>Пользователи</NavLink>
                {props.token ? <button onClick={props.logout} className={"block-content"}>Выход</button> : <NavLink to={'/login'} className={"block-content"}>Авторизация</NavLink>}
            </header>
            <Outlet />
            <footer>2023</footer>
        </>
    )
}

export default Layout