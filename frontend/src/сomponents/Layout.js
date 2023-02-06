import React from "react";
import './style.css'
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Link to={'/'} className={"block-content"}>Главная</Link>
            <Link to={'/projects'} className={"block-content"}>Проекты</Link>
            <Link to={'/todo'} className={"block-content"}>Сообщения</Link>
            <Link to={'/users'} className={"block-content"}>Пользователи</Link>
            <Outlet />
            <footer>2023</footer>
        </>
    )
}

export default Layout