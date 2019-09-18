$(document).ready(function (){
   $('#ProductOrder').hide();
   $('#viewAllProductsPage').hide();
   $('.viewOrders').hide();
   $('#AdminHome').click(function(e){
       e.preventDefault();
       $('#welcomeMessage').fadeIn();
       $('#ProductOrder').fadeOut();
       $('#viewAllProductsPage').fadeOut();
       $('.viewOrders').fadeOut();
   })
   $('#AddProduct').click(function(e){
    e.preventDefault();
    $('#welcomeMessage').fadeOut();
    $('#ProductOrder').fadeIn();
    $('#viewAllProductsPage').fadeOut();
    $('.viewOrders').fadeOut();
})
$('#viewAllProducts').click(function(e){
    e.preventDefault();
    $('#welcomeMessage').fadeOut();
    $('#ProductOrder').fadeOut();
    $('#viewAllProductsPage').fadeIn();
    $('.viewOrders').fadeOut();
})
$('#viewOrders').click(function(e){
    e.preventDefault();
    $('#welcomeMessage').fadeOut();
    $('#ProductOrder').fadeOut();
    $('#viewAllProductsPage').fadeOut();
    $('.viewOrders').fadeIn();
})
$('#AddGoods').click(function (e){
    e.preventDefault();
    const ProductName = $('#productName').val();
    const category = $('#category').val();
    const Image = $('#uploadImage').val();
    const price = $('#price').val();
    const quantity = $('#quantity').val();
    const Description = $('#productDescription').val(); 
    $.ajax({
        method: 'GET',
        url:`http://localhost:3000/products?${Image}`,
        data:{
            Image
        },
    success:function(res){
             if(res.length){
                 alert('Product Alreay Exist;')
             }else{
                $.ajax({
                    method:'POST',
                    url:'http://localhost:3000/products',
                    data:{
                        ProductName,
                        category,
                        Image,
                        quantity,
                        Description,
                        price
                    }
                    })
         
                }
            }
     })
})

$('#logout').click(function (){
    localStorage.clear();
    window.location.assign('adminSignIn.html');
}) 
})