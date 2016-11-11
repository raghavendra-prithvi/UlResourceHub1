"use strict"

/*We need to manually start angular as we need to
wait for the google charting libs to be ready*/  
// google.setOnLoadCallback(function () {  
//     angular.bootstrap(document.body, ['my-app']);
// });




var myApp = myApp || angular.module("my-app",["google-chart"]);

myApp.controller("IndexCtrl",function($scope){  
    $scope.data1 = {};
    $scope.data1.dataTable = new google.visualization.DataTable();
    $scope.data1.dataTable.addColumn("number","Name");
    $scope.data1.dataTable.addColumn("number","Qty");
    $scope.data1.dataTable.addColumn({'type': 'string', 'role': 'style'});
    $scope.data1.dataTable.addRow([1,1,'point { size: 18; shape-type: star; fill-color: yellow;stroke-color:white;stroke-width:2;']);
    $scope.data1.dataTable.addRow([2,2, 'point { size: 18; shape-type: star; fill-color: #5658F5;stroke-color:white;stroke-width:2;']);
    $scope.data1.dataTable.addRow([2,3,'point { size: 18; shape-type: star; fill-color: #FAEA05;stroke-color:white;stroke-width:2;']);
    $scope.data1.dataTable.addRow([4,4, 'point { size: 18; shape-type: star; fill-color: #FAEA05;stroke-color:white;stroke-width:2;']);
    $scope.data1.dataTable.addRow([4.5,5,'point { size: 18; shape-type: star; fill-color: #5658F5;stroke-color:white;stroke-width:2;']);
    $scope.data1.dataTable.addRow([3,3,'point { size: 18; shape-type: star; fill-color: #5658F5;stroke-color:white;stroke-width:2;']);
    $scope.data1.title="Scatter Chart"

    $scope.data1.options = {
                legend: 'none',
                backgroundColor: 'transparent',
              chartArea: {
                    height: '100%',
                    width: '100%'
                },
                pointSize: 35,
                //colors: ['yellow','blue','yellow'],
                pointShape : 'star',
                is3D: true,

              animation: {
                //'startup': true,
                duration: 3000,
                easing: 'linear'
              },
              series: {
                  1: {
                      targetAxisIndex: 1,
                      color: 'yellow'
                  },
                  2: {
                      targetAxisIndex: 1,
                      color: 'red'
                  }
              },
              vAxes: {
                  0: {
                      textPosition: 'none'
                  },
                  1: {}
              },
              xAxes: {
                  0: {
                      textPosition: 'none'
                  },
                  1: {}
              },
              hAxes: {
                  0: {
                      textPosition: 'none'
                  },
                  1: {}  
              },
              vAxis: {
                  gridlines: {
                      color: 'transparent'
                  }
              },
              hAxis: {
                  gridlines: {
                      color: 'transparent'
                  }
              }

            };


    $scope.addOneElement = function(){
    	$scope.data1.dataTable.addRow([3,2, 'point { size: 18; shape-type: star; fill-color: yellow;stroke-color:white;stroke-width:2;']);
      $scope.data1.dataTable.addRow([4,3, 'point { size: 18; shape-type: star; fill-color: yellow;stroke-color:white;stroke-width:2;']);
      $scope.data1.dataTable.addRow([5,4, 'point { size: 18; shape-type: star; fill-color: yellow;stroke-color:white;stroke-width:2;']);
    	
    	var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));
        chart.draw($scope.data1.dataTable, $scope.data1.options);

    }
});


