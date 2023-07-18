const myConnection = require('../database/config')

const allPosts =  (request,response) =>{
    console.log(request.body)
    const userData = JSON.parse(request.body.userData) 
    myConnection.query(
        `select post.id,id_user,titulo,contenido,username from post  
        left join users on (post.id_user = users.id) where post.id_user = ? 
        `,[
            userData.id
        ],
        function(err, results) {
            if(err){
                respuesta = {
                    message:"Se produjo un problema al insertar",
                    err
                }
                response.render('app/error',{locals:respuesta})
            }else{
            data = {
                message:"Consulta exitosa",
                posts : results
            }
            console.log(data)
            response.render('app/post',{locals:data})
            } 
        }
        );
}
const addPost =  (request,response) =>{
     myConnection.query(
        `insert into post(id_user,titulo,contenido) 
        values (?,?,?) `,
        [
            request.body.id_user,
            request.body.titulo,
            request.body.contenido,
        ],
        function(err, results) {
           if(err){
            respuesta = {
                message:"Se produjo un problema al insertar",
                err
            }
            response.render('app/error',{locals:respuesta})
           }else{
            data = {
                message:"Insercion exitosa",
                ...request.body
            }
            response.json(data)
           } 
        }
      );
}
const deletePost = (request,response) =>{
    myConnection.query(
        `delete from post where id = ? `,
        [
            request.body._id,
        ],
        function(err, results) {
           if(err){
            response.render('post/error',{locals:err})
           }else{
            respuesta = {
                message:"Post eliminado",
                ...request.body
                
            }
            response.json(respuesta)
           } 
        }
      );
}


module.exports = {
    addPost,
    deletePost,
    allPosts
}