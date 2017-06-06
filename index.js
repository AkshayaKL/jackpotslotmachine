      var count=0;
      var counter=0;
      var content;
       function clickzz() 
       {   
       
      document.getElementById("audio").play();
       counter=0;
       swap();
    
  
    
    var randomX1 = Math.ceil(Math.random() * 4);
    var randomX2 = Math.ceil(Math.random() * 4);
    var randomX3 = Math.ceil(Math.random() * 4);
    if(randomX1 === 0)
    document.getElementById("randomX1").innerHTML='<img src="BELL.png">';
    if(randomX1 === 1)
    document.getElementById("randomX1").innerHTML='<img src="BAR.png">';
    if(randomX1 === 2)
    document.getElementById("randomX1").innerHTML='<img src="CHERRY.png">';
    if(randomX1 === 3)
    document.getElementById("randomX1").innerHTML='<img src="SEVEN.png">';
    if(randomX2 === 0)
    document.getElementById("randomX2").innerHTML='<img src="BELL.png">';
    if(randomX2 === 1)
    document.getElementById("randomX2").innerHTML='<img src="BAR.png">';
    if(randomX2 === 2)
    document.getElementById("randomX2").innerHTML='<img src="CHERRY.png">';
    if(randomX2 === 3)
    document.getElementById("randomX2").innerHTML='<img src="SEVEN.png">';
    if(randomX3 === 0)
    document.getElementById("randomX3").innerHTML='<img src="BELL.png">';
    if(randomX3 === 1)
    document.getElementById("randomX3").innerHTML='<img src="BAR.png">';
    if(randomX3 === 2)
    document.getElementById("randomX3").innerHTML='<img src="CHERRY.png">';
    if(randomX3 === 3)
    document.getElementById("randomX3").innerHTML='<img src="SEVEN.png">';

     content="spin again";
     
    check();
   
 
    }

    function swap()
     {

    var t=Math.floor(Math.random() * 4);
    var x=Math.floor(Math.random() * 4);
    var j=Math.floor(Math.random() * 4);

    if(t === 0)
    document.getElementById("randomX1").innerHTML='<img src="BELL.png">';
    if(t === 1)
    document.getElementById("randomX1").innerHTML='<img src="BAR.png">';
    if(t === 2)
    document.getElementById("randomX1").innerHTML='<img src="CHERRY.png">';
    if(t === 3)
    document.getElementById("randomX1").innerHTML='<img src="SEVEN.png">';
    if(x === 0)
    document.getElementById("randomX2").innerHTML='<img src="BELL.png">';
    if(x === 1)
    document.getElementById("randomX2").innerHTML='<img src="BAR.png">';
    if(x === 2)
    document.getElementById("randomX2").innerHTML='<img src="CHERRY.png">';
    if(x === 3)
    document.getElementById("randomX2").innerHTML='<img src="SEVEN.png">';
    if(j === 0)
    document.getElementById("randomX3").innerHTML='<img src="BELL.png">';
    if(j === 1)
    document.getElementById("randomX3").innerHTML='<img src="BAR.png">';
    if(j === 2)
    document.getElementById("randomX3").innerHTML='<img src="CHERRY.png">';
    if(j=== 3)
    document.getElementById("randomX3").innerHTML='<img src="SEVEN.png">';
  

       if(counter<=20)
            {
            requestAnimationFrame(swap);
                 counter++;

                  }


    }

    function check()
    {
      if(document.getElementById("randomX1").innerHTML===document.getElementById("randomX2").innerHTML)
    {
      if(documment.getElementById("randomX2")===document.getElementById("randomX3"))
       {count++;

       content = "JackPOt!!!";
      document.getElementById("score").innerHTML=count;
       }
     }
        
 
    
    document.getElementById("spin-button").innerHTML=content;
    }
