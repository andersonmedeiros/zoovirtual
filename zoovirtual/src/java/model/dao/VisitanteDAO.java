/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model.dao;

import conection.ConnectionFactory;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import model.bean.Visitante;

/**
 *
 * @author dep
 */
public class VisitanteDAO {
    //Tabela
    String tabela = "zoocigs_visitante";
    
    //Atributos
    String id = "id";
    String naturalidade = "naturalidade";
    String cpf = "cpf";
    String passaporte = "passaporte";
    String nome = "nome";
    String sobrenome = "sobrenome";
    String datanascimento = "datanascimento";
    String sexo = "sexo";
    String email = "email";
    
    //Insert SQL
    private final String INSERT = "INSERT INTO " + tabela + "(" + id + "," + naturalidade + "," + cpf + "," + passaporte + "," + nome +  "," + sobrenome + "," + sexo + "," + datanascimento + "," + email + ")" +
                                         " VALUES(?,?,?,?,?,?,?,?,?);";
    
    //Update SQL
    private final String UPDATE = "UPDATE " + tabela +
                                        " SET " + naturalidade + "=?, " + cpf + "=?, " + passaporte + "=?, " + nome + "=?, " + sobrenome + "=?, " + datanascimento + "=?, " + sexo + "=?, " + email + "=? " +
                                        "WHERE " + id + "=?;";
        
    //Delete SQL
    private final String DELETE = "DELETE FROM " + tabela + " WHERE " + id + "=?;";
    
    //Consultas SQL
    private final String GETUltimoID = "SELECT MAX(" + id + ") as ultimo_id FROM " + tabela + ";";
    
    Connection conn = null;
    PreparedStatement pstm = null;
    ResultSet rs = null;
    
    //Próximo ID a ser inserido
    public int proxID(){
        int ultimo_id = 0;
        try{
            conn = ConnectionFactory.getConnection();
            
            pstm = conn.prepareStatement(GETUltimoID);
            rs = pstm.executeQuery();
            while (rs.next()) {
                
                ultimo_id = rs.getInt("ultimo_id");
            }
           
            ConnectionFactory.fechaConexao(conn, pstm);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return (ultimo_id+1);
    }
    
    //Insert SQL
    public void insert(Visitante vis) {
        if (vis != null) {
            try {
                conn = ConnectionFactory.getConnection();
                
                pstm = conn.prepareStatement(INSERT);
                
                pstm.setInt(1, vis.getId());
                pstm.setInt(2, vis.getNaturalidade());
                pstm.setString(3, vis.getCpf());
                pstm.setString(4, vis.getPassaporte());
                pstm.setString(5, vis.getNome());
                pstm.setString(6, vis.getSobrenome());
                pstm.setString(7, vis.getSexo());
                pstm.setDate(8, vis.getDatanascimento());
                pstm.setString(9, vis.getEmail());
                
                pstm.execute();
                
                ConnectionFactory.fechaConexao(conn, pstm);

            } catch (SQLException e) {
                throw new RuntimeException(e.getMessage());  
            }
        } else {
            throw new RuntimeException();
        }
    }
    
    //Update SQL
    
    
    //Delete SQL
    public void delete(int id) {
        if (id != 0){
            try {
                conn = ConnectionFactory.getConnection();
                pstm = conn.prepareStatement(DELETE);
                pstm.setInt(1, id);
                
                pstm.execute();
                ConnectionFactory.fechaConexao(conn, pstm);

            } catch (SQLException e) {
                throw new RuntimeException(e.getMessage());  
            }
        } else {            
            throw new RuntimeException();
        }
    }
    
    private final static String GETVISITANTEBYCPFDWR = "SELECT * FROM zoocigs_visitante WHERE cpf = ?";
       
    public static Visitante getVisitanteByCpfDWR(String cpf){
        Visitante vis = new Visitante();
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETVISITANTEBYCPFDWR);
            pstm.setString(1, cpf);
           
            rs = pstm.executeQuery();
            while (rs.next()) {       
                vis.setId(rs.getInt("id"));
                vis.setNaturalidade(rs.getInt("naturalidade"));
                vis.setCpf(rs.getString("cpf"));
                vis.setNome(rs.getString("nome"));
                vis.setSobrenome(rs.getString("sobrenome"));                         
                vis.setSexo(rs.getString("sexo"));            
                vis.setDatanascimento(rs.getDate("datanascimento"));            
                vis.setEmail(rs.getString("email")); 
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return vis;
    }  
    
    private final static String GETVISITANTEBYPASSADWR = "SELECT * FROM zoocigs_visitante WHERE passaporte = ?";
       
    public static Visitante getVisitanteByPassaporteDWR(String passaporte){
        Visitante vis = new Visitante();
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        try {
            conn = ConnectionFactory.getConnection();
            pstm = conn.prepareStatement(GETVISITANTEBYPASSADWR);
            pstm.setString(1, passaporte);
           
            rs = pstm.executeQuery();
            while (rs.next()) {       
                vis.setId(rs.getInt("id"));
                vis.setNaturalidade(rs.getInt("naturalidade"));
                vis.setPassaporte(rs.getString("passaporte"));
                vis.setNome(rs.getString("nome"));
                vis.setSobrenome(rs.getString("sobrenome"));                         
                vis.setSexo(rs.getString("sexo"));            
                vis.setDatanascimento(rs.getDate("datanascimento"));            
                vis.setEmail(rs.getString("email")); 
            }
            ConnectionFactory.fechaConexao(conn, pstm, rs);
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());           
        }
        return vis;
    }  
    
}
