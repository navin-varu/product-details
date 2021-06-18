import React from 'react';

import './css/rootContainer.css';

function RootContainer(props) {
    return (
        <div className={`row root-container shadow ${props.rootClasses ? props.rootClasses : ""}`}>
            <div className="col-md-12">
                <div className={`row root-header ${props.rootHeaderClasses ? props.rootHeaderClasses : ""}`}>
                    <div className="col-md-12"><h6 className="text-muted">{props.rootTitle}</h6> </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        {props.rootContent}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RootContainer;