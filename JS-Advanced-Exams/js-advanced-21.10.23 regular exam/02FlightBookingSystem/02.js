class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {
        const isExist = this.flights.find(x => x.flightNumber == flightNumber);
        if (isExist) {
            return `Flight ${flightNumber} to ${destination} is already available.`;
        }

        const flight = {
            flightNumber,
            destination,
            departureTime,
            price
        };
        this.flights.push(flight);
        return `Flight ${flightNumber} to ${destination} has been added to the system.`;
    }

    bookFlight(passengerName, flightNumber) {
        const isExist = this.flights.find(x => x.flightNumber == flightNumber);
        if (!isExist) {
            return `Flight ${flightNumber} is not available for booking.`;
        }

        const booking = {
            passengerName,
            flightNumber,
            price: isExist.price
        }

        this.bookingsCount++;
        this.bookings.push(booking);

        return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
    }

    cancelBooking(passengerName, flightNumber) {
        const isExist = this.bookings.find(x => x.passengerName == passengerName && x.flightNumber == flightNumber);
        if (!isExist) {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
        }

        this.bookings = this.bookings.filter(x => x.passengerName != passengerName && x.flightNumber != flightNumber);
        this.bookingsCount--;

        return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
    }

    showBookings(criteria) {
        const isEmpty = this.bookingsCount == 0;
        if(isEmpty) {
            throw new Error('No bookings have been made yet.');
        }
        let result = '';

        if(criteria == 'all'){
                const firstRow = `All bookings(${this.bookingsCount}):\n`;
                let remain = '';
                this.bookings.forEach((x, i)=> {
                    if(i == this.bookingsCount - 1) {
                        remain += `${x.passengerName} booked for flight ${x.flightNumber}.`;
                    } else {
                        remain += `${x.passengerName} booked for flight ${x.flightNumber}.\n`;
                    }
                });
                result += firstRow+remain;
        } else if(criteria == 'cheap') {
            const cheapBookings = this.bookings.filter(x => x.price <= 100);

            if(cheapBookings.length == 0) {
                return "No cheap bookings found.";
            }

            result += 'Cheap bookings:\n';

            cheapBookings.forEach((x, i)=> {
                if(i == cheapBookings.length - 1) {
                    result += `${x.passengerName} booked for flight ${x.flightNumber}.`;
                } else {
                    result += `${x.passengerName} booked for flight ${x.flightNumber}.\n`;
                }
            });
        } else if(criteria == 'expensive') {
            const expensiveBookings = this.bookings.filter(x => x.price > 100);

            if(expensiveBookings.length == 0) {
                return "No expensive bookings found.";
            }

            result += 'Expensive bookings:\n';
            
            expensiveBookings.forEach((x, i)=> {
                if(i == expensiveBookings.length - 1) {
                    result += `${x.passengerName} booked for flight ${x.flightNumber}.`;
                } else {
                    result += `${x.passengerName} booked for flight ${x.flightNumber}.\n`;
                }
            });
        }

        return result;
    }
}

// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.addFlight("CC303", "Chicago", "11:45 AM", 120));
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));

// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.bookFlight("Charlie", "CC303"));
// console.log(system.cancelBooking("Bob", "BB202"));

// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.showBookings("all"));

const system = new FlightBookingSystem("TravelWorld");
  console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 95));
  console.log(system.addFlight("BB202", "New York", "10:30 AM", 95));
  console.log(system.bookFlight("Alice", "AA101"));
  console.log(system.bookFlight("Bob", "BB202"));
  console.log(system.showBookings("expensive"));
  console.log(system.showBookings("cheap"));


