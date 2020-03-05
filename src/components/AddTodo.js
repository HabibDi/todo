import React, { Component } from 'react'

export class AddTodo extends Component {

    state = {
        title: ""
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: "" })
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });


    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
                <input
                    type="text"
                    name="title"
                    placeholder="Ajouter une tâche ..."
                    style={{ flex: 10 }}
                    value={this.state.title}
                    onChange={this.onChange} />
                <input
                    type="submit"
                    value="Envoyer"
                    className="btn"
                    style={{ flex: 1 }} />
            </form>
        )
    }
}

export default AddTodo
