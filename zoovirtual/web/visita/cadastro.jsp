<%-- 
    Document   : cadastro
    Created on : 31/05/2021, 13:51:39
    Author     : dep
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Agendamento Visita</title>
        
        <link rel="stylesheet" type="text/css" href="../assets/node_modules/bootstrap/compiler/bootstrap.css">
        
        <link rel="stylesheet" type="text/css" href="../assets/css/estilo_universal.css">
        <link rel="stylesheet" type="text/css" href="../assets/css/estilo_form.css">
        
        <script type='text/javascript' src='../dwr/engine.js'></script>
        <script type='text/javascript' src='../dwr/interface/FacadeAjax.js'></script>
        <script type='text/javascript' src='../dwr/util.js'></script> 
    </head>
    <body>
        <section class="container-fluid col-md-10 mr-auto ml-auto area">
            <form id="formCad" name="formCad" method="post" action="controller.visita/Cadastro">
                <div id="div-visnencontrado" class="alert alert-danger shadow-sm text-center" role="alert" style="display: none;">
                    Visitante não cadastrado.
                </div>
                        <fieldset style="padding: 15px;">
                            <div class="fieldset-header">
                                <h5 class="fieldset-title">Visitante</h5>
                            </div>
                            <div class="fieldset-body">
                                <div class="row">
                                    <div class="form-group col-md-4" id="div-nat">
                                        <label for="txtNaturalidade">Naturalidade: <span class="campo-obrigatorio">*</span></label>
                                        <select class="form-control" id="txtNaturalidade" name="txtNaturalidade">
                                            <option value="0" selected>Selecione sua Naturalidade...</option>
                                            <option value="1">Brasileiro(a)</option>
                                            <option value="2">Estrangeiro(a)</option>
                                        </select>
                                        <div class="valid-feedback">Selva!</div>
                                        <div class="invalid-feedback">Campo Obrigatório!</div>
                                    </div>
                                    <div class="form-group col-md-4" id="div-cpf" style="display: none;">
                                        <label for="txtCpf">CPF: <span class="campo-obrigatorio">*</span></label>
                                        <input type="text" class="form-control cpf" id="txtCpf" name="txtCpf" placeholder="Ex.: 000.000.000-00">
                                        <div class="valid-feedback">Selva!</div>
                                        <div class="invalid-feedback invalid-cpf">Campo Obrigatório!</div>
                                    </div>
                                    <div class="form-group col-md-4" id="div-passaporte" style="display: none;">
                                        <label for="txtPassaporte">Passaporte: <span class="campo-obrigatorio">*</span></label>
                                        <input type="text" class="form-control" id="txtPassaporte" name="txtPassaporte" placeholder="Ex.: ">
                                        <div class="valid-feedback">Selva!</div>
                                        <div class="invalid-feedback">Campo Obrigatório!</div>
                                    </div>
                                    <div class="form-group col-md-4 align-self-end" style="margin-bottom: 16px;">
                                        <button type="button" id="btn" name="btnPesquisar" class="btn btn-warning btn-tentativas col-md-8" value="Candidatura" >Pesquisar</button>
                                    </div>
                                </div>
                            </div>

                            <div id="formVisitante" class="formVisita" style="display: none;">
                                <div class="header-interno">
                                    <h5 class="title-interno">Visitante</h5>
                                </div>
                                <div class="fieldset-interno">
                                    <div class="row">
                                        <div class="form-group col-md-12">
                                            <label for="txtNome">Visitante: <span class="campo-obrigatorio">*</span></label>
                                            <input type="text" class="form-control" id="txtNome" name="txtNome" placeholder="Ex.: Fulano" readonly>
                                            <div class="valid-feedback">Selva!</div>
                                            <div class="invalid-feedback">Campo Obrigatório!</div>
                                        </div>
                                    </div>
                                </div>



                            </div>            

                            <div id="formVisita" class="formVisitam" style="display: block;">
                                <div class="header-interno">
                                    <h5 class="title-interno">Visita</h5>
                                </div>
                                <div class="fieldset-interno">
                                    <div class="row">
                                        <div class="form-group col-md-4">
                                            <label for="txtDataVisita">Dia: <span class="campo-obrigatorio">*</span></label>
                                            <input type="date" class="form-control" id="txtDataVisita" name="txtDataVisita" placeholder="Ex.: DD/MM/AAAA">
                                            <div class="valid-feedback">Selva!</div>
                                            <div class="invalid-feedback invalid-dataNasc">Campo Obrigatório!</div>
                                        </div>

                                        <div class="form-group col-md-4">
                                            <label for="txtHoraVisita">Hora: <span class="campo-obrigatorio">*</span></label>
                                            <select class="form-control" id="txtHoraVisita" name="txtHoraVisita">
                                                <option value="0" selected>Selecione o Horário da Visita...</option>
                                            </select>
                                            <div class="valid-feedback">Selva!</div>
                                            <div class="invalid-feedback">Campo Obrigatório!</div>
                                        </div>

                                        <div class="form-group col-md-4">
                                            <label for="txtCategoria">Categoria: <span class="campo-obrigatorio">*</span></label>
                                            <select class="form-control" id="txtCategoria" name="txtCategoria">
                                                <option value="0" selected>Selecione a sua Categoria...</option>
                                            </select>
                                            <div class="valid-feedback">Selva!</div>
                                            <div class="invalid-feedback">Campo Obrigatório!</div>
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
        
        
        <script src="../assets/js/dwr/visita/camposDinamicos.js"></script>
        <script src="../assets/js/formulario/validacao/visita/cadastro/funcoesImportantes.js"></script>
        <script src="../assets/js/formulario/validacao/visita/cadastro/cadastro.js"></script>
    </body>
</html>
