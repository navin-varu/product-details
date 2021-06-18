import React from 'react';
import { Link } from 'react-router-dom';

function EditLinkButon(props) {
    return (
        <Link to={props.routeName}
            title={props.toolTipText ? props.toolTipText : "Edit record"}>
            <i className="fa fa-pencil mr-2" aria-hidden="true"></i>
        </Link>
    );
}

export default EditLinkButon;