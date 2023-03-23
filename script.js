var input_nome = document.getElementById("input-nome")
var nome_card = document.getElementById("nome-card")
var input_number = document.getElementById("input-number")
var numero_card = document.getElementById("numero-card")
var input_mes = document.getElementById("input-mes")
var input_ano = document.getElementById("input-ano")
var data_card = document.getElementById("data-card")
var input_cvc = document.getElementById("input-cvc")
var cvc_card = document.getElementById("cvc-card")
var btn_confirm = document.getElementById("confirm")
var btn_continue = document.getElementById("continue")
var erro_nome = document.getElementById("erro-nome")
var erro_number = document.getElementById("erro-number")
var erro_data = document.getElementById("erro-data")
var erro_cvc = document.getElementById("erro-cvc")
var container_form = document.getElementById("container-form-geral")
var container_completed = document.getElementById("container-completed")
var inputs = document.querySelectorAll("input")
var erros = document.querySelectorAll(".erro")


input_mes.addEventListener("keyup",mudar_data)
input_ano.addEventListener("keyup",mudar_data)
input_nome.addEventListener("keyup",mudar_nome)
input_number.addEventListener("keyup",mudar_numero)
input_cvc.addEventListener("keyup",mudar_cvc)
btn_confirm.addEventListener("click",enviar)
btn_continue.addEventListener("click",confirmar)




function mudar_data(){
    

    if(input_mes.value == "" &&  input_ano.value == "" ){
        data_card.innerHTML = "00/00"
        
    }else if(input_mes.value == "" && input_ano.value != ""){
        data_card.innerHTML = ` 00/${input_ano.value}`

    }else if(input_mes.value != "" && input_ano.value == ""){
        data_card.innerHTML = `${input_mes.value} /00`
    }else{
        data_card.innerHTML = `${input_mes.value}/${input_ano.value}`
    }
    erro_data.style.display = "none"
    input_mes.style.borderColor = "rgba(128, 128, 128, 0.389)" 
    input_ano.style.borderColor = "rgba(128, 128, 128, 0.389)" 

// Validação do mês e ano para números fora do padrão
if( input_mes.value > 12 &&  input_ano.value > 99 ){
    erro_data.innerHTML = "Digite informações válidas! "
    erro_data.style.display = "block"
    input_mes.style.borderColor = "hsl(0, 100%, 66%)" 
    input_ano.style.borderColor = "hsl(0, 100%, 66%)" 
}else if(input_mes.value > 12){
    erro_data.innerHTML = "Digite informações válidas! "
    erro_data.style.display = "block"
    input_mes.style.borderColor = "hsl(0, 100%, 66%)"
}else if(input_ano.value > 99){
    erro_data.innerHTML = "Digite informações válidas! "
    erro_data.style.display = "block"
    input_ano.style.borderColor = "hsl(0, 100%, 66%)"
}
   
}


function mudar_numero(){
        // Validação usada para quando eu apagar o último elemento do input.
    if(input_number.value ==""){
        numero_card.innerHTML = "1234 5678 9123 0000"
        
    }else{
        numero_card.innerHTML = input_number.value
    }

    // Validação usada para verificar letra por letra se a informação dada é correta.
    erro_number.style.display = "none"
    input_number.style.borderColor = "rgba(128, 128, 128, 0.389)" 
    var letras = input_number.value.split('')
    
    letras.forEach(letra => {
       if(parseInt(letra) <= 9 || letra == " "){
          
           }else{
           erro_number.innerHTML = "Digite um número válido, por favor!"
       erro_number.style.display = "block"
       input_number.style.borderColor = "hsl(0, 100%, 66%)" 

       }
     
    });
    
    
}

function mudar_nome(){
    if(input_nome.value == "" ){
        nome_card.innerHTML = "Jane Appleseed"
        
    }else{
        nome_card.innerHTML = input_nome.value
    }
   
    
}
function mudar_cvc(){
    
    erro_cvc.style.display = "none"
    input_cvc.style.borderColor = "rgba(128, 128, 128, 0.389)"
    // Validação usada para quando eu apagar o último elemento do input
    if(input_cvc.value ==""){
        cvc_card.innerHTML = "000"
        
    }else{
        cvc_card.innerHTML = input_cvc.value
    }
// Validação usada para verificar se a informação dada é correta
    if(input_cvc.value >999){
        erro_cvc.innerHTML = "O número precisa ser menor que 999"
        erro_cvc.style.display = "block"
        input_cvc.style.borderColor = "hsl(0, 100%, 66%)"
    }
    
    }

function enviar(){

    // Retirando todos os estilos de erro dos meus inputs
    inputs.forEach((element)=>{
        element.style.display = "block"
        element.style.borderColor = "rgba(128, 128, 128, 0.389)"
    })
    // Retirando todos os estilos dos meus span de erros
    erros.forEach((element)=>{
        element.style.display = "none"
        
    })
    
    // Validação do nome
        if(input_nome.value == ""){
            erro_nome.innerHTML = "Digite o nome, por favor!"
            erro_nome.style.display = "block"
            input_nome.style.borderColor = "hsl(0, 100%, 66%)"
        }else{
            mudar_nome()
        }
         // Validação do número do cartão
         if(input_number.value == ""){
            erro_number.innerHTML = "Digite uma sequência de números válidos! "
            erro_number.style.display = "block"
            input_number.style.borderColor = "hsl(0, 100%, 66%)"
        }else if(input_number.value.length<19){
            erro_number.innerHTML = "A sequência tem menos de 19 caracteres "
            erro_number.style.display = "block"
            input_number.style.borderColor = "hsl(0, 100%, 66%)"
            
            
        }else{
            mudar_numero()
        }
         // Validação do número CVC
        if(input_cvc.value == ""){
            erro_cvc.innerHTML = "Digite uma sequência válida!"
            erro_cvc.style.display = "block"
            input_cvc.style.borderColor = "hsl(0, 100%, 66%)"
         
        }else{
            mudar_cvc()
        }
        
    // Validação do mês e ano se estiver vazio
        if( input_mes.value =="" &&  input_ano.value =="" ){
            erro_data.innerHTML = "Digite informações válidas! "
            erro_data.style.display = "block"
            input_mes.style.borderColor = "hsl(0, 100%, 66%)" 
            input_ano.style.borderColor = "hsl(0, 100%, 66%)" 
        }else if(input_mes.value ==""){
            erro_data.innerHTML = "Digite informações válidas! "
            erro_data.style.display = "block"
            input_mes.style.borderColor = "hsl(0, 100%, 66%)"
        }else if(input_ano.value ==""){
            erro_data.innerHTML = "Digite informações válidas! "
            erro_data.style.display = "block"
            input_ano.style.borderColor = "hsl(0, 100%, 66%)"
        }else{
            mudar_data()
        }
   
 
   
    //  Verificação de erros, ou seja, verificar se alguma caixa de erro está com display block.
    if(erro_nome.style.display == "none" && erro_number.style.display == "none" &&  erro_data.style.display == "none" && 
    erro_cvc.style.display == "none" ){
        container_form.style.display = "none"
        container_completed.style.display = "block"
        var dados_banco =  JSON.parse(localStorage.getItem("dados") || []) 
        var dados_cartao = [nome_card.innerHTML,numero_card.innerHTML,data_card.innerHTML, cvc_card.innerHTML]
        dados_banco.push("dados", JSON.stringify(dados_cartao))
        localStorage.setItem("dados" , JSON.stringify(dados_banco))
        console.log(localStorage.getItem("dados"))

    }
    
    

    }
    
 function confirmar(){
   
    input_nome.value = ''
    input_number.value = ''
    input_mes.value = ''
    input_ano.value = ''
    input_cvc.value = ''
    mudar_nome()
    mudar_numero()
    mudar_data()
    mudar_cvc()
    container_completed.style.display = "none"
    container_form.style.display = "block"
    
 }
    
      

        
    
