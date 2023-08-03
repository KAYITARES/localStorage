let username=document.getElementById("username")
let email=document.getElementById("email")
let password=document.getElementById("password")
let form=document.querySelector("form")

let users=JSON.parse(localStorage.getItem("users")) || []

form.addEventListener("submit",(e)=>{
    e.preventDefault()
let user={
    name:username.value,
    email:email.value,
    password:password.value
}
if(users.find((userz)=>userz.email==email.value)){
    alert("user already exist")
}else{
    users.push(user);
    alert("user successfuly created!")
    const stringify=JSON.stringify(users)
    localStorage.setItem("users",stringify)
    console.log(localStorage)
}


})