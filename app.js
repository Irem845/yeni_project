

var myButton = document.getElementById("btn");


        myButton.addEventListener("click",function(){

          /*  function randomColor()
            {
                var r=Math.floor(Math.random()*256);
                var g=Math.floor(Math.random()*256);
                var b=Math.floor(Math.random()*256);
                return 'rgb(' + r + ',' + g + ',' + b + ')';
                
            }
            var randomRGBColor = randomColor();*/

            // for hex code
            var mySpan=document.querySelector(".color");
            function getRandomHexColor()
            {
                var letters ="0123456789ABCDEF";
                var color="#";
                for(var i=0;i<6;i++)
                    {
                        color+=letters[Math.floor(Math.random()*16)];
                    }
                    return color;
            }
            var RandomHex=getRandomHexColor();
            mySpan.textContent=getRandomHexColor();
            document.body.style.backgroundColor=RandomHex;
        })
    

