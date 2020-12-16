function showСondition() {
    document.getElementById("text").innerHTML="";
    document.getElementById("outputImageOne").src="img/conditionLab3.jpg";
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
    document.getElementById("outputImageOne").src="img/codeLab3.1.png";
    document.getElementById("outputImageOne").alt="Не можемо знайти скріншот-(";
	document.getElementById("outputImageTwo").src="img/codeLab3.2.png";
    document.getElementById("outputImageTwo").alt="Не можемо знайти скріншот-(";
	document.getElementById("outputImageThree").src="img/codeLab3.3.png";
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
    document.getElementById("outputImageOne").src="img/outputLab3.1.jpg";
    document.getElementById("outputImageOne").alt="Не можемо знайти скріншот-(";
	document.getElementById("outputImageTwo").src="img/outputLab3.2.jpg";
    document.getElementById("outputImageTwo").alt="Не можемо знайти скріншот-(";
	document.getElementById("outputImageThree").src="img/outputLab3.3.jpg";
    document.getElementById("outputImageThree").alt="Не можемо знайти скріншот-(";

	
	document.getElementById("condiBlock").style.borderWidth="1pt";
	document.getElementById("codeBlock").style.borderWidth="1pt";
	document.getElementById("outputBlock").style.borderWidth="2.5pt";
	document.getElementById("analysisBlock").style.borderWidth="1pt";
	document.getElementById("conclusionBlock").style.borderWidth="1pt";
	document.getElementById("goToMenuBlock").style.borderWidth="1pt";
}


function showAnalysis() {
	document.getElementById("text").innerHTML="Аналіз. Програма не має потреби у аналізі, адже її результуючі дані можна перевірити без додаткових розрахунків. Програма не має потреби у аналізі, адже її результуючі дані можна перевірити без додаткових розрахунків.";
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