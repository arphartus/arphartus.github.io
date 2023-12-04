//Parameters
let totalProblems, testLength, maxIntersections, maxTests;
/*const totalProblems = 1000;
const testLength = 100;
const maxIntersections = 15;
const maxTests = 10000;*/

//Container for tests
let tests = [];

//Object for keeping track of which tests a problem belongs to - makes for faster computation
let problems = {};

//METHODS
function addQuestion(index){
	problems[index].add(tests.length);
};

//Initialise problems objecct
function initialise(){
	tests = [];

	for(let i = 0; i < totalProblems; i++){
		problems[i] = new Set();
	};
};

function buildTest(){
	let newTest = new Set();
	let probs = [];

	//Randomise problem selection
	for(let i = 0; i < totalProblems; i++){
		probs.push(i);
	};
	shuffleArray(probs);

	//Build test
	for(const i of probs){
		//Flag for determining if adding problem will exceed intersection maximum
		let canAdd = true;

		for(const test of tests){
			//check intersection maximum against all previous tests
			if(test.has(i) && intersection(newTest, test).size === maxIntersections){
				canAdd = false;
			};
		};

		//add question
		if(canAdd){
			newTest.add(i);
		};

		//check if test has enough problems
		if(newTest.size === testLength){
			break;
		};
	};

	return newTest;
};

function buildTest2(){
	let newTest = new Set();

	//container for keeping track of which tests have questions in common with this one - makes for faster computation
	let intersections = {};

	//Randomise problem selection
	let problemArray = Object.entries(problems);
	shuffleArray(problemArray);
	//problemArray.sort((a, b) => {return a[1].size - b[1].size});

	//Build test
	for(const [problem, testList] of problemArray){
		//Flag for determining if adding problem will exceed intersection maximum
		let canAdd = true;

		//check intersection maximum against all previous tests that include this problem
		for(const test of testList){
			if(intersections[test] === maxIntersections){
				canAdd = false;
				break;
			};
		};

		if(canAdd){
			//add question
			newTest.add(problem);

			//update problems container
			problems[problem].add(tests.length);

			//update intersections container
			for(const test of testList){
				if(typeof intersections[test] === "undefined"){
					intersections[test] = 1;
				}
				else if(intersections[test] < maxIntersections){
					intersections[test]++;
				};
			};

			//check if test has enough problems
			if(newTest.size === testLength){
				break;
			};
		};
	};

	return newTest;
};

function buildTests(){
	initialise();

	let done = false;
	let i = 0;

	while(!done && i < maxTests){
		let newTest = buildTest2();

		//If newest test is long enough keep building, otherwise stop
		if(newTest.size === testLength){
			tests.push(newTest);
		}
		else{
			done = true;
		};
		i++
	};
};

//Build random test collection
function buildRandom(size){
	for(let i = 0; i < size; i++){
		let newTest = new Set();

		//Randomise problem selection
		let probs = [];

		for(let i = 0; i < totalProblems; i++){
			probs.push(i);
		};

		shuffleArray(probs);

		for(let i = 0; i < testLength; i++){
			newTest.add(probs[i]);
		};

		tests.push(newTest);
	};
};

//Finds the largest number of questions that a pair of tests have in common
function compareTests(){
	let compares = [];

	for(let i = 0; i < tests.length; i++){
		for(let j = i + 1; j < tests.length; j++){
			compares.push({i: i, j: j, int: intersection(tests[i], tests[j])});
		};
	};

	let max = 0;

	for(const com of compares){
		if(com.int.size > max){
			max = com.int.size;
		};
	};

	return max; 
};

//Generates the average number of questions in common for a random selection of tests
function averages(numTests, sampleSize){
	let min = testLength;
	let max = 0;
	let avg = 0;

	for(let j = 0; j < sampleSize; j++){
		tests = [];
		buildRandom(numTests);

		let com = compareTests();
		min = Math.min(min, com);
		max = Math.max(max, com);
		avg += com;
	};

	return {numTests: numTests, min: min, max: max, avg: avg / sampleSize};
};

//Checks the number of questions a random pair of tests have in common
function compareRandom(){
	let i = Math.floor(Math.random() * tests.length);
	let j = Math.floor(Math.random() * tests.length);

	console.log(intersection(tests[i], tests[j]).size);
};

//Set and Array Methods
function shuffleArray(array){
	for(let i = array.length - 1; i > 0; i--){
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	};
};

function intersection(setA, setB){
	let _intersection = new Set()

	for(let elem of setB){
		if(setA.has(elem)){
			_intersection.add(elem)
		}
	}

	return _intersection
}

function setEqual(setA, setB){
	if(setA.size !== setB.size){
		return false;
	};

	for(const elt of setA.values()){
		if(!setB.has(elt)){
			return false;
		};
	};

	return true;
};