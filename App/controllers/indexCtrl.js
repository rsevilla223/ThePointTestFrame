'use strict';
app.controller('IndexCtrl', function ($scope, $mdSidenav, $state) {
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

    $scope.title = 'home';

    $scope.go = function (path, title) {
        $state.go(path);
        $scope.title = title;
    }

    $scope.toggleLeft = function () {
        $mdSidenav('left')
              .toggle();
    }

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