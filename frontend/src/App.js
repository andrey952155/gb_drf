import React, {useState} from 'react';
import './App.css';
import Layout from "./сomponents/Layout";
import {Route, Routes} from "react-router-dom";
import Projects from "./сomponents/Projects";
import Users from "./сomponents/Users";
import User from "./сomponents/User";
import Todo from "./сomponents/Todo";
import Homepage from "./сomponents/Homepage";
import Auth from "./сomponents/Auth";
import Cookies from "universal-cookie";


function App() {

    const get_token_from_storage =() => {
        const cookies = new Cookies()
        return cookies.get('token')
        }

    const [token, setToken] = useState(get_token_from_storage());

    const set_token = (token) => {
        const cookies = new Cookies();
        cookies.set('token', token);
        setToken(token);
        console.log('set_token' + ' ' + token);
        };

    const logout = () => {
        setToken('')
        };


    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout token={token} logout={logout} />}>
                    <Route index element={<Homepage/>}/>
                    <Route path={'projects'} element={<Projects/>}/>
                    <Route path={'todo'} element={<Todo/>}/>
                    <Route path={'users'} element={<Users/>}/>
                    <Route path={'users/:id'} element={<User/>}/>
                    <Route path={'login'} element={<Auth set_token={set_token} />}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
