import React from "react";

const SampleFunction = (props) => {
    return (
        <div>
            {props.key}
        </div>
    )
};

const mapStateToProps = (state) => {
    return { key: state.requiredState }
}

export default connect(mapStateToProps)(SampleFunction);