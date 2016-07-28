app.factory('EmployeesService',function($http){
    return {
        getEmployees:function(){
            var url = "http://app.konacloud.io/api/team/testgular/Employee";
            var req = ({
                url :url,
                method:'GET',
            });
            return $http(req);
        }
    };
})

app.controller('AddEmployeeController', function ($scope) {
console.log("Add Employee Controller");
})

app.controller('MainController', function ($scope, EmployeesService) {
    // Getting all the Employees List
    $scope.employees = {};
    $scope.loadingEmployees = false;
    
    function getEmployees(){
        $scope.loadingEmployees = true;
        console.log("Fecthing Employees");
        EmployeesService.getEmployees().success(function(data, status, header, config) {
            console.log(data);
            $scope.loadingEmployees = false;
            $scope.employees = data;
        }).error(function(data, status, header, config) {
            $scope.loadingEmployees = false;
            alert("There was an error fetching the list!");
        });
    }
    getEmployees();
    
    


});