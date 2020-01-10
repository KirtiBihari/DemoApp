/* eslint-disable no-unused-vars */
'use strict';
import React from 'react';
import HeaderComponent from '../header/header.component';
import HomeComponent from '../home/home.component';
import FooterComponent from '../footer/footer.component';
import SignUp from '../signUp/signUp.component';
import SignIn from '../signIn/signIn.component';

class Main extends React.Component {

    constructor( props ) {
        super( props );
        this.state ={
            currentPage: 'home',
            isSignIn: false,
            loginToken: ''
        }

    }

    updateLoginToken = (isLogin) => {
        this.setState({
            isSignIn: isLogin,
            loginToken: isLogin ? 'token' : '',
        });
        if (isLogin) {
            window.location.hash = 'home';
        }
        
    }

    goToPage = (pageKey) => {
        window.location.hash = pageKey;
    }

    updateHashUrl = (currentPage) => {
        window.location.hash = currentPage;
    }

    componentDidMount() {
        this.updateHashUrl(this.state.currentPage);
        window.addEventListener('hashchange', this.locationHashChanged, false);
    }

    locationHashChanged = () => {
        this.setState({
            currentPage: window.location.hash
        }, () => {
            this.updateHashUrl(this.state.currentPage);
        });
    }

    renderScreenByHash = () => {
        const {currentPage, currentItem, cartItems} = this.state;

        switch (currentPage) {
            case '#home':
                return <HomeComponent  />;
            case '#signin':
                return <SignIn updateLoginToken={this.updateLoginToken}/>;
            case '#signout':
                this.setState({
                    isSignIn: false,
                    loginToken: ''
                });
                return <SignIn updateLoginToken={this.updateLoginToken}/>;
            case '#signup':
                return <SignUp signUpClick={this.signUpClick}/>
            default:
                return <HomeComponent />;
        }
    }

    signUpClick = (signUpData) => {
        const userData = {
            firstName: signUpData.firstName,
            lastName: signUpData.lastName,
            email: signUpData.email,
            phone: signUpData.phone,
            password: signUpData.password
        }

        sessionStorage.setItem('userData', JSON.stringify(userData));
        this.goToPage('signin');
    }


    render() {
        return (
            <div className='main-container'>
                <HeaderComponent  loginToken={this.state.loginToken} goToPageClick={this.goToPage}/>
                <section className='bodyContent'>
                    { this.renderScreenByHash() }
                </section>
                <FooterComponent />
            </div>
        );
    }
}

Main.defaultProps = {

};

export default Main;