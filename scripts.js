function init(){
    const takeOff = document.getElementById("takeoff");
    const landing = document.getElementById("landing")
    const missionAbort = document.getElementById("missionAbort");
    const rocketPlacement = document.getElementById("rocket");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const rightButton = document.getElementById("right");
    const leftButton = document.getElementById("left");
    
    leftButton.addEventListener("click",function(event){
        rocketPlacement.style = "position:relative; right:20px;";
    });
    rightButton.addEventListener("click",function(event){
        rocketPlacement.style = "position:relative; left:20px;";
    });
    upButton.addEventListener("click",function(event){
        spaceShuttleHeight.innerHTML = (Number(spaceShuttleHeight.innerHTML) + 10000).toString(); 
    });
    downButton.addEventListener("click",function(event){
        spaceShuttleHeight.innerHTML = (Number(spaceShuttleHeight.innerHTML) - 10000).toString(); 
    });
    takeOff.addEventListener("click", confirmTakeOff);
    landing.addEventListener("click", confirmLand);
    missionAbort.addEventListener("click", confirmAbort);
}
window.addEventListener("load", init);
function confirmTakeOff(){
    let response = confirm("Confirm that the shuttle is ready for takeoff.");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    if (response){
        flightStatus.innerHTML = "Shuttle in flight";
        shuttleBackground.style.backgroundColor = "blue";
        spaceShuttleHeight.innerHTML = (Number(spaceShuttleHeight.innerHTML) + 10000).toString();
    } else{
        flightStatus.innerHTML = "Space shuttle ready for takeoff";
    }
}
function confirmLand(){
    let response = confirm("The shuttle is landing. Landing gear engaged.");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    if (response){
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
    }
}
function confirmAbort(){
    let response = confirm("Confirm that you want to abort the mission.");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    if (response){
        flightStatus.innerHTML = "Mission aborted.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
    }
}
function moveRocket(){
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const rightButton = document.getElementById("right");
    const leftButton = document.getElementById("left");
    const rocketPlacement = document.querySelector("rocket");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    //if (){}
    upButton.addEventListener("click", function(event){
        spaceShuttleHeight.innerHTML = (Number(spaceShuttleHeight.innerHTML) + 10000).toString(); 
    });
    downButton.addEventListener("click", function(event){
        spaceShuttleHeight.innerHTML = (Number(spaceShuttleHeight.innerHTML) - 10000).toString();
    });
    rightButton.addEventListener("click", function(event){
        rocketPlacement.style.position = "right:40px";
    });
    leftButton.addEventListener("click", function(event){
        rocketPlacement.style.position = "left:100px";
    });
}