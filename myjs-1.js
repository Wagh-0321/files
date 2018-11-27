var div2=document.getElementById("master");
var htmlString_0="<h2 id=\"start\"></h2><button id=\"btn1\"></button><div id=\"box1\"></div>";
div2.insertAdjacentHTML('beforeend',htmlString_0);  



var pageCounter=1;
var btn=document.getElementById("btn1");
var h2_1=document.getElementById("start");
btn.innerHTML=4-pageCounter;
h2_1.innerHTML="Welcome Page";

btn.addEventListener("click", function() {
    
    
    var ourRequest=new XMLHttpRequest();
      ourRequest.open('GET','myapp-'+pageCounter+'.json');
    ourRequest.onload=function(){
     var ourData=JSON.parse(ourRequest.responseText);
       //here
       renderHTML(ourData);
       pageCounter++;
       btn.innerHTML=4-pageCounter;
       if(pageCounter>3)
       {btn.style.display="none";}
     };
     ourRequest.send();
}, false);



function renderHTML(data){
var div1=document.getElementById('box1');      
      

   htmlString="";
   for(i=0;i<data.length; i++)
   {
       htmlString+= "<p>" + data[i].name + " is a " + data[i].species;
   }
   div1.insertAdjacentHTML('beforeend',htmlString);  
   
}