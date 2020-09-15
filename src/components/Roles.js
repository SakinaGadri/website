// https://upmostly.com/tutorials/setinterval-in-react-components-using-hooks
// https://blog.prototypr.io/using-reactcsstransitiongroup-for-enter-exit-animations-ea100d68e72f

import React from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const roles = ["a developer", "a designer", "a creator", "an entrepreneur"];

const style = {
    display: "flex",
    // flexDirection: "column",
    fontSize: "150%",
}

const role_style = {
    paddingLeft: "5px",
    paddingRight: "2px",
    color: "#ff3d7f",
}

export default class Roles extends React.Component {

    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    increaseCount() {
        // make sure we loop back to start of the roles list once we're done 
        this.setState({ count: this.state.count >= roles.length - 1 ? 0 : this.state.count + 1 });
    }

    componentDidMount() {
        this.interval = setInterval(() => this.increaseCount(), 2000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div style={style}>
                I am
                <div style={role_style}>
                    {roles[this.state.count]}
                </div>!
            </div>
        );
    }
}
