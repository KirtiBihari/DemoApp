'use strict';
import React from 'react';

class Home extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {
        }
        

    }


    render() {


        return (
            <div className='home-container d-flex flex-row justify-content-center flex-wrap mt-10 mb-10'>
                <h2>Welcome To Upliftnow...</h2>                
            </div>
        );
    }
}

Home.defaultProps = {

};

export default Home;