export const dashboardRoutes = {
  label: 'Dashboard',
  labelDisable: true,
  children: [
     {
      name: 'Dashboard',
      icon: 'chart-pie',
      to: '/',
      active: true
    },{
      name: 'Student',
      active: true,
      icon: 'user',
      children: [
        {
          name: 'Student Add',
          to: '/student/add',
          exact: true,
          active: true
        },
        {
          name: 'Student List',
          to: '/student/list',
          active: true
        },
       
       
      ]
    }
  ]
};




export default [
  dashboardRoutes,
  
];
