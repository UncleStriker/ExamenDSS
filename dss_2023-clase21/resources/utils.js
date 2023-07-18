var sanitizer = require('sanitizer');
const validadores = ["<script>","#"]

const validaOpenai = async (tipo,expresion) =>{
    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    pregunta = `la expresion "${expresion}" contiene lenguaje 
     ${tipo} ?
    . Responde true o false en minusculas`
    
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: pregunta
      });
      respuesta = completion.data.choices[0].text.trim();

      if(respuesta == "false"){
        return false
      }else{
        return true
      }
    
}
const validaOpenaiSql =  async (expresion)=>{
   return (await validaOpenai('sql',expresion))
}
const validaOpenaiJS =  async (expresion)=>{
    return (await validaOpenai('javascript',expresion))
   
}
const validaInput = (expresion) =>{
    for(var i = 0 ; i< validadores.length;++i){
       if(expresion.includes(validadores[i])){
            return "true"
        }
    }
    return expresion

}
const validaSanitizer = (expresion) => {
    expresion = sanitizer.escape(expresion); 
    // expresion = sanitizer.normalizeRCData(expresion); 
    // expresion = sanitizer.sanitize(expresion); 
    // expresion = sanitizer.unescapeEntities(expresion); //no sirve
    console.log(expresion)
    return(expresion)
}

module.exports ={
    validaOpenai,
    validaOpenaiJS,
    validaOpenaiSql,
    validaInput,
    validaSanitizer,
}