import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";

const Users = () => {
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

    return (
        <div>
            <h1>Users page</h1>
            {React.Children.toArray(
            users.map(i => <div className={"block-content"}>{i.username}</div>)
                )}
        </div>
    )
}
export default Users