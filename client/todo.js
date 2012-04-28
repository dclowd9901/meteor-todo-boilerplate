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
	},
	"click #new-list" : function(e){
		e.preventDefault();
		Session.set('list', undefined);
	}
};

Template.getList.events = {
	"click #submit-get-list" : function(e){
		e.preventDefault();
		getsertList();
	},
	"submit form" : function(e){
		e.preventDefault();
		getsertList();
	}
}

Template.main.currentList = function() {
    return Session.get("list") || false;
}

Template.list.tasks = function(){
	return Tasks.find({ list : Session.get('list') });
}

Template.list.currentList = function(){
    var list = Lists.findOne({_id: Session.get("list")});
    return list && list.name ;
}

function addTask(){
	var taskName = $('#new-task').val();
    if(taskName != "") {
        Tasks.insert({ name : taskName, list : Session.get('list') });
		$('#new-task').val('');
    }
}

function getsertList(){
	var listName = $('#get-list').val();
	if( listName ){
		var list = Lists.findOne({ name : listName });
		
		if( !list ){
			var _id = Lists.insert({ name : listName });
			Session.set( "list", _id );					
		} else {
			Session.set( "list", list._id );
		}

	}
}