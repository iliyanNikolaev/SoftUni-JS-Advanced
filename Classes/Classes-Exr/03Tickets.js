function ticketsDatabse(ticketsData, sortingCriteria) {

    class Ticket{
        constructor(destination, price, status){
            this.destination = destination,
            this.price = price,
            this.status = status
        }
    }

    let result = [];

    ticketsData.forEach(el => {
        let [destination, price, status] = el.split('|');
        price = Number(price);
        result.push(new Ticket(destination, price, status));
    });

    if(sortingCriteria === 'price'){
        result.sort((a, b) => a.price - b.price);
    } else {
        result.sort((a, b) => a[sortingCriteria].localeCompare(b[sortingCriteria]));
    }

    return result;
}

ticketsDatabse(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status');