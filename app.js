const densities = {
  kkcz: 1.060,
  osocze: 1.025,
  kpk: 1.030
};

document.getElementById("calcBtn").addEventListener("click", calculate);

function calculate() {
  const volume = parseFloat(document.getElementById("volume").value);
  const component = document.getElementById("component").value;
  const resultEl = document.getElementById("result");

  if (!volume || volume <= 0) {
    resultEl.textContent = "Podaj prawidłową objętość.";
    return;
  }

  const mass = volume * densities[component];

  resultEl.textContent =
    `Masa brutto: ${mass.toFixed(1)} g`;
}
