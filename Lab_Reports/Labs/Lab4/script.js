function showСondition() {
    document.getElementById("text").innerHTML="Обчислити суму ряду, елементи якого розраховуються з використанням операцій піднесення у степінь, розрахунку факторіалу числа, операцій множення та ділення. Для розрахунку першої суми з параметром від 1 до 5 використати цикл for. Для розрахунку внутрішньої суми з параметром від 0 до нескінченності використати цикл while.";
    document.getElementById("outputImageOne").src="img/conditionLab4.jpg";
    document.getElementById("outputImageOne").alt="Не можемо знайти скріншот-(";
	document.getElementById("outputImageTwo").src="img/nothing.jpg";
    document.getElementById("outputImageTwo").alt="Не можемо знайти скріншот-(";
	document.getElementById("outputImageThree").src="img/nothing.jpg";
    document.getElementById("outputImageThree").alt="Не можемо знайти скріншот-(";
	
	
	document.getElementById("condiBlock").style.borderWidth="2.5pt";
	document.getElementById("codeBlock").style.borderWidth="1pt";
	document.getElementById("outputBlock").style.borderWidth="1pt";
	document.getElementById("analysisBlock").style.borderWidth="1pt";
	document.getElementById("conclusionBlock").style.borderWidth="1pt";
	document.getElementById("goToMenuBlock").style.borderWidth="1pt";
}


function showСode() {
    document.getElementById("text").innerHTML="Код програми:";
    document.getElementById("outputImageOne").src="img/codeLab4.1.png";
    document.getElementById("outputImageOne").alt="Не можемо знайти скріншот-(";
	document.getElementById("outputImageTwo").src="img/codeLab4.2.png";
    document.getElementById("outputImageTwo").alt="Не можемо знайти скріншот-(";
	document.getElementById("outputImageThree").src="img/codeLab4.3.png";
    document.getElementById("outputImageThree").alt="Не можемо знайти скріншот-(";
	
	document.getElementById("condiBlock").style.borderWidth="1pt";
	document.getElementById("codeBlock").style.borderWidth="2.5pt";
	document.getElementById("outputBlock").style.borderWidth="1pt";
	document.getElementById("analysisBlock").style.borderWidth="1pt";
	document.getElementById("conclusionBlock").style.borderWidth="1pt";
	document.getElementById("goToMenuBlock").style.borderWidth="1pt";
}


function showOutput() {
    document.getElementById("text").innerHTML="Приклад виконаного коду:";
    document.getElementById("outputImageOne").src="img/outputLab4.jpg";
    document.getElementById("outputImageOne").alt="Не можемо знайти скріншот-(";
	document.getElementById("outputImageTwo").src="img/nothing.jpg";
    document.getElementById("outputImageTwo").alt="Не можемо знайти скріншот-(";
	document.getElementById("outputImageThree").src="img/nothing.jpg";
    document.getElementById("outputImageThree").alt="Не можемо знайти скріншот-(";

	
	document.getElementById("condiBlock").style.borderWidth="1pt";
	document.getElementById("codeBlock").style.borderWidth="1pt";
	document.getElementById("outputBlock").style.borderWidth="2.5pt";
	document.getElementById("analysisBlock").style.borderWidth="1pt";
	document.getElementById("conclusionBlock").style.borderWidth="1pt";
	document.getElementById("goToMenuBlock").style.borderWidth="1pt";
}


function showAnalysis() {
	document.getElementById("text").innerHTML="Аналіз. Програма не має потреби у додатковому аналізі, адже її результуючі дані перевіряються за допомогою відповідних функцій у результаті виконання коду.";
    document.getElementById("outputImageOne").src="img/nothing.jpg";
    document.getElementById("outputImageOne").alt="Не можемо знайти скріншот-(";
	document.getElementById("outputImageTwo").src="img/nothing.jpg";
    document.getElementById("outputImageTwo").alt="Не можемо знайти скріншот-(";
	document.getElementById("outputImageThree").src="img/nothing.jpg";
    document.getElementById("outputImageThree").alt="Не можемо знайти скріншот-(";
	
	document.getElementById("condiBlock").style.borderWidth="1pt";
	document.getElementById("codeBlock").style.borderWidth="1pt";
	document.getElementById("outputBlock").style.borderWidth="1pt";
	document.getElementById("analysisBlock").style.borderWidth="2.5pt";
	document.getElementById("conclusionBlock").style.borderWidth="1pt";
	document.getElementById("goToMenuBlock").style.borderWidth="1pt";
}


function showConclusion() {
	document.getElementById("text").innerHTML="Висновок. Код компілюється успішно. Програма працює корректно відповідно до вимог поставленої задачі. Щоб вдосконалити програму, можна розробити графічний інтерфейс.";
    document.getElementById("outputImageOne").src="img/nothing.jpg";
    document.getElementById("outputImageOne").alt="Не можемо знайти скріншот-(";
	document.getElementById("outputImageTwo").src="img/nothing.jpg";
    document.getElementById("outputImageTwo").alt="Не можемо знайти скріншот-(";
	document.getElementById("outputImageThree").src="img/nothing.jpg";
    document.getElementById("outputImageThree").alt="Не можемо знайти скріншот-(";
	
	document.getElementById("condiBlock").style.borderWidth="1pt";
	document.getElementById("codeBlock").style.borderWidth="1pt";
	document.getElementById("outputBlock").style.borderWidth="1pt";
	document.getElementById("analysisBlock").style.borderWidth="1pt";
	document.getElementById("conclusionBlock").style.borderWidth="2.5pt";
	document.getElementById("goToMenuBlock").style.borderWidth="1pt";
}

function goToMenu() {
	document.getElementById("condiBlock").style.borderWidth="1pt";
	document.getElementById("codeBlock").style.borderWidth="1pt";
	document.getElementById("outputBlock").style.borderWidth="1pt";
	document.getElementById("analysisBlock").style.borderWidth="1pt";
	document.getElementById("conclusionBlock").style.borderWidth="1pt";
	document.getElementById("goToMenuBlock").style.borderWidth="2.5pt";
}