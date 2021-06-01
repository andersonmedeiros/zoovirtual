/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model.bean;

import java.sql.Date;

/**
 *
 * @author dep
 */
public class Fone {
    private int id;
    private String fone;
    private final Visitante vis = new Visitante();

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFone() {
        return fone;
    }

    public void setFone(String fone) {
        this.fone = fone;
    }
    
    public int getIdVisitante() {
        return vis.getId();
    }

    public void setIdVisitante(int id) {
        vis.setId(id);
    }
    
    public int getNaturalidadeVisitante() {
        return vis.getNaturalidade();
    }

    public void setNaturalidadeVisitante(int naturalidade) {
        vis.setNaturalidade(naturalidade);
    }

    public String getCpfVisitante() {
        return vis.getCpf();
    }

    public void setCpfVisitante(String cpf) {
        vis.setCpf(cpf);
    }

    public String getPassaporteVisitante() {
        return vis.getPassaporte();
    }

    public void setPassaporteVisitante(String passaporte) {
        vis.setPassaporte(passaporte);
    }

    public String getNomeVisitante() {
        return vis.getNome();
    }

    public void setNomeVisitante(String nome) {
        vis.setNome(nome);
    }

    public String getSobrenomeVisitante() {
        return vis.getSobrenome();
    }

    public void setSobrenomeVisitante(String sobrenome) {
        vis.setSobrenome(sobrenome);
    }

    public String getEmailVisitante() {
        return vis.getEmail();
    }

    public void setEmailVisitante(String email) {
        vis.setEmail(email);
    }

    public String getSexoVisitante() {
        return vis.getSexo();
    }

    public void setSexoVisitante(String sexo) {
        vis.setSexo(sexo);
    }

    public Date getDatanascimentoVisitante() {
        return vis.getDatanascimento();
    }

    public void setDatanascimentoVisitante(Date datanascimento) {
        vis.setDatanascimento(datanascimento);
    }
}
