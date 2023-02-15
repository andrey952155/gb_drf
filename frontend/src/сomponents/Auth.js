import React, {useState} from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';


function LoginForm(props) {
    const [data, setData] = useState({});


    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        axios.post('http://127.0.0.1:8000/api-token-auth/', formData)
            .then((response) => {
                setData(response.data);
                props.set_token(response.data.token);
                console.log(response.data)
            }).catch(error => alert('Неверный логин или пароль'))

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username"/>
                <input type="text" name="password"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default LoginForm;