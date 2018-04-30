// client-side js
// run by the browser each time your view template is loaded

(function(){
  
  // Hide reactions with no tallies
  $(".message__reaction__tally:empty").parent().hide();
  
  // Open reaction menu on button click
  $(".reactions__menu").hide();
  $(".reactions__menu-launcher").click(function(){
   
    $(this).siblings(".reactions__menu").toggle();
    
  });
    
  // Increase reaction tally by 1
  $(".reactions__button").click(function(e){
    
    var reactionMenu = $(this).parent();
    
    // Record type of reaction from element class
    var reactionType = $(this).attr("class").split(" ")[1];
            
    // Find corresponding tally
    $(reactionMenu).parent().siblings(".message__body").find(".message__reaction." + reactionType).each(function(){
      
      var messageTally = $(this).find(".message__reaction__tally");
      
      $(messageTally).parent().addClass("message__reaction--selected");
      
      // Set tally if empty & unhide
      if ($(messageTally).is(":empty")){
      
        $(messageTally).text("1");
        $(messageTally).parent().show();
      
      // Increment tally if it exists
      } else {
        
        $(messageTally).html(function(i, val) { 
        
          return +val+1 
      
        });
        
      }
      
      // Hide menu and button once chosen
      $(reactionMenu).parent().hide();
    
    });
    
    e.preventDefault();
  
  });
  
  
  // Remove reaction menu button
  
})()