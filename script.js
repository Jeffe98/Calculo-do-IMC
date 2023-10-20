function cal(){
    
    var n_altura = document.getElementById("altura") //Valor da altura inserida
    var n_peso = document.getElementById("peso") //Valor do peso inserido 

    var area_resultado = document.getElementById("area_resultado") //Onde será exibido o resultado 

    var r_imc = document.getElementById("imc")//Onde será exibido o resultado com o valor do IMC
    var r_texto_imc = document.getElementById("texto_imc") //Onde será exibido o texto de orientação

    var v_imc = Number.parseFloat(n_peso.value) / (Number.parseFloat(n_altura.value)*Number.parseFloat(n_altura.value)) //Conversão e cálculo do IMC 
    

    console.log(`Resultado: ${v_imc.toFixed(2)}`) //Conversão para deixar o limite de duas casas decimais  e para exibir no console
    r_imc.innerHTML = v_imc.toFixed(2) //Conversão para deixar o limite de duas casas decimais  e para exibir no HTML


    //Condições para diferentes resultados
        if(v_imc <= 18.5){
            r_texto_imc.innerHTML = "<h1>Abaixo do normal</h1> <br> <p>Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.</p>"
            r_texto_imc.style.background = "rgb(246, 245, 222)"
        }

        else if(v_imc >= 18.6 && v_imc <= 24.9) {
            r_texto_imc.innerHTML = "<h1>Normal</h1> <br>  <p>Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.</p>" 
            r_texto_imc.style.background = "rgb(113, 192, 104)"
        }

        else if(v_imc >= 25.0 && v_imc <= 29.9) {
            r_texto_imc.innerHTML = "<h1>Sobrepeso</h1> <br> <p>Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.</p>"
            r_texto_imc.style.background = "rgb(220, 182, 80)"
        }


        else if(v_imc >= 30.0 && v_imc <= 34.9) {
            r_texto_imc.innerHTML = "<h1>Obesidade grau I</h1> <br> <p>Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.</p>"
            r_texto_imc.style.background = "rgb(218, 167, 14)"
        }


        else if(v_imc >= 35.0 && v_imc <= 39.9){
            r_texto_imc.innerHTML = "<h1>Obesidade grau II</h1> <br> <p>Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.</p> "
            r_texto_imc.style.background = "rgb(246, 162, 7)"
        }


        else if(v_imc >= 40.0 ){
            r_texto_imc.innerHTML = "<h1>Obesidade grau III</h1> <br> <p>Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.</p> "
            r_texto_imc.style.background = "rgb(249, 84, 58)"
        }

       

}



