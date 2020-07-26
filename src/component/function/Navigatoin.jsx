import React from 'react';

const Navigation = (props) => {

    return (
        <li className="nav-item">
            <a className="nav-link dark-mode-target-font" href={props.link}>{props.title}</a>
        </li>
    );
};

export default Navigation;