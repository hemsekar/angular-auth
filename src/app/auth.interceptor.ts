import { HttpHandler, HttpInterceptorFn, HttpRequest } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const  authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiaGVtYSIsImlhdCI6MTcyOTc2NDUzMiwiZXhwIjoxNzI5NzY4MTMyfQ.zC-aPx0oO8UUsZR4JdRh71q21wLU_axpB7IurXrBs6E';

  const authReq = req.clone({
    setHeaders:{
      Authrization: `Bearer ${authToken}`
    }
  })
  return next(authReq);
};
