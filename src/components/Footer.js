import React from 'react';
// import '../custom.css'

const footer = {
    position: 'absolute',
    left: '0',
    bottom: '0',
    width: '100%',
    backgroundColor: '#e2e2e2',
    color: 'black',
    textAlign: 'center',
    padding: '5px',
};

const text = {
    flexDirection: 'column',
    textAlign: 'center',
};

export default class Footer extends React.Component {

    render() {
        return (
            <footer style={footer}>
                <div style={text}>
                    © Sakina Gadriwala, 2020
                    <a rel="noopener noreferrer" target="_blank" href="https://github.com/SakinaGadri">
                        <img src="https://clipart.info/images/ccovers/1499794873github-logo-png.png" style={{ width: '65px', paddingLeft: '5px' }} alt="github url"/>
                    </a> | 
                    <a rel="noopener noreferrer" target="_blank" href="https://linkedin.com/in/sakina-gadriwala">
                        <img alt="linkedin url" src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2003%E2%80%932011.png" style={{ width: '65px', paddingLeft: '5px'}}/>
                    </a> | 
                    Credits: <a href="/credits"> Credits</a>
                </div>
            </footer>
        )
    }
}