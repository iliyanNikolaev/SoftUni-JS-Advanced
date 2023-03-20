function create(words) {
   
   for(let i = 0; i < words.length; i++) {

      let divContainerElement = document.getElementById('content');

      let div = document.createElement('div');

      let p = document.createElement('p');

      p.style.display = 'none';

      p.textContent = words[i];
      
      div.appendChild(p);
      
      divContainerElement.appendChild(div);

      div.addEventListener('click', () => {

         p.style.display = 'block';
      });
   }
}