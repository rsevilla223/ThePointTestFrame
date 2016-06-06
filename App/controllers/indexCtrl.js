'use strict';
app.controller('IndexCtrl', function ($scope, $mdSidenav, $state, $mdDialog, $http) {
    $scope.menuItems = [
      { name: 'Products', path: 'autocomplete' },
      { name: 'Footware', path: 'bottomSheet' },
      { name: 'Apparel', path: 'button' },
      { name: 'Guides', path: 'card' },
      { name: 'Product Guides', path: 'datePicker' },
      { name: 'Goalkeeper', path: 'gridList' },
      { name: 'Videos', path: 'input' },
      { name: 'From The Field', path: 'progressCircular' },
      { name: 'About Us', path: 'progressLinear' },
    ];


    /*$.getJSON('json/content.json', function (results) {
        console.log(results);
        var content = results;
        var DOMDocumentFragment = domJSON.toDOM(content)
        console.log(DOMDocumentFragment);
    });*/



    /*$http.get('http://wcmdemo.pointsourcellc.com:10039/wps/wcm/myconnect/ThePoint+Content/home?renderMode=json').success(function(data){
        $scope.contentElements = data;
        //console.log(data);
        var content = data;
        var DOMDocumentFragment = domJSON.toDOM(content);
    });*/

    $.getJSON('json/content.json', function (results) {
        console.log(results);
        $scope.carouselContent = results;
        
    });


    $http.get('http://wcmdemo.pointsourcellc.com:10039/wps/wcm/connect/thepoint+content/home/?srv=cmpnt&source=library&cmpntid=13250658-c5f4-4bcc-8f44-555b0a3a1274').success(function(data) {
        $scope.navElements = data;
        //console.log(data);
    });


    var chartData = { groups:
        [{value:100,label:'Day 1'},
            {value:50,label:'Day 2'},
            {value:150,label:'Day 3'},
            {value:40,label:'Day 4'},
            {value:50,label:'Day 5'}
        ]};

    var transforms = {
        barChart: [
            {'<>':'ul','class':'barChart','html':function() {
                return($.json2html(this.groups,transforms.group));
            }}
        ],
        group: [
            {'<>':'li','class':'group','html':[
                {'<>':'div','class':'bar','style':'height:${value}px;'},
                {'<>':'div','class':'label','html':'${label}'}
            ]}
        ]
    };

    $('#chart').json2html(chartData, transforms.barChart);




    $scope.title = 'home';

    $scope.images = [
        "http://vasyabigi.github.io/angular-slick/images/lazyfonz1.png",
        "http://vasyabigi.github.io/angular-slick/images/lazyfonz2.png",
        "http://vasyabigi.github.io/angular-slick/images/lazyfonz3.png",
        "http://vasyabigi.github.io/angular-slick/images/lazyfonz4.png",
        "http://vasyabigi.github.io/angular-slick/images/lazyfonz5.png",
        "http://vasyabigi.github.io/angular-slick/images/lazyfonz6.png",
    ];


    $scope.go = function (path, title) {
        $state.go(path);
        $scope.title = title;
    }

    $scope.toggleLeft = function () {
        $mdSidenav('left')
              .toggle();
    }

    $scope.toggleRight = function () {
        $mdSidenav('right')
            .toggle();
    }

    $scope.openFromLeft = function() {
        $mdDialog.show(
            $mdDialog.alert()
                .clickOutsideToClose(true)
                .title('Opening from the left')
                .textContent('Closing to the right!')
                .ariaLabel('Left to right demo')
                .ok('Nice!')
                // You can specify either string with query selector
                .openFrom('#left')
                // or an element
                .closeTo(angular.element(document.querySelector('#right')))
        );
    };

    $scope.openOffscreen = function() {
        $mdDialog.show(
            $mdDialog.alert()
                .clickOutsideToClose(true)
                .title('Opening from offscreen')
                .textContent('Closing to offscreen')
                .ariaLabel('Offscreen Demo')
                .ok('Amazing!')
                // Or you can specify the rect to do the transition from
                .openFrom({
                    top: -50,
                    width: 30,
                    height: 80
                })
                .closeTo({
                    left: 1500
                })
        );
    };

    $scope.menuIcon = 'menu';
    $scope.menuToggle = function () {
        if ($scope.menuIcon == 'menu') {
            $mdSidenav('left')
              .open();
            $scope.menuIcon = 'arrow_back';
        }
        else {
            $mdSidenav('left')
              .close();
            $scope.menuIcon = 'menu';
            
        }
    }
});