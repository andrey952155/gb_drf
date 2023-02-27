import React, {useEffect, useState} from "react";
import axios from "axios";


const ProjectForm = (props) => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                "http://127.0.0.1:8000/api/users",
            );
            setUsers(result.data['results']);
        };
        fetchData();
    }, []);


    const [nameProject, setNameProject] = useState('');
    const nameProjectHandler = (event) => {
        setNameProject(event.target.value);
    };


    const [userName, setUserName] = useState('');
    const userNameHandler = (event) => {
        setUserName(event.target.value);
    };

    const [repoLink, setRepoLink] = useState('');
    const RepoLinkHandler = (event) => {
        setRepoLink(event.target.value);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {"name_project": nameProject, "user": userName, "repo_link": repoLink};
        axios.post('http://127.0.0.1:8000/api/projects/', {data: formData, headers: {Authorization: "Token 2cf0c2e96b6c51a8f3c0a91deb4a31dab35c9081"}})
            .then((response) => {
                console.log(response.data)
            }).catch(error => alert('Неверный логин или пароль'))

    };



    const formStyle = {
      display: 'grid',
    };

    return (
        <div>
            <h1>Новый проект</h1>
            <form style={formStyle} onSubmit={handleSubmit}>
                <input className={"block-content"} placeholder={"Название проета"} type="text" name="project_name"
                       onChange={nameProjectHandler}/>
                <input className={"block-content"} placeholder={"Ссылка на репозиторий"} type="text" name="repo_link"
                       onChange={RepoLinkHandler}/>
                <select multiple className={"block-content"} onChange={userNameHandler}>
                    {users.map(i => (<option value={i.id}  key={i.id}>{i.username}</option>))}
                </select>
                <input type="submit" className={"block-content"} value="Создать" />
            </form>
        </div>
    )
};

export default ProjectForm