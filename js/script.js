$(document).ready(function() {
	var heightOfWindow =$(window).height();
	var menuBarHeight = $(".naviBar").height();
	
	var heightOfContainer = heightOfWindow - menuBarHeight;

	$(".containerForCode").height(heightOfContainer-16+"px");

	$(".toggled").click(function(){
		$(this).toggleClass("selected");

		var currentDiv = $(this).html();
		$("#"+currentDiv+"Container").toggle();

		var showDivs = $(".containerForCode").filter(function(){
			return($(this).css("display") != "none");
		}).length;

		var widthOfContainer =100/showDivs;

		$(".containerForCode").width(widthOfContainer+"%");
	});


		$("#runBtn").click(function(){

			$("iframe").contents().find("html").html('<style>'+$(".cssCode").val()+'</style>'+$(".htmlCode").val());
			
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