import React, {useEffect, useState} from "react";
import axios from "axios";
import ProjectForm from "./ProjectForm";
import {NavLink} from "react-router-dom";

const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                "http://127.0.0.1:8000/api/projects",
            );
            setProjects(result.data['results']);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Открытые проекты</h1>
            {React.Children.toArray(
            projects.map(i => <div className={"block-content"}>{i.name_project}</div>)
                )}
            <br/>
            <NavLink to={"/add_project/"} className={"block-content"}>Добавить новый</NavLink>
        </div>
    )
}
export default Projects
