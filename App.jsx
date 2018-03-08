import React from 'react';
import TrackerReact from "meteor/ultimatejs:tracker-react";
import ResolutionsForm from "./ResolutionsForm.jsx";
import ResolutionSingle from './ResolutionSingle.jsx'
Resolutions = new Mongo.Collection("resolutions");


export default class App extends TrackerReact(React.Component){

    resolutions(){
        return Resolutions.find().fetch();

    }

    // addResolution(event){
    //     event.preventDefault();
    //     var text = this.refs.resolution.value.trim();
    //     Resolutions.insert({
    //         text:text,
    //         complete: false,
    //         createdAt: new Date()
    //     });
    //     this.refs.resolution.value = "";
    // }
    render(){
        let res = this.resolutions();
        if(res.length <1){
            return (<div>loding</div>)
        }
        console.log(this.resolutions());
        return(
            <div>
                <h1>My Resolutions</h1>    
                {/* <form className="new-resolution" onSubmit={this.addResolution.bind(this)} >
                    <input 
                        type="text" 
                        ref="resolution"
                        placeholder="submit"/>
                </form> */}
                <ResolutionsForm />
                <ul>
                    <ResolutionSingle resolution= {res[0]} />
                </ul>
            </div>
        )
    }
}

// if(Meteor.isClient){
//     Meteor.startup(function(){
//         React.render(<App />, document.getElementById("render-target"));
//     });
// }
