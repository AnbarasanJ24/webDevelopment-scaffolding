import React from 'react';
import { connect } from 'react-redux';

class ClassName extends React.Component {

    render() {
        console.log(this.props)
        // this.props = {songs : state.requiredState}
        return (
            <div>Hello</div>
        )
    }
}

// Function used to get state from Provider and store as Props for this component 
const mapStateToProps = (state) => {
    return { songs: state.requiredState }
}

// Connect function take Mapping state to props as first argument 
export default connect(mapStateToProps)(ClassName);