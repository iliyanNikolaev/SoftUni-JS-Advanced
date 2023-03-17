function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      
      let text = document.getElementById('searchField');
      
      let rows = document.querySelectorAll('tbody tr');

      for (const row of rows) {
         row.classList.remove('select')

         if(row.textContent.includes(text.value) && text.value !== ''){
            row.className = 'select';
         }
      }

      text.value = '';
   }
}