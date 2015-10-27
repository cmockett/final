angular.module("earTrainingApp", [])

var earTrainingFunction = function($scope, $index){
	$scope.notesArray = []
	$scope.compareArray = []




	$scope.keysArray = [
		{
			key: "A3",
		},
		{
			key: "A#3",
		},
		{
			key: "B3",
		},
		{
			key: "C4",
		},
		{
			key: "C#4",
		},
		{
			key: "D4",
		},
		{
			key: "D#4",
		},
		{
			key: "E4",
		},
		{
			key: "F4",
		},
		{
			key: "F#4",
		},
		{
			key: "G4",
		},
		{
			key: "G#4",
		},
		{
			key: "A4",
		},
		{
			key: "A#4",
		},
		{
			key: "B4",
		},
		{
			key: "C5",
		},
		{
			key: "C#5",
		},
		{
			key: "D5",
		},
		{
			key: "D#5",
		},
		{
			key: "E5",
		},
		{
			key: "F5",
		},
		{
			key: "F#5",
		},
		{
			key: "G5",
		},
		{
			key: "G#5",
		},
	]

		$scope.scalesArray = [
		{
			scaleName: "Chromatic",
			scalePattern: [1,1,1,1,1,1,1,1,1,1,1,1],
			intervalPattern: ["1","b2","2","b3","3","4","b5","5","b6","6","b7","7"],
			scaleNotes : []
		},
		{
			scaleName: "Ionian (Major)",
			scalePattern: [2,2,1,2,2,2,1],
			intervalPattern: ["1","2","3","4","5","6","7"],
			scaleNotes : []
		},
		{
			scaleName: "Dorian",
			scalePattern: [2,1,2,2,2,1,2],
			intervalPattern: ["1","2","b3","4","5","6","b7"],
			scaleNotes : []
		},
		{
			scaleName: "Phrygian",
			scalePattern: [1,2,2,2,1,2,2],
			intervalPattern: ["1","b2","b3","4","5","b6","b7"],
			scaleNotes : []
		},
		{
			scaleName: "Lydian",
			scalePattern: [2,2,2,1,2,2,1],
			intervalPattern: ["1","2","3","#4","5","6","7"],
			scaleNotes : []
		},
		{
			scaleName: "Mixolydian",
			scalePattern: [2,2,1,2,2,1,2],
			intervalPattern: ["1","2","3","4","5","6","b7"],
			scaleNotes : []
		},
		{
			scaleName: "Aeolian (Minor)",
			scalePattern: [2,1,2,2,1,2,2],
			intervalPattern: ["1","2","b3","4","5","b6","b7"],
			scaleNotes : []
		},
		{
			scaleName: "Locrian",
			scalePattern: [1,2,2,1,2,2,2],
			intervalPattern: ["1","b2","b3","4","b5","b6","b7"],
			scaleNotes : []
		},
		{
			scaleName: "Half-Whole Diminished",
			scalePattern: [1,2,1,2,1,2,1,2],
			intervalPattern: ["1","b2","b3","3","#4","5","6","b7"],
			scaleNotes : []
		},
		{
			scaleName: "Whole-Half Diminished",
			scalePattern: [2,1,2,1,2,1,2,1],
			intervalPattern: ["1","2","b3","4","b5","#5","6","7"],
			scaleNotes : []
		},
		{
			scaleName: "Harmonic Minor",
			scalePattern: [2,1,2,2,1,3,1],
			intervalPattern: ["1","2","b3","4","5","b6","7"],
			scaleNotes : []
		},
		{
			scaleName: "Melodic Minor",
			scalePattern: [2,1,2,2,2,2,1],
			intervalPattern: ["1","2","b3","4","5","6","7"],
			scaleNotes : []
		}
		]

		$scope.notes = []
		$scope.setKeyScale = function(){
			$scope.buttonsDivHide = true
			$scope.keyIndex
			$scope.compareArray.length = 0
			$scope.notes.length = 0

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
				$scope.notes.push(el.key);
			})
			$scope.scalesArray[$scope.selectScale].scaleNotes.push($scope.notes)

			console.log($scope.scalesArray[$scope.selectScale].scaleNotes)
			console.log($scope.scalesArray[$scope.selectScale].intervalPattern)
		}
		console.log('test', $scope.notes)
		$scope.timbreArray = ['Sine', 'Square', 'Sawtooth', 'Triangle']



		$scope.playNote = function($index){
			$scope.selectTimbreLC = $scope.selectTimbre.toLowerCase()
			
			var timbre = new Wad({
				source  : $scope.selectTimbreLC,
			})
		
			timbre.play({
				volume  : 0.5, 
				loop    : false, 
				pitch   : $scope.notes[$index],
				detune  : 0,
				panning : 0
				});
		}






}

angular.module("earTrainingApp").controller("earTrainingController", ['$scope', earTrainingFunction])