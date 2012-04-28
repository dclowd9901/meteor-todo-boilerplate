var Tasks = new Meteor.Collection("tasks");

Template.list.events = {
    "click #add": function () {
        var roomName = window.prompt("Name for the new name", "My room");
        if(roomName != "") {
            Rooms.insert({"name": roomName});
        }
    }
};

Template.list.tasks = function(){
	return Tasks.find({});
}