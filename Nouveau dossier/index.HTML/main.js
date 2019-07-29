var getid=document.getElementById("paragraph") ;
function A (){
    getid.style.fontWeight="bold";
}

console.log("hello")
var getid=document.getElementById("paragraph");
function x () {
    getid.style.fontStyle="italic";
}
console.log("hello") 
var getid=document.getElementById("paragraph");
function d (){
    getid.style.textDecoration="underline";
}
function fontSize() {
    getid.style.fontSize=document.getElementById("sz").value;
}
function police (ll) {
    getid.style.fontFamily= ll;
}

$(".bt").hide();
$(".col").mouseenter(function(){
    $(this).css("opacity","0.5");
    $(this).find(".bt").show();
});
$(".col").mouseleave(function(){
    $(this).css("opacity","1");
    $(this).find(".bt").hide();
})


    
