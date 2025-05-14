import React, { useState } from 'react';
function Todo(){
    // Phần xử lý logic
    const [todo, setTodo] = useState({
        id: "",
        name: "",
    });

    const [todoList, setTodoList] = useState([]);

    // Phần xử lý sự kiện 
    const handleGetTodo = (value) => {
        console.log(value);
        const randomID = Math.floor(Math.random(10000) * 10000)

        const todo = {
            id: randomID,
            name: value,
        }
        // console.log(todo);
        // Nghĩa là mỗi lần onChange thì cái biến todo sẽ được cập nhật 
        setTodo(todo);
    }

    const handleAddTodo = () => {
        setTodoList((prev) => {
            // console.log(1);
            return [...prev, todo]
        })
        setTodo(
            {
                id: "",
                name: "",
            }
        )
    }
    // hàm xóa Todo
    const handleDeleteTodo = (id) =>{
        // console.log(id);
        // setTodoList(todoList.filter(todo) => todo.id !== id);
        setTodoList(todoList.filter((todo) => todo.id !== id));
    }



    return(
        <div>
            <div>
                <input value={todo.name} 
                onChange={(e) => handleGetTodo(e.target.value)} 
                placeholder="Nhập nhiệm vụ.." style={{
                    width: "300px",
                    height: "30px" }}/>
                    
                <br />    
                <button onClick={handleAddTodo} 
                style={
                    {
                        width: "100px",
                        height: "30px",
                        backgroundColor: "blue",
                        color: "white",
                        borderRadius: "5px",
                        marginTop: "10px",
                    }
                }>ADD</button>
                
            </div>
            <div>
                <ul>
                    {todoList.map((todo, index)=>{
                        // return <li> {index}{todo.id} {todo.name} </li>
                        return <li key={index} >{todo.name}
                        <button
                                onClick={() => handleDeleteTodo(todo.id)}
                                style={{
                                    marginLeft: "10px",
                                    backgroundColor: "red",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "4px",
                                    padding: "4px 8px",
                                    cursor: "pointer"
                                }}
                            >
                                Xóa
                            </button>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    );
}
export default Todo;
// Giải thích phần add xong thì nó mất dữ liệu trong input
// Đầu tiên là chúng ta cần set giá trị cho input mặc định là todo.name
// Sau khi onChange thì dữ liệu của thằng todo được cập nhật liên tục
// Nên là sau khi add xong thì chúng ta cần set lại tất cả thuộc tính của todo về mặc định
// Set ở phàn addTodo