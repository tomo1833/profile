import React from 'react';
import Nav from './Nav';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header id="header" className="sticky-top dark-mode-target light-theme">
                <div className="container-fluid">
                    <Nav />
                </div>
            </header>
        )
    }
}

export default Header;