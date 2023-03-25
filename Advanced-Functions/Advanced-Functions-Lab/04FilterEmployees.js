function filterEmployees(data, criteria) {

    let parsedData = JSON.parse(data);

    let [key, value] = criteria.split('-');

    let outputObjects = [];

    let counter = -1;

    parsedData.forEach((obj, i) => {

        if (key === 'all') {
            counter++;
            console.log(`${counter}. ${obj['first_name']} ${obj['last_name']} - ${obj['email']}`)
        } else {
            if (obj[key] === value) {
                counter++;
                console.log(`${counter}. ${obj['first_name']} ${obj['last_name']} - ${obj['email']}`)
            }
        }
    });
}

function anotherSolve(data, criteria) {

    let parsedData = JSON.parse(data);

    let [key, value] = criteria.split('-');

    if (key === 'all') {
        parsedData.forEach((employee, i) => console.log(`${i}. ${employee['first_name']} ${employee['last_name']} - ${employee['email']}`));
    } else {
        parsedData
            .filter(employee => employee[key] === value)
            .forEach((employee, i) => console.log(`${i}. ${employee['first_name']} ${employee['last_name']} - ${employee['email']}`));
    }
}

anotherSolve(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'all'
);