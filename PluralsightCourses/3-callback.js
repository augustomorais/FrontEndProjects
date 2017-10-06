var maxTime = 1000;

//if input is even, double it
// if input is odd, error
// (call takes random amount of time < 1s)
var eventDoubler = function(v, callback){

};

var handleResults = function(err, results, time){
    if(err){
        console.log("ERROR: " + err.message);
    }else{
        console.log("The results are: " + results + " (" + time + " ms)");
    }
};

for (var i = 0; i<10; i++) {
    console.log("Calling evenDoubler for value: " + i);
    eventDoubler(i, handleResults);
}

console.log("-------");