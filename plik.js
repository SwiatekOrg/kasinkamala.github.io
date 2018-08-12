jQuery(window).scroll(function(e) {
     var currentposition = $(document).scrollTop();//aktualna pozycja względem początku          
     var bannerheight = $("#nav").height();//wysokość elementu, po którym menu ma stać się białe
      if(currentposition>bannerheight)//odwrotny warunek
       {         
           $("#nav").addClass("navScroll");
           $("nav>ol>li>a>p").addClass("noShadow");
       }
       else{
       		$("#nav").removeClass("navScroll");
       		$("nav>ol>li>a>p").removeClass("noShadow");
       }
  });