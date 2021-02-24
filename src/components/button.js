import React from 'react';
import './button.css';

const Button = (props) => {
    return (
        <button className="buttonContainer" onClick={() => {props.click(props.title)}}>
           {props.title}
        </button>
    )
}
export default Button;