// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:45765/api/',
  firebase: {
    apiKey: "AIzaSyA4IJIIWhSc7JCp3fBy29mX6gldZ3mwARU",
    authDomain: "livestreammusicapp-171123.firebaseapp.com",
    databaseURL: "https://livestreammusicapp-171123.firebaseio.com",
    projectId: "livestreammusicapp-171123",
    storageBucket: "",
    messagingSenderId: "359119934478"
  }
};
