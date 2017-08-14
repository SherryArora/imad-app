/**console.log('Loaded!');

var ele = document.getElementById('mainn');
ele.innerHTML='new value';
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px'; 
    
}
img.onclick = function(){
  //img.style.marginLeft = '100px';  
  var interval = setInterval(moveRight,50);
};*/
//counter
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function(){
    // make request to counter endpoint
    
    //capture the response and store it in a variable
    
    //render the variable in the correct span
    counter = counter + 1 ;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};