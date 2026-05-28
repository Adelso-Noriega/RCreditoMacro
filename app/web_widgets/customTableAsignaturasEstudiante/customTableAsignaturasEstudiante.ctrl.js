/**
 * The controller is a JavaScript function that augments the AngularJS scope and exposes functions that can be used in the custom widget template
 * 
 * Custom widget properties defined on the right can be used as variables in a controller with $scope.properties
 * To use AngularJS standard services, you must declare them in the main function arguments.
 * 
 * You can leave the controller empty if you do not need it.
 */
function ($scope) {

  if (!angular.isArray($scope.properties.value)) {
    $scope.properties.value = [];
  }

  if (!angular.isArray($scope.properties.asignaturas)) {
    $scope.properties.asignaturas = [];
  }

  if (!angular.isArray($scope.properties.facultades)) {
    $scope.properties.facultades = [];
  }

  if (!angular.isArray($scope.properties.statusOptions)) {
    $scope.properties.statusOptions = [
      { value: "pendienteRevision", label: "Pendiente Revisión" }
    ];
  }

  $scope.addRow = function () {
    var nextId = $scope.properties.value.length + 1;

    $scope.properties.value.push({
      id: nextId,
      nombreAsignatura: "0",
      facultad: "0",
      status: "0"
    });
  };

  $scope.removeRow = function (index) {
    $scope.properties.value.splice(index, 1);
  };
}