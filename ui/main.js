
/* var button = document.getElementById('counter');

button.onclick = function(){
    
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
    request.open('GET','http://arorasherry95.imad.hasura-app.io/counter',true);
    request.send(null);
                           };*/
                           
                           
//submit username/password to login

var submit =  document.getElementById('submit_btn');
submit.onclick = function () {
        var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
    if (request.readyState === XMLHttpRequest.DONE)
        {
            if(request.status === 200)
            {
                console.log('user logged in');
                alert('logged in successfull ');
            }else if (request.status === 403){
                alert('incorrect username or password ');
            }else if (request.status === 500){
                alert('something went wrong on the server ');
            }
        }
    };
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST','http://arorasherry95.imad.hasura-app.io/login',true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({username: username, password: password}));

};