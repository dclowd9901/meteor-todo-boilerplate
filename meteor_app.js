if (Meteor.is_client) {
	//   Template.hello = {
	// greeting : function(){
	// 	return "Welcome to meteor_app.";
	// }
	//   };

	Template.hello.greeting = function(){
		return "hello there";
	};

  Template.hello.events = {
    'click input' : function () {
      // template data, if any, is available in 'this'
      // if (typeof console !== 'undefined')
      //   console.log("You pressed the button");
	  	Meteor.publish("counter", function( id ){
		
		});
    }
  };
}

if (Meteor.is_server) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}