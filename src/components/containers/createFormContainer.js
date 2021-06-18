import React from 'react';

import SaveButton from '../buttons/saveButton';
import CancelButton from '../buttons/cancelButton';

function CreateFormContainer(props) {
    return (
        <form className="form-container">
            <div className="row">
                <div className="col-md-12">
                    {props.formContent}
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-12">
                    <SaveButton
                        isModelValid={props.isModelValid}
                        onSaveClicked={props.onSaveClicked} />
                    <CancelButton
                        onCancelClicked={props.onCancelClicked} />
                </div>
            </div>
        </form>
    );
}

export default CreateFormContainer;