angular.module("earTrainingApp", [])

var earTrainingFunction = function($scope){
	$scope.notesArray = []
	$scope.compareArray = []




	$scope.keysArray = [
		{
			key: "A",
		},
		{
			key: "A#/Bb",
		},
		{
			key: "B",
		},
		{
			key: "C",
		},
		{
			key: "C#/Db",
		},
		{
			key: "D",
		},
		{
			key: "D#/Eb",
		},
		{
			key: "E",
		},
		{
			key: "F",
		},
		{
			key: "F#/Gb",
		},
		{
			key: "G",
		},
		{
			key: "G#/Ab",
		},
		{
			key: "A",
		},
		{
			key: "A#/Bb",
		},
		{
			key: "B",
		},
		{
			key: "C",
		},
		{
			key: "C#/Db",
		},
		{
			key: "D",
		},
		{
			key: "D#/Eb",
		},
		{
			key: "E",
		},
		{
			key: "F",
		},
		{
			key: "F#/Gb",
		},
		{
			key: "G",
		},
		{
			key: "G#/Ab",
		},
	]

		$scope.scalesArray = [
		{
			scaleName: "Chromatic",
			scalePattern: [1,1,1,1,1,1,1,1,1,1,1,1],
			intervalPattern: ["1","b2","2","b3","3","4","b5","5","b6","6","b7","7"]
		},
		{
			scaleName: "Ionian (Major)",
			scalePattern: [2,2,1,2,2,2,1],
			intervalPattern: ["1","2","3","4","5","6","7"]
		},
		{
			scaleName: "Dorian",
			scalePattern: [2,1,2,2,2,1,2],
			intervalPattern: ["1","2","b3","4","5","6","b7"]
		},
		{
			scaleName: "Phrygian",
			scalePattern: [1,2,2,2,1,2,2],
			intervalPattern: ["1","b2","b3","4","5","b6","b7"]
		},
		{
			scaleName: "Lydian",
			scalePattern: [2,2,2,1,2,2,1],
			intervalPattern: ["1","2","3","#4","5","6","7"]
		},
		{
			scaleName: "Mixolydian",
			scalePattern: [2,2,1,2,2,1,2],
			intervalPattern: ["1","2","3","4","5","6","b7"]
		},
		{
			scaleName: "Aeolian (Minor)",
			scalePattern: [2,1,2,2,1,2,2],
			intervalPattern: ["1","2","b3","4","5","b6","b7"]
		},
		{
			scaleName: "Locrian",
			scalePattern: [1,2,2,1,2,2,2],
			intervalPattern: ["1","b2","b3","4","b5","b6","b7"]
		},
		{
			scaleName: "Half-Whole Diminished",
			scalePattern: [1,2,1,2,1,2,1,2],
			intervalPattern: ["1","b2","b3","3","#4","5","6","b7"]
		},
		{
			scaleName: "Whole-Half Diminished",
			scalePattern: [2,1,2,1,2,1,2,1],
			intervalPattern: ["1","2","b3","4","b5","#5","6","7"]
		},
		{
			scaleName: "Harmonic Minor",
			scalePattern: [2,1,2,2,1,3,1],
			intervalPattern: ["1","2","b3","4","5","b6","7"]
		},
		{
			scaleName: "Melodic Minor",
			scalePattern: [2,1,2,2,2,2,1],
			intervalPattern: ["1","2","b3","4","5","6","7"]
		}
		]
		// $scope.intervalArray = $scope.scalesArray.intervalPattern
		// intervalArray1 = ["1","b2","2","b3","3","4","b5","5","b6","6","b7","7"]
		// intervalArray2 = []
		$scope.setKeyScale = function(){
			$scope.keyIndex
			$scope.compareArray.length = 0
			notes.length = 0

			for(var i=0; i<($scope.keysArray.length/2); i++){
				if($scope.keysArray[i].key === $scope.selectKeys){
					$scope.keyIndex = i
				}
			}
			var position = $scope.keyIndex
			for ( var i = 0; i < $scope.scalesArray[$scope.selectScale].scalePattern.length; i++ ) {
				$scope.compareArray.push($scope.keysArray[position])
				position += $scope.scalesArray[$scope.selectScale].scalePattern[i]
			}
			$scope.compareArray.filter(function(el){
				notes.push(el.key);
			})
			console.log(notes)
			console.log($scope.scalesArray[$scope.selectScale].intervalPattern)
		}
		var notes = []








}

angular.module("earTrainingApp").controller("earTrainingController", ["$scope", earTrainingFunction])