import Fotter from './Fotter';
import Header from './Header';
import Main from './Main';
import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);


    }
    render() {
        return (
            <>
                <Header />
                <Main />
                <Fotter />
            </>
        )
    }
}

export default Profile;