import React, { Component } from 'react';
import { connect } from 'react-redux';

class Portfolio extends Component {

    render() {
        return (
            <section className="portfolio">
                hello world how are you
            </section>
        );
    }
}

const mapStateToProps = state => {
    return { };
};

const mapDispatchToProps = dispatch => {
    return { };
};

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);