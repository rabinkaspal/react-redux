import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodoRequest } from "../redux/thunks/todoThunks";
import { getTodos } from "../selector";
import "./TodoForm.css";

const TodoForm = ({ todos, createTodoItem }) => {
    const [formData, setFormData] = useState({
        text: "",
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
            text: "",
        });
    }

    function saveForm(e) {
        e.preventDefault();
        const duplicateItem = todos.some(todo => todo.text === formData.text);
        if (!duplicateItem) {
            createTodoItem(formData);
        } else {
            alert("Item exists");
        }

        resetFormData(e);
    }

    return (
        <div className="todo-form">
            <h2>Add New ToDo</h2>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Title</label>
                    <input
                        autoComplete="off"
                        type="text"
                        name="text"
                        placeholder="Enter Todo Item"
                        value={formData.text}
                        onChange={handleChange}
                    />
                </div>
                {/* <div className="form-control">
                    <label htmlFor="title">Description</label>
                    <input
                        autoComplete="off"
                        type="text"
                        name="description"
                        placeholder="Enter Description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div> */}
                <div className="button-container">
                    <button onClick={resetFormData} className="btn-cancel">
                        Reset
                    </button>
                    <button onClick={saveForm} className="btn-save">
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = state => ({
    todos: getTodos(state),
});

const mapDispatchToProps = dispatch => ({
    createTodoItem: todo => dispatch(addTodoRequest(todo.text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
