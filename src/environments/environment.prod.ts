export const environment = {
    production: true,
    title: 'myapp',
    securityUrl: window.location.protocol,
    baseUrl: '://' + window.location.host + '/',
    canRegister: true // if !hasLogin canRegister will be considered false
};
