<%-- 
    Document   : agendavisita
    Created on : 30/05/2021, 22:16:42
    Author     : dep
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        
        <link rel="stylesheet" type="text/css" href="assets/node_modules/bootstrap/compiler/bootstrap.css">
        
        <link rel="stylesheet" type="text/css" href="assets/css/estilo_universal.css">
        <link rel="stylesheet" type="text/css" href="assets/css/estilo_formulario_etapas.css">
    </head>
    <body>
        <section class="container-fluid col-md-10 mr-auto ml-auto area">
            <form id="formCadVisita" name="formCadVisita" method="post" action="controller.visita/Cadastro">
                    <ul id="progress">
                        <li class="ativo">Dados do Visitante</li>
                        <li>Dados da Visita</li>
                    </ul>

                    <fieldset>
                        <div class="fieldset-header">
                            <h5 class="fieldset-title">Dados Individuais</h5>
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
                                <div class="form-group col-md-4">
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
                        <button type="button" name="btnProximo2" class="btn btn-success prox acao" value="Proximo">Próximo</button>
                    </fieldset>
                    <fieldset>
                        <div class="fieldset-header">
                            <h5 class="fieldset-title">Dados Militares</h5>
                        </div>
                        <div class="fieldset-body">
                            <div class="row">                                
                                <div class="form-group col-md-4">
                                    <label for="txtPGrad">Posto/Graduação: <span class=campo-obrigatorio>*</span></label>
                                    <select class="form-control" id="txtPGrad" name="txtPGrad">
                                        <option value="0" selected>Selecione um Posto/Graduação...</option>
                                        <option value="1">Teste</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="txtQas">Quadro, Arma ou Serviço: <span class="campo-obrigatorio">*</span></label>
                                    <select class="form-control" id="txtQas" name="txtQas">
                                        <option value="0" selected>Selecione uma Arma...</option>
                                        <option value="1">Teste</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="txtCia">Pertence a qual CIA: <span class="campo-obrigatorio">*</span></label>
                                    <select class="form-control" id="txtCia" name="txtCia">
                                        <option value="0" selected>Selecione uma companhia...</option>
                                        <option value="1">COMPANHIA DE COMANDO E SERVIÇO</option>
                                        <option value="2">COMPANHIA AUXILIAR DE ENSINO</option>
                                        <option value="3">NENHUMA</option>
                                    </select>
                                    <div class="valid-feedback">Selva!</div>
                                    <div class="invalid-feedback">Campo Obrigatório!</div>
                                </div>
                            </div>   
                            
                        </div>
                        <button type="button" name="btnAnterior" class="btn btn-dark anterior acao">Anterior</button>
                            <!--<button type="button" name="btnProximo9" class="btn btn-danger prox acao" value="Proximo">Próximo</button>-->
                            <button type="submit" name="btnSalvar" class="btn btn-success acao">Salvar</button>
                    </fieldset>
            </form>
        </section>
        
        <script src="assets/node_modules/jquery/dist/jquery.js"></script>
        <script src="assets/node_modules/popper.js/dist/popper.js"></script>
        <script src="assets/node_modules/bootstrap/dist/js/bootstrap.js"></script>
        
        <script src="assets/js/formulario/validacao/mascaras.js"></script>
        
        <script src="assets/js/formularioEtapas.js"></script>
        <script src="assets/js/bootstrap-validate.js"></script>
        
        
        
        <script src="assets/js/formulario/validacao/visita/cadastro/funcoesImportantes.js"></script>
        <script src="assets/js/formulario/validacao/visita/cadastro/cadastro.js"></script>
    </body>
</html>
