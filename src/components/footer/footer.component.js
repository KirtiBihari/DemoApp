'use strict';
import React from 'react';

class Footer extends React.Component {

    constructor( props ) {
        super( props );

    }

    render() {

        return (
            <div className='footer-container container bg-dark'>
                <div className="row">
                    <div className="col-lg-6 copyright">Copyright &copy; www.upliftnow.com
                        <br />
                        <p>Designed and Maintained by the core team with the help of our contributors. Currently v4.1.1. Code licensed
                        MIT, docs CC BY 3.0.</p>
                    </div>
                    <div className="col-lg-2 offset-lg-4">
                        <h6 className="text-white">Other things</h6>
                        <ul className="list-unstyled">
                            <li>
                                <a className="text-light" href="#">Sign in</a>
                            </li>
                            <li>
                                <a className="text-light" href="#">About</a>
                            </li>
                            <li>
                                <a className="text-light" href="#">data</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 text-right">
                        <span className="social-icon ml-2 mr-2">
                            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                        </span>
                        <span className="social-icon ml-2 mr-2">
                            <i className="fa fa-twitter-square" aria-hidden="true"></i>
                        </span>
                        <span className="social-icon ml-2 mr-2">
                            <i className="fa fa-facebook-official" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

Footer.defaultProps = {

};

export default Footer;