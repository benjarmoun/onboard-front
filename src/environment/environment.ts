const baseUrlApi = 'http://localhost:9999/employee-service';
export const environment = {
  production: false,
  apiUrl: {
    login: baseUrlApi+'/auth/employee',
    registerEmployee: baseUrlApi+'/rh/addEmployee',
    getEmployee: baseUrlApi+'/rh/employee',
    loginCustomer: baseUrlApi+'/auth/customer',
    verifyEmail: baseUrlApi+'/code-verification',
    transfer: baseUrlApi+'/customer/transfer',
    deposit: baseUrlApi+'/customer/deposit',
    withdraw: baseUrlApi+'/customer/withdraw',
    requestsAccount: baseUrlApi+'/agent/requests-all',
    pendingReqAccount: baseUrlApi+'/agent/requests',
    activateAccount: baseUrlApi+'/agent/activate/',
    disableAccount: baseUrlApi+'/agent/disable/',
    deleteAccount: baseUrlApi+'/agent/delete/',
    getAccount: baseUrlApi+'/customer/account',
  }
};
