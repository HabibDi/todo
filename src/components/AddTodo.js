import React, { Component } from 'react'

export class AddTodo extends Component {
    render() {
        return (
            <form>
                <input
                    type="text"
                    name="title"
                    placeholder="Ajouter une tâche ..." />
                <input
                    type="submit"
                    value="Envoyer"
                    className="btn" />
            </form>
        )
    }
}

export default AddTodo
