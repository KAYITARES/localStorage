let email=document.getElementById("email")
let password=document.getElementById("password")
let form=document.querySelector("form")

let users=JSON.parse(localStorage.getItem("users")) || []
form.addEventListener("submit",(e)=>{
    e.preventDefault()
const userExist=users.find((user)=>user.email==email.value)
if(userExist && userExist.password==password.value){
    window.location.href="../admin.html"
}else if(userExist && userExist.password!=password.value){
alert("Wrong Password")
}else{
    alert("user not exist! signup first")
    window.location.href="../signup.html"
}
})