'use strict';
import React from 'react';

class SignIn extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {
            email:'',
            password:''
        }
        

    }

    onChangeInput = (e) => {
        if (e.target.name === 'email') {
            this.setState({
                email: e.target.value
            })
        }
        else if (e.target.name === 'password') {
            this.setState({
                password: e.target.value
            })
        }
    }

    signInClick = () => {
        let isLogin = false
        if(sessionStorage.getItem('userData')) {
            const userData = JSON.parse(sessionStorage.getItem('userData'));
            isLogin = (userData.email === this.state.email && userData.password === this.state.password);
        }

        this.props.updateLoginToken(isLogin);
    }
    

    render() {
        return (
            <div className='home-container d-flex flex-row justify-content-center flex-wrap mt-10 mb-10'>
                   <form role="form" name="login_form" id="sign-in-1">
                    <div className="row">
                        <div className="col-lg-12">
										<div className="col-md-12">
										<div className="form-group">										
											<input className="form-control f-control" name="email" id="email" placeholder=" Email" type="email" required="" aria-required="true" onChange={(event) => this.onChangeInput(event)}/>
										
										</div>										   
										</div>
										
										<div className="col-md-12">
										<div className="form-group">										
											<input className="form-control f-control" id="password" name="password" placeholder=" Password" type="password" required="" aria-required="true" onChange={(event) => this.onChangeInput(event)} />
											
										</div>
										</div>
										
								

									

										
									<div className="col-sm-12 text-center pv-10">
							            <button className="btn btn-primary btn-default btn-animated c-color-05"  type="button" onClick={() => this.signInClick()}>SignIn</button>
									</div>
                        </div>
                    </div>
                    </form>
                               
            </div>
        );
    }
}

SignIn.defaultProps = {

};

export default SignIn;