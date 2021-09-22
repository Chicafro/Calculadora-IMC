function calcularIMC(){
	let edad = Number(document.getElementById('age-input').value);
	let peso = Number( document.getElementById('weight-input').value);
	let altura =parseFloat(document.getElementById('height-input').value);
	console.log(peso, altura,edad);

	guardarLocalStorage(edad,peso,altura);
	//altura = altura / 100;
	let imc =peso/(altura * altura);
	let estado = "";

	if (imc<18.5){
		estado="Usted esta bajo de peso.";
	}
	else if(imc >= 18.5 && imc <= 24.9){
		estado="Usted tiene un peso saludable";
	}
	else if(imc >= 25.0 && imc <=29.9){
		estado="Usted tiene sobre peso";
	}
	else if(imc >= 30.0 && imc<39.9){
		estado="Usted tiene obesidad";
	}
	else if(imc >= 40){
		estado="Usted tiene obesidad extremay de alto riesgo";	
	}else{
		estado= "No existe clasificacion"
	}

	let resEstado = document.getElementById('estado').innerHTML = estado;
	let resImc = document.getElementById('imc').innerHTML = "Su IMC es de: " + imc.toFixed(3);
}

function mostrarSeleccionado(){

	if(document.getElementById('male-gender').checked){
		calcularIMC();
		console.log("IMC Hombre");
	}else{
		calcularIMC();
		console.log("IMC Mujer");
	}
}

function guardarLocalStorage(edad,peso,altura) {
    localStorage.setItem('Edad', edad)
    localStorage.setItem('Peso', peso)
    localStorage.setItem('Altura', altura)  
}
