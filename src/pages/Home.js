import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const style = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
}

export default class Home extends React.Component {
    render() {
        return (
            <div className="App"
                style={style} >
                <Header/>
                
                {/* have name fade in name, with a few sentences of "i am ..." */}

                <Footer />

            </div>);
    }
}