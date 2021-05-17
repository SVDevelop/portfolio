import React from 'react';

export default function Input (props) {
    return (
        <input 
            className="input-text"
            type="text"
            id="form-title"
            {...props}
        />
    )
}