import React from 'react';

function SaveButton(props) {
    return (
        <button
            type="button"
            className="btn btn-info btn-shadow mr-2"
            disabled={!props.isModelValid}
            title={props.toolTipText ? props.toolTipText : "Save record"}
            onClick={props.onSaveClicked}>
            <i className='fa fa-floppy-o mr-2'></i>Save
        </button>
    );
}

export default SaveButton;