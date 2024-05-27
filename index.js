// index.js (or wherever you define your functions)

// Function Declaration: saturdayFun
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`; 
  }
  
  // Function Expression: mondayWork
  const mondayWork = function(task = "go to the office") {
    return `This Monday, I will ${task}.`;
  };
  
  // Curried Function: wrapAdjective
  function wrapAdjective(wrapper) {
    return function(adjective) {
      return `You are ${wrapper}${adjective}${wrapper}!`; 
    };
  }
     
  const expect = require("chai").expect; // Assuming you have Chai installed
  
  describe("index.js", () => {
    // ... (tests for saturdayFun, mondayWork, and wrapAdjective as you provided)
  }); 
  
