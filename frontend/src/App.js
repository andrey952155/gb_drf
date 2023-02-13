import React from 'react';
import './App.css';
import Layout from "./сomponents/Layout";
import {Route, Routes} from "react-router-dom";
import Projects from "./сomponents/Projects";
import Users from "./сomponents/Users";
import User from "./сomponents/User";
import Todo from "./сomponents/Todo";
import Homepage from "./сomponents/Homepage";

function App() {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout />}>
                    <Route index element={<Homepage/>} />
                    <Route path={'projects'} element={<Projects/>} />
                    <Route path={'todo'} element={<Todo/>} />
                    <Route path={'users'} element={<Users/>} />
                    <Route path={'users/:id'} element={<User/>} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
