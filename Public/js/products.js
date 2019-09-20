 $(document).ready(function (){
    
    $('#inSearch').on('submit',function(){
        const searchForm = $('#searchInput').val();
        $('#Allproduct').fadeOut();
        $('#searchHere').fadeIn();
        $.ajax({
            method:'GET',
            url:`http://localhost:3000/products?ProductName=${searchHere}`,
            success:function (product){
               
                $('#searchHere').append(
                         `<span>
                        
                        <div><strong><a href="${product.Image}"><img src="${product.Image}" alt="food image"/></div></a>
                        <h4>${product.ProductName}</h4>
                        <span><span>&#8358;</span>${product.price}</span>
                        <p>${product.Description}</p>
                        <p>${product.quantity} avaliable</p></strong>
                        <button class="btn btn-sm btn-primary viewbtn" data-viewid="${product.id}" >View</button><br />
                    </span>`
                )
            }

        })
     })

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
              <span><span>&#8358;</span>${product.price}</span>
              <p>${product.Description}</p>
              <p>${product.quantity} avaliable</p></strong>
              <button class="btn btn-sm btn-primary viewbtn" data-viewid="${product.id}" >View</button><br />
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
              
          </span>
          <form width="50%">
                                <fieldset>
                                    <div class="form-group">
                               <div class="form-group">
                                        <label for="userName">Full Name</label>
                                        <input type="text" class="form-control" id="userName" placeholder="Enter Your Full Name">
                                        </div>             
                                    <div class="form-group">
                                        <label for="userEmail">Email</label>
                                        <input type="email" class="form-control" id="userEmail" placeholder="Enter Your Email">
                                        </div>
                                        <div class="form-group">
                                      <label for="userPhoneNumber">Price</label>
                                      <input type="tel" class="form-control" id="userPhoneNumber" aria-describedby="phoneNumber" placeholder="Phone NUmber">
                                    </div>
                                    <div class="form-group">
                                      <label for="foodQuantity">Quantity</label>
                                      <input type="number" class="form-control" id="foodQuantity" placeholder="How many Plates">
                                    </div>
                                    <div class="form-group">
                                            <label for="userAddress">Address</label>
                                            <textarea class="form-control" id="userAddress" placeholder="Enter Your Address">
                                            </textarea>
                                          </div>
                                    
                                    </div>
                </fieldset>
                <button class="btn btn-sm btn-primary orderbtn" data-orderid="${product.id}" >Order</button>
			</form>` 
                             )

                             const  order = $('.orderbtn');
                order.on('click',function(){
                    
                 $.ajax({
                    method: 'GET',
                    url:`http://localhost:3000/products/${viewid}`,
                    
                    success: function (product){

                        const   ProductName = product.ProductName,
                                category = product.category,
                                UserName = $('#userName').val(),
                                Email = $('#userEmail').val(),
                                PhoneNumber = $('#userPhoneNumber').val(),
                                Quantity =  $('#foodQuantity').val(),
                                Address =  $('#userAddress').val(),
                                price = product.price;
                                
                            console.log(ProductName)
                         
                            $.ajax({
                                method: 'POST',
                                url:`http://localhost:3000/orders`,
                                data:{
                                    UserName,
                                    Email,
                                    ProductName,
                                    Quantity,
                                    category,
                                    Address,
                                    PhoneNumber,
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