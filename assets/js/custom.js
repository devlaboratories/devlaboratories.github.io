/* Write here your custom javascript codes */


/*$(window).resize(function(){

	var h_height = $("#quote-h").height();

	//$("#qoute-m").height(h_height + "px");
	

});*/
var Custom = new function(){
	
	var self = this;
	
	
	//methods
	this.initComponents = function(){
		self.initProperties();
		self.initEvents();
		
	}
	
	this.initProperties = function(){
	
	}
	
	this.initEvents = function(){

		$(window).resize(self.resizeTeam);

	}
	

	//util methods
	this.resizeTeam = function(){
		var h_height = $("#quote-harvey").height();
		$("#quote-martin").height(h_height + 30);

	}

}

Custom.initComponents();
Custom.resizeTeam();
