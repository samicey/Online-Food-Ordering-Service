 $(document).ready(function (){
    $.ajax({
        url: "http://localhost:3000/products",
        type: "GET",
        dataType: 'jsonp',
        success: function (data, status) {
            let productData ='';
            data.forEach(product=>
             $("#Allproduct").html(
              productData += `<span>
              
              <div><strong><a href="${product.Image}"><img src="${product.Image}" alt="food image"/></div></a>
              <h4>${product.ProductName}</h4>
              <span><span>&#8358;</span>${product.price}</span><br />
              <p>${product.Description}</p>
              <p>${product.quantity} avaliable</p></strong>
              <button class="btn btn-sm btn-primary orderbtn" data-orderid="${product.id}" >View</button>
          </span>`
             ))
             const  view = $('.orderbtn');
             view.on('click', function(even){
                 even.preventDefault()
                 $("#Allproduct").fadeOut()
                 const editid = even.currentTarget.dataset.orderid
                 $.ajax({
                    method: 'GET',
                    url:`http://localhost:3000/products/${editid}`,
                    success: function (){
                         $(`#${deleteID}`).remove()
                    }
                })

             })
        },
        
    });
})