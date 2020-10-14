let elem = [];
// assign the entire table row for hole 1 to a variable, elem
elem[1]
  = document.getElementById("1");
elem[2]
  = document.getElementById("2");

elem[3]
  = document.getElementById("3");

elem[4]
  = document.getElementById("4");

elem[5]
  = document.getElementById("5");

elem[6]
  = document.getElementById("6");
elem[7]
  = document.getElementById("7");
elem[8]
  = document.getElementById("8");
elem[9]
  = document.getElementById("9");
elem[9]
  = document.getElementById("9");
elem[10]
  = document.getElementById("10");
elem[11]
  = document.getElementById("11");
elem[12]
  = document.getElementById("12");
elem[13]
  = document.getElementById("13");
elem[14]
  = document.getElementById("14");
elem[14]
  = document.getElementById("14");
elem[14]
  = document.getElementById("14");
elem[15]
  = document.getElementById("15");
elem[16]
  = document.getElementById("16");
elem[17]
  = document.getElementById("17");
elem[18]
  = document.getElementById("18");
elem[19]
  = document.getElementById("19");


// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
elem[1].children[4].children[0].onclick 
  = function(){add1(elem[1]);};

// create an "add1" function
function add1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }
}
elem[1].children[4].children[1].onclick 
  = function(){subtract1(elem[1]);};
function subtract1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
  }
}

elem[2].children[4].children[0].onclick 
  = function(){add1(elem[2]);};

// create an "add1" function
function add1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }
}
elem[2].children[4].children[1].onclick 
  = function(){subtract1(elem[2]);};
function subtract1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
  }
}

elem[3].children[4].children[0].onclick 
  = function(){add1(elem[3]);};

// create an "add1" function
function add1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }
}
elem[3].children[4].children[1].onclick 
  = function(){subtract1(elem[3]);};
function subtract1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
  }
}
elem[4].children[4].children[0].onclick 
  = function(){add1(elem[4]);};

// create an "add1" function
function add1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }
}
elem[4].children[4].children[1].onclick 
  = function(){subtract1(elem[4]);};
function subtract1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
  }
}

elem[5].children[4].children[0].onclick 
  = function(){add1(elem[5]);};

// create an "add1" function
function add1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }
}
elem[5].children[4].children[1].onclick 
  = function(){subtract1(elem[5]);};
function subtract1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
  }
}

elem[6].children[4].children[0].onclick 
  = function(){add1(elem[6]);};

// create an "add1" function
function add1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }
}
elem[6].children[4].children[1].onclick 
  = function(){subtract1(elem[6]);};
function subtract1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
  }
}
elem[7].children[4].children[0].onclick 
  = function(){add1(elem[7]);};

// create an "add1" function
function add1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }
}
elem[7].children[4].children[1].onclick 
  = function(){subtract1(elem[7]);};
function subtract1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
  }
}

elem[8].children[4].children[0].onclick 
  = function(){add1(elem[8]);};

// create an "add1" function
function add1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }
}
elem[8].children[4].children[1].onclick 
  = function(){subtract1(elem[8]);};
function subtract1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
  }
}
elem[11].children[4].children[0].onclick 
  = function(){add1(elem[11]);};

// create an "add1" function
function add1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }
}
elem[11].children[4].children[1].onclick 
  = function(){subtract1(elem[11]);};
function subtract1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
  }
}
elem[10].children[4].children[0].onclick 
  = function(){add1(elem[10]);};

// create an "add1" function
function add1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }
}
elem[10].children[4].children[1].onclick 
  = function(){subtract1(elem[10]);};
function subtract1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
  }
}

elem[3].children[4].children[0].onclick 
  = function(){add1(elem[3]);};

// create an "add1" function
function add1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }
}
elem[3].children[4].children[1].onclick 
  = function(){subtract1(elem[3]);};
function subtract1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
  }
}

elem[12].children[4].children[0].onclick 
  = function(){add1(elem[12]);};

// create an "add1" function
function add1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }
}
elem[12].children[4].children[1].onclick 
  = function(){subtract1(elem[12]);};
function subtract1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
  }
}
elem[13].children[4].children[0].onclick 
  = function(){add1(elem[13]);};

// create an "add1" function
function add1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }
}
elem[13].children[4].children[1].onclick 
  = function(){subtract1(elem[13]);};
function subtract1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
  }
}
elem[14].children[4].children[0].onclick 
  = function(){add1(elem[14]);};

// create an "add1" function
function add1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }
}
elem[14].children[4].children[1].onclick 
  = function(){subtract1(elem[14]);};
function subtract1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
  }
}
elem[15].children[4].children[0].onclick 
  = function(){add1(elem[15]);};

// create an "add1" function
function add1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }
}
elem[15].children[4].children[1].onclick 
  = function(){subtract1(elem[15]);};
function subtract1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
  }
}
elem[16].children[4].children[0].onclick 
  = function(){add1(elem[16]);};

// create an "add1" function
function add1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }
}
elem[16].children[4].children[1].onclick 
  = function(){subtract1(elem[16]);};
function subtract1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
  }
}
elem[17].children[4].children[0].onclick 
  = function(){add1(elem[17]);};

// create an "add1" function
function add1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }
}
elem[17].children[4].children[1].onclick 
  = function(){subtract1(elem[17]);};
function subtract1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
  }
}
elem[18].children[4].children[0].onclick 
  = function(){add1(elem[18]);};

// create an "add1" function
function add1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }
}
elem[18].children[4].children[1].onclick 
  = function(){subtract1(elem[18]);};
function subtract1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
  }
}
elem[1].children[5].children[0].onclick 
  = function(){clear(elem[1]);};
function clear (elem) {
 let score = elem.children[2].innerHTML;
score = 0 ; 
  elem.children[2].innerHTML = score;
}
elem[2].children[5].children[0].onclick 
  = function(){clear(elem[2]);};


function clear (elem) {
 let score = elem.children[2].innerHTML;
score = 0 ; 
  elem.children[2].innerHTML = score;
}
elem[3].children[5].children[0].onclick 
  = function(){clear(elem[3]);};

function clear (elem) {
 let score = elem.children[2].innerHTML;
score = 0 ; 
  elem.children[2].innerHTML = score;
}
elem[4].children[5].children[0].onclick 
  = function(){clear(elem[4]);};


function clear (elem) {
 let score = elem.children[2].innerHTML;
score = 0 ; 
  elem.children[2].innerHTML = score;
}
elem[5].children[5].children[0].onclick 
  = function(){clear(elem[5]);};


function clear (elem) {
 let score = elem.children[2].innerHTML;
score = 0 ; 
  elem.children[2].innerHTML = score;
}
elem[6].children[5].children[0].onclick 
  = function(){clear(elem[6]);};


function clear (elem) {
 let score = elem.children[2].innerHTML;
score = 0 ; 
  elem.children[2].innerHTML = score;
}
elem[7].children[5].children[0].onclick 
  = function(){clear(elem[7]);};


function clear (elem) {
 let score = elem.children[2].innerHTML;
score = 0 ; 
  elem.children[2].innerHTML = score;
}
elem[8].children[5].children[0].onclick 
  = function(){clear(elem[8]);};


function clear (elem) {
 let score = elem.children[2].innerHTML;
score = 0 ; 
  elem.children[2].innerHTML = score;
}
elem[9].children[5].children[0].onclick 
  = function(){clear(elem[9]);};


function clear (elem) {
 let score = elem.children[2].innerHTML;
score = 0 ; 
  elem.children[2].innerHTML = score;
}
elem[10].children[5].children[0].onclick 
  = function(){clear(elem[10]);};


function clear (elem) {
 let score = elem.children[2].innerHTML;
score = 0 ; 
  elem.children[2].innerHTML = score;
}
elem[11].children[5].children[0].onclick 
  = function(){clear(elem[11]);};


function clear (elem) {
 let score = elem.children[2].innerHTML;
score = 0 ; 
  elem.children[2].innerHTML = score;
}
elem[12].children[5].children[0].onclick 
  = function(){clear(elem[12]);};


function clear (elem) {
 let score = elem.children[2].innerHTML;
score = 0 ; 
  elem.children[2].innerHTML = score;
}
elem[13].children[5].children[0].onclick 
  = function(){clear(elem[13]);};


function clear (elem) {
 let score = elem.children[2].innerHTML;
score = 0 ; 
  elem.children[2].innerHTML = score;
}
elem[14].children[5].children[0].onclick 
  = function(){clear(elem[14]);};


function clear (elem) {
 let score = elem.children[2].innerHTML;
score = 0 ; 
  elem.children[2].innerHTML = score;
}
elem[15].children[5].children[0].onclick 
  = function(){clear(elem[15]);};


function clear (elem) {
 let score = elem.children[2].innerHTML;
score = 0 ; 
  elem.children[2].innerHTML = score;
}
elem[16].children[5].children[0].onclick 
  = function(){clear(elem[16]);};


function clear (elem) {
 let score = elem.children[2].innerHTML;
score = 0 ; 
  elem.children[2].innerHTML = score;
}
elem[17].children[5].children[0].onclick 
  = function(){clear(elem[17]);};


function clear (elem) {
 let score = elem.children[2].innerHTML;
score = 0 ; 
  elem.children[2].innerHTML = score;
}
elem[18].children[5].children[0].onclick 
  = function(){clear(elem[18]);};


function clear (elem) {
 let score = elem.children[2].innerHTML;
score = 0 ; 
  elem.children[2].innerHTML = score;
}
elem[1].children[3]
  = function(){score(elem[1]);};


function score(elem) {
 let score = elem.children[3].innerHTML;
score = elem.children[2].innerHTML - elem.children[1].innerHTML;
  elem.children[3].innerHTML = score;
}
elem[3].children[3]
  = function(){score(elem[3]);};


function score(elem) {
 let score = elem.children[3].innerHTML;
score = elem.children[2].innerHTML - elem.children[1].innerHTML;
  elem.children[3].innerHTML = score;
}

elem[1].children[3]
  = function(){score(elem[1]);};


function score(elem) {
 let score = elem.children[3].innerHTML;
score = elem.children[2].innerHTML - elem.children[1].innerHTML;
  elem.children[3].innerHTML = score;
}

elem[4].children[3]
  = function(){score(elem[4]);};


function score(elem) {
 let score = elem.children[3].innerHTML;
score = elem.children[2].innerHTML - elem.children[1].innerHTML;
  elem.children[3].innerHTML = score;
}

elem[5].children[3]
  = function(){score(elem[5]);};


function score(elem) {
 let score = elem.children[3].innerHTML;
score = elem.children[2].innerHTML - elem.children[1].innerHTML;
  elem.children[3].innerHTML = score;
}



elem[6].children[3]
  = function(){score(elem[6]);};


function score(elem) {
 let score = elem.children[3].innerHTML;
score = elem.children[2].innerHTML - elem.children[1].innerHTML;
  elem.children[3].innerHTML = score;
}


elem[7].children[3]
  = function(){score(elem[7]);};


function score(elem) {
 let score = elem.children[3].innerHTML;
score = elem.children[2].innerHTML - elem.children[1].innerHTML;
  elem.children[3].innerHTML = score;
}

elem[8].children[3]
  = function(){score(elem[8]);};

function score(elem) {
 let score = elem.children[3].innerHTML;
score = elem.children[2].innerHTML - elem.children[1].innerHTML;
  elem.children[3].innerHTML = score;
}

elem[9].children[3]
  = function(){score(elem[9]);};


function score(elem) {
 let score = elem.children[3].innerHTML;
score = elem.children[2].innerHTML - elem.children[1].innerHTML;
  elem.children[3].innerHTML = score;
}

elem[10].children[3]
  = function(){score(elem[10]);};


function score(elem) {
 let score = elem.children[3].innerHTML;
score = elem.children[2].innerHTML - elem.children[1].innerHTML;
  elem.children[3].innerHTML = score;
}


elem[11].children[3]
  = function(){score(elem[11]);};


function score(elem) {
 let score = elem.children[3].innerHTML;
score = elem.children[2].innerHTML - elem.children[1].innerHTML;
  elem.children[3].innerHTML = score;
}

elem[12].children[3]
  = function(){score(elem[12]);};


function score(elem) {
 let score = elem.children[3].innerHTML;
score = elem.children[2].innerHTML - elem.children[1].innerHTML;
  elem.children[3].innerHTML = score;
}

elem[13].children[3]
  = function(){score(elem[13]);};


function score(elem) {
 let score = elem.children[3].innerHTML;
score = elem.children[2].innerHTML - elem.children[1].innerHTML;
  elem.children[3].innerHTML = score;
}

elem[14].children[3]
  = function(){score(elem[14]);};


function score(elem) {
 let score = elem.children[3].innerHTML;
score = elem.children[2].innerHTML - elem.children[1].innerHTML;
  elem.children[3].innerHTML = score;
}

elem[15].children[3]
  = function(){score(elem[15]);};


function score(elem) {
 let score = elem.children[3].innerHTML;
score = elem.children[2].innerHTML - elem.children[1].innerHTML;
  elem.children[3].innerHTML = score;
}

elem[16].children[3]
  = function(){score(elem[5]);};


function score(elem) {
 let score = elem.children[16].innerHTML;
score = elem.children[2].innerHTML - elem.children[1].innerHTML;
  elem.children[3].innerHTML = score;
}


elem[17].children[3]
  = function(){score(elem[17]);};


function score(elem) {
 let score = elem.children[3].innerHTML;
score = elem.children[2].innerHTML - elem.children[1].innerHTML;
  elem.children[3].innerHTML = score;
}

elem[18].children[3]
  = function(){score(elem[18]);};


function score(elem) {
 let score  = elem.children[2].innerHTML - elem.children[1].innerHTML;
  elem.children[3].innerHTML = score;
}

elem[19].children[1]
  = function(){Par(elem[19]);};

function Par(elem) { 
  let par = elem[19].children[1].innerHTML; 
  Par = elem[1].children[1].innerHTML +  elem[2].children[1].innerHTML  + elem[3].children[1].innerHTML +
 elem[4].children[1].innerHTML +
      elem[5].children[1].innerHTML;
  elem[6].children[1].innerHTML +
  elem[7].children[1].innerHTML +
  elem[8].children[1].innerHTML   +
  elem[9].children[1].innerHTML +
  elem[10].children[1].innerHTML  +
  elem[11].children[1].innerHTML +
  elem[12].children[1].innerHTML  +
  elem[13].children[1].innerHTML +
  elem[14].children[1].innerHTML  +
  elem[15].children[1].innerHTML  +
  elem[16].children[1].innerHTML  +
  elem[17].children[1].innerHTML +
  elem[18].children[1].innerHTML +
  elem[19].children[1].innerHTML = Par; 

}
elem[19].children[2]
  = function(){totalScore(elem[19]);};

function totalScore(elem) { 
  let totalScore = elem[19].children[2].innerHTML; 
   totalScore =  elem[1].children[2].innerHTML +  elem[2].children[2].innerHTML  + elem[3].children[2].innerHTML +
 elem[4].children[2].innerHTML +
      elem[5].children[2].innerHTML;
  elem[6].children[2].innerHTML +
  elem[7].children[2].innerHTML +
  elem[8].children[2].innerHTML   +
  elem[9].children[2].innerHTML +
  elem[10].children[2].innerHTML  +
  elem[11].children[2].innerHTML +
  elem[12].children[2].innerHTML  +
  elem[13].children[2].innerHTML +
  elem[14].children[2].innerHTML  +
  elem[15].children[2].innerHTML  +
  elem[16].children[2].innerHTML  +
  elem[17].children[2].innerHTML +
  elem[18].children[2].innerHTML +
  elem[19].children[2].innerHTML = totalScore; 

elem[19].children[3]
  = function(){overScore(elem[19]);};

function Par(elem) { 
  let overScore = elem[19].children[3].innerHTML; 
   overScore =  elem[1].children[3].innerHTML +  elem[2].children[3].innerHTML  + elem[3].children[3].innerHTML +
 elem[4].children[3].innerHTML +
      elem[5].children[3].innerHTML;
  elem[6].children[3].innerHTML +
  elem[7].children[3].innerHTML +
  elem[8].children[3].innerHTML   +
  elem[9].children[3].innerHTML +
  elem[10].children[3].innerHTML  +
  elem[11].children[3].innerHTML +
  elem[12].children[3].innerHTML  +
  elem[13].children[3].innerHTML +
  elem[14].children[3].innerHTML  +
  elem[15].children[3].innerHTML  +
  elem[16].children[3].innerHTML  +
  elem[17].children[3].innerHTML +
  elem[18].children[3].innerHTML +
  elem[19].children[3].innerHTML = overScore; 
