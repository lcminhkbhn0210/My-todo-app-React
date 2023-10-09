import React from "react";
import Header from "./layout/Header";
import Todos from "./Todos";
class TodoApp extends React.Component {

    state = {
        todos: [
            {
                id: 1,
                title: "Setup development enviroment",
                completed: true
            },
            {
                id: 2,
                title: "Develop website and add content",
                completed: false
            },
            {
                id: 3,
                title: "Deploy to live server",
                completed: false
            },
        ]
    };

    handleCheckboxChange = i =>{
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === i)
                    todo.completed = !todo.completed;
                return todo;
            })
            
        })
    }

    render(){
        return(
            <div className="container">
                <Header/>
                <Todos todos={this.state.todos} handleChange={this.handleCheckboxChange}/>
            </div>
        );
    }
}
export default TodoApp;