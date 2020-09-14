import React from 'react';

export default class Home extends React.Component {
    render() {
        return (
            <div className="App"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }} >
                {/* header would include my name in the corner
                    links to:
                    * porfolio
                    * course notes
                    * resume
                */}
                <header style={{
                    padding: '20px',
                    textAlign: 'center',
                    background: '#17a2b8',
                    color: 'white',
                    fontSize: '30px'
                }}>
                    <div style={{
                        flexDirection: 'column',
                        color: 'white',
                        padding: '0px',
                    }}>
                        <a href="/" style={{
                            flexDirection: 'column',
                            color: 'white',
                            padding: '0px',
                        }}>Sakina G.</a>
                    </div>
                    {/* have pictures here */}
                </header>

                {/* footer would include my name in the corner
                    links to:
                    * github
                    * linkedIn
                    * c 2020
                */}

            </div>);
    }
}