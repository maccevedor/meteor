import React,{Component} from 'react';

import TrackerReact from "meteor/ultimatejs:tracker-react";

export default class ResolutionDetail  extends TrackerReact(Component) {


    constructor(){
        super();
        this.state = { subscriptions: { resolutions: Meteor.subscribe("userResolutions") } };
    }


    componentWillUnmount(){
        this.state.subscriptions.resolutions.stop();
    }

    resolution(){
        return Resolutions.findOne(this.props.id);

    }
    render(){
        let res = this.resolution();
        console.log(this.resolution());
        if(!res){
            return(<div>Loding..</div>);
        }
        return (
            <div>
                <h1>{res.text}</h1>
            </div>
        )
    }
}
