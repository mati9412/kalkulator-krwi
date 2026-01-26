document.getElementById("calcBtn").addEventListener("click", calculate);

function calculate() {
	const weight = parseFloat(document.getElementById("weight").value);
	const component = document.getElementById("component").value;
	const resultEl = document.getElementById("result");

	if (!weight || weight <= 0) {
		resultEl.textContent = "Podaj prawidłową masę w gramach.";
		return;
	}

	const volume = calculateVolume(weight, component);

	if (volume === null) {
		resultEl.textContent = "Brak wzoru dla wybranego składnika.";
		return;
	}

	resultEl.textContent = `Objętość: ${volume.toFixed(0)} ml`;
}

// ⬇️ FUNKCJA DO TWOJEJ EDYCJI
function calculateVolume(weight, component) {
	if (component == "kkcz") return (weight - 27) / 1.07;
	else if (component == "osocze") return (weight - 27) / 1.03;
	else if (component == "kozuszek") return (weight - 27) / 1.08;
	else if (component == "kpk") return (weight - 27) / 1.06;
	else return null;
}
