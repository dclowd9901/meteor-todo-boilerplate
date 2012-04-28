var Lists = new Meteor.Collection('lists');
var Tasks = new Meteor.Collection("tasks");

Template.list.events = {
    "click #add-task": function(e) {
		e.preventDefault();
		addTask();
    },
	"keyup #new-task": function(e){
		e.preventDefault();		
	},
	"submit form": function(e){
		e.preventDefault();
		addTask();
	},
	"click .remove": function(e){
		e.preventDefault();
		var _id = $(e.target).data('id'); 
		if( _id ){
			Tasks.remove( _id );
		}
	}
};

Template.list.tasks = function(){
	return Tasks.find({});
}

function addTask(){
	var taskName = $('#new-task').val();
    if(taskName != "") {
        Tasks.insert({ name : taskName });
		$('#new-task').val('');
    }
}

function upsertList(){
	var listName = $('#new-task').val();
	
}