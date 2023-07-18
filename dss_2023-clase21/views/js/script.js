window.onload = () => {
    console.log("lodeando")
    
    
}
const postData = () =>{
    const data = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value 
    }
    console.log(data)
    var myInit = { 
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
          } 
    }
    var url ='http://127.0.0.1:3000/postData' 
    fetch(url,myInit)
    .then(response => response.text())
    .then(data => console.log(data));
}
