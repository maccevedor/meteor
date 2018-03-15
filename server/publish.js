Resolutions = new Mongo.Collection("resolutions");

console.log(Meteor.settings.private.ptest);

Meteor.publish("allResolutions",function(){
    //return Resolutions.find({complete:false});
    return Resolutions.find({});
});


Meteor.publish("userResolutions", function() {
  //return Resolutions.find({complete:false});
  return Resolutions.find({user: this.userId});
});
