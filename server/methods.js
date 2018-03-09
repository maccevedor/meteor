Meteor.methods({
    addResolution(resolution){
        //check(resolution, String);
            Resolutions.insert({
              text: resolution,
              complete: false,
              createdAt: new Date()
            });
    }
});