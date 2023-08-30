var arr=["image/dice1.png","image/dice2.png","image/dice3.png","image/dice4.png","image/dice5.png","image/dice6.png"];

var player1=Math.random();
        player1=Math.floor(player1*6)+1;
        // alert(player1);
        var num1=player1;

        // var img1src="image/dice"+num1+".png";
        var imgsrc1=arr[num1-1];
        
 var player2=Math.random();
        player2=Math.floor(player2*6)+1;
        // alert(player2);
        var num2=player2;
        var imgsrc2=arr[num2-1];

        if(num1>num2){
            document.querySelector(".header").innerHTML="Player 1 won! 🚩 ";
        }
        else if(num1<num2){
            document.querySelector(".header").innerHTML="Player 2 won! 🚩 ";

        }
        else{
            document.querySelector(".header").innerHTML="Match tie!";
        }

        // var imgsrc1="image/dice"+num1+".png";
        // var imgsrc2="image/dice"+num2+".png";
       
         document.querySelector(".img1").setAttribute("src",imgsrc1);
         document.querySelector(".img2").setAttribute("src",imgsrc2);

       
        