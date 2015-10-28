angular.module("earTrainingApp", [])

var earTrainingFunction = function($scope, $index){
	$scope.notesArray = []
	$scope.compareArray = []




	$scope.keysArray = [
		{
			key   : "A3",
			label : "A"
		},
		{
			key   : "A#3",
			label : "A#"
		},
		{
			key   : "B3",
			label : "B"
		},
		{
			key   : "C4",
			label : "C"
		},
		{
			key   : "C#4",
			label : "C#"
		},
		{
			key   : "D4",
			label : "D"
		},
		{
			key   : "D#4",
			label : "D#"
		},
		{
			key   : "E4",
			label : "E"
		},
		{
			key   : "F4",
			label : "F"
		},
		{
			key   : "F#4",
			label : "F#"
		},
		{
			key   : "G4",
			label : "G"
		},
		{
			key   : "G#4",
			label : "G#"
		},
		{
			key   : "A4",
			label : "A"
		},
		{
			key   : "A#4",
			label : "A#"
		},
		{
			key   : "B4",
			label : "B"
		},
		{
			key   : "C5",
			label : "C"
		},
		{
			key   : "C#5",
			label : "C#"
		},
		{
			key   : "D5",
			label : "D"
		},
		{
			key   : "D#5",
			label : "D#"
		},
		{
			key   : "E5",
			label : "E"
		},
		{
			key   : "F5",
			label : "F"
		},
		{
			key   : "F#5",
			label : "F#"
		},
		{
			key   : "G5",
			label : "G"
		},
		{
			key   : "G#5",
			label : "G#"
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
		$scope.notesNoNumber = []

		$scope.setKeyScale = function(){
			$scope.notesNoNumber.length =0
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

			//Removing # from each Note Value, just for display on the ng-repeated buttons
			for(var i = 0; i<$scope.notes.length; i++){
				var tempArray=[]
				var tempVar = ''
				tempArray = $scope.notes[i].split("")
				tempArray.splice(-1, 1)
				tempVar = tempArray.join('')
				$scope.notesNoNumber.push(tempVar)
			}
			// $scope.scalesArray[$scope.selectScale].scaleNotes.push($scope.notes)

			// console.log($scope.scalesArray[$scope.selectScale].scaleNotes)
			// console.log($scope.scalesArray[$scope.selectScale].intervalPattern)
			// console.log($scope.notes)
			// console.log($scope.notesArray)
		}
		// $scope.numNotes

		$scope.timbreArray = ['Sine', 'Square', 'Sawtooth', 'Triangle']

		$scope.numNotes

		$scope.startNotesTest = function(){
			$scope.notesArray.length = 0
			$scope.playedNotesArray.length = 0
			$scope.selectTimbreLC = $scope.selectTimbre.toLowerCase()
			var timbre = new Wad({
				source : $scope.selectTimbreLC
			})
			if($scope.numNotes == 2){
				timbre.play({
					volume  : 0.5,
					loop    : false, 
					pitch   : $scope.notesArray[0] = $scope.notes[Math.floor($scope.notes.length * Math.random())],
					detune  : 0,
					panning : 0,
					env     : {hold : 0.5},
				})

				timbre.play({
					volume  : 0.5,
					loop    : false, 
					pitch   : $scope.notesArray[1] = $scope.notes[Math.floor($scope.notes.length * Math.random())],
					detune  : 0,
					panning : 0,
					wait    : 0.6,
					env     : {hold : 0.5},
				})
			}
			else if($scope.numNotes == 3){
				timbre.play({
					volume  : 0.5,
					loop    : false, 
					pitch   : $scope.notesArray[0] = $scope.notes[Math.floor($scope.notes.length * Math.random())],
					detune  : 0,
					panning : 0,
					env     : {hold : 0.5},
				})

				timbre.play({
					volume  : 0.5,
					loop    : false, 
					pitch   : $scope.notesArray[1] = $scope.notes[Math.floor($scope.notes.length * Math.random())],
					detune  : 0,
					panning : 0,
					wait    : 0.6,
					env     : {hold : 0.5},
				})
				timbre.play({
					volume  : 0.5,
					loop    : false, 
					pitch   : $scope.notesArray[2] = $scope.notes[Math.floor($scope.notes.length * Math.random())],
					detune  : 0,
					panning : 0,
					wait    : 1.2,
					env     : {hold : 0.5},
				})
			}
			else if($scope.numNotes == 4){
				timbre.play({
					volume  : 0.5,
					loop    : false, 
					pitch   : $scope.notesArray[0] = $scope.notes[Math.floor($scope.notes.length * Math.random())],
					detune  : 0,
					panning : 0,
					env     : {hold : 0.5},
				})
				timbre.play({
					volume  : 0.5,
					loop    : false, 
					pitch   : $scope.notesArray[1] = $scope.notes[Math.floor($scope.notes.length * Math.random())],
					detune  : 0,
					panning : 0,
					wait    : 0.6,
					env     : {hold : 0.5},
				})
				timbre.play({
					volume  : 0.5,
					loop    : false, 
					pitch   : $scope.notesArray[2] = $scope.notes[Math.floor($scope.notes.length * Math.random())],
					detune  : 0,
					panning : 0,
					wait    : 1.2,
					env     : {hold : 0.5},
				})
				timbre.play({
					volume  : 0.5,
					loop    : false, 
					pitch   : $scope.notesArray[3] = $scope.notes[Math.floor($scope.notes.length * Math.random())],
					detune  : 0,
					panning : 0,
					wait    : 1.8,
					env     : {hold : 0.5},
				})
			}
			else if($scope.numNotes == 5){
				timbre.play({
					volume  : 0.5,
					loop    : false, 
					pitch   : $scope.notesArray[0] = $scope.notes[Math.floor($scope.notes.length * Math.random())],
					detune  : 0,
					panning : 0,
					env     : {hold : 0.5},
				})
				timbre.play({
					volume  : 0.5,
					loop    : false, 
					pitch   : $scope.notesArray[1] = $scope.notes[Math.floor($scope.notes.length * Math.random())],
					detune  : 0,
					panning : 0,
					wait    : 0.6,
					env     : {hold : 0.5},
				})
				timbre.play({
					volume  : 0.5,
					loop    : false, 
					pitch   : $scope.notesArray[2] = $scope.notes[Math.floor($scope.notes.length * Math.random())],
					detune  : 0,
					panning : 0,
					wait    : 1.2,
					env     : {hold : 0.5},
				})
				timbre.play({
					volume  : 0.5,
					loop    : false, 
					pitch   : $scope.notesArray[3] = $scope.notes[Math.floor($scope.notes.length * Math.random())],
					detune  : 0,
					panning : 0,
					wait    : 1.8,
					env     : {hold : 0.5},
				})
				timbre.play({
					volume  : 0.5,
					loop    : false, 
					pitch   : $scope.notesArray[4] = $scope.notes[Math.floor($scope.notes.length * Math.random())],
					detune  : 0,
					panning : 0,
					wait    : 2.4,
					env     : {hold : 0.5},
				})
			}
			else if($scope.numNotes == 6){
				timbre.play({
					volume  : 0.5,
					loop    : false, 
					pitch   : $scope.notesArray[0] = $scope.notes[Math.floor($scope.notes.length * Math.random())],
					detune  : 0,
					panning : 0,
					env     : {hold : 0.5},
				})
				timbre.play({
					volume  : 0.5,
					loop    : false, 
					pitch   : $scope.notesArray[1] = $scope.notes[Math.floor($scope.notes.length * Math.random())],
					detune  : 0,
					panning : 0,
					wait    : 0.6,
					env     : {hold : 0.5},
				})
				timbre.play({
					volume  : 0.5,
					loop    : false, 
					pitch   : $scope.notesArray[2] = $scope.notes[Math.floor($scope.notes.length * Math.random())],
					detune  : 0,
					panning : 0,
					wait    : 1.2,
					env     : {hold : 0.5},
				})
				timbre.play({
					volume  : 0.5,
					loop    : false, 
					pitch   : $scope.notesArray[3] = $scope.notes[Math.floor($scope.notes.length * Math.random())],
					detune  : 0,
					panning : 0,
					wait    : 1.8,
					env     : {hold : 0.5},
				})
				timbre.play({
					volume  : 0.5,
					loop    : false, 
					pitch   : $scope.notesArray[4] = $scope.notes[Math.floor($scope.notes.length * Math.random())],
					detune  : 0,
					panning : 0,
					wait    : 2.4,
					env     : {hold : 0.5},
				})
				timbre.play({
					volume  : 0.5,
					loop    : false, 
					pitch   : $scope.notesArray[5] = $scope.notes[Math.floor($scope.notes.length * Math.random())],
					detune  : 0,
					panning : 0,
					wait    : 3.0,
					env     : {hold : 0.5},
				})
			}
			else if($scope.numNotes == 7){
				timbre.play({
					volume  : 0.5,
					loop    : false, 
					pitch   : $scope.notesArray[0] = $scope.notes[Math.floor($scope.notes.length * Math.random())],
					detune  : 0,
					panning : 0,
					env     : {hold : 0.5},
				})
				timbre.play({
					volume  : 0.5,
					loop    : false, 
					pitch   : $scope.notesArray[1] = $scope.notes[Math.floor($scope.notes.length * Math.random())],
					detune  : 0,
					panning : 0,
					wait    : 0.6,
					env     : {hold : 0.5},
				})
				timbre.play({
					volume  : 0.5,
					loop    : false, 
					pitch   : $scope.notesArray[2] = $scope.notes[Math.floor($scope.notes.length * Math.random())],
					detune  : 0,
					panning : 0,
					wait    : 1.2,
					env     : {hold : 0.5},
				})
				timbre.play({
					volume  : 0.5,
					loop    : false, 
					pitch   : $scope.notesArray[3] = $scope.notes[Math.floor($scope.notes.length * Math.random())],
					detune  : 0,
					panning : 0,
					wait    : 1.8,
					env     : {hold : 0.5},
				})
				timbre.play({
					volume  : 0.5,
					loop    : false, 
					pitch   : $scope.notesArray[4] = $scope.notes[Math.floor($scope.notes.length * Math.random())],
					detune  : 0,
					panning : 0,
					wait    : 2.4,
					env     : {hold : 0.5},
				})
				timbre.play({
					volume  : 0.5,
					loop    : false, 
					pitch   : $scope.notesArray[5] = $scope.notes[Math.floor($scope.notes.length * Math.random())],
					detune  : 0,
					panning : 0,
					wait    : 3.0,
					env     : {hold : 0.5},
				})
				timbre.play({
					volume  : 0.5,
					loop    : false, 
					pitch   : $scope.notesArray[6] = $scope.notes[Math.floor($scope.notes.length * Math.random())],
					detune  : 0,
					panning : 0,
					wait    : 3.6,
					env     : {hold : 0.5},
				})
			}

			
			console.log($scope.notesArray)
		}
		$scope.playedNotesArray = []
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
				panning : 0,
				env     : {hold : 1},
				});

			$scope.playedNotesArray.push($scope.notes[$index])
			console.log($scope.playedNotesArray)

			if($scope.numNotes == $scope.playedNotesArray.length){
				if($scope.notesArray.join() === $scope.playedNotesArray.join()){
					alert("You win!")
				}
				else{
					alert("You suck!")
				}
			}
		}
		$scope.randomIndex
		$scope.playScale = function(){
			$scope.randomIndex = Math.floor($scope.scalesArray.length * Math.random())
			console.log($scope.scalesArray[$scope.randomIndex].scalePattern)
			$scope.keyIndex
			$scope.compareArray.length = 0
			$scope.notes.length = 0

			for(var i=0; i<($scope.keysArray.length/2); i++){
				if($scope.keysArray[i].key === $scope.selectKeys){
					$scope.keyIndex = i
				}
			}
			var position = $scope.keyIndex
			console.log($scope.randomIndex)
			for ( var i = 0; i < $scope.scalesArray[$scope.randomIndex].scalePattern.length; i++ ) {
				$scope.compareArray.push($scope.keysArray[position])
				position += $scope.scalesArray[$scope.randomIndex].scalePattern[i]
			}
			$scope.compareArray.filter(function(el){
				$scope.notes.push(el.key);
			})
			console.log($scope.notes)
			$scope.selectTimbreLC = $scope.selectTimbre.toLowerCase()
			
			var timbre = new Wad({
				source  : $scope.selectTimbreLC,
			})

			if($scope.notes.length === 7){
		
				timbre.play({
					volume  : 0.5, 
					loop    : false, 
					pitch   : $scope.notes[0],
					detune  : 0,
					panning : 0,
					env     : {hold : 0.5},
					});
				timbre.play({
					volume  : 0.5, 
					wait    : 0.5,
					loop    : false, 
					pitch   : $scope.notes[1],
					detune  : 0,
					panning : 0,
					env     : {hold : 0.5},
				})
				timbre.play({
					volume  : 0.5, 
					wait    : 1,
					loop    : false, 
					pitch   : $scope.notes[2],
					detune  : 0,
					panning : 0,
					env     : {hold : 0.5},
				})
				timbre.play({
					volume  : 0.5, 
					wait    : 1.5,
					loop    : false, 
					pitch   : $scope.notes[3],
					detune  : 0,
					panning : 0,
					env     : {hold : 0.5},
				})
				timbre.play({
					volume  : 0.5, 
					wait    : 2,
					loop    : false, 
					pitch   : $scope.notes[4],
					detune  : 0,
					panning : 0,
					env     : {hold : 0.5},
				})
				timbre.play({
					volume  : 0.5, 
					wait    : 2.5,
					loop    : false, 
					pitch   : $scope.notes[5],
					detune  : 0,
					panning : 0,
					env     : {hold : 0.5},
				})
				timbre.play({
					volume  : 0.5, 
					wait    : 3,
					loop    : false, 
					pitch   : $scope.notes[6],
					detune  : 0,
					panning : 0,
					env     : {hold : 0.5},
				})
			}
			else if($scope.notes.length === 8){
				timbre.play({
					volume  : 0.5, 
					loop    : false, 
					pitch   : $scope.notes[0],
					detune  : 0,
					panning : 0,
					env     : {hold : 0.5},
					});
				timbre.play({
					volume  : 0.5, 
					wait    : 0.5,
					loop    : false, 
					pitch   : $scope.notes[1],
					detune  : 0,
					panning : 0,
					env     : {hold : 0.5},
				})
				timbre.play({
					volume  : 0.5, 
					wait    : 1,
					loop    : false, 
					pitch   : $scope.notes[2],
					detune  : 0,
					panning : 0,
					env     : {hold : 0.5},
				})
				timbre.play({
					volume  : 0.5, 
					wait    : 1.5,
					loop    : false, 
					pitch   : $scope.notes[3],
					detune  : 0,
					panning : 0,
					env     : {hold : 0.5},
				})
				timbre.play({
					volume  : 0.5, 
					wait    : 2,
					loop    : false, 
					pitch   : $scope.notes[4],
					detune  : 0,
					panning : 0,
					env     : {hold : 0.5},
				})
				timbre.play({
					volume  : 0.5, 
					wait    : 2.5,
					loop    : false, 
					pitch   : $scope.notes[5],
					detune  : 0,
					panning : 0,
					env     : {hold : 0.5},
				})
				timbre.play({
					volume  : 0.5, 
					wait    : 3,
					loop    : false, 
					pitch   : $scope.notes[6],
					detune  : 0,
					panning : 0,
					env     : {hold : 0.5},
				})
				timbre.play({
					volume  : 0.5, 
					wait    : 3.5,
					loop    : false, 
					pitch   : $scope.notes[7],
					detune  : 0,
					panning : 0,
					env     : {hold : 0.5},
				})
			}
			else if($scope.notes.length === 12){
				timbre.play({
					volume  : 0.5, 
					loop    : false, 
					pitch   : $scope.notes[0],
					detune  : 0,
					panning : 0,
					env     : {hold : 0.5},
					});
				timbre.play({
					volume  : 0.5, 
					wait    : 0.5,
					loop    : false, 
					pitch   : $scope.notes[1],
					detune  : 0,
					panning : 0,
					env     : {hold : 0.5},
				})
				timbre.play({
					volume  : 0.5, 
					wait    : 1,
					loop    : false, 
					pitch   : $scope.notes[2],
					detune  : 0,
					panning : 0,
					env     : {hold : 0.5},
				})
				timbre.play({
					volume  : 0.5, 
					wait    : 1.5,
					loop    : false, 
					pitch   : $scope.notes[3],
					detune  : 0,
					panning : 0,
					env     : {hold : 0.5},
				})
				timbre.play({
					volume  : 0.5, 
					wait    : 2,
					loop    : false, 
					pitch   : $scope.notes[4],
					detune  : 0,
					panning : 0,
					env     : {hold : 0.5},
				})
				timbre.play({
					volume  : 0.5, 
					wait    : 2.5,
					loop    : false, 
					pitch   : $scope.notes[5],
					detune  : 0,
					panning : 0,
					env     : {hold : 0.5},
				})
				timbre.play({
					volume  : 0.5, 
					wait    : 3,
					loop    : false, 
					pitch   : $scope.notes[6],
					detune  : 0,
					panning : 0,
					env     : {hold : 0.5},
				})
				timbre.play({
					volume  : 0.5, 
					wait    : 3.5,
					loop    : false, 
					pitch   : $scope.notes[7],
					detune  : 0,
					panning : 0,
					env     : {hold : 0.5},
				})
				timbre.play({
					volume  : 0.5, 
					wait    : 4,
					loop    : false, 
					pitch   : $scope.notes[8],
					detune  : 0,
					panning : 0,
					env     : {hold : 0.5},
				})
				timbre.play({
					volume  : 0.5, 
					wait    : 4.5,
					loop    : false, 
					pitch   : $scope.notes[9],
					detune  : 0,
					panning : 0,
					env     : {hold : 0.5},
				})
				timbre.play({
					volume  : 0.5, 
					wait    : 5,
					loop    : false, 
					pitch   : $scope.notes[10],
					detune  : 0,
					panning : 0,
					env     : {hold : 0.5},
				})
				timbre.play({
					volume  : 0.5, 
					wait    : 5.5,
					loop    : false, 
					pitch   : $scope.notes[11],
					detune  : 0,
					panning : 0,
					env     : {hold : 0.5},
				})
			}
		}
		$scope.changeScaleDropdown = function(){
			if($scope.answerScaleQuiz == $scope.randomIndex){
				alert("Correct!")
			}
			else{
				alert("you suck!")
			}
		}

}

angular.module("earTrainingApp").controller("earTrainingController", ['$scope', earTrainingFunction])