function sendMail(params){
    var teamParams = {
        Name:document.getElementById("Name").value,
        Mobile:document.getElementById("Mobile").value,
        Email:document.getElementById("Email").value,
        Subject:document.getElementById("Subject").value,
        Message:document.getElementById("Message").value,
    };

    emailjs.send('service_tkc2qan','template_vfs8eoa',teamParams)
   .then(
    message =>{
        console.log (message);
        if(message=='OK'){
        alert('Your mail has been send. Thank you for connecting.');
        }
        else{
            console.error (message);
            alert('Your mail has been send. Thank you for connecting Vamika Charitable trust...')
            
        }
   })
}