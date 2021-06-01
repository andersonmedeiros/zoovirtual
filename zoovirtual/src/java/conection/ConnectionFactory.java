/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package conection;

/**
 *
 * @author andersondepaula
 */
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class ConnectionFactory {
    //CIGS
    /*private static final String USER="cigs";
    private static final String SENHA="#Teixeira64@";
    private static final String DATABASE = "controlevisitantes";
    private static final String DRIVER_CONEXAO = "com.mysql.jdbc.Driver";
    private static final String STR_CONEXAO = "jdbc:mysql://10.79.12.224:3306/";*/
    
    //LOCALHOST
    private static final String USER="root";
    private static final String SENHA="Am1095253071.";
    private static final String DATABASE = "zoocigs";
    private static final String DRIVER_CONEXAO = "com.mysql.jdbc.Driver";
    private static final String STR_CONEXAO = "jdbc:mysql://localhost:3306/";
    
    public static Connection getConnection() {

        Connection conn = null;
        
        try {
            Class.forName(DRIVER_CONEXAO);
            conn = DriverManager.getConnection(STR_CONEXAO + DATABASE, USER, SENHA);
            //System.out.println("Banco Aberto!");

            return conn;
            
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
            throw new RuntimeException(
                    "Driver MySql no foi encontrado " + e.getMessage());

        } catch (SQLException e) {
            throw new RuntimeException("Erro ao conectar "
                    + "com a base de dados" + e.getMessage());
        }
        
    }

    public static void fechaConexao(Connection conn) {

        try {
            if (conn != null) {
                conn.close();
                //System.out.println("Fechada a conexÃ£o com o banco de dados");
            }

        } catch (SQLException e) {
            throw new RuntimeException("Não foi possível fechar a conexão com o banco de dados " + e.getMessage());
        }
    }

    public static void fechaConexao(Connection conn, PreparedStatement stmt) {
        try {
            if (conn != null) {
                fechaConexao(conn);
            }
            if (stmt != null) {
                stmt.close();
            }
        } catch (SQLException e) {
            throw new RuntimeException("Não foi possível fechar o statement " + e.getMessage());
        }
    }

    public static void fechaConexao(Connection conn, PreparedStatement stmt, ResultSet rs) {
        try {
            if (conn != null || stmt != null) {
                fechaConexao(conn, stmt);
            }
            if (rs != null) {
                rs.close();
            }
        } catch (SQLException e) {
            throw new RuntimeException("Não foi possível fechar o ResultSet " + e.getMessage());
        }
    }
}

