function showСondition() {
    document.getElementById("text").innerHTML="Завдання 1. Напишіть програму, яка запитувала б у користувача:";
    document.getElementById("outputImage").src="img/conditionLab1.1.jpg";
    document.getElementById("outputImage").alt="Не можемо знайти скріншот-(";
	
	document.getElementById("condiBlock").style.borderWidth="2.5pt";
	document.getElementById("codeBlock").style.borderWidth="1pt";
	document.getElementById("outputBlock").style.borderWidth="1pt";
	document.getElementById("analysisBlock").style.borderWidth="1pt";
	document.getElementById("conclusionBlock").style.borderWidth="1pt";
	document.getElementById("taskTwoBlock").style.borderWidth="1pt";
	document.getElementById("goToMenuBlock").style.borderWidth="1pt";
}


function showСode() {
    document.getElementById("text").innerHTML="Код програми:";
    document.getElementById("outputImage").src="img/codeLab1.1.png";
    document.getElementById("outputImage").alt="Не можемо знайти скріншот-(";
	
	document.getElementById("condiBlock").style.borderWidth="1pt";
	document.getElementById("codeBlock").style.borderWidth="2.5pt";
	document.getElementById("outputBlock").style.borderWidth="1pt";
	document.getElementById("analysisBlock").style.borderWidth="1pt";
	document.getElementById("conclusionBlock").style.borderWidth="1pt";
	document.getElementById("taskTwoBlock").style.borderWidth="1pt";
	document.getElementById("goToMenuBlock").style.borderWidth="1pt";
}


function showOutput() {
    document.getElementById("text").innerHTML="Приклад виконаного коду:";
    document.getElementById("outputImage").src="img/outputLab1.1.jpg";
    document.getElementById("outputImage").alt="Не можемо знайти скріншот-(";
	
	document.getElementById("condiBlock").style.borderWidth="1pt";
	document.getElementById("codeBlock").style.borderWidth="1pt";
	document.getElementById("outputBlock").style.borderWidth="2.5pt";
	document.getElementById("analysisBlock").style.borderWidth="1pt";
	document.getElementById("conclusionBlock").style.borderWidth="1pt";
	document.getElementById("taskTwoBlock").style.borderWidth="1pt";
	document.getElementById("goToMenuBlock").style.borderWidth="1pt";
}

function showAnalysis() {
	document.getElementById("text").innerHTML="Аналіз. Програма не має потреби у аналізі, адже її результуючі дані можна перевірити без додаткових розрахунків.";
    document.getElementById("outputImage").src="img/nothing.jpg";
    document.getElementById("outputImage").alt="Не можемо знайти скріншот-(";
	
	document.getElementById("condiBlock").style.borderWidth="1pt";
	document.getElementById("codeBlock").style.borderWidth="1pt";
	document.getElementById("outputBlock").style.borderWidth="1pt";
	document.getElementById("analysisBlock").style.borderWidth="2.5pt";
	document.getElementById("conclusionBlock").style.borderWidth="1pt";
	document.getElementById("goToMenuBlock").style.borderWidth="1pt";
	document.getElementById("taskTwoBlock").style.borderWidth="1pt";
}


function showConclusion() {
	document.getElementById("text").innerHTML="Висновок. Програма працює корректно, згідно з вимог завдання. Для того, щоб її покращити, варто зробити графічний інтерфейс та зменшити кількість допустимих для введення символів, та встановити заборону на введення для одного значення декількох слів.";
    document.getElementById("outputImage").src="img/nothing.jpg";
    document.getElementById("outputImage").alt="Не можемо знайти скріншот-(";
	
	
	document.getElementById("condiBlock").style.borderWidth="1pt";
	document.getElementById("codeBlock").style.borderWidth="1pt";
	document.getElementById("outputBlock").style.borderWidth="1pt";
	document.getElementById("analysisBlock").style.borderWidth="1pt";
	document.getElementById("conclusionBlock").style.borderWidth="2.5pt";
	document.getElementById("goToMenuBlock").style.borderWidth="1pt";
	document.getElementById("taskTwoBlock").style.borderWidth="1pt";
}


function goToTaskTwo() {
	document.getElementById("condiBlock").style.borderWidth="1pt";
	document.getElementById("codeBlock").style.borderWidth="1pt";
	document.getElementById("outputBlock").style.borderWidth="1pt";
	document.getElementById("analysisBlock").style.borderWidth="1pt";
	document.getElementById("conclusionBlock").style.borderWidth="1pt";
	document.getElementById("taskTwoBlock").style.borderWidth="2.5pt";
	document.getElementById("goToMenuBlock").style.borderWidth="1pt";
}


function goToMenu() {
	document.getElementById("condiBlock").style.borderWidth="1pt";
	document.getElementById("codeBlock").style.borderWidth="1pt";
	document.getElementById("outputBlock").style.borderWidth="1pt";
	document.getElementById("analysisBlock").style.borderWidth="1pt";
	document.getElementById("conclusionBlock").style.borderWidth="1pt";
	document.getElementById("taskTwoBlock").style.borderWidth="1pt";
	document.getElementById("goToMenuBlock").style.borderWidth="2.5pt";
}