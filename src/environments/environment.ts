// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  title: 'my app',
  securityUrl: 'http',
  baseUrl: '://127.0.0.1',
  routes: [
    {
      path: '',
      redirectTo: 'example',
      pathMatch: 'full'
    }, // the default page
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
