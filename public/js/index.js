$(function(){
    $(".techi").hide();
    $(".newi").hide();
    
    $(".News").bind("mouseover",()=>{
        $(".newi").show();
        $(".techi").hide();
    })
    $(".container").bind("mouseover",()=>{
        $(".techi").hide();
        $(".newi").hide();
    })
    $(".tech").bind("mouseover",()=>{
        $(".techi").show();
        $(".newi").hide();
    })
    
   
})