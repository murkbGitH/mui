/**
 * MUI Angular Dropdown Component
 * @module angular/dropdown
 */

import angular from 'angular';


const moduleName = 'mui.dropdown';


angular.module(moduleName, [])
  .directive('muiDropdown', ['$timeout', '$compile', function($timeout, $compile) {
    return {
      restrict: 'AE',
      transclude: true,
      replace : true,
      scope: {
        variant: '@',
        color: '@',
        size: '@',
        open: '=?',
        ngDisabled: '='
      },
      template: '<div class="mui-dropdown">' +
        '<mui-button ' +
        'variant="{{variant}}" ' + 
        'color="{{color}}" ' +
        'size="{{size}}" ' +
        'ng-click="onClick($event);" ' +
        '></mui-button>' +
        '<ul class="mui-dropdown__menu" ng-transclude></ul>'+
        '</div>',
      link: function(scope, element, attrs) {
        var dropdownClass = 'mui-dropdown',
            menuClass = 'mui-dropdown__menu',
            openClass = 'mui--is-open',
            rightClass = 'mui-dropdown__menu--right',
            isUndef = angular.isUndefined,
            menuEl,
            buttonEl,
            marginTop;

        // save references
        menuEl = angular.element(element[0].querySelector('.' + menuClass));
        buttonEl = angular.element(element[0].querySelector('.mui-btn'));

        // handle is-open
        if (!isUndef(attrs.open)) scope.open = true;

        // handle disabled
        if (!isUndef(attrs.disabled)) {
          buttonEl.attr('disabled', true);
        }

        // handle right-align
        if (!isUndef(attrs.rightAlign)) menuEl.addClass(rightClass);

        // handle no-caret
        if (!isUndef(attrs.noCaret)) buttonEl.html(attrs.label);
        else buttonEl.html(attrs.label + ' <mui-caret></mui-caret>'); 

        function closeDropdownFn() {
          scope.open = false;
          scope.$apply();
        }

        function handleKeyDownFn(ev) {
          // close dropdown on escape key
          var key = ev.key;
          if (key === 'Escape' || key === 'Esc') closeDropdownFn();
        }

        // handle menu open
        scope.$watch('open', function(newValue) {
          var doc = document;
          if (newValue === true) {
            menuEl.addClass(openClass);
            doc.addEventListener('click', closeDropdownFn);
            doc.addEventListener('keydown', handleKeyDownFn);
          } else if (newValue === false) {
            menuEl.removeClass(openClass);
            doc.removeEventListener('click', closeDropdownFn);
            doc.removeEventListener('keydown', handleKeyDownFn);
          }
        });

        // click handler
        scope.onClick = function($event) {
          // exit if disabled
          if (scope.disabled) return;

          // prevent form submission
          $event.preventDefault();
          $event.stopPropagation();

          // toggle open 
          if (scope.open) scope.open = false;
          else scope.open = true;
        };
      }
    };
  }]);


/** Define module API */
export default moduleName;
