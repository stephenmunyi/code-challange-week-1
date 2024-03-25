function calculateNetSalary(basicSalary, benefits) {
    //enter the code for calculating net salary
    
    
    const TAX_BRACKETS = [
    { min: 0, max: 24000, rate: 0.1 },
    { min: 24001, max: 32333, rate: 0.25 },
    { min: 32334, max: 40466, rate: 0.3 },
    { min: 40467, max: 57166, rate: 0.32 },
    { min: 57167, max: 76166, rate: 0.34 },
    { min: 76167, max: 150000, rate: 0.36 },
    { min: 150001, max: Infinity, rate: 0.37 }
    ];
    const NHIF_RATES = [
    { min: 0, max: 5999, rate: 150 },
    { min: 6000, max: 7999, rate: 300 },
    { min: 8000, max: 11999, rate: 400 },
    { min: 12000, max: 14999, rate: 500 },
    { min: 15000, max: 19999, rate: 600 },
    { min: 20000, max: 24999, rate: 750 },
    { min: 25000, max: 29999, rate: 850 },
    { min: 30000, max: 34999, rate: 900 },
    { min: 35000, max: 39999, rate: 1000 },
    { min: 40000, max: 44999, rate: 1100 },
    { min: 45000, max: 49999, rate: 1200 },
    { min: 50000, max: 59999, rate: 1300 },
    { min: 60000, max: 69999, rate: 1400 },
    { min: 70000, max: 79999, rate: 1500 },
    { min: 80000, max: 89999, rate: 1600 },
    { min: 90000, max: 99999, rate: 1700 },
    { min: 100000, max: 109999, rate: 1800 },
    { min: 110000, max: 119999, rate: 1900 },
    { min: 120000, max: 129999, rate: 2000 },
    { min: 130000, max: 139999, rate: 2100 },
    { min: 140000, max: 149999, rate: 2200 },
    { min: 150000, max: Infinity, rate: 2300 }
    ];
    const NSSF_RATE = 0.06; 
    
    // Calculation 
    const grossSalary = basicSalary + benefits;
    
    
    //then calculate the tax based on the rate
    let tax = 0;
    for (const bracket of TAX_BRACKETS) {
    if (grossSalary > bracket.min && grossSalary <= bracket.max) {
    tax = (grossSalary - bracket.min) * bracket.rate;
    break;
    }
    }
    
    // nhif deductions rates
    let nhifDeductions = 0;
    for (const bracket of NHIF_RATES) {
    if (grossSalary > bracket.min && grossSalary <= bracket.max) {
    nhifDeductions = bracket.rate;
    break;
    }
    }
    
    //NSSF deductions-multiply
    const nssfDeductions = grossSalary * NSSF_RATE;
    
    // net salary
    const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;
    
    return {
    //result
    grossSalary: grossSalary,
    tax: tax,
    nhifDeductions: nhifDeductions,
    nssfDeductions: nssfDeductions,
    netSalary: netSalary
    };
    }
    
    // prompts 
    const basicSalary = parseFloat(prompt("Enter  your basic salary here : "));
    const benefits = parseFloat(prompt("Enter the  benefits you made: "));
    
    const result = calculateNetSalary(basicSalary, benefits);
    
    // console.log
    console.log(" The gross Salary is:", result.grossSalary);
    console.log(" Your tax is:", result.tax);
    console.log("NHIF Deductions:", result.nhifDeductions);
    console.log("NSSF Deductions:", result.nssfDeductions);
    console.log("The net Salary is:", result.netSalary);
    