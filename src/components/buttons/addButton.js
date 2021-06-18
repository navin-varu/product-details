import React from 'react';
import { Link } from 'react-router-dom';

function AddButton(props) {
    return (
        <Link
            to={props.routeName}
            title={props.toolTipText ? props.toolTipText : "Add new record"}
            className="btn btn-small btn-dark btn-shadow mb-5">
            <i className="fa fa-plus mr-2"></i>{props.buttonText}
        </Link>
    );
}

export default AddButton;