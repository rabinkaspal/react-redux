import React, { useState } from "react";
import { connect } from "react-redux";
import { createTodo } from "../redux/actions/TodoActions";
import "./TodoForm.css";

const TodoForm = ({ todos, createTodoItem, ...props }) => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        completed: false,
    });

    function handleChange(event) {
        console.log(event);
        const { name, value } = event.target;
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    }

    function saveForm(e) {
        e.preventDefault();
        // alert(
        //     `Title: ${formData.title} \n Description: ${formData.description}`
        // );
        // props.addNewItem(formData);
        const duplicateItem = todos.some(todo => todo.title === formData.title);
        if (!duplicateItem) {
            createTodoItem(formData);
            props.setShowForm(false);
        } else {
            alert("Item exists");
        }
    }

    return (
        <div className="todo-form">
            <h2>Add new ToDo</h2>
            <form>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    placeholder="Enter Todo Item"
                    value={formData.title}
                    onChange={handleChange}
                />
                <label htmlFor="title">Description</label>
                <input
                    type="text"
                    name="description"
                    placeholder="Enter Description"
                    value={formData.description}
                    onChange={handleChange}
                />
                <button onClick={saveForm}>Save</button>
            </form>
        </div>
    );
};

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    createTodoItem: todo => dispatch(createTodo(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
