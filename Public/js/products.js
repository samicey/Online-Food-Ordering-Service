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
              <button class="btn btn-sm btn-primary viewbtn" data-viewid="${product.id}" >View</button>
          </span>`
             ))
             const  view = $('.viewbtn');
             view.on('click', function(even){
                 even.preventDefault()

                 $("#Allproduct").fadeOut()
                 var viewid = even.currentTarget.dataset.viewid
                 $.ajax({
                    method: 'GET',
                    url:`http://localhost:3000/products/${viewid}`,
                    success: function (product){
                        
                         
                             $('#OneOrder').append(
                                `<span>
              
              <div><strong><a href="${product.Image}"><img src="${product.Image}" alt="food image"/></div></a>
	    <h4>${product.ProductName}</h4>
              <span><span>&#8358;</span>${product.price}</span><br />
              <p>${product.Description}</p>
              <p>${product.quantity} avaliable</p></strong>
              <button class="btn btn-sm btn-primary orderbtn" data-orderid="${product.id}" >Order</button>
          </span>` 
                             )

                             const  order = $('.orderbtn');
                order.on('click',function(){
                    
                 $.ajax({
                    method: 'GET',
                    url:`http://localhost:3000/products/${viewid}`,
                    
                    success: function (product){
                        
                        const   ProductName = product.ProductName,
                                category = product.category,
                                Description = product.Description,
                                price = product.price;
                                
                            console.log(ProductName)
                         
                            $.ajax({
                                method: 'POST',
                                url:`http://localhost:3000/orders`,
                                data:{
                                    ProductName,
                                    category,
                                    Description,
                                    price
                                },
                                success: function (){
                                    $('.orderbtn').text('Ordered')
                                }               
                            })
                         
                    }
                })
                     
                })
                         
                    }
                })
                

             })
        }
        
    });
})