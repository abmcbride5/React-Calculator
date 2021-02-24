import React from 'react';
import './input_clear.css';

const Input_clear = (props) => {
    return (
        <table className="input_clear_container">
            <tbody>
            <tr>
                <td className="input_clear_input_container"><div className="input_clear_input">{props.input}</div></td>
                <td><button className="input_clear_button" onClick={props.setClear}>c</button></td>

            </tr>
            </tbody>
        </table>
    );
}
export default Input_clear;