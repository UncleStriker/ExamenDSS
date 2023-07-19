const { request, response } = require('express');
const myConnection = require('../database/config')


const allUsers = async (request,response) =>{
    console.log(request.body)
    myConnection.query(
        `select id, username from usuarios `,
        function(err, results) {
           if(err){
            response.render('views/error',{locals:err})
           }else{
            data = {
                message:"Consulta exitosa",
                users : results
            }
            console.log(data)
            response.render('users',{locals:data})
           } 
        }
      );

}
const addUser =  (request,response) =>{
    myConnection.query(
        `insert into users(username,password) 
        values (?,?) `,
        [
            request.body._username,
            request.body._password,
        ],
        function(err, results) {
           if(err){
            response.render('views/users',{locals:err})
           }else{
            respuesta = {
                message:"Usuario agregado"
            }
            response.json(respuesta)
           } 
        }
      );

}
const deleteUser =  (request,response) =>{
     myConnection.query(
        `delete from usuarios where id = ? `,
        [
            request.body._id,
        ],
        function(err, results) {
           if(err){
            response.render('persona/error',{locals:err})
           }else{
            respuesta = {
                message:"Usuario eliminado"
            }
            response.json(respuesta)
           } 
        }
      );

}

module.exports = {
    allUsers,
    addUser,
    deleteUser,
}
