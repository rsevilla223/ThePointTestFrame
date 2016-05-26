'use strict';
app.controller('IndexCtrl', function ($scope, $mdSidenav, $state, $mdDialog) {
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