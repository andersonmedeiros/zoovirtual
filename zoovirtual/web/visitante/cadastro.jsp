<%-- 
    Document   : cadastro
    Created on : 31/05/2021, 13:45:47
    Author     : dep
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Cadastro Visitante</title>
        
        <link rel="stylesheet" type="text/css" href="../assets/node_modules/bootstrap/compiler/bootstrap.css">
        
        <link rel="stylesheet" type="text/css" href="../assets/css/estilo_universal.css">
        <link rel="stylesheet" type="text/css" href="../assets/css/estilo_form.css">
    <body>
        <section class="container-fluid col-md-10 mr-auto ml-auto area">
            <%
                if(request.getParameter("e") != null){
                    int retorno = Integer.parseInt(request.getParameter("e"));

                    if(retorno == 1){
                        out.println("<div class=\"alert alert-success shadow-sm text-center\" role=\"alert\">");
                        out.println("       Visitante adicionado com sucesso!");
                        out.println("</div>");
                    }
                    else if(retorno == 2){
                        out.println("<div class=\"alert alert-danger shadow-sm text-center\" role=\"alert\">");
                        out.println("       Erro durante a realização do cadastro.<br>Tente Novamente!");
                        out.println("</div>");
                    }
                }
            %>
            <form id="formCad" name="formCad" method="post" action="controller.visitante/CadastrarVisitante">
                    <fieldset>
                        <div class="fieldset-header">
                            <h5 class="fieldset-title">Visitante</h5>
                        </div>
                        <div class="fieldset-body">
                            <div class="row">
                                <div class="form-group col-md-6" id="div-nat">
                                    <label for="txtNaturalidade">Naturalidade: <span class="campo-obrigatorio">*</span></label>
                                    <select class="form-control" id="txtNaturalidade" name="txtNaturalidade">
                                        <option value="0" selected>Selecione sua Naturalidade...</option>
                                        <option value="1">Brasileiro(a)</option>
                                        <option value="2">Estrangeiro(a)</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-6" id="div-cpf" style="display: none;">
                                    <label for="txtCpf">CPF: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control cpf" id="txtCpf" name="txtCpf" placeholder="Ex.: 000.000.000-00">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback invalid-cpf">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-6" id="div-passaporte" style="display: none;">
                                    <label for="txtPassaporte">Passaporte: <span class="campo-obrigatorio">*</span></label>
                                    <input type="text" class="form-control" id="txtPassaporte" name="txtPassaporte" placeholder="Ex.: ">
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                           
                                <div class="row">
                                    <div class="form-group col-md-4">
                                        <label for="txtNome">Nome: <span class="campo-obrigatorio">*</span></label>
                                        <input type="text" class="form-control" id="txtNome" name="txtNome" placeholder="Ex.: Fulano">
                                        <div class="valid-feedback">Selva!</div>
                                        <div class="invalid-feedback">Campo Obrigatório!</div>
                                    </div>
                                    <div class="form-group col-md-8">
                                        <label for="txtSobrenome">Sobrenome: <span class="campo-obrigatorio">*</span></label>
                                        <input type="text" class="form-control" id="txtSobrenome" name="txtSobrenome" placeholder="Ex.: de Tal">
                                        <div class="valid-feedback">Selva!</div>
                                        <div class="invalid-feedback">Campo Obrigatório!</div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label for="txtSexo">Sexo: <span class="campo-obrigatorio">*</span></label>
                                        <select class="form-control" id="txtSexo" name="txtSexo">
                                            <option value="0" selected>Selecione um sexo...</option>
                                            <option value="M">MASCULINO</option>
                                            <option value="F">FEMININO</option>
                                        </select>
                                        <div class="valid-feedback">Selva!</div>
                                        <div class="invalid-feedback">Campo Obrigatório!</div>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="txtDataNasc">Data de Nascimento: <span class="campo-obrigatorio">*</span></label>
                                        <input type="date" class="form-control" id="txtDataNasc" name="txtDataNasc" placeholder="Ex.: DD/MM/AAAA">
                                        <div class="valid-feedback">Selva!</div>
                                        <div class="invalid-feedback invalid-dataNasc">Campo Obrigatório!</div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="form-group col-md-8">
                                        <label for="txtEmail">Email: <span class="campo-obrigatorio">*</span></label>
                                        <input type="text" class="form-control" id="txtEmail" name="txtEmail" placeholder="Ex.: fulanodetal@gmail.com">
                                        <div class="valid-feedback">Selva!</div>
                                        <div class="invalid-feedback invalid-email">Campo Obrigatório!</div>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="txtFone">Fone: <span class="campo-obrigatorio">*</span></label>
                                        <input type="text" class="form-control fone" id="txtFone" name="txtFone" placeholder="Ex.: (00) 00000-0000">
                                        <div class="valid-feedback">Selva!</div>
                                        <div class="invalid-feedback invalid-foneCel">Campo Obrigatório!</div>
                                    </div>                           
                                </div>
                            </div>
                        </div>         
                        <button type="button" name="btnLimparCadastro" class="btn btn-warning">Limpar</button>
                        <button type="submit" name="btnSalvarCadastro" class="btn btn-success">Salvar</button> 
                    </fieldset>
            </form>
        </section>
        
        <script src="../assets/node_modules/jquery/dist/jquery.js"></script>
        <script src="../assets/node_modules/popper.js/dist/popper.js"></script>
        <script src="../assets/node_modules/bootstrap/dist/js/bootstrap.js"></script>
        
        <script src="../assets/js/formulario/validacao/mascaras.js"></script>
        
        <script src="../assets/js/formularioEtapas.js"></script>
        <script src="../assets/js/bootstrap-validate.js"></script>
        
        <script src="../assets/js/formulario/validacao/visitante/cadastro/funcoesImportantes.js"></script>
        <script src="../assets/js/formulario/validacao/visitante/cadastro/cadastro.js"></script>
    </body>
</html>
