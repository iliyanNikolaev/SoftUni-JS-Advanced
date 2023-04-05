class Company{
    constructor(){
        this.obj = {};
    }

    addEmployee(name, salary, position, department){
        if(name === undefined || salary === undefined || position === undefined || department === undefined){
            throw new Error('Invalid input!');
        }
        if(name === null || salary === null || position === null || department === null){
            throw new Error('Invalid input!');
        }
        if(name === '' || salary === '' || position === '' || department === ''){
            throw new Error('Invalid input!');
        }
        if(salary < 0){
            throw new Error('Invalid input!');
        }

        if(!this.obj.hasOwnProperty(department)){
            this.obj[department] = [];
        }

        this.obj[department].push([name, salary, position]);

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment(){
        let bestAvgSalary = 0;
        let bestDep = '';
        for (const entry in this.obj) {
            let avg = 0;
            this.obj[entry].forEach(empl => {
                avg += empl[1];
            });
            avg /= this.obj[entry].length;
            if(avg > bestAvgSalary){
                bestAvgSalary = avg;
                bestDep = entry;
            }
        }

        let emplArr = this.obj[bestDep].slice(0);
        emplArr.sort((a, b) => {
            if(a[1] !== b[1]){
                return b[1] - a[1];
            } else {
                return a[0].localeCompare(b[0]);
            }
        });

        let output = `Best Department is: ${bestDep}\nAverage salary: ${bestAvgSalary.toFixed(2)}\n`;

        emplArr.forEach((empl, i) => {
            if(i === emplArr.length - 1){
                output += `${empl[0]} ${empl[1]} ${empl[2]}`
            } else {
                output += `${empl[0]} ${empl[1]} ${empl[2]}\n`
            }
        });

        return output;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
