// https://upmostly.com/tutorials/setinterval-in-react-components-using-hooks
// https://blog.prototypr.io/using-reactcsstransitiongroup-for-enter-exit-animations-ea100d68e72f

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const roles = ["a developer", "a designer", "a creator", "an entrepreneur"];

const Main = styled.div`
    display: flex;
    font-size: 150%
`;

const Role = styled.div`
    padding-left: 5px;
    padding-right:2px;
    color: #ff3d7f;
`;

const Roles = () => {

    const [index, setIndex] = useState(0);
    const [role, setRole] = useState(roles[0]);

    useEffect(() => {
        const timerId = setInterval(
            () => setIndex((i) => (i + 1) % roles.length),
            1500);
        return () => clearInterval(timerId);
    }, []);

    useEffect(() => {
        setRole(roles[index]);
    }, [index]);

    return (
        <Main>
            I am <Role> {role} </Role>!
        </Main>
    );
}

export default Roles;
