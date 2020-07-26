import React from 'react';

class Fotter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="fixed-bottom left-padding" >
                <p className="dark-mode-target-font">© 2020 tomo </p>
            </footer >
        )
    }
}

export default Fotter;