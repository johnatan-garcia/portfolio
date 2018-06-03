import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../store/actions';

//import SideDrawer from '../../Navigation/SideDrawer/SideDrawer';
import MainLoader from '../Navigation/MainLoader';
import BackgroundVideo from '../Elements/BackgroundVideo';
import utils from '../../shared/utils';
import paths from '../../shared/paths';

class Layout extends Component {

    // Handler for Side Drawer close button
    // sideDrawerCloseHandler = () => {
    //     this.setState({ sideDrawerExpanded: false });
    // }

    // Handler for toggle action on Side Drawer
    // sideDrawerToggleHandler = () => {
    //     this.setState(prevState => {
    //         return { showSideDrawer: !prevState.showSideDrawer };
    //     });
    // }

    componentDidMount() {
        // Generate Token
        const sessionToken = utils.uuidv4();
        this.props.onInitialize(sessionToken);
    }

    render() {
        if (this.props.loadComplete) {
            return (
                <div>
                    <BackgroundVideo source={paths.mainBackgroundVideo} />
                    {/* <SideDrawer open={this.state.showSideDrawer}
                                onClose={this.sideDrawerClosedHandler} /> */}
                    <main className="main">
                        
                        {/* Application content is rendered here */}
                        {this.props.children}
                    </main>
                </div>
            )
        }
        return (
            <MainLoader />
        )
    }
}

const mapStateToProps = state => {
    return {
        loadComplete: state.status.loadComplete
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onInitialize: token => dispatch(actions.pageStatus.init(token))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);