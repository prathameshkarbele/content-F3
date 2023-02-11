// fetch() method : It is Defind on the Window Object , which we can use to perfrom request.
// this method will return promise.
// Promise will either be fulfilled or rejected

// fetch('https://dummyjson.com/products')
//   .then((response) => response.json())
//   .then((data) => {
//     let products = "";
//     data.products.forEach((product) => {
//       products += `
//         <div class="card">
//           <img src="${product.images[0]}" alt="img" class="images">
//           <div class="title">
//               <span><h1>${product.title}</h1></span>
//               <span><h3>${product.brand}</h3></span>
//           </div>
//           <div class="details">
//               <p class="price">${product.price}</p>
//               <p class="rating">${product.rating}</p>
//               <p class="stock">${product.stock}</p>
//           </div>
//         </div>
//       `;
//     });
//     document.getElementById("cards").innerHTML = products;
//   })
//   .catch((error) => {
//     console.error(error);
//   });

fetch('https://dummyjson.com/products')
  .then((response) => response.json())
  .then((data) => {
    let products = "";
    data.products.forEach((item) => {
      products += `<div class="card">
          <img src="${item.images[0]}" alt="img" class="imges">

      <div class="namebrand">
          <h2>${item.title}</h2>
          <h4>${`Brand :  `}  ${item.brand}</h4>
      </div> <br>
      <div class="productID"><h4>${'ProductID : '} </h4><span> ${item.id}</span></div><br>
      <div class="category">
          <h3>${"Category  :  "}</h3>
          <p>   ${item.category}</p>
      </div><br>
      <div class="description">
          <h4>  ${`Description:    `} </h4>
          <p>  ${item.description}</p>
      </div><br>
      <div class="price">
          <h3>${"Price : "}</h3>
          <p>${item.price}</p>
          <p><i class="material-icons">
              currency_rupee
          </i></p>
      </div><br>
      <div class="Discount">
          <h3>${"Special Discount For You: "}</h3>
          <p>${item.discountPercentage}</p>
          <p><i class="material-icons">
          percent
          </i></p>

      </div><br>
      <div class="rating">
          <h3>${"Rating : "}</h3>
          <p>${item.rating}</p>
          <i class="material-icons">
              star
          </i>
      </div><br>
      <div class="stock">
          <p>Only Left ${item.stock} Hurry Up!!!</p>
      </div><br>
     <button  class="btn">Buy Now</button>
</div>`;
    });
    document.getElementById("cards").innerHTML = products;
  })
  .catch((error) => {
    console.error(error);
  });