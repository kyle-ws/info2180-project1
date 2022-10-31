/* Add your JavaScript to this file */


document.addEventListener('submit',(event)=> {
    event.preventDefault();

    let emailA= document.getElementById('email').value;

if(emailA=='' || emailA==null){
    document.getElementsByClassName('message')[0].innerText="Please Enter a valid email address";
    }
else
    document.getElementsByClassName('message')[0].innerText="Thank you! Your email address "+emailA+" has been added to our mailing system!";

    
})