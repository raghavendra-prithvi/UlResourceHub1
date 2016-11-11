"use strict";

var googleChart = googleChart || angular.module("google-chart",[]);

function randomWalk(){
                alert("Hello")
                $("path").fadeOut(10000)
                $("path").fadeIn(50000)
            }
            
googleChart.directive("googleChart",function(){  
    return{
        restrict : "A",
        link: function($scope, $elem, $attr){
            var dt = $scope[$attr.ngModel].dataTable;

            var options = $scope[$attr.ngModel].options;
            
            if($scope[$attr.ngModel].title)
                options.title = $scope[$attr.ngModel].title;

            var googleChart = new google.visualization.ScatterChart($elem[0]);
            googleChart.draw(dt,options)

            google.visualization.events.addOneTimeListener(googleChart, 'ready', randomWalk);

        }
    }
});
