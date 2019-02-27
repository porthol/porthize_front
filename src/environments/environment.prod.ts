export const environment = {
    production: true,
    title: 'myapp',
    securityUrl: window.location.protocol,
    baseUrl: '://' + window.location.host + '/',
    routes: [ // the default page
        {
            path: '',
            loadChildren: '/auth/auth.module#AuthModule'
        },
        {
            path: '**',
            redirectTo: ''
        },
    ],
    canRegister: true // if !hasLogin canRegister will be considered false
};
