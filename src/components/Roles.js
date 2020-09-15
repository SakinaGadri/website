// https://upmostly.com/tutorials/setinterval-in-react-components-using-hooks

import React from 'react';

const roles = ["a developer", "a designer", "a creator", "an entrepreneur"];

const style = {
    fontSize: "150%",

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
        <div style={style}> I am {roles[this.state.count]}! </div>
        );
    }
}
