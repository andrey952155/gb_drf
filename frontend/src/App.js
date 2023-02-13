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

function App() {

    const [token, setToken] = useState()



    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Homepage/>}/>
                    <Route path={'projects'} element={<Projects/>}/>
                    <Route path={'todo'} element={<Todo/>}/>
                    <Route path={'users'} element={<Users/>}/>
                    <Route path={'users/:id'} element={<User/>}/>
                    <Route path={'login'} element={<Auth token={token} />}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
