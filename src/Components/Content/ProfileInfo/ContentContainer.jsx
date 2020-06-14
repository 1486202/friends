import React from 'react';
import Content from "../Content";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUsersProfile} from "../../../redux/profile_reducer";
import {withRouter} from "react-router-dom";

class ContentContainer extends React.Component {
    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/ + userID`)
            .then(response => {
                this.props.setUsersProfile(response.data);
            });
    }

    render() {
        return (
            <Content {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})
let WithUrlDataContainerComponent = withRouter(ContentContainer);

export default connect(mapStateToProps, {setUsersProfile})(WithUrlDataContainerComponent);