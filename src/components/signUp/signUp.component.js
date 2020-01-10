'use strict';
import React from 'react';

class SignUp extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            password: '',
            _password_again: ''
        }
        

    }

    onChangeInput = (e) => {

        if (e.target.name === 'first_name') {
            this.setState({
                firstName: e.target.value
            })
        }
        else if (e.target.name === 'last_name') {
            this.setState({
                lastName: e.target.value
            })
        }
        else if (e.target.name === 'email') {
            this.setState({
                email: e.target.value
            })
        }
        else if (e.target.name === 'phone') {
            this.setState({
                phone: e.target.value
            })
        }
        else if (e.target.name === 'password') {
            this.setState({
                password: e.target.value
            })
        }
        else if (e.target.name === '_password_again') {
            this.setState({
                _password_again: e.target.value
            })
        }
    }


    render() {


        return (
            <div className='home-container d-flex flex-row justify-content-center flex-wrap mt-10 mb-10'>
                <div data-effect-delay="100" data-animation-effect="fadeInDownSmall" className="object-non-visible text-center animated object-visible fadeInDownSmall">
                    <h1>Nice to Meet You</h1>
                    <p> Let's get started with setting up your account.</p>
                    <div className="row">
                    <form role="form" name="signup_form" id="sign-up-1">
                    <div className="row">
                        <div className="col-lg-12">
                            
									    <div className="col-md-12">
										<div className="form-group">											
											<input className="form-control f-control" name="first_name" placeholder=" First Name" type="text" required="" aria-required="true" onChange={(event) => this.onChangeInput(event)} />
										</div>                 
										</div>
										<div className="col-md-12">
										<div className="form-group">									
											<input className="form-control f-control" name="last_name" placeholder=" Last Name" type="text" required="" aria-required="true" onChange={(event) => this.onChangeInput(event)} />
										</div>
										</div>
										<div className="col-md-12">
										<div className="form-group">										
											<input className="form-control f-control" name="email" id="email" placeholder=" Email" type="email" required="" aria-required="true" onChange={(event) => this.onChangeInput(event)} />
										
										</div>										   
										</div>
										<div className="col-md-12">
										<div className="form-group">											
											<input className="form-control f-control" name="phone" placeholder=" Phone" type="text" required="" aria-required="true"  onChange={(event) => this.onChangeInput(event)}/>
										
										</div>										 
										</div>
										<div className="col-md-12">
										<div className="form-group">										
											<input className="form-control f-control" id="password" name="password" placeholder=" Password" type="password" required="" aria-required="true" onChange={(event) => this.onChangeInput(event)} />
											
										</div>
										</div>
										<div className="col-md-12">
										<div className="form-group">
											<input className="form-control f-control" name="_password_again" placeholder=" Confirm Password" type="password" required="" aria-required="true" onChange={(event) => this.onChangeInput(event)} />
										</div>
										</div>
								

									

										
									<div className="col-sm-12 text-center pv-10">
							            <button className="btn btn-primary btn-default btn-animated c-color-05"  type="button" onClick={() => this.props.signUpClick(this.state)}>SignUp</button>
									</div>
                        </div>
                    </div>
                    </form>
                    </div>
                </div>
            </div>
        );
    }
}

SignUp.defaultProps = {

};

export default SignUp;