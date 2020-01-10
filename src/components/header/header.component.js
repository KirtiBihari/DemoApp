'use strict';
import React from 'react';

class Header extends React.Component {

    constructor( props ) {
        super( props );


    }

    render() {

        return (
            <div className='header-container'>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">UpliftNow</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                            </li>
                        </ul>
                        <form className="form-inline">
                            <button className="btn btn-outline-info my-2 my-sm-0" type="button" onClick={() => {this.props.goToPageClick(this.props.loginToken ? 'signout' : 'signup')}}>{this.props.loginToken ? 'Sign Out' : 'Join/Sign In'}</button>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}

Header.defaultProps = {

};

export default Header;