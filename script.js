const employees = [
    { name: "Denerius Moye", rate: 28.50, hours: 72 },
    { name: "Harold Foster", rate: 25.75, hours: 63 },
    { name: "Destiny Basnight", rate: 23.00, hours: 57 }
]

class Payroll {
    constructor(employees) {
        this.employees = employees;
        this.getNames = this.getNames();
        this.fullTime = this.getFullTime();
        this.totalLabor = this.getTotalLabor();
    }

    getNames() {
        const newarray = this.employees.map(employee => { 
            return {name: employee.name, rate: employee.rate, hours: employee.hours};
            });
            return newarray.sort();
    }

    getFullTime() {
        return this.hours.filter(time => time.hours > 60);
    }

    getTotalLabor(){
        return this.getNames.reduce((acc, curr,) => {
            return(acc + (curr.rate * curr.hours));   
    }, 0);
}
}