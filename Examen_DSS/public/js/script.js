window.onload = () =>{
    const token = '${token}'
    sessionStorage.setItem("token",token) 
    const userData = '${userData}'
    sessionStorage.setItem("userData",userData) 
    const username = JSON.parse(userData)
    console.log(username.username)
    const username_show = document.getElementById('username_show').innerHTML = username.username
}
const allUsers = () => {
  console.log('entrando!')
    myInit = {
        body : JSON.stringify(sessionStorage),
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        }
    }
    url = '../persona/allusers'
    fetch(url,myInit)
    .then(response => response.text())
    .then(data => {
      const app = document.getElementById('app').innerHTML = data;
    });
}
const addUser = () => {
    
    const datos = {
        _username : document.getElementById('username').value,
        _password : document.getElementById('password').value,
        token : sessionStorage.getItem('token')
    } 
    const session = JSON.parse(sessionStorage.getItem("userData"))
    const toSend = Object.assign(session, datos);
    console.log(toSend)
    myInit = {
        body : JSON.stringify(toSend) ,
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        }
    }
    url = '../persona/adduser'
    fetch(url,myInit)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      allUsers()
    });
}
const deleteUser = (id) => {
    
    const datos = {
        _id:id,
        token : sessionStorage.getItem('token')
    } 
    const session = JSON.parse(sessionStorage.getItem("userData"))
    const toSend = Object.assign(session, datos);
    console.log(toSend)
    myInit = {
        body : JSON.stringify(toSend) ,
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        }
    }
    url = '../persona/deleteuser'
    fetch(url,myInit)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      allUsers()
    });
}