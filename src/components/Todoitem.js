import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class Todoitem extends Component {

    getStyle = function () {

        return {
            background: '4f4f4f',
            padding: '10px',
            borderBottom: '1px, #ccc, dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'       
        }
    };

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()} >
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                    {' '}
                    {title}

                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

//PropTypes
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff', 
    border: 'none',
    padding: '2px 6px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}


export default Todoitem
