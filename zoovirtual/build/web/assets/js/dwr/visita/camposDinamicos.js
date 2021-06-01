/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function getVisitanteByCpf(cpf){
    FacadeAjax.getVisitanteByCpfDWR(cpf, {
        callback:function(visitante){
            if(visitante.nome != null){
                $("#div-visnencontrado").css("display", "none");
                $("#formVisitante").css("display", "block");
                dwr.util.setValues({txtNome: visitante.nome + " " + visitante.sobrenome});
            }
            else{
                $("#formVisitante").css("display", "none");
                $("#div-visnencontrado").css("display", "block");
            }
        }
    }); 
}