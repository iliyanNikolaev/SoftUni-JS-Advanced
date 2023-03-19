function solve() {
   let buttonElements = document.querySelectorAll('.add-product');

   let textAreaElement = document.getElementsByTagName('textarea')[0];

   let checkoutButtonElement = document.querySelector('.checkout')

   let productsList = [];

   for (const button of buttonElements) {
      
      button.addEventListener('click', (e) => {

         let containerElement = e.currentTarget.parentElement.parentElement;

         let productName = containerElement.querySelector('.product-details .product-title').textContent;

         let productPrice = containerElement.querySelector('.product-line-price').textContent;

         productsList.push({ [productName]: Number(productPrice) })

         textAreaElement.textContent += `Added ${productName} for ${productPrice} to the cart.\n`
      });
   }   

   checkoutButtonElement.addEventListener('click', () => {

      let totalPrice = getTotalPrice(productsList);

      let list = getList(productsList);
      
      textAreaElement.textContent += `You bought ${list} for ${totalPrice}.`

      for (const button of buttonElements) {
         button.disabled = true;
      }

      checkoutButtonElement.disabled = true;
   });

   function getTotalPrice(arr) {

      let totalPrice = 0;

      for (const product of productsList) {
         
         let price = Object.values(product)[0];

         totalPrice += price;
      }

      return totalPrice.toFixed(2);
   }

   function getList(arr) {
      let uniqueList = [];

      for (const product of productsList) {
         
         let entries = Object.entries(product);

         let productName = entries[0][0];

         if(!uniqueList.includes(productName)){
            uniqueList.push(productName);
         }
      }

      return uniqueList.join(', ')
   }
}