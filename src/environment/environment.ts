const baseUrlApi = 'http://localhost:9999/employee-service';
export const environment = {
  production: false,
  apiUrl: {
    login: baseUrlApi+'/auth/employee',
    registerEmployee: baseUrlApi+'/rh/addEmployee',
    getEmployee: baseUrlApi+'/rh/employee',
    getRequests: baseUrlApi+'/rh/pendingLeaveRequests',
    soldByEmpId: baseUrlApi+'/rh/LeaveSoldeByEmpId/',
    confirmRequestById: baseUrlApi+'/rh/confirmLeave/',
    rejectRequestById: baseUrlApi+'/rh/rejectLeave/',
    deleteRequestById: baseUrlApi+'/rh/deleteLeave/',
    getUpcoming: baseUrlApi+'/rh/upcomingLeaves',


  }
};
