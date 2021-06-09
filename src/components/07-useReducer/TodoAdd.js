import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({handleAddTodo}) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    })
    
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

        handleAddTodo(newTodo)
        reset()
    }

    return (
        <>
            <h4>Agregar TODO</h4>
                    <hr></hr>

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Ingrese una tarea"
                            autoComplete="off"
                            value={description}
                            onChange={handleInputChange}
                        />
                        <div className="d-grid gap-2">
                            <button
                                className="btn btn-outline-primary mt-2 btn-block"
                                type="submit"
                            >
                                Agregar
                        </button>
                        </div>
                    </form> 
        </>
    )
}
