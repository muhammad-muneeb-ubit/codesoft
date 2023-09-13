function sendEmail() {
    var params = {
  name: document.getElementById("name").value,
  phone: document.getElementById("subject").value,
   email: document.getElementById("email").value,
  message: document.getElementById("message").value,
};     
const  serviceID = "service_6vhbiml";
const  templateID = "template_v5z69sw";
emailjs.send(serviceID, templateID, params)
.then(
    res =>{
        name: document.getElementById("name").value = "";
        phone: document.getElementById("subject").value = "";
        email: document.getElementById("email").value = "";
        message: document.getElementById("message").value = "";
        console.log(res)
        alert("message send")
    })
    .catch((err)=>console.log(err));
}