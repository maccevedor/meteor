import React,{Component} from 'react';

export default class About extends Component {

    setVar(){
        //Session.set("test", "hello");
        Session.set('Meteor.loginButtons.dropdownVisible', true);

    }
    render(){
        return (
            <div>
                <h1>About us</h1>
                <p>loasdasdasd </p>
                <button onClick = {this.setVar}>
                    SIGN Up
                </button>
            </div>
        )
    }
}