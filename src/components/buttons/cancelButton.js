import React from 'react';

function CancelButton(props) {
    return (
        <button
            type="button"
            className="btn btn-light btn-shadow"
            title={props.toolTipText ? props.toolTipText : "Cancel saving"}
            onClick={props.onCancelClicked}>
            <i className='fa fa-times mr-2'></i>Cancel
        </button>
    );
}

export default CancelButton;