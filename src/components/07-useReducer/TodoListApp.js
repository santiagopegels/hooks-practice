import React, { useReducer, useEffect } from 'react'
import { todoReducer } from './todoReducer'

import './style.css'
import { useForm } from '../../hooks/useForm'

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}


export const TodoListApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)
    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    })


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleSubmit = (e) => {

        if (description.trim() < 2) {
            return;
        }

        e.preventDefault()

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action)
        reset()
    }

    return (
        <div>
            <h1>TodoListApp ({todos.length})</h1>
            <hr></hr>

            <div className="row">
                <div className="col-7">

                    <ul className="list-group list-group-flush">
                        {
                            todos.map((todo, index) => {
                                return <li
                                    key={todo.id}
                                    className="list-group-item"
                                >
                                    <p className="text-center">{index + 1}. {todo.desc}</p>
                                    <button className="btn btn-danger">
                                        Delete
                                    </button>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr></hr>

                    <form>
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Ingrese una tarea"
                            autoComplete="off"
                            value={description}
                            onChange={handleInputChange}
                        />
                        <div class="d-grid gap-2">
                            <button
                                className="btn btn-outline-primary mt-2 btn-block"
                                type="submit"
                                onClick={handleSubmit}
                            >
                                Agregar
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
