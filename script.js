function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);

  if (!height || !weight || height <= 0 || weight <= 0) {
    document.getElementById("result").textContent =
      "Please enter valid height and weight!";
    return;
  }

  const heightInMeters = height / 100;
  const bmi = (weight / heightInMeters ** 2).toFixed(2);

  let category = "";
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  document.getElementById(
    "result"
  ).textContent = `Your BMI is ${bmi} (${category}).`;
}
