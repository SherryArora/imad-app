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

button.onclick = function(){
    // make request to counter endpoint
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttpRequest.DONE)
        {
            if(request.status === 200)
            {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
                
            }
        }
        
    };
    request.open('GET','https://http://arorasherry95.imad.hasura-app.io/counter',true);
    request.send(null);
    
   
    
    
   
};