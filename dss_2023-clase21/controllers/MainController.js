const utils = require("../resources/utils")


const test = (request,response) =>{
    response.send('testeando')
}
const postData = (request,response) =>{
    console.log(request.body)
    response.send(`Los datos enviados fueron ${request.body}`)
}
const index = (request,response) =>{
    response.render('index')
}
const enviarDatos = (request,response) =>{
    //const respuesta = await utils.validaOpenai(request.body.buscar)
    // respuesta = await utils.validaInput(request.body.buscar);
    // console.log(respuesta)
    // if(respuesta == "true"){
    //     response.render('recibe_datos',{locals: {busqueda : "Busqueda invalida"}})
    // }else{
    //     response.render('recibe_datos',{locals: {busqueda : request.body.buscar}})
    // }  
    response.render('recibe_datos',{locals: {busqueda : utils.validaSanitizer(request.body.buscar)}})
}
const ejercicio = (request,response) =>{
    response.render('vista_ejercicio')
}
const recibeDataEjercicio = (request,response) =>{
    console.log(request.body)
    response.render('recibe',{locals: {datos:request.body}})

}
const preguntaOpenai = async (request,response) =>{
    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    pregunta = `${request.body.pregunta}`
    console.log(pregunta);
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: pregunta
      });
       response.json(completion.data.choices[0])
    }
module.exports = {
    test,
    postData,
    index,
    enviarDatos,
    ejercicio,
    recibeDataEjercicio,
    preguntaOpenai
}