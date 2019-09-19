$(document).ready(function(){
    $('#AdminLogIn').click(function (e){
        e.preventDefault();
        const Inemail = $('#Inemail').val();
        const Inpassword = $('#Inpassword').val();
        if (!Inpassword || !Inemail) {
           alert('Enter Correct Email and Password')
            return;
          }
        $.ajax({
            method:'GET',
            url:`http://localhost:3000/users?email=${Inemail}&password=${Inpassword}`,
            data:{
               email: Inemail,
               password: Inpassword,
            },
            success:function(res){
                if(res.length){
                    window.location.assign('Admin.html');
                    localStorage.setItem('email', Inemail);
                    
                }else{
                    alert("Email or Password Doesn't Exist");
                    
                }
    
            }
        })
    
    })
    
})




