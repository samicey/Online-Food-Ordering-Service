$(document).ready(function (){
    $.ajax({
        url: "http://localhost:3000/products",
        type: "GET",
        dataType: 'jsonp',
        success: function (data, status) {
            let productData ='';
            data.forEach(product=>
             $("#appendHere").html(
              productData += `<div>
                <img src="${product.Image}"/>
               <strong>${product.ProductName}</strong>
              <td>${product.category}</td>
                <td><span>&#8358;</span>${product.price}</td>
                <td>${product.quantity}</td>
                <td>${product.Description}</td>
                <td><button class="btn btn-sm btn-primary" id="editbtn">Edit</button></td>
                <td><button class="btn btn-sm btn-danger" id="deletebtn"><a href="">Delete</a></button></td>
                </div>`
             ))
        },
        
    });
})