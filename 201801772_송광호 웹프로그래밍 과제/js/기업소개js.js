		function gotoMain()
		{
			window.open("../과제main.html", "_self");
		}

		var timerID = null;

		function startTimer(num)
		{
			timerID = setTimeout("load('http://company.nexon.com/Company/Introduce/Nexonis/About.aspx')", num);

			document.getElementById("company_introduce").title = "3초뒤 회사 소개 홈페이지가 열립니다."
		}
		function cancelTimer()
		{
			if(timerID != null)
				clearTimeout(timerID);
		}
		function load(url)
		{
			window.open(url);
		}