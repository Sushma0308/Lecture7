(function () {
  'use strict';

angular.module('LunchCheck',[])

.controller('LunchCheckController',LunchCheckController)
LunchCheckController.$inject=['$scope','$filter'];

LunchCheckController($scope,$filter){
var input=$scope.name="hbdf,fdjfh,fhdf,fjds";


$scope.CountValue = function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);

  //console.log('The original string is: "' + stringToSplit + '"');
  //console.log('The separator is: "' + separator + '"');
  //console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));
}

var space = ' ';
var comma = ',';

splitString(input, space);
splitString(input);
splitString(input, comma);
}
});
})();
