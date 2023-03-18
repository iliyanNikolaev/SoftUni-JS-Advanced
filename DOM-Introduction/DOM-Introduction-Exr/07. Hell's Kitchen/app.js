function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      
      let restaurantsInfo = {};

      for (const line of input) {
         
         let [restaurantName, restaurantData] = line.split(' - ')

         if(!restaurantsInfo.hasOwnProperty(restaurantName)) {
            restaurantsInfo[restaurantName] = {};
         }

         let workersData = restaurantData.split(', ')

         for (const workerData of workersData) {
            
            let [workerName, salary] = workerData.split(' ');

            restaurantsInfo[restaurantName][workerName] = Number(salary);
         }
      }

       //restaurantsInfo => PizzaHut: {Peter: 500, George: 300, Mark: 800}

      let entriesRestaurants = Object.entries(restaurantsInfo)
      let bestAvgSalary = 0;
      let totalCurrentSalary = 0;
      let bestName = '';

      for (const entry of entriesRestaurants) {
         
         let salaries = Object.values(entry[1]);

         for (const salary of salaries) {
            
            totalCurrentSalary += salary;
         }

         totalCurrentSalary /= salaries.length;

         if(totalCurrentSalary > bestAvgSalary){
            bestAvgSalary = totalCurrentSalary;
            bestName = entry[0];
         }

         totalCurrentSalary = 0;
      }

      console.log(bestName);
      console.log(bestAvgSalary);

      let bestRestaurantSortedSalaries = Object.entries(restaurantsInfo[bestName]).sort((a, b) => b[1] - a[1]);

      console.log(bestRestaurantSortedSalaries);

      let outputRestaurant = document.querySelector('#bestRestaurant p');

      outputRestaurant.textContent = `Name: ${bestName} Average Salary: ${bestAvgSalary.toFixed(2)} Best Salary: ${(bestRestaurantSortedSalaries[0][1]).toFixed(2)}`;
      
      let outputWorkers = document.querySelector('#workers p');

      let workersOutputStr = '';

      for (const [worker, salary] of bestRestaurantSortedSalaries) {
         
         workersOutputStr += `Name: ${worker} With Salary: ${salary} `
      }

      outputWorkers.textContent = workersOutputStr;
   }
}
