function solve(inputArray) {
    let companyObj = {};

    for (let companyEnployee of inputArray) {
        let [company, employeeId] = companyEnployee.split(` -> `);

        if (company in companyObj) {
            if (!companyObj[company].includes(employeeId)) {
                companyObj[company].push(employeeId);
            } 
            
        } else {
            companyObj[company] = [employeeId];
        }
    }

    let entries = Object.entries(companyObj);
    for (let [company, id] of entries) {
        console.log(company, id);
    }
}

solve([
    'SoftUni -> AA12345',
     'SoftUni -> BB12345',
     'SoftUni -> AA12345',
      'Microsoft -> CC12345',
       'HP -> BB12345'
    ]
    );