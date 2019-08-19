import React from 'react';

const CustomButton = props => {
    let content = (props.isEditable) ? 'Save' : 'Edit';

    return (
        <div className="custom-button">
            <button onClick={props.onClick}>{content}</button>
        </div>
    )
}

export default CustomButton;