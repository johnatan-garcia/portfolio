import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavigationItem from './NavigationItem';

class HomeNavigation extends Component {

    render() {
        let navigationBoxes = this.props.navigationItems
            .map(item => {
                return <NavigationItem key={item.name} name={item.name} url={item.url ? item.url : '#'} />;
            })
            .reduce((array, element) => {
                return array.concat(element);
            }, []);

        if (navigationBoxes.length === 0) {
            navigationBoxes = <p>In progress</p>;
        }
        return (
            <section className="homeNavigation">
                {navigationBoxes}
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        navigationItems: state.status.pageSections
    };
};

const mapDispatchToProps = dispatch => {
    return { };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeNavigation);