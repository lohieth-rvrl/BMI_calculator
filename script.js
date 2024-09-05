function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const heightInCm = parseFloat(document.getElementById('height').value);
    
    if (isNaN(weight) || isNaN(heightInCm) || weight <= 0 || heightInCm <= 0) {
        alert('Please enter valid positive numbers for weight and height.');
        return;
    }

    const heightInM = heightInCm / 100;
     
    const bmi = weight / (heightInM * heightInM);
    
    let category;
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    document.getElementById('bmiValue').textContent = bmi.toFixed(1);
    document.getElementById('bmiAnalysis').textContent = `Your BMI falls into the ${category} category.`;

    if (category == "Underweight"){
        document.getElementById("container").style.boxShadow = "0 0 50px yellow";
    }else if (category == "Normal weight"){
        document.getElementById("container").style.boxShadow = "0 0 200px green";
    }else if (category == "Overweight"){
        document.getElementById("container").style.boxShadow = "0 0 100px #ec2c2c";
    }else if (category == "Obesity"){
        document.getElementById("container").style.boxShadow = "0 0 3000px red";
        document.getElementById("container").style.backgroundColor = "red";
    }
}
