// Variáveis Auxiliares
//var camposOk = 0; //testar se todos campos foram preenchidos corretamente
var cpfOk = 0; //testar validade do cpf

$(document).ready(function(){
    limpaCampoSelect("select[name=txtNaturalidade]");
    limpaCampoInput("input[name=txtCpf]");
    limpaCampoInput("input[name=txtPassaporte]");
    limpaCampoInput("input[name=txtNome]");
    limpaCampoInput("input[name=txtSobrenome]");
    limpaCampoSelect("select[name=txtSexo]");
    limpaCampoInput("input[name=txtDataNasc]");
    limpaCampoInput("input[name=txtEmail]");
    limpaCampoInput("input[name=txtFone]");
// --> Início Etapa 1: DADOS DO VISITANTE
    //Campo Select Naturalidade
    validSelect("select[name=txtNaturalidade]");
    validSelectTReal("select[name=txtNaturalidade]");
    
    //Campo Input CPF
    validCPF("input[name=txtCpf]");
    validCPFTReal("input[name=txtCpf]");
    
    //Campo Input Passaporte
    validInput("input[name=txtPassaporte]");
    validInputTReal("input[name=txtPassaporte]");
    
    //Campo Input Nome
    validInput("input[name=txtNome]");
    validInputTReal("input[name=txtNome]");
    
    //Campo Input Sobrenome
    validInput("input[name=txtSobrenome]");
    validInputTReal("input[name=txtSobrenome]");
    
    //Campo Select Sexo
    validSelect("select[name=txtSexo]");
    validSelectTReal("select[name=txtSexo]");
    
    //Campo Select Data Nascimento
    validDataNasc("input[name=txtDataNasc]")
    validDataNascTReal("input[name=txtDataNasc]")
    
    //Campo Input Email
    validEmail("input[name=txtEmail]");
    validEmailTReal("input[name=txtEmail]");
    
    //Campo Input Fone
    validFoneCel("input[name=txtFone");
    validFoneCelTReal("input[name=txtFone");
    
});


$(function(){
    $('#formCad button[type=button]').click(function(){
       return false; 
    });
    
    // Obrigatoriedade
    // --> Início Etapa 1: DADOS INDIVIDUAIS
    $("button[name=btnSalvarCadastro]").click(function(){     
        var dataNasc = $("input[name=txtDataNasc]").val();
        var dataNascSplit = dataNasc.split('-');        
        var diaNasc = dataNascSplit[2];
        var mesNasc = dataNascSplit[1];
        var anoNasc = dataNascSplit[0];
        
        var dataAtual = new Date();
        var diaAtual = dataAtual.getDate();
        var mesAtual = (dataAtual.getMonth() + 1);
        var anoAtual = dataAtual.getFullYear();
        
        var cpf = $("input[name=txtCpf]").val().replace(".","").replace(".","").replace("-","");
        
        
        
        var foneCel = $("input[name=txtFone]").val().replace("-","").replace("(","").replace(")","").replace(" ","");
        
        var filtro = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/;
        var email = $("input[name=txtEmail]").val();            
        
        //Naturalidade
        if($("select[name=txtNaturalidade]").val() === '0'){
            $("select[name=txtNaturalidade]").removeClass("is-valid");
            $("select[name=txtNaturalidade]").addClass("is-invalid");
            $("select[name=txtNaturalidade]").focus();
            return false;
        }
        else if($("select[name=txtNaturalidade").val() === '1'){
            //CPF
            if(cpf == ''){
                $("input[name=txtCpf]").removeClass("is-valid");
                $("input[name=txtCpf]").addClass("is-invalid");
                $("input[name=txtCpf]").focus();
                $(".invalid-cpf").html("Campo Obrigatório!");
                return false;
            }
            else if(cpf == '00000000000' || cpf == '11111111111' || cpf == '22222222222' || cpf == '33333333333' ||                 
                    cpf == '44444444444' || cpf == '55555555555' || cpf == '66666666666' || cpf == '77777777777' ||                 
                    cpf == '88888888888' || cpf == '99999999999'){
                $("input[name=txtCpf]").removeClass("is-valid");
                $("input[name=txtCpf]").addClass("is-invalid");
                $("input[name=txtCpf]").focus();
                $(".invalid-cpf").html("CPF Inválido!");
                return false;
            }        
            else if(cpfOk == 0){
                // Valida 1o digito	
                var add = 0;	
                for (var i=0; i < 9; i ++)		
                    add += parseInt(cpf.charAt(i)) * (10 - i);	
                var rev = 11 - (add % 11);	
                if (rev == 10 || rev == 11)		
                    rev = 0;	
                if (rev != parseInt(cpf.charAt(9))){
                    $("input[name=txtCpf]").removeClass("is-valid");
                    $("input[name=txtCpf]").addClass("is-invalid");
                    $("input[name=txtCpf]").focus();
                    $(".invalid-cpf").html("CPF Inválido!");
                    return false;

                }else{
                    $("input[name=txtCpf]").removeClass("is-invalid");
                    $("input[name=txtCpf]").addClass("is-valid");
                    cpfOk=1;
                }
                // Valida 2o digito	
                add = 0;	
                for (var i = 0; i < 10; i ++)		
                    add += parseInt(cpf.charAt(i)) * (11 - i);	
                rev = 11 - (add % 11);	
                if (rev == 10 || rev == 11)	
                    rev = 0;	
                if (rev != parseInt(cpf.charAt(10))){
                    $("input[name=txtCpf]").removeClass("is-valid");
                    $("input[name=txtCpf]").addClass("is-invalid");
                    $("input[name=txtCpf]").focus();
                    $(".invalid-cpf").html("CPF Inválido!");
                    return false;

                }else{
                    $("input[name=txtCpf]").removeClass("is-invalid");
                    $("input[name=txtCpf]").addClass("is-valid");
                    cpfOk=1;
                }    
            } 
            //Nome
            else if($("input[name=txtNome]").val() === ''){
                $("input[name=txtNome]").removeClass("is-valid");
                $("input[name=txtNome]").addClass("is-invalid");
                $("input[name=txtNome]").focus();
                return false;
            }
            //Sobrenome
            else if($("input[name=txtSobrenome]").val() === ''){
                $("input[name=txtSobrenome]").removeClass("is-valid");
                $("input[name=txtSobrenome]").addClass("is-invalid");
                $("input[name=txtSobrenome]").focus();
                return false;
            }
            //Sexo
            else if($("select[name=txtSexo]").val() == '0'){
                $("select[name=txtSexo]").removeClass("is-valid");
                $("select[name=txtSexo]").addClass("is-invalid");
                $("select[name=txtSexo]").focus();
                return false;
            }
            //Data de Nascimento
            else if(dataNasc == ''){
                $("input[name=txtDataNasc]").removeClass("is-valid");
                $("input[name=txtDataNasc]").addClass("is-invalid");
                $("input[name=txtDataNasc]").focus();
                $(".invalid-dataNasc").html("Campo Obrigatório!");
                return false;
            }       
            else if((anoNasc == anoAtual) && (mesNasc == mesAtual) && (diaNasc > diaAtual)){
                $("input[name=txtDataNasc]").removeClass("is-valid");
                $("input[name=txtDataNasc]").addClass("is-invalid");
                $("input[name=txtDataNasc]").focus();
                $(".invalid-dataNasc").html("Data Inválida! Nascimento após data atual.");
                return false;
            }       
            else if((anoNasc == anoAtual) && (mesNasc > mesAtual)){
                $("input[name=txtDataNasc]").removeClass("is-valid");
                $("input[name=txtDataNasc]").addClass("is-invalid");
                $("input[name=txtDataNasc]").focus();
                $(".invalid-dataNasc").html("Data Inválida! Nascimento após data atual.");
                return false;
            }       
            else if((anoNasc > anoAtual)){
                $("input[name=txtDataNasc]").removeClass("is-valid");
                $("input[name=txtDataNasc]").addClass("is-invalid");
                $("input[name=txtDataNasc]").focus();
                $(".invalid-dataNasc").html("Data Inválida! Nascimento após data atual.");
                return false;
            } 
            else if(email == ''){
                $("input[name=txtEmail]").removeClass("is-valid");
                $("input[name=txtEmail]").addClass("is-invalid");
                $("input[name=txtEmail]").focus();
                $(".invalid-email").html("Campo Obrigatório!");
                return false;
            }        
            else if(filtro.test(email) == false){
                $("input[name=txtEmail]").removeClass("is-valid");
                $("input[name=txtEmail]").addClass("is-invalid");
                $("input[name=txtEmail]").focus();
                $(".invalid-email").html("Email Inválido!");
                return false;
            }
            else if(foneCel == ''){
                $("input[name=txtFone]").removeClass("is-valid");
                $("input[name=txtFone]").addClass("is-invalid");
                $("input[name=txtFone]").focus();
                $(".invalid-foneCel").html("Campo Obrigatório!");
                return false;
            }
            else if(foneCel == '00000000000' || foneCel == '11111111111' || foneCel == '22222222222' || foneCel == '33333333333' ||                 
                    foneCel == '44444444444' || foneCel == '55555555555' || foneCel == '66666666666' || foneCel == '77777777777' ||                 
                    foneCel == '88888888888' || foneCel == '99999999999'){
                $("input[name=txtFone]").removeClass("is-valid");
                $("input[name=txtFone]").addClass("is-invalid");
                $("input[name=txtFone]").focus();
                $(".invalid-foneCel").html("Fone Inválido!");
                return false;
            }
            else{
                return true;
            }
        }
        else if($("select[name=txtNaturalidade").val() === '2'){
            if($("input[name=txtPassaporte]").val() === ''){
                $("input[name=txtPassaporte]").removeClass("is-valid");
                $("input[name=txtPassaporte]").addClass("is-invalid");
                $("input[name=txtPassaporte]").focus();
                return false;
            }
            //Nome
            else if($("input[name=txtNome]").val() === ''){
                $("input[name=txtNome]").removeClass("is-valid");
                $("input[name=txtNome]").addClass("is-invalid");
                $("input[name=txtNome]").focus();
                return false;
            }
            //Sobrenome
            else if($("input[name=txtSobrenome]").val() === ''){
                $("input[name=txtSobrenome]").removeClass("is-valid");
                $("input[name=txtSobrenome]").addClass("is-invalid");
                $("input[name=txtSobrenome]").focus();
                return false;
            }
            //Sexo
            else if($("select[name=txtSexo]").val() == '0'){
                $("select[name=txtSexo]").removeClass("is-valid");
                $("select[name=txtSexo]").addClass("is-invalid");
                $("select[name=txtSexo]").focus();
                return false;
            }
            //Data de Nascimento
            else if(dataNasc == ''){
                $("input[name=txtDataNasc]").removeClass("is-valid");
                $("input[name=txtDataNasc]").addClass("is-invalid");
                $("input[name=txtDataNasc]").focus();
                $(".invalid-dataNasc").html("Campo Obrigatório!");
                return false;
            }       
            else if((anoNasc == anoAtual) && (mesNasc == mesAtual) && (diaNasc > diaAtual)){
                $("input[name=txtDataNasc]").removeClass("is-valid");
                $("input[name=txtDataNasc]").addClass("is-invalid");
                $("input[name=txtDataNasc]").focus();
                $(".invalid-dataNasc").html("Data Inválida! Nascimento após data atual.");
                return false;
            }       
            else if((anoNasc == anoAtual) && (mesNasc > mesAtual)){
                $("input[name=txtDataNasc]").removeClass("is-valid");
                $("input[name=txtDataNasc]").addClass("is-invalid");
                $("input[name=txtDataNasc]").focus();
                $(".invalid-dataNasc").html("Data Inválida! Nascimento após data atual.");
                return false;
            }       
            else if((anoNasc > anoAtual)){
                $("input[name=txtDataNasc]").removeClass("is-valid");
                $("input[name=txtDataNasc]").addClass("is-invalid");
                $("input[name=txtDataNasc]").focus();
                $(".invalid-dataNasc").html("Data Inválida! Nascimento após data atual.");
                return false;
            }     
            else if(email == ''){
                $("input[name=txtEmail]").removeClass("is-valid");
                $("input[name=txtEmail]").addClass("is-invalid");
                $("input[name=txtEmail]").focus();
                $(".invalid-email").html("Campo Obrigatório!");
                return false;
            }        
            else if(filtro.test(email) == false){
                $("input[name=txtEmail]").removeClass("is-valid");
                $("input[name=txtEmail]").addClass("is-invalid");
                $("input[name=txtEmail]").focus();
                $(".invalid-email").html("Email Inválido!");
                return false;
            }
            else if(foneCel == ''){
                $("input[name=txtFone]").removeClass("is-valid");
                $("input[name=txtFone]").addClass("is-invalid");
                $("input[name=txtFone]").focus();
                $(".invalid-foneCel").html("Campo Obrigatório!");
                return false;
            }
            else if(foneCel == '00000000000' || foneCel == '11111111111' || foneCel == '22222222222' || foneCel == '33333333333' ||                 
                    foneCel == '44444444444' || foneCel == '55555555555' || foneCel == '66666666666' || foneCel == '77777777777' ||                 
                    foneCel == '88888888888' || foneCel == '99999999999'){
                $("input[name=txtFone]").removeClass("is-valid");
                $("input[name=txtFone]").addClass("is-invalid");
                $("input[name=txtFone]").focus();
                $(".invalid-foneCel").html("Fone Inválido!");
                return false;
            }
            else{
                return true;
            }
        }
    });
});

