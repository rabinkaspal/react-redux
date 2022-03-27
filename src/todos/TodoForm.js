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
        const { name, value } = event.target;
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    }

    function resetFormData(e) {
        e.preventDefault();
        setFormData({
            title: "",
            description: "",
            completed: false,
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
            <h2>Add New ToDo</h2>
            <form>
                <div className="form-control">
                    <label htmlFor="title">Title</label>
                    <input
                        autoComplete="off"
                        type="text"
                        name="title"
                        placeholder="Enter Todo Item"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="title">Description</label>
                    <input
                        autoComplete="off"
                        type="text"
                        name="description"
                        placeholder="Enter Description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>
                <div className="button-container">
                    <button onClick={saveForm} className="btn-save">
                        Save
                    </button>
                    <button onClick={resetFormData} className="btn-cancel">
                        Cancel
                    </button>
                </div>
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
