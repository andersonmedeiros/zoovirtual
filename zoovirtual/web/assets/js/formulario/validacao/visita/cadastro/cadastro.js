// Variáveis Auxiliares
//var camposOk = 0; //testar se todos campos foram preenchidos corretamente
var cpfOk = 0; //testar validade do cpf

$(document).ready(function(){
    limpaCampoSelect("select[name=txtNaturalidade]");
    limpaCampoInput("input[name=txtCpf]");
    limpaCampoInput("input[name=txtPassaporte]");
    //limpaCampoInput("input[name=txtNome]");
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
    
});


$(function(){
   

    $('#formCad button[type=button]').click(function(){
       return false; 
    });
    
    $("button[name=btnPesquisar]").click(function(){ 
        if($("select[name=txtNaturalidade]").val() == '0'){
            $("select[name=txtNaturalidade]").removeClass("is-valid");
            $("select[name=txtNaturalidade]").addClass("is-invalid");
            $("select[name=txtNaturalidade]").focus();
            return false;
        }   
        else if($("select[name=txtNaturalidade]").val() == '1'){
            var cpf = $("input[name=txtCpf]").val().replace(".","").replace(".","").replace("-","");
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
            else{
                getVisitanteByCpf(""+$("input[name=txtCpf]").val().replace(".","").replace(".","").replace("-",""));
            }

        }
        else if($("select[name=txtNaturalidade]").val() == '2'){
            if($("input[name=txtPassaporte]").val() === ''){
                $("input[name=txtPassaporte]").removeClass("is-valid");
                $("input[name=txtPassaporte]").addClass("is-invalid");
                $("input[name=txtPassaporte]").focus();
                return false;
            }
            else{
                getVisitanteByCpf($("input[name=txtCpf]").val().replace(".","").replace(".","").replace("-",""));
            }
        }
    });
    
    // Obrigatoriedade
    // --> Início Etapa 1: DADOS INDIVIDUAIS
    $("button[name=btnProximo2]").click(function(){     
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
        }
        else if($("select[name=txtNaturalidade").val() === '1'){
            //CPF
            if(cpf == ''){
                $("input[name=txtCpf]").removeClass("is-valid");
                $("input[name=txtCpf]").addClass("is-invalid");
                $("input[name=txtCpf]").focus();
                $(".invalid-cpf").html("Campo Obrigatório!");
            }
            else if(cpf == '00000000000' || cpf == '11111111111' || cpf == '22222222222' || cpf == '33333333333' ||                 
                    cpf == '44444444444' || cpf == '55555555555' || cpf == '66666666666' || cpf == '77777777777' ||                 
                    cpf == '88888888888' || cpf == '99999999999'){
                $("input[name=txtCpf]").removeClass("is-valid");
                $("input[name=txtCpf]").addClass("is-invalid");
                $("input[name=txtCpf]").focus();
                $(".invalid-cpf").html("CPF Inválido!");
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
            }
            //Sobrenome
            else if($("input[name=txtSobrenome]").val() === ''){
                $("input[name=txtSobrenome]").removeClass("is-valid");
                $("input[name=txtSobrenome]").addClass("is-invalid");
                $("input[name=txtSobrenome]").focus();
            }
            //Sexo
            else if($("select[name=txtSexo]").val() == '0'){
                $("select[name=txtSexo]").removeClass("is-valid");
                $("select[name=txtSexo]").addClass("is-invalid");
                $("select[name=txtSexo]").focus();
            }
            //Data de Nascimento
            else if(dataNasc == ''){
                $("input[name=txtDataNasc]").removeClass("is-valid");
                $("input[name=txtDataNasc]").addClass("is-invalid");
                $("input[name=txtDataNasc]").focus();
                $(".invalid-dataNasc").html("Campo Obrigatório!");
            }       
            else if((anoNasc == anoAtual) && (mesNasc == mesAtual) && (diaNasc > diaAtual)){
                $("input[name=txtDataNasc]").removeClass("is-valid");
                $("input[name=txtDataNasc]").addClass("is-invalid");
                $("input[name=txtDataNasc]").focus();
                $(".invalid-dataNasc").html("Data Inválida! Nascimento após data atual.");
            }       
            else if((anoNasc == anoAtual) && (mesNasc > mesAtual)){
                $("input[name=txtDataNasc]").removeClass("is-valid");
                $("input[name=txtDataNasc]").addClass("is-invalid");
                $("input[name=txtDataNasc]").focus();
                $(".invalid-dataNasc").html("Data Inválida! Nascimento após data atual.");
            }       
            else if((anoNasc > anoAtual)){
                $("input[name=txtDataNasc]").removeClass("is-valid");
                $("input[name=txtDataNasc]").addClass("is-invalid");
                $("input[name=txtDataNasc]").focus();
                $(".invalid-dataNasc").html("Data Inválida! Nascimento após data atual.");
            } 
            else if(email == ''){
                $("input[name=txtEmail]").removeClass("is-valid");
                $("input[name=txtEmail]").addClass("is-invalid");
                $("input[name=txtEmail]").focus();
                $(".invalid-email").html("Campo Obrigatório!");
            }        
            else if(filtro.test(email) == false){
                $("input[name=txtEmail]").removeClass("is-valid");
                $("input[name=txtEmail]").addClass("is-invalid");
                $("input[name=txtEmail]").focus();
                $(".invalid-email").html("Email Inválido!");
            }
            else if(foneCel == ''){
                $("input[name=txtFone]").removeClass("is-valid");
                $("input[name=txtFone]").addClass("is-invalid");
                $("input[name=txtFone]").focus();
                $(".invalid-foneCel").html("Campo Obrigatório!");
            }
            else if(foneCel == '00000000000' || foneCel == '11111111111' || foneCel == '22222222222' || foneCel == '33333333333' ||                 
                    foneCel == '44444444444' || foneCel == '55555555555' || foneCel == '66666666666' || foneCel == '77777777777' ||                 
                    foneCel == '88888888888' || foneCel == '99999999999'){
                $("input[name=txtFone]").removeClass("is-valid");
                $("input[name=txtFone]").addClass("is-invalid");
                $("input[name=txtFone]").focus();
                $(".invalid-foneCel").html("Fone Inválido!");
            }
            else{
                proximo($(this));
            }
        }
        else if($("select[name=txtNaturalidade").val() === '2'){
            if($("input[name=txtPassaporte]").val() === ''){
                $("input[name=txtPassaporte]").removeClass("is-valid");
                $("input[name=txtPassaporte]").addClass("is-invalid");
                $("input[name=txtPassaporte]").focus();
            }
            //Nome
            else if($("input[name=txtNome]").val() === ''){
                $("input[name=txtNome]").removeClass("is-valid");
                $("input[name=txtNome]").addClass("is-invalid");
                $("input[name=txtNome]").focus();
            }
            //Sobrenome
            else if($("input[name=txtSobrenome]").val() === ''){
                $("input[name=txtSobrenome]").removeClass("is-valid");
                $("input[name=txtSobrenome]").addClass("is-invalid");
                $("input[name=txtSobrenome]").focus();
            }
            //Sexo
            else if($("select[name=txtSexo]").val() == '0'){
                $("select[name=txtSexo]").removeClass("is-valid");
                $("select[name=txtSexo]").addClass("is-invalid");
                $("select[name=txtSexo]").focus();
            }
            //Data de Nascimento
            else if(dataNasc == ''){
                $("input[name=txtDataNasc]").removeClass("is-valid");
                $("input[name=txtDataNasc]").addClass("is-invalid");
                $("input[name=txtDataNasc]").focus();
                $(".invalid-dataNasc").html("Campo Obrigatório!");
            }       
            else if((anoNasc == anoAtual) && (mesNasc == mesAtual) && (diaNasc > diaAtual)){
                $("input[name=txtDataNasc]").removeClass("is-valid");
                $("input[name=txtDataNasc]").addClass("is-invalid");
                $("input[name=txtDataNasc]").focus();
                $(".invalid-dataNasc").html("Data Inválida! Nascimento após data atual.");
            }       
            else if((anoNasc == anoAtual) && (mesNasc > mesAtual)){
                $("input[name=txtDataNasc]").removeClass("is-valid");
                $("input[name=txtDataNasc]").addClass("is-invalid");
                $("input[name=txtDataNasc]").focus();
                $(".invalid-dataNasc").html("Data Inválida! Nascimento após data atual.");
            }       
            else if((anoNasc > anoAtual)){
                $("input[name=txtDataNasc]").removeClass("is-valid");
                $("input[name=txtDataNasc]").addClass("is-invalid");
                $("input[name=txtDataNasc]").focus();
                $(".invalid-dataNasc").html("Data Inválida! Nascimento após data atual.");
            }     
            else if(email == ''){
                $("input[name=txtEmail]").removeClass("is-valid");
                $("input[name=txtEmail]").addClass("is-invalid");
                $("input[name=txtEmail]").focus();
                $(".invalid-email").html("Campo Obrigatório!");
            }        
            else if(filtro.test(email) == false){
                $("input[name=txtEmail]").removeClass("is-valid");
                $("input[name=txtEmail]").addClass("is-invalid");
                $("input[name=txtEmail]").focus();
                $(".invalid-email").html("Email Inválido!");
            }
            else if(foneCel == ''){
                $("input[name=txtFone]").removeClass("is-valid");
                $("input[name=txtFone]").addClass("is-invalid");
                $("input[name=txtFone]").focus();
                $(".invalid-foneCel").html("Campo Obrigatório!");
            }
            else if(foneCel == '00000000000' || foneCel == '11111111111' || foneCel == '22222222222' || foneCel == '33333333333' ||                 
                    foneCel == '44444444444' || foneCel == '55555555555' || foneCel == '66666666666' || foneCel == '77777777777' ||                 
                    foneCel == '88888888888' || foneCel == '99999999999'){
                $("input[name=txtFone]").removeClass("is-valid");
                $("input[name=txtFone]").addClass("is-invalid");
                $("input[name=txtFone]").focus();
                $(".invalid-foneCel").html("Fone Inválido!");
            }
            else{
                proximo($(this));
            }
        }
    });
        
    // --> Fim Etapa 5: DADOS CONTATO
    $("button[name=btnProximo6]").click(function(){               
        var filtro = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/;
        var email = $("input[name=txtEmail]").val(); 
        var foneCel01 = $("input[name=txtFone01]").val().replace("-","").replace("(","").replace(")","").replace(" ",""); 
        var foneCelFamiliar = $("input[name=txtFoneFamiliar]").val().replace("-","").replace("(","").replace(")","").replace(" ",""); 
        
        if(email == ''){
            $("input[name=txtEmail]").removeClass("is-valid");
            $("input[name=txtEmail]").addClass("is-invalid");
            $("input[name=txtEmail]").focus();
            $(".invalid-email").html("Campo Obrigatório!");
        }        
        else if(filtro.test(email) == false){
            $("input[name=txtEmail]").removeClass("is-valid");
            $("input[name=txtEmail]").addClass("is-invalid");
            $("input[name=txtEmail]").focus();
            $(".invalid-email").html("Email Inválido!");
        }
        else if(foneCel01 == ''){
            $("input[name=txtFone01]").removeClass("is-valid");
            $("input[name=txtFone01]").addClass("is-invalid");
            $("input[name=txtFone01]").focus();
            $(".invalid-foneCel").html("Campo Obrigatório!");
        }
        else if(foneCel01 == '00000000000' || foneCel01 == '11111111111' || foneCel01 == '22222222222' || foneCel01 == '33333333333' ||                 
                foneCel01 == '44444444444' || foneCel01 == '55555555555' || foneCel01 == '66666666666' || foneCel01 == '77777777777' ||                 
                foneCel01 == '88888888888' || foneCel01 == '99999999999'){
            $("input[name=txtFone01]").removeClass("is-valid");
            $("input[name=txtFone01]").addClass("is-invalid");
            $("input[name=txtFone01]").focus();
            $(".invalid-foneCel").html("Fone Inválido!");
        }
        else if($("input[name=txtFamiliar]").val() == ''){
            $("input[name=txtFamiliar]").removeClass("is-valid");
            $("input[name=txtFamiliar]").addClass("is-invalid");
            $("input[name=txtFamiliar]").focus();
        }
        else if(foneCelFamiliar == ''){
            $("input[name=txtFoneFamiliar]").removeClass("is-valid");
            $("input[name=txtFoneFamiliar]").addClass("is-invalid");
            $("input[name=txtFoneFamiliar]").focus();
            $(".invalid-foneCel").html("Campo Obrigatório!");
        }
        else if(foneCelFamiliar == '00000000000' || foneCelFamiliar == '11111111111' || foneCelFamiliar == '22222222222' || foneCelFamiliar == '33333333333' ||                 
                foneCelFamiliar == '44444444444' || foneCelFamiliar == '55555555555' || foneCelFamiliar == '66666666666' || foneCelFamiliar == '77777777777' ||                 
                foneCelFamiliar == '88888888888' || foneCelFamiliar == '99999999999'){
            $("input[name=txtFoneFamiliar]").removeClass("is-valid");
            $("input[name=txtFoneFamiliar]").addClass("is-invalid");
            $("input[name=txtFoneFamiliar]").focus();
            $(".invalid-foneCel").html("Fone Inválido!");
        }
        else{
            proximo($(this));
        }
    });
    // --> Fim Etapa 5: DADOS CONTATO
    
    // --> Início Etapa 6: DADOS ACESSO
    $("button[name=btnSalvar]").click(function(){  
        if($("input[name=txtSenha]").val() == ''){
            $("input[name=txtSenha]").removeClass("is-valid");
            $("input[name=txtSenha]").addClass("is-invalid");
            $("input[name=txtSenha]").focus();
            return false;
        }
        else if($("input[name=txtSenha]").val() != '' && $("input[name=txtSenha]").val().length < 6){
            $("input[name=txtSenha]").removeClass("is-valid");
            $("input[name=txtSenha]").addClass("is-invalid");
            $("input[name=txtSenha]").focus();
            return false;
        }
        else{
            return true;
        }
    });
    // --> Fim Etapa 6: DADOS ACESSO
});

