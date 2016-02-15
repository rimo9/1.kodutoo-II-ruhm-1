(function(){
	"use strict";
	
	var Clock = function(){
		if(Clock.instance){
			return Clock.instance;
		}
		Clock.instance = this;
		
		this.clock = document.getElementById("clock");
		var fontSize = 30;
		
		this.init();
	};
	
	Clock.prototype = {
		init : function(){
			console.log("rakendus käivitus");
			this.writeDate();
			window.setInterval(this.writeDate.bind(this), 1000);
			this.bindMouseEvents();
		},
		
		bindMouseEvents: function(){
			window.addEventListener('wheel', function(event){
				if(event.deltaY == 100){
					fontSize = fontSize - 10;
					clock.style.fontSize = fontSize + 'px';
				}
				if(event.deltaY == -100){
				fontSize = fontSize + 10;
				clock.style.fontSize = fontSize + 'px';
				}
			});

		   //muudab tausta värvi
		   window.addEventListener('click', function(event){
			  //console.log(event.which);
			  var num_backg = Math.floor(Math.random()*(5-1+1)+1);
			  if(event.which){
				if (num_backg == 1){
				  document.body.style.backgroundColor = "red";
				}
				if (num_backg == 2){
				  document.body.style.backgroundColor = "blue";
				}
				if (num_backg == 3){
				  document.body.style.backgroundColor = "green";
				}
				if (num_backg== 4){
				  document.body.style.backgroundColor = "yellow";
				}
				if (num_backg == 5){
				  document.body.style.backgroundColor = "black";
				}
			  }
			});
			
			  //kella värv
			  clock.addEventListener('click', setInterval(function(){
				  var num_clock = Math.floor(Math.random()*(5-1+1)+1);
				  if (num_clock == 1){
					clock.style.color = "red";
				  }
				  if (num_clock == 2){
					clock.style.color = "blue";
				  }
				  if (num_clock == 3){
					clock.style.color = "green";
				  }
				  if (num_clock == 4){
					clock.style.color = "yellow";
				  }
				  if (num_clock == 5){
					clock.style.color = "black";
				  }
			  }, 500));
		},
		
		//võtab aja ja kirjutab #clock elemendi sisse
		writeDate : function(){
		  var d = new Date();
		  var hour = d.getHours();
		  var min = d.getMinutes();
		  var sec = d.getSeconds();
		  var day = d.getDate();
		  var month = d.getMonth();
		  var year = d.getFullYear();
		  //#clock element htmli
		  clock.innerHTML=this.addZeroBefore(hour)+":"+this.addZeroBefore(min)+":"+this.addZeroBefore(sec)+'<br>'+this.addZeroBefore(day)+"."+this.addZeroBefore(month+1)+"."+year;
		},

		addZeroBefore : function(number){
		  if(number<10){
			number="0"+number;
		  }
		  return number;
		}
	};
	window.onload = function(){
		var app = new Clock();
	};
})();