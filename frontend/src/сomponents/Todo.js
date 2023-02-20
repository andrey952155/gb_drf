import React, {useEffect, useState} from "react";
import axios from "axios";

const Todo = () => {
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                "http://127.0.0.1:8000/api/todo",
            );
            setTodo(result.data['results']);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Todo page</h1>
            {React.Children.toArray(
            todo.map(i => <div className={"block-content"}>{i.todo}</div>)
                )}
        </div>
    )
}
export default Todo