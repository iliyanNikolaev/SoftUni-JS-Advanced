function solve() {
  let [onScreenBtn, clearBtn] = document.querySelectorAll('button');

  let [nameEl, hallEl, ticketPriceEl] = document.querySelectorAll('input');

  let moviesContainerEl = document.getElementById('movies').querySelector('ul');
  let archiveContainerEl = document.getElementById('archive').querySelector('ul');
    
  onScreenBtn.addEventListener('click', addMovie);
  clearBtn.addEventListener('click', () => {
    archiveContainerEl.innerHTML = '';
  });


  function addMovie(e) {
    e.preventDefault();

    let name = nameEl.value;
    let hall = hallEl.value;
    let ticketPrice = Number(ticketPriceEl.value);

    if (!isNaN(ticketPrice) && name !== '' && hall !== '' && ticketPriceEl.value !== '') {
      nameEl.value = '';
      hallEl.value = '';
      ticketPriceEl.value = '';
      
      let li = document.createElement('li');
      let spanName = createEl('span', name);
      let strongHall = createEl('strong', `Hall: ${hall}`);
      let div = document.createElement('div');
      let strongPrice = createEl('strong', ticketPrice.toFixed(2));
      let inputCountSoldedTickets = document.createElement('input');
      inputCountSoldedTickets.placeholder = 'Tickets Sold';
      let archiveButton = createEl('button', 'Archive');
      archiveButton.id = 'archive-btn'

      li.appendChild(spanName);
      li.appendChild(strongHall);
      div.appendChild(strongPrice);
      div.appendChild(inputCountSoldedTickets);
      div.appendChild(archiveButton);
      li.appendChild(div);

      moviesContainerEl.appendChild(li);

      archiveButton.addEventListener('click', () => {
        let userInput = Number(inputCountSoldedTickets.value);

        if(!isNaN(userInput) && inputCountSoldedTickets.value !== ''){
          let total = userInput * ticketPrice;

          div.remove();
          strongHall.innerText = `Total amount: ${total.toFixed(2)}`;

          let deleteBtn = createEl('button', 'Delete');
          deleteBtn.id = 'delete-btn';

          li.appendChild(deleteBtn);

          archiveContainerEl.appendChild(li);

          deleteBtn.addEventListener('click', () => {
            li.remove();
          });
        }
      })
    }
  }

  function createEl(type, text){

    let element = document.createElement(type);
    element.innerText = text;

    return element;
  }
}
