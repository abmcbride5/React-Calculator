import React, { useState } from 'react';
import Button from "./button";
import './table.css';

const Hello = (Event) => {
    console.log("hello", Event);
}

const Table = (props) => {
    return(
        <table className="tableContainer">
            <tbody>
            <tr>
                <td><Button title="7" click={props.setInput} /></td>
                <td><Button title="8" click={props.setInput} /></td>
                <td><Button title="9" click={props.setInput} /></td>
                <td><Button title="÷" click={props.setInput} /></td>
            </tr>
            <tr>
                <td><Button title="4" click={props.setInput} /></td>
                <td><Button title="5" click={props.setInput} /></td>
                <td><Button title="6" click={props.setInput} /></td>
                <td><Button title="x" click={props.setInput} /></td>
            </tr>
            <tr>
                <td><Button title="1" click={props.setInput} /></td>
                <td><Button title="2" click={props.setInput} /></td>
                <td><Button title="3" click={props.setInput} /></td>
                <td><Button title="-" click={props.setInput} /></td>
            </tr>
            <tr>
                <td><Button title="0" click={props.setInput} /></td>
                <td><Button title="." click={props.setInput} /></td>
                <td><Button title="=" click={props.setEquality} /></td>
                <td><Button title="+" click={props.setInput} /></td>
            </tr>
            </tbody>
        </table>
    );
}
export default Table;