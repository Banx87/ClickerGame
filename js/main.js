var moneyClicks = 0;
var workers = 0;
var workersCost = 10;
var workersMPS = 1;

var leaders = 0;
var leaderCost = 30;
var leaderMPS = 2;

var managers = 0;
var managerCost = 50;
var managerMPS = 3;

var offices = 0;
var officeCost = 200;
var officeMPS = 5;


function moneyClicked() {
    moneyClicks++;

}

function buyClicker(items, cost) {
    if (moneyClicks >= window[cost]) {
        window[items]++;
        moneyClicks -= window[cost];
        window[cost] = Math.round(window[cost] * 1.5);
    } else {
        alert("Not enough money");
    }
}

// function getWorker() {
//     if (moneyClicks >= workersCost) {
//         workers++;
//         moneyClicks -= workersCost;
//         workersCost = Math.round(workersCost * 1.5);
//     } else {
//         alert("Not enough money to hire a Worker");
//     }
// }

// function getLeader() {
//     if (moneyClicks >= leaderCost) {
//         leaders++;
//         moneyClicks -= leaderCost;
//         leaderCost = Math.round(leaderCost * 1.5);
//     } else {
//         alert("Not enough money to hire a Leader.")
//     }
// }

// function getManager() {
//     if (moneyClicks >= managerCost) {
//         managers++;
//         moneyClicks -= managerCost;
//         managerCost = Math.round(managerCost * 1.5);
//     } else {
//         alert("Not enough money to hire a Manager")
//     }
// }


function updateMoney() {
    var moneyPerSecond = 
    workers * workersMPS + 
    leaders * leaderMPS + 
    managers * managerMPS +
    offices * officeMPS;

    // How much money you make per second
    document.getElementById("moneyPerSecond").innerHTML = moneyPerSecond + " dollars per second";
    // How much money you have
    document.getElementById("moneyAmount").innerHTML = moneyClicks + "$";

    //WORKERS
    // How much hiring a worker costs
    document.getElementById("workerCost").innerHTML = workersCost + "$";
    // How many workers you have hired
    document.getElementById("numberOfWorkers").innerHTML = "Workers hired: " + workers;

    //LEADERS
    document.getElementById("leaderCost").innerHTML = leaderCost + "$";
    // How many leaders you have hired.
    document.getElementById("numOfLeaders").innerHTML = "Team leaders hired: " + leaders;

    //MANAGERS
    document.getElementById("managerCost").innerHTML = managerCost + "$";
    document.getElementById("numOfManagers").innerHTML = "Managers hired: " + managers;

    //OFFICES
    document.getElementById("officeCost").innerHTML = officeCost + "$";
    document.getElementById("numOfOffices").innerHTML = "Offices bought: " + offices;
}

function moneyProducers() {
    moneyClicks += workers * workersMPS;
    moneyClicks += leaders * leaderMPS;
    moneyClicks += managers * managerMPS;
    moneyClicks += offices * officeMPS;

}

var moneyProducerTimer = setInterval(function() {
    moneyProducers();
}, 1000)

var moneyClickerTimer = setInterval(function() {
    updateMoney();
}, 100);

function popUp() {
    document.getElementById("popup-info").classList.toggle("visible");
}