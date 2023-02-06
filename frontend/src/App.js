import React from 'react';
import './App.css';
import Layout from "./сomponents/Layout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Projects from "./сomponents/Projects";
import Users from "./сomponents/Users";
import Todo from "./сomponents/Todo";
import Homepage from "./сomponents/Homepage";

function App() {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Layout />}>
                        <Route index element={<Homepage/>} />
                        <Route path={'projects'} element={<Projects/>} />
                        <Route path={'todo'} element={<Todo/>} />
                        <Route path={'users'} element={<Users/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
