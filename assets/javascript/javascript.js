console.log('hello');

// minus 1000
var ct = $("#current-time").html(new Date());
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

$("#addTrainBtn").on("click", function (event) {
    event.preventDefault();
    //    do with inputs including time and frequency (first train time dont need .trim())
    var trainName = $("#trainNameInput").val().trim();

    var destination = $("#destinationInput").val().trim();

    var frequency = $("#frequencyInput").val().trim();

    var firstTrainTime = $("#firstTrainInput").val();


    database.ref().push({


        // my inupts
        trainName: trainName,
        destination: destination,
        firstTrainTime: firstTrainTime,
        frequency: frequency,




        // place in sched



    })



})

database.ref().on("child_added", function (snapshot) {

var newTrainName = snapshot.val().trainName;
var newDestination = snapshot.val().destination;
var newFirstTrain = snapshot.val().firstTrainTime;
var newFrequency = snapshot.val().frequency;


// first time

var updatedStartTime = moment(newFirstTrain, "hh:mm").subtract(1, "years");

// current time

var currentTime = moment();

// diffrence betweeen times

var difference  = moment().diff(moment(updatedStartTime), "minutes");

// remainder

var timeRemainder = difference % newFrequency;

// minutes till train

var minTill = newFrequency - timeRemainder;


// next train

var nextTrain = moment().add(minTill, "minutes");
var nexTrainTIme = moment(nextTrain).format("HH:mm");




    // var trainName = child.val().trainName;
    // console.log(child);
    // // $("#train-names").append(child.val().trainName);

    // $("#trainTable").append("<tr><td><i>" + trainName +"</td><td>" + destination + "</i></td></tr>");


    console.log(newDestination)


    var trainRow = "<tr>" +
        "<td>" + newTrainName + "</td>" +
        "<td>" + newDestination + "</td>" +
        "<td>" + newFrequency + "</td>" +
        "<td>" + nexTrainTIme + "</td>" +
        "<td>" + minTill + "</td>" +
        // "<td>" + minutesAway + "</td>" +


        "</tr>";

    $("#trainTable").append(trainRow);




})