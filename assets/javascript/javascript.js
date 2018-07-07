console.log('hello');

// minus 1000
var ct = $("#current-time").html(Date.now());
console.log(ct);

// config firebase





var config = {
    apiKey: "AIzaSyDBMpWcgHPkDUqe4DKiLLXVKSbho-1WBQU",
    authDomain: "train-schedular-bc87d.firebaseapp.com",
    databaseURL: "https://train-schedular-bc87d.firebaseio.com",
    projectId: "train-schedular-bc87d",
    storageBucket: "train-schedular-bc87d.appspot.com",
    messagingSenderId: "583454159351"
  };
  firebase.initializeApp(config);

var database = firebase.database();
console.log(database);

$("#addTrainBtn").on("click", function () {
event.preventDefault();
    //    do with inputs including time and frequency (first train time dont need .trim())
    var trainName = $("#trainNameInput").val().trim();




database.ref().push({


// my inupts
trainName: trainName,


// place in sched



})



})

database.ref().on("child_added", function(child){
var trainName = child.val().trainName;
    console.log(child);
    // $("#train-names").append(child.val().trainName);

    $("#trainTable").append("<tr><th><i>" + trainName + "</i></th></tr>");

    
    
    
        
    })