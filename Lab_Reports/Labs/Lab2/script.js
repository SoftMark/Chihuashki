function showСondition() {
    document.getElementById("text").innerHTML="Дано три числа. Знайти кількість додатних чисел серед них.";
    document.getElementById("outputImageOne").src="img/nothing.jpg";
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
    document.getElementById("outputImageOne").src="img/codeLab2.1.png";
    document.getElementById("outputImageOne").alt="Не можемо знайти скріншот-(";
	document.getElementById("outputImageTwo").src="img/codeLab2.2.png";
    document.getElementById("outputImageTwo").alt="Не можемо знайти скріншот-(";
	document.getElementById("outputImageThree").src="img/codeLab2.3.png";
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
    document.getElementById("outputImageOne").src="img/outputLab2.jpg";
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
	document.getElementById("text").innerHTML="Аналіз. Програма не має потреби у аналізі, адже її результуючі дані можна перевірити без додаткових розрахунків.";
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
	document.getElementById("text").innerHTML="Висновок. Програма працює корректно. Помилок не видає.";
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