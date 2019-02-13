export const environment = {
  production: true,
  baseUrlSecurity: window.location.protocol ,
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
