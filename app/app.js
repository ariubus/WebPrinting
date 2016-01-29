
angular.module("webPrintingApp", ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {
            url: '/home',
            views: {
                '': {
                    templateUrl: 'app/components/home/homeView.html'
                }
            },
        })

        .state('about', {
            url: '/about',
            templateUrl: 'app/components/about/aboutView.html'})

        .state('customers', {
            url: '/customers',
            templateUrl: 'app/components/customers/customerView.html'})
        
        
        .state('nestedParentView',{
            url:'/nestedParent',
            templateUrl: 'app/components/nestedView/parentView.html'})
            
                .state('nestedParentView.nestedChildView',{
                    url:'/nestedChild',
                    templateUrl: 'app/components/nestedView/childView.html'})
                    
                            
        .state('multipleView',{
            url:'/multipleView',
            views:{
                '':{
                  templateUrl:'app/components/multipleView/multipleView.html'  
                },
                'leftColumn@multipleView':{
                    templateUrl:'app/components/multipleView/leftContent.html'},
                'rightColumn@multipleView':{
                    templateUrl:'app/components/multipleView/rightContent.html'}
            }})
            
            
        .state('login',{
            url:'/login',
            controller: 'LoginCtrl',
            templateUrl:'app/components/login/loginView.html'
        });
})
