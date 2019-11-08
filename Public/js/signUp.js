$(document).ready(function (){
    $('#signInHere').hide()
    $('.signIn').click(function(){
        $('#signUpHere').fadeOut();
        $('#signInHere').fadeIn();
    })
    $('.regButton').click(function(){
        $('#signUpHere').fadeIn();
        $('#signInHere').fadeOut();
    })
 $('#signUpSubmit').click(function (e){
    e.preventDefault()
    const firstName = $('#firstName').val();
    const lastName = $('#lastName').val();
    const password = $('#password').val();
    const rePassword = $('#Repassword').val();
    const email = $('#email').val();
    const phoneNumber = $('#phoneNumber').val();
    if(!firstName||!lastName||!password||!rePassword||!email||!phoneNumber){
        alert('All Fields Are Required')
        return;
    }
    $.ajax({
        method: 'GET',
        url:`http://localhost:3000/users?${email}`,
        data:{
            email
        },
    success:function(res){
             if(res.length){
                 alert('User Alreay Exist; Try Signing In')
             }else{
                $.ajax({
                    method:'POST',
                    url:'http://localhost:3000/users',
                    data:{
                        firstName,
                        lastName,
                        password,
                        email,
                        phoneNumber,
                    }
                    })
         
                }
            }
     })
 
})
$('#signInHere').on('submit',function (e){
    e.preventDefault();
    const Inemail = $('#Inemail').val();
    const Inpassword = $('#Inpassword').val();
    $.ajax({
        method:'GET',
        url:`http://localhost:3000/users?email=${Inemail}&password=${Inpassword}`,
        data:{
           email: Inemail,
           password: Inpassword,
        },
        success:function(res){
            if(res.length){

                window.location.assign('products.html');
                localStorage.setItem('email',Inemail)
            }else{
                alert("Email or Password Doesn't Exist")
            }

        }
    })
    e.preventDefault();
})
})

