import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";



const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                "http://127.0.0.1:8000/api/users",
            );
            setUsers(result.data['results']);
            console.log(result.data['results'])
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Users</h1>
            {users.map(i => (
                <NavLink to={"/users/" + i.id} key={i.id} className={"block-content"}>{i.username}</NavLink>
            ))}

            {/*{console.log(matches)}*/}
            {/*<Routes>*/}
            {/*    {users.map(i => <User id={i.id} username={i.username} email={i.email} />)}*/}
            {/*{users.map(i => <div className={"block-content"} key={i.id}>{i.username}</div>)}*/}
            {/*</Routes>*/}
        </div>
    )
}

export default Users