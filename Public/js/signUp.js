$(document).ready(function (){
 $('#signUpSubmit').click(function (e){
    e.preventDefault()
    const firstName = $('#firstName').val();
    const lastName = $('#lastName').val();
    const password = $('#password').val();
    const rePassword = $('#Repassword').val();
    const email = $('#email').val();
    const phoneNumber = $('#phoneNumber').val();
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
$('#signUpSubmit').click(function (e){
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
                window.localStorage.assign('index.html')
            }else{
                alert("Email or Password Doesn't Exist")
            }

        }
    })

})
})

