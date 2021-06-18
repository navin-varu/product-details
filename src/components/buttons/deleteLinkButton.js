import React from 'react';

function DeleteLinkButton(props) {
    return (
        <a href={`#`}
            title={props.toolTipText ? props.toolTipText : "Remove record"}
            onClick={props.onDeleteClicked} >
            <span className="text-danger"><i className="fa fa-trash" aria-hidden="true"></i></span>
        </a>
    );
}

export default DeleteLinkButton;