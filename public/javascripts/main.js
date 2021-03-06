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
			scalePattern: [1,1,1,1,1,1,1,1,1,1,1,1,0],
		},
		{
			scaleName: "Ionian (Major)",
			scalePattern: [2,2,1,2,2,2,1,0],
		},
		{
			scaleName: "Dorian",
			scalePattern: [2,1,2,2,2,1,2,0],
		},
		{
			scaleName: "Phrygian",
			scalePattern: [1,2,2,2,1,2,2,0],
		},
		{
			scaleName: "Lydian",
			scalePattern: [2,2,2,1,2,2,1,0],
		},
		{
			scaleName: "Mixolydian",
			scalePattern: [2,2,1,2,2,1,2,0],
		},
		{
			scaleName: "Aeolian (Minor)",
			scalePattern: [2,1,2,2,1,2,2,0],
		},
		{
			scaleName: "Locrian",
			scalePattern: [1,2,2,1,2,2,2,0],
		},
		{
			scaleName: "Half-Whole Diminished",
			scalePattern: [1,2,1,2,1,2,1,2,0],
		},
		{
			scaleName: "Whole-Half Diminished",
			scalePattern: [2,1,2,1,2,1,2,1,0],
		},
		{
			scaleName: "Harmonic Minor",
			scalePattern: [2,1,2,2,1,3,1,0],
		},
		{
			scaleName: "Melodic Minor",
			scalePattern: [2,1,2,2,2,2,1,0],
		},
		{
			scaleName: "Custom Scale...",
			scalePattern: [],
		}
	]

	$scope.notes = []
	$scope.notesNoNumber = []

	//Custom Scale...

	$scope.hideCustomForm = true

	$scope.changeScale = function(){
		if($scope.selectScale == 12){
			$scope.hideCustomForm = false
		}
		else if($scope.selectScale !== 12){
			$scope.hideCustomForm = true
		}
	}

	$scope.submitCustomScale = function(){
		$scope.scalesArray[$scope.selectScale].scalePattern.length = 0
		var customScaleArray = []
		customScaleArray.push($scope.firstCustomScaleDegree, $scope.secondCustomScaleDegree, $scope.thirdCustomScaleDegree, $scope.fourthCustomScaleDegree, $scope.fifthCustomScaleDegree, $scope.sixthCustomScaleDegree, $scope.seventhCustomScaleDegree, 0)
		for(var i = 0; i<customScaleArray.length; i++){
			if(customScaleArray[i] !== undefined && customScaleArray[i] !== null){
				$scope.scalesArray[$scope.selectScale].scalePattern.push(customScaleArray[i])
			}
		}
	}

	// Generate Notes in Key/Scale

	$scope.setKeyScale = function(){
		$scope.notesNoNumber.length =0
		$scope.buttonsDivHide = true
		$scope.keyIndex
		$scope.compareArray.length = 0
		$scope.notes.length = 0

		//Set selected Key as Index to start looping from

		for(var i=0; i<($scope.keysArray.length/2); i++){
			if($scope.keysArray[i].key === $scope.selectKeys){
				$scope.keyIndex = i
			}
		}
		var position = $scope.keyIndex

		//Populate $scope.notes array with correct notes from selected Key and Scale

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
	}

	$scope.timbreArray = ['Sine', 'Square', 'Sawtooth', 'Triangle']

	$scope.numNotes

	//Play Random Notes For Notes Test

	$scope.startOn1 = false

	$scope.startNotesTest = function(){
		$scope.notesArray.length = 0
		$scope.playedNotesArray.length = 0
		$scope.selectTimbreLC = $scope.selectTimbre.toLowerCase()
		$scope.noteSpeedNum = Number($scope.noteSpeed)

		var timbre = new Wad({
			source : $scope.selectTimbreLC
		})

		var startOnTheOneOrNot
		if($scope.startOn1 == true){
			startOnTheOneOrNot = $scope.selectKeys
		}
		else if($scope.startOn1 == false){
			startOnTheOneOrNot = $scope.notes[Math.floor($scope.notes.length * Math.random())]
		}

		var play1stNoteQuizNote = function(){
			timbre.play({
				volume  : 0.4,
				loop    : false, 
				pitch   : $scope.notesArray[0] = startOnTheOneOrNot,
				detune  : 0,
				panning : 0,
				env     : {hold : $scope.noteSpeedNum},
			})}
		var play2ndNoteQuizNote = function(){
			timbre.play({
				volume  : 0.4,
				loop    : false, 
				pitch   : $scope.notesArray[1] = $scope.notes[Math.floor($scope.notes.length * Math.random())],
				detune  : 0,
				panning : 0,
				wait    : ($scope.noteSpeedNum),
				env     : {hold : $scope.noteSpeedNum},
			})}
		var play3rdNoteQuizNote = function(){
			timbre.play({
				volume  : 0.4,
				loop    : false, 
				pitch   : $scope.notesArray[2] = $scope.notes[Math.floor($scope.notes.length * Math.random())],
				detune  : 0,
				panning : 0,
				wait    : ($scope.noteSpeedNum*2),
				env     : {hold : $scope.noteSpeedNum},
			})}
		var play4thNoteQuizNote = function(){
			timbre.play({
				volume  : 0.4,
				loop    : false, 
				pitch   : $scope.notesArray[3] = $scope.notes[Math.floor($scope.notes.length * Math.random())],
				detune  : 0,
				panning : 0,
				wait    : ($scope.noteSpeedNum*3),
				env     : {hold : $scope.noteSpeedNum},
			})}
		var play5thNoteQuizNote = function(){
			timbre.play({
				volume  : 0.4,
				loop    : false, 
				pitch   : $scope.notesArray[4] = $scope.notes[Math.floor($scope.notes.length * Math.random())],
				detune  : 0,
				panning : 0,
				wait    : ($scope.noteSpeedNum*4),
				env     : {hold : $scope.noteSpeedNum},
			})}
		var play6thNoteQuizNote = function(){
			timbre.play({
				volume  : 0.4,
				loop    : false, 
				pitch   : $scope.notesArray[5] = $scope.notes[Math.floor($scope.notes.length * Math.random())],
				detune  : 0,
				panning : 0,
				wait    : ($scope.noteSpeedNum*5),
				env     : {hold : $scope.noteSpeedNum},
			})}
		var play7thNoteQuizNote = function(){
			timbre.play({
				volume  : 0.4,
				loop    : false, 
				pitch   : $scope.notesArray[6] = $scope.notes[Math.floor($scope.notes.length * Math.random())],
				detune  : 0,
				panning : 0,
				wait    : ($scope.noteSpeedNum*6),
				env     : {hold : $scope.noteSpeedNum},
			})}
		if($scope.numNotes == 2){
			play1stNoteQuizNote()
			play2ndNoteQuizNote()
		}
		else if($scope.numNotes == 3){
			play1stNoteQuizNote()
			play2ndNoteQuizNote()
			play3rdNoteQuizNote()
		}
		else if($scope.numNotes == 4){
			play1stNoteQuizNote()
			play2ndNoteQuizNote()
			play3rdNoteQuizNote()
			play4thNoteQuizNote()
		}
		else if($scope.numNotes == 5){
			play1stNoteQuizNote()
			play2ndNoteQuizNote()
			play3rdNoteQuizNote()
			play4thNoteQuizNote()
			play5thNoteQuizNote()
		}
		else if($scope.numNotes == 6){
			play1stNoteQuizNote()
			play2ndNoteQuizNote()
			play3rdNoteQuizNote()
			play4thNoteQuizNote()
			play5thNoteQuizNote()
			play6thNoteQuizNote()
		}
		else if($scope.numNotes == 7){
			play1stNoteQuizNote()
			play2ndNoteQuizNote()
			play3rdNoteQuizNote()
			play4thNoteQuizNote()
			play5thNoteQuizNote()
			play6thNoteQuizNote()
			play7thNoteQuizNote()
		}			
	}
	
	$scope.playedNotesArray = []

	//Default Timbre if not selected yet

	if($scope.selectTimbre === undefined){
		$scope.selectTimbre = 'Sine'
		$scope.selectTimbreLC = 'sine'
		Wad.midiInstrument = new Wad({
			source : $scope.selectTimbreLC,
			volume : 0.4,
		})
	}

////////Setting up MIDI input and pushing into $scope.playedNotesArray
	


	$scope.changeTimbre = function(){
		$scope.selectTimbreLC = $scope.selectTimbre.toLowerCase()
		Wad.midiInstrument = new Wad({
			source : $scope.selectTimbreLC,
			volume : 0.4,
		})
	}

	setTimeout(function(){

		Wad.midiInputs[0].onmidimessage= function(event){
			if(event.data[0] === 144){
				Wad.midiInstrument.stop("all")
				Wad.midiInstrument.play(
					{pitch : Wad.pitchesArray[event.data[1]],
					 label : "all"})
				$scope.playedNotesArray.push(Wad.pitchesArray[event.data[1]])

				//Win or Lose if correct notes played

				if($scope.notesArray.length>0){
					if($scope.numNotes == $scope.playedNotesArray.length){
						if($scope.notesArray.join() === $scope.playedNotesArray.join()){
							var message = "Correct!"
							$('#modalMessage').html(message)
							$('#myModal').modal('show')
						}
						else{
							var message = "Try Again"
							$('#modalMessage').html(message)
							$('#myModal').modal('show')
							$scope.playedNotesArray.length = 0
						}
					}
				}
			}
			else if(event.data[0] === 128){
				Wad.midiInstrument.stop()
			}
		}
		Wad.midiInputs[1].onmidimessage= function(event){
			if(event.data[0] === 144){
				Wad.midiInstrument.stop("all")
				Wad.midiInstrument.play(
					{pitch : Wad.pitchesArray[event.data[1]],
					 label : "all"})
				$scope.playedNotesArray.push(Wad.pitchesArray[event.data[1]])

				//Win or Lose if correct notes played
				if($scope.notesArray.length>0){
					if($scope.numNotes == $scope.playedNotesArray.length){
						if($scope.notesArray.join() === $scope.playedNotesArray.join()){
							var message = "Correct!"
							$('#modalMessage').html(message)
							$('#myModal').modal('show')
						}
						else{
							var message = "Try Again"
							$('#modalMessage').html(message)
							$('#myModal').modal('show')
							$scope.playedNotesArray.length = 0
						}
					}
				}
			}
			else if(event.data[0] === 128){
				Wad.midiInstrument.stop()
			}
		}
		Wad.midiInputs[2].onmidimessage= function(event){
			if(event.data[0] === 144){
				Wad.midiInstrument.stop("all")
				Wad.midiInstrument.play(
					{pitch : Wad.pitchesArray[event.data[1]],
					 label : "all"})
				$scope.playedNotesArray.push(Wad.pitchesArray[event.data[1]])

				//Win or Lose if correct notes played
				if($scope.notesArray.length>0){
					if($scope.numNotes == $scope.playedNotesArray.length){
						if($scope.notesArray.join() === $scope.playedNotesArray.join()){
							var message = "Correct!"
							$('#modalMessage').html(message)
							$('#myModal').modal('show')
						}
						else{
							var message = "Try Again"
							$('#modalMessage').html(message)
							$('#myModal').modal('show')
							$scope.playedNotesArray.length = 0
						}
					}
				}
			}
			else if(event.data[0] === 128){
				Wad.midiInstrument.stop()
			}
		}
		Wad.midiInputs[3].onmidimessage= function(event){
			if(event.data[0] === 144){
				Wad.midiInstrument.stop("all")
				Wad.midiInstrument.play(
					{pitch : Wad.pitchesArray[event.data[1]],
					 label : "all"})
				$scope.playedNotesArray.push(Wad.pitchesArray[event.data[1]])

				//Win or Lose if correct notes played
				if($scope.notesArray.length>0){
					if($scope.numNotes == $scope.playedNotesArray.length){
						if($scope.notesArray.join() === $scope.playedNotesArray.join()){
							var message = "Correct!"
							$('#modalMessage').html(message)
							$('#myModal').modal('show')
						}
						else{
							var message = "Try Again"
							$('#modalMessage').html(message)
							$('#myModal').modal('show')
							$scope.playedNotesArray.length = 0
						}
					}
				}
			}
			else if(event.data[0] === 128){
				Wad.midiInstrument.stop()
			}
		}
		Wad.midiInputs[4].onmidimessage= function(event){
			if(event.data[0] === 144){
				Wad.midiInstrument.stop("all")
				Wad.midiInstrument.play(
					{pitch : Wad.pitchesArray[event.data[1]],
					 label : "all"})
				$scope.playedNotesArray.push(Wad.pitchesArray[event.data[1]])

				//Win or Lose if correct notes played
				if($scope.notesArray.length>0){
					if($scope.numNotes == $scope.playedNotesArray.length){
						if($scope.notesArray.join() === $scope.playedNotesArray.join()){
							var message = "Correct!"
							$('#modalMessage').html(message)
							$('#myModal').modal('show')
						}
						else{
							var message = "Try Again"
							$('#modalMessage').html(message)
							$('#myModal').modal('show')
							$scope.playedNotesArray.length = 0
						}
					}
				}
			}
			else if(event.data[0] === 128){
				Wad.midiInstrument.stop()
			}
		}
		Wad.midiInputs[5].onmidimessage= function(event){
			if(event.data[0] === 144){
				Wad.midiInstrument.stop("all")
				Wad.midiInstrument.play(
					{pitch : Wad.pitchesArray[event.data[1]],
					 label : "all"})
				$scope.playedNotesArray.push(Wad.pitchesArray[event.data[1]])

				//Win or Lose if correct notes played
				if($scope.notesArray.length>0){
					if($scope.numNotes == $scope.playedNotesArray.length){
						if($scope.notesArray.join() === $scope.playedNotesArray.join()){
							var message = "Correct!"
							$('#modalMessage').html(message)
							$('#myModal').modal('show')
						}
						else{
							var message = "Try Again"
							$('#modalMessage').html(message)
							$('#myModal').modal('show')
							$scope.playedNotesArray.length = 0
						}
					}
				}
			}
			else if(event.data[0] === 128){
				Wad.midiInstrument.stop()
			}
		}
		Wad.midiInputs[6].onmidimessage= function(event){
			if(event.data[0] === 144){
				Wad.midiInstrument.stop("all")
				Wad.midiInstrument.play(
					{pitch : Wad.pitchesArray[event.data[1]],
					 label : "all"})
				$scope.playedNotesArray.push(Wad.pitchesArray[event.data[1]])

				//Win or Lose if correct notes played
				if($scope.notesArray.length>0){
					if($scope.numNotes == $scope.playedNotesArray.length){
						if($scope.notesArray.join() === $scope.playedNotesArray.join()){
							var message = "Correct!"
							$('#modalMessage').html(message)
							$('#myModal').modal('show')
						}
						else{
							var message = "Try Again"
							$('#modalMessage').html(message)
							$('#myModal').modal('show')
							$scope.playedNotesArray.length = 0
						}
					}
				}
			}
			else if(event.data[0] === 128){
				Wad.midiInstrument.stop()
			}
		}
		Wad.midiInputs[7].onmidimessage= function(event){
			if(event.data[0] === 144){
				Wad.midiInstrument.stop("all")
				Wad.midiInstrument.play(
					{pitch : Wad.pitchesArray[event.data[1]],
					 label : "all"})
				$scope.playedNotesArray.push(Wad.pitchesArray[event.data[1]])

				//Win or Lose if correct notes played
				if($scope.notesArray.length>0){
					if($scope.numNotes == $scope.playedNotesArray.length){
						if($scope.notesArray.join() === $scope.playedNotesArray.join()){
							var message = "Correct!"
							$('#modalMessage').html(message)
							$('#myModal').modal('show')
						}
						else{
							var message = "Try Again"
							$('#modalMessage').html(message)
							$('#myModal').modal('show')
							$scope.playedNotesArray.length = 0
						}
					}
				}
			}
			else if(event.data[0] === 128){
				Wad.midiInstrument.stop()
			}
		}
		Wad.midiInputs[8].onmidimessage= function(event){
			if(event.data[0] === 144){
				Wad.midiInstrument.stop("all")
				Wad.midiInstrument.play(
					{pitch : Wad.pitchesArray[event.data[1]],
					 label : "all"})
				$scope.playedNotesArray.push(Wad.pitchesArray[event.data[1]])

				//Win or Lose if correct notes played
				if($scope.notesArray.length>0){
					if($scope.numNotes == $scope.playedNotesArray.length){
						if($scope.notesArray.join() === $scope.playedNotesArray.join()){
							var message = "Correct!"
							$('#modalMessage').html(message)
							$('#myModal').modal('show')
						}
						else{
							var message = "Try Again"
							$('#modalMessage').html(message)
							$('#myModal').modal('show')
							$scope.playedNotesArray.length = 0
						}
					}
				}
			}
			else if(event.data[0] === 128){
				Wad.midiInstrument.stop()
			}
		}
		Wad.midiInputs[9].onmidimessage= function(event){
			if(event.data[0] === 144){
				Wad.midiInstrument.stop("all")
				Wad.midiInstrument.play(
					{pitch : Wad.pitchesArray[event.data[1]],
					 label : "all"})
				$scope.playedNotesArray.push(Wad.pitchesArray[event.data[1]])

				//Win or Lose if correct notes played
				if($scope.notesArray.length>0){
					if($scope.numNotes == $scope.playedNotesArray.length){
						if($scope.notesArray.join() === $scope.playedNotesArray.join()){
							var message = "Correct!"
							$('#modalMessage').html(message)
							$('#myModal').modal('show')
						}
						else{
							var message = "Try Again"
							$('#modalMessage').html(message)
							$('#myModal').modal('show')
							$scope.playedNotesArray.length = 0
						}
					}
				}
			}
			else if(event.data[0] === 128){
				Wad.midiInstrument.stop()
			}
		}
	}, 1000)

	//Play Notes Via ng-repeated <button> Inputs

	$scope.playNote = function($index){
		$scope.selectTimbreLC = $scope.selectTimbre.toLowerCase()
		
		var timbre = new Wad({
			source  : $scope.selectTimbreLC,
		})
	
		timbre.play({
			volume  : 0.4, 
			loop    : false, 
			pitch   : $scope.notes[$index],
			detune  : 0,
			panning : 0,
			env     : {hold : 0.5},
			});

		$scope.playedNotesArray.push($scope.notes[$index])


		if($scope.notesArray.length>0){
			if($scope.numNotes == $scope.playedNotesArray.length){
				if($scope.notesArray.join() === $scope.playedNotesArray.join()){
					var message = "Correct!"
					$('#modalMessage').html(message)
					$('#myModal').modal('show')
				}
				else{
					var message = "Try Again"
					$('#modalMessage').html(message)
					$('#myModal').modal('show')
					$scope.playedNotesArray.length = 0
				}
			}
		}
	}

	//Play Random Scale for Scale Test

	$scope.randomIndex

	$scope.playScale = function(){
		// "-1" on following line to prevent Custom Scale from being randomly generated -- maybe do an if/else to include it if .length>0...
		$scope.randomIndex = Math.floor(($scope.scalesArray.length-1) * Math.random())
		$scope.keyIndex
		$scope.compareArray.length = 0
		$scope.notes.length = 0
		$scope.notesNoNumber.length = 0

		//Set selected Key as Index to start looping from

		for(var i=0; i<($scope.keysArray.length/2); i++){
			if($scope.keysArray[i].key === $scope.selectKeys){
				$scope.keyIndex = i
			}
		}
		var position = $scope.keyIndex

		//Populate $scope.notes array with correct notes from selected Key and Scale

		for ( var i = 0; i < $scope.scalesArray[$scope.randomIndex].scalePattern.length; i++ ) {
			$scope.compareArray.push($scope.keysArray[position])
			position += $scope.scalesArray[$scope.randomIndex].scalePattern[i]
		}
		$scope.compareArray.filter(function(el){
			$scope.notes.push(el.key);
		})

		$scope.selectTimbreLC = $scope.selectTimbre.toLowerCase()
		$scope.noteSpeedNum = Number($scope.noteSpeed)

		var timbre = new Wad({
			source  : $scope.selectTimbreLC,
		})
		var play1stScaleQuizNote = function(){
			timbre.play({
				volume  : 0.4, 
				loop    : false, 
				pitch   : $scope.notes[0],
				detune  : 0,
				panning : 0,
				env     : {hold : $scope.noteSpeedNum},
				})}
		var play2ndScaleQuizNote = function(){
			timbre.play({
				volume  : 0.4, 
				wait    : ($scope.noteSpeedNum),
				loop    : false, 
				pitch   : $scope.notes[1],
				detune  : 0,
				panning : 0,
				env     : {hold : $scope.noteSpeedNum},
			})}
		var play3rdScaleQuizNote = function(){
			timbre.play({
				volume  : 0.4, 
				wait    : ($scope.noteSpeedNum*2),
				loop    : false, 
				pitch   : $scope.notes[2],
				detune  : 0,
				panning : 0,
				env     : {hold : $scope.noteSpeedNum},
			})}
		var play4thScaleQuizNote = function(){
			timbre.play({
				volume  : 0.4, 
				wait    : ($scope.noteSpeedNum*3),
				loop    : false, 
				pitch   : $scope.notes[3],
				detune  : 0,
				panning : 0,
				env     : {hold : $scope.noteSpeedNum},
			})}
		var play5thScaleQuizNote = function(){
			timbre.play({
				volume  : 0.4, 
				wait    : ($scope.noteSpeedNum*4),
				loop    : false, 
				pitch   : $scope.notes[4],
				detune  : 0,
				panning : 0,
				env     : {hold : $scope.noteSpeedNum},
			})}
		var play6thScaleQuizNote = function(){
			timbre.play({
				volume  : 0.4, 
				wait    : ($scope.noteSpeedNum*5),
				loop    : false, 
				pitch   : $scope.notes[5],
				detune  : 0,
				panning : 0,
				env     : {hold : $scope.noteSpeedNum},
			})}
		var play7thScaleQuizNote = function(){
			timbre.play({
				volume  : 0.4, 
				wait    : ($scope.noteSpeedNum*6),
				loop    : false, 
				pitch   : $scope.notes[6],
				detune  : 0,
				panning : 0,
				env     : {hold : $scope.noteSpeedNum},
			})}
		var play8thScaleQuizNote = function(){
			timbre.play({
				volume  : 0.4, 
				wait    : ($scope.noteSpeedNum*7),
				loop    : false, 
				pitch   : $scope.notes[7],
				detune  : 0,
				panning : 0,
				env     : {hold : $scope.noteSpeedNum},
			})}
		var play9thScaleQuizNote = function(){
			timbre.play({
				volume  : 0.4, 
				wait    : ($scope.noteSpeedNum*8),
				loop    : false, 
				pitch   : $scope.notes[8],
				detune  : 0,
				panning : 0,
				env     : {hold : $scope.noteSpeedNum},
			})}
		var play10thScaleQuizNote = function(){
			timbre.play({
				volume  : 0.4, 
				wait    : ($scope.noteSpeedNum*9),
				loop    : false, 
				pitch   : $scope.notes[9],
				detune  : 0,
				panning : 0,
				env     : {hold : $scope.noteSpeedNum},
			})}
		var play11thScaleQuizNote = function(){
			timbre.play({
				volume  : 0.4, 
				wait    : ($scope.noteSpeedNum*10),
				loop    : false, 
				pitch   : $scope.notes[10],
				detune  : 0,
				panning : 0,
				env     : {hold : $scope.noteSpeedNum},
			})}
		var play12thScaleQuizNote = function(){
			timbre.play({
				volume  : 0.4, 
				wait    : ($scope.noteSpeedNum*11),
				loop    : false, 
				pitch   : $scope.notes[11],
				detune  : 0,
				panning : 0,
				env     : {hold : $scope.noteSpeedNum},
			})}
		var play13thScaleQuizNote = function(){
			timbre.play({
				volume  : 0.4, 
				wait    : ($scope.noteSpeedNum*12),
				loop    : false, 
				pitch   : $scope.notes[12],
				detune  : 0,
				panning : 0,
				env     : {hold : $scope.noteSpeedNum},
			})}

		if($scope.notes.length <= 8){
			play1stScaleQuizNote()
			play2ndScaleQuizNote()
			play3rdScaleQuizNote()
			play4thScaleQuizNote()
			play5thScaleQuizNote()
			play6thScaleQuizNote()
			play7thScaleQuizNote()
			play8thScaleQuizNote()						
		}
		else if($scope.notes.length === 9){
			play1stScaleQuizNote()
			play2ndScaleQuizNote()
			play3rdScaleQuizNote()
			play4thScaleQuizNote()
			play5thScaleQuizNote()
			play6thScaleQuizNote()
			play7thScaleQuizNote()
			play8thScaleQuizNote()	
			play9thScaleQuizNote()			
		}
		else if($scope.notes.length === 13){
			play1stScaleQuizNote()
			play2ndScaleQuizNote()
			play3rdScaleQuizNote()
			play4thScaleQuizNote()
			play5thScaleQuizNote()
			play6thScaleQuizNote()
			play7thScaleQuizNote()
			play8thScaleQuizNote()
			play9thScaleQuizNote()
			play10thScaleQuizNote()
			play11thScaleQuizNote()
			play12thScaleQuizNote()
			play13thScaleQuizNote()
		}
	}
	$scope.changeScaleDropdown = function(){
		if($scope.answerScaleQuiz == $scope.randomIndex){
			var message = "Correct!"
			$('#modalMessage').html(message)
			$('#myModal').modal('show')
		}
		else{
			var message = "Try Again"
			$('#modalMessage').html(message)
			$('#myModal').modal('show')
		}
	}
}

angular.module("earTrainingApp").controller("earTrainingController", ['$scope', earTrainingFunction])