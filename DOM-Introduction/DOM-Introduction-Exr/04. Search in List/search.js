function search() {
   let towns = document.querySelectorAll('#towns li');

   let text = document.getElementById('searchText').value;

   let counter = 0;

   for (const town of towns) {
      town.style.textDecoration = 'none';
      town.style.fontWeight = 'normal';

      if(town.textContent.includes(text)){
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
         counter++;
      }
   }

   let result = document.getElementById('result').textContent = `${counter} matches found`
}
