$(document).ready(function () {
    
	

	
	
    
});



$(window).load(function () {
	 $('[data-toggle="tooltip"]').tooltip(); 
	 document.getElementById('vid').play();
	
    $("object").each(function () {
        if ($(this).is(":visible")) {
            var flashMovie = $(this).attr("id");
           // controlMovie(flashMovie, 'pause');
            document.getElementById(flashMovie).StopPlay();
            // $(this).get(0).Play();
            //Play(flashMovie);
            return;
        }
    });
    $("#menuIcon").addClass("selected");
	checkWindowWidth();
	
	
	
});


$( window ).resize(function() {
	checkWindowWidth();
  //alert ($( window ).width());
});

function checkWindowWidth(){
	if ($( window ).width() <= 768){
		$("#menuIcon").removeClass("selected");
	}
}





function goHome(){
	location.href = "../index.html";	
}

function changeBarContent(ind){
	$("#menuSection").css("display","none");
	$("#textSection").css("display","none");
	$("#dicSection").css("display","none");
	$("#scientificSection").css("display","none");
	$("#helpSection").css("display","none");
	
	$("#menuIcon").removeClass("selected");
	$("#textIcon").removeClass("selected");
	$("#dicIcon").removeClass("selected");
	$("#refIcon").removeClass("selected");
	$("#helpIcon").removeClass("selected");
	
	if (ind == 1){
		$("#menuSection").css("display","block");
		$("#menuIcon").addClass("selected");
	}else if (ind == 3){
		$("#textSection").css("display","block");
		$("#textIcon").addClass("selected");
	}else if (ind == 4){
		$("#dicSection").css("display","block");
		$("#dicIcon").addClass("selected");
	}else if (ind == 5){
		$("#scientificSection").css("display","block");
		$("#refIcon").addClass("selected");
	}else if (ind == 6){
		$("#helpSection").css("display","block");
		$("#helpIcon").addClass("selected");
	}
	
	
	$("#contentBar").css("display","block");	
		
		

	
}

function closeContentBar(){
	$("#contentBar").css("display","none");	
}


function openLesson1Contents(){
	if($("#lesson1Item").hasClass("selected")){
		$("#lesson1Item").removeClass("selected");
		$("#lesson1Contents").css("display","none");
		
		$("#lesson1Contents").css("visibility","hidden");
		$("#lesson1Contents").css("opacity",0);
		$("#lesson1Contents").css("position","absolute");
	}else{
		$("#lesson1Item").addClass("selected");
		$("#lesson1Contents").css("display","block");
		
		$("#lesson1Contents").css("visibility","visible");
		$("#lesson1Contents").css("opacity",1);
		$("#lesson1Contents").css("position","relative");
	}
		
}


function openLesson2Contents(){
	if($("#lesson2Item").hasClass("selected")){
		$("#lesson2Item").removeClass("selected");
		$("#lesson2Contents").css("display","none");
		
		$("#lesson2Contents").css("visibility","hidden");
		$("#lesson2Contents").css("opacity",0);
		$("#lesson2Contents").css("position","absolute");
	}else{
		$("#lesson2Item").addClass("selected");
		$("#lesson2Contents").css("display","block");
		
		$("#lesson2Contents").css("visibility","visible");
		$("#lesson2Contents").css("opacity",1);
		$("#lesson2Contents").css("position","relative");
	}
}

function openSubmenu(){
	$("#subcontentTree1").addClass("open");
	$("#tpoicLessons").addClass("selected");
	

}


function showSoundSlider(){
	$("#sSlider").addClass("opened");	
	
}

function hideSoundSlider(){
	$("#sSlider").removeClass("opened");	
	
}

$(document).click(function(event) {
    if(!$(event.target).closest('#contentTree').length &&
       !$(event.target).is('#contentTree') && 
	   !$(event.target).closest('#subcontentTree1').length &&
       !$(event.target).is('#subcontentTree1') &&
	   !$(event.target).closest('#treeIcon').length &&
       !$(event.target).is('#treeIcon')) 
	   {
			$("#contentTree").removeClass("open");
       		$("#subcontentTree1").removeClass("open");
			$("#tpoicLessons").removeClass("selected");
    }    
    
})