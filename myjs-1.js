   //div_box
    var div1=document.getElementById("box1");
   //btn1
    var btn=document.getElementById('btn1');
    
    btn.addEventListener("click",function(){
            div1.innerHTML = "Hello World";
            alert("hello");
    }
                          );









//                          function(){
//                  //AJAX
//     var ourRequest=new XMLHttpRequest();
//     ourRequest.open('GET','https://wagh-0321.github.io/files/myapp-1.json');
//     ourRequest.onload=function(){
//     var ourData=JSON.parse(ourRequest.responseText);
//       //here
//       renderHTML(ourData);
//     };
//     ourRequest.send();
      
//                  }
//                         );
//     function renderHTML(data){
      
//      div1.insertAdjacentHTML('beforeend','ok');    }
