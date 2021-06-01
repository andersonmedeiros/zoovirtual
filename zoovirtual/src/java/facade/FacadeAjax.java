/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facade;

import java.sql.Date;
import java.util.ArrayList;
import model.bean.*;
import model.dao.*;
/**
 *
 * @author anderson
 */
public class FacadeAjax {
    public Visitante getVisitanteByCpfDWR(String cpf){
        return VisitanteDAO.getVisitanteByCpfDWR(cpf);
    }
    public Visitante getVisitanteByPassaporteDWR(String passaporte){
        return VisitanteDAO.getVisitanteByPassaporteDWR(passaporte);
    }
}
