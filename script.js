
function btn() {
  if (row.value === "" || close.value === ""){
    alert("dey play")
  }
  else{

    selectOption();
  }

}

function selectOption() {
  var selectElement = document.getElementById("mySelect");
  var selectedValue = selectElement.value;

  switch (selectedValue) {
    case "option1":
      multiplication();
      break;
    case "option2":
      subtract();
      break;
    case "option3":
      add();
      break;
    default:
      console.log("No specific action defined for this option");
      division();
  }
}

function division() {
  var numRows = document.getElementById("row").value0;
  var numColumns = document.getElementById("col").value;
  var loopResults = document.getElementById("loopResults");

  if (numRows === "" || numColumns === "") {
    alert("Please input values for rows and columns.");
  } else {
    let output = "";

    for (j = 0; j < numRows; j++) {
      for ( i = 1; i < numColumns; i++) {
        output += `<h5>${i} / ${j} = ${i / j} </h5>`;
      }
      
      output += "<hr>";
      
    }
    // if (output === undefined) {
    //   return 0;
    // } else {
      // return output;
      var output2 = parseFloat(output)
       loopResults.innerHTML = output2;
    
  }
}

function multiplication() {
  var numRows = document.getElementById("row").value;
  var numColumns = document.getElementById("col").value;
  var loopResults = document.getElementById("loopResults");

  if (numRows === "" || numColumns === "") {
    alert("Please input values for rows and columns.");
  } else {
    let output = "";

    for (j = 0; j < numRows; j++) {
      for (i = 0; i < numColumns; i++) {
        output += `<h5>${i} * ${j} = ${i * j} </h5>`;
      }
      output += "<hr>";
    }

    loopResults.innerHTML = output;
  }
}
function add() {
  var numRows = document.getElementById("row").value;
  var numColumns = document.getElementById("col").value;
  var loopResults = document.getElementById("loopResults");

  if (numRows === "" || numColumns === "") {
    alert("Please input values for rows and columns.");
  } else {
    let output = "";

    for (j = 0; j < numRows; j++) {
      for (i = 0; i < numColumns; i++) {
        output += `<h5>${i} + ${j} = ${i + j} </h5>`;
      }
      output += "<hr>";
    }

    loopResults.innerHTML = output;
  }
}

function subtract() {
  var numRows = document.getElementById("row").value;
  var numColumns = document.getElementById("col").value;
  var loopResults = document.getElementById("loopResults");

  if (numRows === "" || numColumns === "") {
    alert("Please input values for rows and columns.");
  } else {
    let output = "";

    for (j = 0; j < numRows; j++) {
      for (i = 0; i < numColumns; i++) {
        output += `<h5>${i} - ${j} = ${i - j} </h5>`;
      }
      output += "<hr>";
    }

    loopResults.innerHTML = output;
  }
}