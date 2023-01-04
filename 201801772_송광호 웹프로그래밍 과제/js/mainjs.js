		function gotoGit()
		{
			window.open("https://github.com/skh990427/WebProject");
		}

		function init() 
		{
      		var canvas = document.getElementById("myCanvas");
      		var context = canvas.getContext("2d");
      		var startX, startY, endX, endY, dragging;

      		canvas.addEventListener("mousedown", function (e) { down(e) });
      		canvas.addEventListener("mouseup", function (e) { up(e) });
     	 	canvas.addEventListener("mousemove", function(e) { move(e) });
      		canvas.addEventListener("mouseout", function (e) { out(e) });

      		function down(e)
      		{
        		dragging = true;
         		startX = e.offsetX;
         		startY = e.offsetY;
         		context.strokeStyle = document.getElementById("color").value;
         		context.lineWidth = document.getElementById("lineWidth").value;
      		}

      		function up(e)
      		{
         		dragging = false;
      		}

      		function out(e)
      		{
         		dragging = false;
      		}

      		function move(e)
      		{
         		if(dragging)
         		{
            		endX = e.offsetX;
            		endY = e.offsetY;

            		context.beginPath();
            		context.moveTo(startX, startY);
            		context.lineTo(endX, endY);
            		context.stroke();

            		startX = e.offsetX;
            		startY = e.offsetY;
         		}
      		}
   		}