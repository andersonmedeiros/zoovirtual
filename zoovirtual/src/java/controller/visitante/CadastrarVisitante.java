/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller.visitante;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Date;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import model.bean.Fone;
import model.bean.Visitante;
import model.dao.FoneDAO;
import model.dao.VisitanteDAO;

/**
 *
 * @author dep
 */
@WebServlet(name = "CadastrarVisitante", urlPatterns = {"/visitante/CadastrarVisitante"})
public class CadastrarVisitante extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet CadastrarVisitante</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet CadastrarVisitante at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");

            try{
                VisitanteDAO visDAO = new VisitanteDAO();  
                FoneDAO foneDAO = new FoneDAO();
                
                Visitante vis = new Visitante();  
                Fone foneVis = new Fone();
                int id = visDAO.proxID();
                
                if(Integer.parseInt(request.getParameter("txtNaturalidade")) == 1){
                    vis.setId(id);
                    
                    vis.setNaturalidade(Integer.parseInt(request.getParameter("txtNaturalidade")));
                    vis.setCpf(String.valueOf(request.getParameter("txtCpf")).replace(".", "").replace("-", ""));
                    vis.setNome(String.valueOf(request.getParameter("txtNome")).toUpperCase());
                    vis.setSobrenome(String.valueOf(request.getParameter("txtSobrenome")).toUpperCase());
                    vis.setSexo(String.valueOf(request.getParameter("txtSexo")).toUpperCase());
                    
                    String dtNascSeparada[] = String.valueOf(request.getParameter("txtDataNasc")).split("-");
                    Date dataNasc = new Date((Integer.parseInt(dtNascSeparada[0])-1900), (Integer.parseInt(dtNascSeparada[1]) - 1), Integer.parseInt(dtNascSeparada[2]));
                    vis.setDatanascimento(dataNasc);
                    
                    vis.setEmail(String.valueOf(request.getParameter("txtEmail")).toUpperCase());
                    
                    visDAO.insert(vis);
                    
                    foneVis.setFone(String.valueOf(request.getParameter("txtFone")).replace("(", "").replace(")", "").replace(" ", "").replace("-", ""));
                    foneVis.setIdVisitante(id);
                    
                    foneDAO.insertFoneVisitante(foneVis);
                    
                }
                else if(Integer.parseInt(request.getParameter("txtNaturalidade")) == 2){
                     vis.setId(id);
                    
                    vis.setNaturalidade(Integer.parseInt(request.getParameter("txtNaturalidade")));
                    vis.setPassaporte(String.valueOf(request.getParameter("txtPassaporte")));
                    vis.setNome(String.valueOf(request.getParameter("txtNome")).toUpperCase());
                    vis.setSobrenome(String.valueOf(request.getParameter("txtSobrenome")).toUpperCase());
                    vis.setSexo(String.valueOf(request.getParameter("txtSexo")).toUpperCase());
                    
                    String dtNascSeparada[] = String.valueOf(request.getParameter("txtDataNasc")).split("-");
                    Date dataNasc = new Date((Integer.parseInt(dtNascSeparada[0])-1900), (Integer.parseInt(dtNascSeparada[1]) - 1), Integer.parseInt(dtNascSeparada[2]));
                    vis.setDatanascimento(dataNasc);
                    vis.setEmail(String.valueOf(request.getParameter("txtEmail")).toUpperCase());
                    
                    visDAO.insert(vis);
                    
                    foneVis.setFone(String.valueOf(request.getParameter("txtFone")).replace("(", "").replace(")", "").replace(" ", "").replace("-", ""));
                    foneVis.setIdVisitante(id);
                    
                    foneDAO.insertFoneVisitante(foneVis);
                }
                

            }catch(Exception ex){
                //e=2: erro durante realização do cadastro
                response.sendRedirect("/zoovirtual/visitante/cadastro.jsp?e=2");
                throw new ServletException(ex);
            }
            //e=1: cadastro sucesso
            response.sendRedirect("/zoovirtual/agendavisita.jsp?e=1");
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
