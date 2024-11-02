import React, { useState } from "react";

type Todo = {
    id : number;
    text : string;
    isChecked : boolean;
}

const TodoList : React.FC = () => {
    const title : string = "오늘 할 일";

    const [todos, setTodos] = useState<Todo[]>(
        [
            {id : 1, text : '강의 듣기', isChecked : false},
            {id : 2, text : '운동 하기', isChecked : false},
            {id : 3, text : '코딩 테스트 공부', isChecked : false}
        ]
    );

    return(
        <div>
            <h1>{title}</h1>
            <p></p>
            <div className="container">
                <div className="board">
                    <ul>
                        {
                            todos.map((todo, index)=>{
                                return <li key={index}>{todo.text}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
        
    )
}

export default TodoList;