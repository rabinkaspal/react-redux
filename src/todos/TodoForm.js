import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodoRequest } from "../redux/thunks/todoThunks";
import { getTodos } from "../redux/reselect/selector";
import styled from "styled-components";

const FormContainer = styled.div`
    min-width: 300px;
    width: auto;
    max-width: 500px;

    & label {
        font-size: 14px;
    }
`;

const TodoFormContainer = styled.form`
    padding: 12px;
    background-color: #f3f3f3;
    border-radius: 4px;

    & input {
        width: calc(100% - 12px);
        display: block;
        height: 32px;
        padding: 5px;
        border: none;
        outline: none;
        padding: 5px 8px;
        border-radius: 4px;

        &:focus {
            outline: none;
        }
    }

    &:placeholder-shown {
        font-size: 14px;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    margin-top: 18px;
    justify-content: flex-end;
`;

const FormButtons = styled.button`
    min-width: 95px;
    padding: 9px 0;
    border: none;
    border-radius: 6px;
    color: white;
    text-transform: CAPITALIZE;
    font-size: 15px;
    transition: all 500ms ease;
    cursor: pointer;
`;

const SaveButton = styled(FormButtons)`
    background-color: #24af35;
    margin-left: 10px;

    &:hover {
        background-color: #016d0f;
    }
`;

const CancelButton = styled(FormButtons)`
    background-color: #c4c4c4;

    &:hover {
        background-color: #4b4848;
    }
`;

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
        <FormContainer>
            <h2>Add New ToDo</h2>
            <TodoFormContainer>
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
                <ButtonContainer>
                    <CancelButton onClick={resetFormData}>Reset</CancelButton>
                    <SaveButton onClick={saveForm}>Save</SaveButton>
                </ButtonContainer>
            </TodoFormContainer>
        </FormContainer>
    );
};

const mapStateToProps = state => ({
    todos: getTodos(state),
});

const mapDispatchToProps = dispatch => ({
    createTodoItem: todo => dispatch(addTodoRequest(todo.text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
