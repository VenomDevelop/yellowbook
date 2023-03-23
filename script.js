var r_text = new Array (); 
r_text[0] = "Välkommen"; 
r_text[1] = "Welkom"; 
r_text[2] = "ようこそ"; 
r_text[3] = "Bienvenidos"; 
r_text[4] = "Welcome";  
r_text[5] = "Bienvenue"; 

var i = Math.floor(r_text.length * 
      Math.random()); 

document.write("<FONT COLOR='#CCCCCC'>" + 
r_text[i] ); 


var bgcolorlist=new Array("#ffffff")
     document.body.style.background=bgcolorlist[Math.floor(Math.random()*bgcolorlist.length)]; 
