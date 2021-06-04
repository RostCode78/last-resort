import { Fragment } from 'react';
import Navbar from './../layout/navbar/Nabar';
import styled from '@emotion/styled';

const Header = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f9f5f4;
`;

const Ghost = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #303030;
`;

const Home = () => {
    return (
        <Fragment>
            <Navbar/>
            <Header></Header>
            <Ghost></Ghost>
        </Fragment>
    );
}

export default Home;