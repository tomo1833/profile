import React from 'react';
import Navigation from '../function/Navigatoin';

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_toggler" aria-controls="navbar_toggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse dark-mode-target " id="navbar_toggler">
                    <ul className="navbar-nav mr-auto mb-2 mb-lg-0" >
                        <Navigation link='#' title='トップ' />
                        <Navigation link='#industry' title='職務経歴' />
                        <Navigation link='#skill' title='スキル経歴' />
                    </ul >
                    <div className="custom-control custom-switch py-3">
                        <input type="checkbox" className="custom-control-input" id="dark-mode" />
                        <label className="custom-control-label" htmlFor="dark-mode"><span id="dark-mode-label">ライトモード</span></label>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;