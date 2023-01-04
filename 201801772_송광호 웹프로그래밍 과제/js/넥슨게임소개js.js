		function gotoMain()
		{
			window.open("../과제main.html", "_self");
		}
		function printGame()
		{
			var RPGlist = "메이플스토리 / 바람의나라:연 / V4 / 마비노기 / 바람의나라 / 카운터사이드 / 테일즈위버 / 아스가르드 / 어둠의전설 / 천애명월도 / 트리오브세이비어 / 메이플스토리2 / 일랜시아 / 파이널판타지14 / 아키에이지";

			var FPSlist = "서든어택 / 카운터스트라이크온라인 / 프로젝트 D";

			var 캐주얼list = "카트라이더 / 크레이지아케이드 / 버블파이터 / 카트라이더 / 테일즈런너";

			const gameselect = document.getElementById("game").value;

			if(gameselect == "RPG")
				document.getElementById("result").innerText = "RPG 게임 리스트\n━━━━━━━━━━━━━━━━━━━━━━━━━\n" + RPGlist;
			else if(gameselect == "FPS")
				document.getElementById("result").innerText = "FPS 게임 리스트\n━━━━━━━━━━━━━━━━━━━━━━━━━\n" + FPSlist;
			else if(gameselect == "캐주얼")
				document.getElementById("result").innerText = "캐주얼 게임 리스트\n━━━━━━━━━━━━━━━━━━━━━━━━━\n" + 캐주얼list;
			else if(gameselect == "")
				document.getElementById("result").innerText = "RPG, FPS, 캐주얼 을 입력해주세요!(대소문자를 구분합니다)";
			else
				document.getElementById("result").innerText = "\""+ gameselect + "\"는 잘못된 값입니다. RPG, FPS, 캐주얼 만 입력해주세요!(대소문자를 구분합니다)";
		}