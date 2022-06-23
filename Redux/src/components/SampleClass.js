import React from 'react';
import { connect } from 'react-redux';
import { actionCreatorName } from '../actions';
class ClassName extends React.Component {

    render() {
        console.log(this.props)
        // this.props = {songs : state.requiredState, actionCreatorName: fn() }
        return (
            <div onClick={() => this.props.actionCreatorName("value")}>
                Hello
            </div>
        )
    }
}

// Function used to get state from Provider and store as Props for this component 
const mapStateToProps = (state) => {
    return { songs: state.requiredState }
}

// Connect function add state and disptach function to the props
// Connect function takes two arguments, mapStateToProps and get action creators
// Both state mapping and action creator will be passed as props 
// We can directly use action selector in component but it should be only identified by redux when we pass in dispatch function 

// connect function take second argument automatically make it call using dispatch function 
export default connect(mapStateToProps, { actionCreatorName: actionCreatorName })(ClassName);