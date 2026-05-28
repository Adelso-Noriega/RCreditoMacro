/**
 * The controller is a JavaScript function that augments the AngularJS scope and exposes functions that can be used in the custom widget template
 * 
 * Custom widget properties defined on the right can be used as variables in a controller with $scope.properties
 * To use AngularJS standard services, you must declare them in the main function arguments.
 * 
 * You can leave the controller empty if you do not need it.
 */
function ($scope) {

  if (!angular.isArray($scope.properties.selectedValues)) {
    $scope.properties.selectedValues = [];
  }

    $scope.getValue = function (item) {
      if (angular.isString(item)) {
        return item;
      }
    
      var key = $scope.properties.valueKey || 'id';
      return item[key] || item.id || item.value;
    };

    $scope.getLabel = function (item) {
      if (angular.isString(item)) {
        return item;
      }
    
      var key = $scope.properties.labelKey || 'name';
      return item[key] || item.name || item.label || item.text;
    };

  $scope.isSelected = function (item) {
    return $scope.properties.selectedValues.indexOf($scope.getValue(item)) !== -1;
  };

  $scope.toggleSelection = function (item) {
    var value = $scope.getValue(item);
    var index = $scope.properties.selectedValues.indexOf(value);

    if (index === -1) {
      $scope.properties.selectedValues.push(value);
    } else {
      $scope.properties.selectedValues.splice(index, 1);
    }
  };

  $scope.getSelectedLabels = function () {
    return $scope.properties.items
      .filter(function (item) {
        return $scope.isSelected(item);
      })
      .map(function (item) {
        return $scope.getLabel(item);
      });
  };
}