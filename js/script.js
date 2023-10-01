function calculaIMC(){
    var heigth = parseFloat(document.getElementById("heigth").value);
    var weigth = parseFloat(document.getElementById("weigth").value);
    var result = document.getElementById("result");
    var categoria = document.getElementById("categoria");

    if(isNaN(heigth) || isNaN(weigth)){
        result.innerHTML= "Por favor, digite um valor valido";
    } else{

        var imc = weigth / (heigth ** 2);
    var category = "";

    if(imc < 17){
        category = "Muito abaixo do peso";
    } else if(imc >= 17 && imc <= 18.49){
        category = "Abaixo do peso";
    } else if(imc >= 18.50 && imc <= 24.99){
        category = "Peso normal";
    } else if(imc >= 25 && imc <= 29.99){
        category = "Acima do peso";
    } else if(imc >= 30 && imc <= 34.99){
        category = "Obesidade I";
    } else if(imc >= 35 && imc <= 39.99){
        category = "Obesidade II (severa)";
    } else{
        category = "Obesidade III (mórbida)";
    }

    result.innerHTML= "Seu IMC é de: " + imc.toFixed(2);
    categoria.innerHTML = "Sua categoria: " + category;
    }
}