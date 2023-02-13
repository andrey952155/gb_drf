import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";


const User = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);
    useEffect(() => {
        axios("http://127.0.0.1:8000/api/users/" +id,)
            .then(response => setUser(response['data']));
    }, [id]);
    return (

        <div>
            <h2>User</h2>
            {user && (
                <div className={"block-content"}>
                    {user.username}
                </div>
            )}


        </div>
    )
}

export default User
