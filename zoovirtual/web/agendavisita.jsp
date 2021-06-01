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
        
        <link rel="stylesheet" type="text/css" href="assets/css/estilo_index.css">
        <link rel="stylesheet" type="text/css" href="assets/css/floating_labels.css">
    </head>
    <body>
        <section class="container-fluid col-md-10 mr-auto ml-auto area">
            <%
                if(request.getParameter("e") != null){
                    int retorno = Integer.parseInt(request.getParameter("e"));

                    if(retorno == 1){
                        out.println("<div class=\"alert alert-success shadow-sm text-center\" role=\"alert\">");
                        out.println("       Visitante cadastrado com sucesso!");
                        out.println("</div>");
                    }
                }
            %>
            <div class="text-center form form-signin">
                <div class="col-md-12 mb-1">
                    <b class="text-center" style="color: #000000; font-size: 15pt;">Bem-vindo ao nosso Sistema de Agendamento de Visitas:</b>
                </div>
                
                <img class="col-4" src="assets/img/brasaocigs.png" alt="Sistema de Controle de Visitantes" >                                       

                <div class="form-label-group">
                    <label for="txtPossuiCadastro">Você já possui cadastro?</label>
                    <button type="button" class="btn btn-primary btn-block btn-dark" onclick="location.href='visita/cadastro.jsp'">Sim</button>
                    <button type="button" class="btn btn-primary btn-block btn-dark" onclick="location.href='visitante/cadastro.jsp'">Não</button>
                </div>
                
            </div>
            
            
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
