'use strict';
var lwVersion = 11,
    viewPath =  "/views/",//for Dev/local
    Helper = {
     version: lwVersion
    ,viewPath: viewPath
    ,remoteUrl: ''
    ,routes:  {
          'register': {
            url: "/register",
            title: 'Lumino Works Registration',
            loginRequired: false,
            templateUrl: viewPath + 'pgregister.html?v=' + lwVersion
          },
        }

      };
