		var clock = document.getElementById("fixed_clock");
		function startClock() {
		timeout(clock);
		}

		function timeout(obj) {
		var current = new Date();
		obj.innerHTML = "현재시간 : " + current.toLocaleTimeString()
		setTimeout("timeout(clock)", 1000); // 1초 후 timeout() 호출
		}