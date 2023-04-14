const baseUrlApi = 'http://localhost:9999/employee-service';
export const environment = {
  production: false,
  apiUrl: {
    login: baseUrlApi+'/auth/employee',
    registerEmployee: baseUrlApi+'/rh/addEmployee',
    getEmployee: baseUrlApi+'/employee/employee',
    getRequests: baseUrlApi+'/rh/pendingLeaveRequests',
    soldByEmpId: baseUrlApi+'/rh/LeaveSoldeByEmpId/',
    soldByEmp: baseUrlApi+'/employee/LeaveSoldeEmployee',  //not used yet
    confirmRequestById: baseUrlApi+'/rh/confirmLeave/',
    rejectRequestById: baseUrlApi+'/rh/rejectLeave/',
    deleteRequestById: baseUrlApi+'/rh/deleteLeave/',
    getUpcoming: baseUrlApi+'/rh/upcomingLeaves',
    requestLeave: baseUrlApi+'/employee/requestLeave',
    getALLEmployees: baseUrlApi+'/rh/allEmployees',
    getALLContracts: baseUrlApi+'/rh/allContracts',
    deleteEmplById: baseUrlApi+'/rh/removeEmployee/',
    getMyUpcoming: baseUrlApi+'/employee/employeeUpcomingLeaves',
    getMyLeaves: baseUrlApi+'/employee/LeavesByEmployee',
    addContract: baseUrlApi+'/rh/addContract',
    EmployeesWithNoContract: baseUrlApi+'/rh/noContractEmployees',
    allLeaves: baseUrlApi+'/rh/allLeaves',


  }
};
