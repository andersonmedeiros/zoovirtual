// Variáveis Auxiliares
var camposOk = 0; //testar se todos campos foram preenchidos corretamente
var cpfOk = 0; //testar validade do cpf

// --> Início Funções comuns a todas as etapas
// Acionamento de formulário
function acionamentoForm(select, div){
    if($(select).val() == 's'){
        $(div).css("display", "block");  
    }
};
function acionamentoFormGravidez(select, div){
    if($(select).val() == 'F'){
        $(div).css("display", "block");  
    }
};

function somenteNumero(campo) {
    // Somente números
    $(campo).on('keydown', function(e) {
        var keyCode = e.keyCode || e.which,
            pattern = /\d/,
            // Permite somente Backspace, Delete e as setas direita e esquerda (além dos números)
            keys = [8,9,37,39,46,48,49,50,51,52,53,54,55,56,57,96,97,98,99,100,101,102,103,104,105];

        if(!pattern.test(String.fromCharCode(keyCode)) && $.inArray(keyCode, keys) === -1) {
            return false;
        }
    });
};

// Limpeza de campos Input
function limpaCampoInput(campo){
    $(campo).val('');    
    $(campo).removeClass("is-valid");
    $(campo).removeClass("is-invalid");
    $(campo).prop("readonly", false);
}

// Limpeza de campos Select
function limpaCampoSelect(campo){
    $(campo).val('0');    
    $(campo).removeClass("is-valid");
    $(campo).removeClass("is-invalid");
    $(campo).prop("readonly", false);
}
// --> Fim Funções comuns a todas as etapas

// Ao carregar ou recarregar a página
// Funções
// --> Início comum a mais de uma etapa
// Select
function validSelect(campo){
    if($(campo).val() != '0'){
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};

// Input
function validInput(campo){
    if($(campo).val() != ''){
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};



// Data de nascimento
function validDataNasc(campo){
    var dataNasc = $(campo).val();
    var dataNascSplit = dataNasc.split('-');        
    var diaNasc = dataNascSplit[2];
    var mesNasc = dataNascSplit[1];
    var anoNasc = dataNascSplit[0];

    var dataAtual = new Date();
    var diaAtual = dataAtual.getDate();
    var mesAtual = (dataAtual.getMonth() + 1);
    var anoAtual = dataAtual.getFullYear();

    if(dataNasc == ''){
    }       
    else if((anoNasc == anoAtual) && (mesNasc == mesAtual) && (diaNasc > diaAtual)){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-dataNasc").html("Data Inválida! Nascimento após data atual.");
    }       
    else if((anoNasc == anoAtual) && (mesNasc > mesAtual)){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-dataNasc").html("Data Inválida! Nascimento após data atual.");
    }       
    else if((anoNasc > anoAtual)){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-dataNasc").html("Data Inválida! Nascimento após data atual.");
    }    
    else{
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};

// Email
function validEmail(campo){
    var filtro = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/;
    var email = $(campo).val();
    if(email == ''){
    }
    else if(filtro.test(email) == false){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-email").html("Email Inválido!");
    }
    else{     
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};

// Fone celular
function validFoneCel(campo){  
    var foneCel = $(campo).val().replace("-","").replace("(","").replace(")","").replace(" ","");
    if(foneCel == ''){
    }
    else if(foneCel == '00000000000' || foneCel == '11111111111' || foneCel == '22222222222' || foneCel == '33333333333' ||                 
            foneCel == '44444444444' || foneCel == '55555555555' || foneCel == '66666666666' || foneCel == '77777777777' ||                 
            foneCel == '88888888888' || foneCel == '99999999999'){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-foneCel").html("Fone Inválido!");
    }
    else{
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};

// --> Fim Comum a mais de uma etapa

// --> Início Etapa 1: DADOS INDIVIDUAIS


//CPF
function validCPF(campo){
    var cpf = $(campo).val().replace(".","").replace(".","").replace("-","");
    
    if(cpf == ''){
        cpfOk = 0;
    }
    else if(cpf == '00000000000' || cpf == '11111111111' || cpf == '22222222222' || cpf == '33333333333' ||                 
            cpf == '44444444444' || cpf == '55555555555' || cpf == '66666666666' || cpf == '77777777777' ||                 
            cpf == '88888888888' || cpf == '99999999999'){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-cpf").html("CPF Inválido!");
        cpfOk = 0;
    }else{
        // Valida 1o digito	
        var add = 0;	
        for (var i=0; i < 9; i ++)		
            add += parseInt(cpf.charAt(i)) * (10 - i);	
            var rev = 11 - (add % 11);	
            if (rev == 10 || rev == 11)		
                rev = 0;	
            if (rev != parseInt(cpf.charAt(9))){
                $(campo).removeClass("is-valid");
                $(campo).addClass("is-invalid");
                $(".invalid-cpf").html("CPF Inválido!");
                cpfOk = 0;
            }else{
                $(campo).removeClass("is-invalid");
                $(campo).addClass("is-valid");
                cpfOk = 1;
            }
        // Valida 2o digito	
        add = 0;	
        for (var i = 0; i < 10; i ++)		
            add += parseInt(cpf.charAt(i)) * (11 - i);	
        rev = 11 - (add % 11);	
        if (rev == 10 || rev == 11)	
            rev = 0;	
        if (rev != parseInt(cpf.charAt(10))){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-cpf").html("CPF Inválido!");
            cpfOk = 0;
        }else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
            cpfOk = 1;
        }    
    } 
};



//Ao mudar o valor do campo
//Funções
// --> Início Comum a mais de uma etapas
//Select
function validSelectTReal(campo){
    $(campo).change(function(){
        if($(campo).val() != '0'){
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }else{
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
        }
    });    
};

//Input
function validInputTReal(campo){
    $(campo).change(function(){
        if($(campo).val() == "00000000"){
            $(campo).val('');
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
        }
        if($(campo).val() != ''){
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }else{
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
        }
    });
};

function validInputNuloTReal(campo){
    $(campo).change(function(){
        if($(campo).val() != ''){
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }else{
            $(campo).removeClass("is-valid");
            $(campo).removeClass("is-invalid");
        }
    });
};


// Data de nascimento
function validDataNascTReal(campo){ 
    $(campo).change(function(){
        var dataNasc = $(campo).val();
        var dataNascSplit = dataNasc.split('-');        
        var diaNasc = dataNascSplit[2];
        var mesNasc = dataNascSplit[1];
        var anoNasc = dataNascSplit[0];
        
        var dataAtual = new Date();
        var diaAtual = dataAtual.getDate();
        var mesAtual = (dataAtual.getMonth() + 1);
        var anoAtual = dataAtual.getFullYear();        
        
        if(dataNasc == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataNasc").html("Campo Obrigatório!");
        }       
        else if((anoNasc == anoAtual) && (mesNasc == mesAtual) && (diaNasc > diaAtual)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataNasc").html("Data Inválida! Nascimento após data atual.");
        }       
        else if((anoNasc == anoAtual) && (mesNasc > mesAtual)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataNasc").html("Data Inválida! Nascimento após data atual.");
        }       
        else if((anoNasc > anoAtual)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataNasc").html("Data Inválida! Nascimento após data atual.");
        }   
        else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
    });    
};

// Email
function validEmailTReal(campo){
    $(campo).change(function(){
        var filtro = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/;
        var email = $(campo).val();
        if(email == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-email").html("Campo Obrigatório!");
        }        
        else if(filtro.test(email)){
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
        else{            
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-email").html("Email Inválido!");
        }
    });
};

// Fone celular
function validFoneCelTReal(campo){  
    $(campo).change(function(){
        var foneCel = $(campo).val().replace("-","").replace("(","").replace(")","").replace(" ","");
        if(foneCel == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-foneCel").html("Campo Obrigatório!");
        }
        else if(foneCel == '00000000000' || foneCel == '11111111111' || foneCel == '22222222222' || foneCel == '33333333333' ||                 
                foneCel == '44444444444' || foneCel == '55555555555' || foneCel == '66666666666' || foneCel == '77777777777' ||                 
                foneCel == '88888888888' || foneCel == '99999999999'){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-foneCel").html("Fone Inválido!");
        }
        else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
    });
};


//CPF
function validCPFTReal(campo){
    $(campo).change(function(){
        var cpf = $(campo).val().replace(".","").replace(".","").replace("-","");
        if(cpf == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-cpf").html("Campo Obrigatório!");
            cpfOk = 0;
        }
        else if(cpf == '00000000000' || cpf == '11111111111' || cpf == '22222222222' || cpf == '33333333333' ||                 
                cpf == '44444444444' || cpf == '55555555555' || cpf == '66666666666' || cpf == '77777777777' ||                 
                cpf == '88888888888' || cpf == '99999999999'){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-cpf").html("CPF Inválido!");
            cpfOk = 0;
        }else{
            // Valida 1o digito	
            var add = 0;	
            for (var i=0; i < 9; i ++)		
                add += parseInt(cpf.charAt(i)) * (10 - i);	
                var rev = 11 - (add % 11);	
                if (rev == 10 || rev == 11)		
                    rev = 0;	
                if (rev != parseInt(cpf.charAt(9))){
                    $(campo).removeClass("is-valid");
                    $(campo).addClass("is-invalid");
                    $(".invalid-cpf").html("CPF Inválido!");
                    cpfOk = 0;
                }else{
                    $(campo).removeClass("is-invalid");
                    $(campo).addClass("is-valid");
                    cpfOk = 1;
                }
            // Valida 2o digito	
            add = 0;	
            for (var i = 0; i < 10; i ++)		
                add += parseInt(cpf.charAt(i)) * (11 - i);	
            rev = 11 - (add % 11);	
            if (rev == 10 || rev == 11)	
                rev = 0;	
            if (rev != parseInt(cpf.charAt(10))){
                $(campo).removeClass("is-valid");
                $(campo).addClass("is-invalid");
                $(".invalid-cpf").html("CPF Inválido!");
                cpfOk = 0;
            }else{
                $(campo).removeClass("is-invalid");
                $(campo).addClass("is-valid");
                cpfOk = 1;
            }    
        }        
    });
};

