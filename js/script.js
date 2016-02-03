$(document).ready(function() {

	/*
	heightOfWindow - Gets the height of the window screen.
	menuBarHeight - Gets the height of the navigation bar
	heightOfContainer - gets the height of the 
		
	*/
	var heightOfWindow =$(window).height();
	var menuBarHeight = $(".naviBar").height();
	var heightOfContainer = heightOfWindow - menuBarHeight;

	//sets height of the containers
	$(".containerForCode").height(heightOfContainer-16+"px");

	//toggle function which changes the list items grey if opened.
	$(".toggled").click(function(){
		$(this).toggleClass("selected");

		var currentDiv = $(this).html();
		$("#"+currentDiv+"Container").toggle();

		//Returns the number of divs currently open (up to 4, html css..)
		var showDivs = $(".containerForCode").filter(function(){
			return($(this).css("display") != "none");
		}).length;

		//gets and sets the width based on the amount of divs opened (100/(1,2,3,4))
		var widthOfContainer =100/showDivs;
		$(".containerForCode").width(widthOfContainer+"%");
	});


		$("#runBtn").click(function(){

			//Gets the html and css written in the container and sets it to the iframe
			$("iframe").contents().find("html").html('<style>'+$(".cssCode").val()+'</style>'+$(".htmlCode").val());

			//Finds the javascript written in the javascript container and eval it then sends to iframe.

			//VERY UNSAFE...DO NOT USE ONLINE
			document.getElementById('resultWindow').contentWindow.eval($("#jsCode").val());

	});
		
//Allows for the tab key to be pressed on the textarea
$("textarea").keydown(function(e) {
    if(e.keyCode === 9) { // tab was pressed
        // get caret position/selection
        var start = this.selectionStart;
            end = this.selectionEnd;

        var $this = $(this);

        // set textarea value to: text before caret + tab + text after caret
        $this.val($this.val().substring(0, start)
                    + "\t"
                    + $this.val().substring(end));

        // put caret at right position again
        this.selectionStart = this.selectionEnd = start + 1;

        // prevent the focus lose
        return false;
    }
});

});