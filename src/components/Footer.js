import React from 'react';
// import '../custom.css'

/*
const footer = {
    left: '0',
    bottom: '0',
    width: '100%',
    backgroundColor: '#e2e2e2',
    color: 'black',
    textAlign: 'center',
    padding: '5px',
};
*/
const footer = {
    // position: 'fixed',
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

    constructor(props) {
        super(props);
        this.state = { currentYear: new Date().getFullYear() };
    }
    
    render() {
        return (
            <footer style={footer}>
                <div style={text}>
                    © Sakina Gadriwala, {this.state.currentYear}
                    <a rel="noopener noreferrer" target="_blank" href="https://github.com/SakinaGadri">
                        <img src="https://clipart.info/images/ccovers/1499794873github-logo-png.png" style={{ width: '65px', paddingLeft: '5px' }} alt="github url" />
                    </a> |
                    <a rel="noopener noreferrer" target="_blank" href="https://linkedin.com/in/sakina-gadriwala">
                        <img alt="linkedin url" src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2003%E2%80%932011.png" style={{ width: '65px', paddingLeft: '5px' }} />
                    </a> |
                    <a href="/credits"> <img alt="clap" src="https://www.flaticon.com/svg/static/icons/svg/1616/1616567.svg" style={{width: "25px"}}/> Credits</a>
                </div>
            </footer>
        )
    }
}