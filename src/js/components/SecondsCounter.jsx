import React from "react";

const SecondsCounter = (props) => {

    return (
        <div className="container" style={{backgroundColor: "black"}}>
            {props.seconds}
        </div>
    );
}

export default SecondsCounter;