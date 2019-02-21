export const environment = {
    production: true,
    title: 'myapp',
    securityUrl: window.location.protocol,
    baseUrl: '://' + window.location.host + '/',
    routes: [
        {
            path: '', redirectTo: 'example', pathMatch: 'full'
        },
        {
            path: 'example',
            loadChildren: './routed-sub-module-example/routed-sub-module-example-routing.module#RoutedSubModuleExampleRoutingModule'
        },
        {
            path: 'login',
            loadChildren: './login/login-routing.module#LoginRoutingModule'
        },
        {
            path: '**',
            redirectTo: 'example'
        }
    ],
    canRegister: true // if !hasLogin canRegister will be considered false
};
