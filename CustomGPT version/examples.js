//QUESTION PRO JS LOGIC EXAMPLES##

//===============================
//TO get the value of a text response.
//===============================
//
//===============================
var codeQ1 = 'P12_1';
var codeQ2 = 'P12_2';
var btnTxt = '#SurveySubmitButtonElement';

$(document).ready(function() {
  $('.' + codeQ1 + ' input[type=text]').on("keyup blur paste", function (event) { ProcessData(); });
  $('.' + codeQ2 + ' input[type=text]').on("keyup blur paste", function (event) { ProcessData(); });
});

function ProcessData(){
   var val1 = $('.' + codeQ1 + ' input[type=text]').val();
   var val2 = $('.' + codeQ2 + ' input[type=text]').val();
   var isValid = false;

  if(val1 !== '' && val2 !== ''){ isValid = (val1 === val2);   }   
  if(isValid){$(btnTxt).show();}else{$(btnTxt).hide();}   
}

//Custom score validation Example
//On this example the score is stored on custom66
//===============================
var custom5 = $survey.surveyResponseJson['custom5'];
var custom66 = $survey.surveyResponseJson.custom66;
if(custom66 == "66.00")
{
  $survey.showOption("Primera compra Norma",1);
  $survey.hideOption("Primera compra Norma",2);
}
$survey.updateCustomVariable(1, "Weekly");

//Read a variable
var custom1 = $survey.surveyResponseJson.custom1;
// Over written a variable
$survey.updateCustomVariable(1, "value");


//Auto submit a questions using a function
$("#SurveySubmitButtonElement").click(function() {
  //Your custom code
});

//Auto submit a questions using a function
$("#SurveySubmitButtonElement").click(function(e) {
  //Your custom code
  e.preventDefault() // If we want to cancel the submit.
});


//Auto submit a questions using a function
document.getElementById("SurveySubmitButtonElement").addEventListener("click", function(event){
    //Your custom code
  event.preventDefault() //prevent submit


//Standard time out function
setTimeout(function(){ 
  //Code
}, 1000);


//Hide Submit button by timming
setTimeout(function(){ 
   $("#SurveySubmitButtonElement").hide();
}, 1000);


//Hide submit button and jump to next question after time
$("#SurveySubmitButtonElement").hide();
setTimeout(function(){ 
   $("#SurveySubmitButtonElement").click();
}, 1000);


//Next page
document.forms['run'].onsubmit();


//redirect survey using JS
setTimeout( function() { 
    window.location.href = "https://www.google.com"; 
}, 5000 );



//Read each array elements and do an action
var filterArray = ["189187","189188","189189","189190","190154"];
$.each(filterArray, function(key, value) {
  //Code...
});



//Update a custom variable with text question response
$("#SurveySubmitButtonElement").click(function() {
  var Qc = 'Your question code';
  var nameClient = $('.' + Qc + ' input[type=text]').val();
  $survey.updateCustomVariable(6, nameClient);
});



//Separate variables
var mDate = $survey.surveyResponseJson['custom2']; mDate = mDate.split("/"); // we capture the date that is in Custom2, and we transform the array (data list)
var dy = ""; dy = mDate[0]; var mn = ""; mn = mDate[1]; var yr = ""; yr = mDate[2]; // We capture each data on an individual variable

$survey.updateCustomVariable(3,dy); $survey.updateCustomVariable(4,mn); $survey.updateCustomVariable(5,yr); // Each individual data is kept in different variables



//update a custom variable with a random number
setTimeout(function(){ 
  // Returns a random number between min (included) and Max (excluded)
  //Math.floor(Math.random() * (max - min)) + min; //No binario
  //Math.floor (math.random () * (4 - 1)) + 1;// generates a random number between 1, 2 or 3

	var myNumeroAleatorio = Math.floor(Math.random()*(1+1)); // Binary genera
	$survey.updateCustomVariable(100, myNumeroAleatorio);
}, 500);


//Get selected option of a question
var p1 = $survey.getSelectedOption("P1");
var p2 = $survey.getSelectedOption("P2");


//Show or hide a question
$survey.showQuestion("P1")
$survey.hideQuestion("P2")


//Show or hide answer options
$survey.showOption("P1",1);
$survey.hideOption("P1",2);



//Hide Options of a matrix question
//===============================
//User needs to get the row ID
//===============================

$optionNull1=$("#questionRow71480448 td:nth-child(7)");
$optionNull2=$("#questionRow71480449 td:nth-child(7)");
$optionNull3=$("#questionRow71480450 td:nth-child(7)");
$optionNull4=$("#questionRow71480451 td:nth-child(7)");
$optionNull5=$("#questionRow71480452 td:nth-child(7)");

$optionNull1.children().hide();
$optionNull2.children().hide();
$optionNull3.children().hide();
$optionNull4.children().hide();
$optionNull5.children().hide();


//Validation: 10 digit limit
//===============================
//verified at 3000000000 as max
//===============================
$("#376793459ID").on("keypress keyup blur", function (event) {    
           $(this).val($(this).val().replace(/[^\d].+/, ""));
            if ((event.which < 48 || event.which > 57)) {
                event.preventDefault();
            }
});
$("#376793459ID").on("change", function (event) {    
    var val = Math.abs(parseInt(this.value, 10) || 1);
    this.value = val < 3000000000 ? 3000000000 : val;
});


//Validation: Min Character number
//===============================
//Verified at 9 as max
//===============================
var IDTxt = "386072375ID";
$("#" + IDTxt).on("keypress keyup blur", function (event) {    

   var intMax = 9;
   var long = $(this).val().length;
   var nextBtn = "SurveySubmitButtonElement";
   var saveBtn = "btn-save-later";
   var sufixLbl = "suffix-wrapper";

   if(long < intMax){
      $('#' + nextBtn).hide();
      $('.' + saveBtn).hide();
      $("." + sufixLbl).css("color", "#000000");
   }else
   {
     $('#' + nextBtn).show();
     $('.' + saveBtn).show();
     $("." + sufixLbl).css("color", "#1D8514");
   }
  //var checkInt = (long > 0)? intMax - long : 0;
  $("." + sufixLbl).html("<p>" + long + "/" + intMax + " Dig.</p>");
});


//Question Validation: Exact Digits
//===============================
//Verified 5 characteres
//===============================
var IDTxt = "386227182ID";
$(document).ready(function() {

   var nextBtn = "SurveySubmitButtonElement";
   var saveBtn = "btn-save-later";
   var sufixLbl = "suffix-wrapper";

   $('#' + nextBtn).hide();
   $('.' + saveBtn).hide();

   $("#" + IDTxt).on("keypress keyup blur", function (event) {    

      var intMax = 5;
      var long = $(this).val().length;
      var char = $(this).val();
      
      if(long === intMax){
         $("." + sufixLbl).css("color", "#1D8514");
         $('#' + nextBtn).show();
         $('.' + saveBtn).show();
      }else if(long > intMax)
      {
         $(this).val(char.substring(0, intMax));
         $("." + sufixLbl).css("color", "#1D8514");
         $('#' + nextBtn).show();
         $('.' + saveBtn).show();
      }else
      {
         $("." + sufixLbl).css("color", "#545E6B");
         $('#' + nextBtn).hide();
         $('.' + saveBtn).hide();
      }
   });
});





//===============================
//Only letters
//===============================
var IDTxt = "386072376ID";
$("#" + IDTxt).on("keypress", function(event) {
    var englishAlphabetAndWhiteSpace = /[A-Za-z ]/g;   
    var key = String.fromCharCode(event.which);   
    if (event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39 || englishAlphabetAndWhiteSpace.test(key)) {
        return true;
    }
    return false;
});
$("#" + IDTxt).on("paste",function(e){ e.preventDefault(); });




//===============================
//Only numbers
//===============================
var IDTxt = "386227166ID";
$("#" + IDTxt).on("keypress keyup blur", function(event) {
   this.value = (this.value + '').replace(/[^0-9]/g, '');    
});
$("#" + IDTxt).on("paste",function(e){ e.preventDefault(); });





//===============================
//Question validation between two values
//===============================

var IDTxt = "#392707602ID";
var nextBtn = "SurveySubmitButtonElement";
var saveBtn = "btn-save-later";

var limitMin = 3000000000;
var limitMax = 3999999999;

$(document).ready(function() {

$('#' + nextBtn).hide();
$('.' + saveBtn).hide();

   $(IDTxt).on("keyup blur paste", function (event) {    

     var myValue = $(this).val();
     myValue = parseInt(myValue);

     if(myValue >= limitMin & myValue <= limitMax){
       $('#' + nextBtn).show();
       $('.' + saveBtn).show();
     }else{
       $('#' + nextBtn).hide();
       $('.' + saveBtn).hide();
     }
     
   });
});


//Terms and conditions JS
//===============================
//Answer = Y, the button should be visible 
//===============================
$("#SurveySubmitButtonElement").hide();
$("#SurveySubmitButtonElement").css("text-align", "center"); 
$(".survey-submit-wrapper").css("text-align", "center"); 
$(".answer-container").css("text-align", "center"); 

//Yes
$("#387050362ID").click(function() {
  $("#SurveySubmitButtonElement").show();
});

//No
$("#387050363ID").click(function() {
  $("#SurveySubmitButtonElement").hide();
});




// Use a select to fill a text box
//===============================
// This is used when the options for a text selection are intended to change periodically
// and also have a answer to the answers
//===============================
var listProyects = ['-- Seleccionar --',
'Micro sitio Pago de Facturas - PlaceToPay', 
'APP TUYA Ver 1.2.3']; 

$.each(listProyects, function (ind, elem) { 
  $("#proyectSelect").append(new Option(elem, ind));
}); 

$("#388002247ID").attr('readonly', true);
$("#388002247ID").css({ opacity: 0 });
$("#388002247ID").css("display", "none");

$(document).ready(function() {  
    $('#proyectSelect').change(function(){

     var myIndex = $(this).find("option:selected").attr('value');
     var myText = $( "#proyectSelect option:selected" ).text();

     if(myIndex == 0){
        $("#388002247ID").val("");
     }else{
        $("#388002247ID").val(myText);
     }

    });
});






// Make Like icons lar in Hotspot's question
//===============================
// since the code used to handle these visual elements does not have a particular identifier (ID)
// serves both for the web browser and mobile browser
//
// Note: It is added from the Custom JS of the survey.
//===============================
$(document).ready(function() {  

   $("body").mousemove(function( event ) {
     
      $(".fa-thumbs-up").removeClass("fa-fw");
      $(".fa-thumbs-up").addClass("fa-3x");

      $(".fa-thumbs-down").removeClass("fa-fw");
      $(".fa-thumbs-down").addClass("fa-3x");

      $(".fa-refresh").removeClass("fa-fw");
      $(".fa-refresh").addClass("fa-3x");

      var leftValResetText = $(".hot-spot-reset").css("left");
      var leftValReset = leftValResetText.replace("px","");

      var leftReset = parseFloat(leftValReset); 
      var leftUnlike = leftReset - 40;
      var leftLike = leftReset - 80;

      $(".hot-spot-like").css('left', leftLike);
      $(".hot-spot-unlike").css('left', leftUnlike);
   });

});







//===============================
// Navigator dimension verification (for mobile devices verification)
//===============================
$(document).ready(function() {  

   var ventana_ancho = $(window).width();
   var ventana_alto = $(window).height();

   if(ventana_ancho > 500){

   }else{

   }

});









//===============================
// Summer of times in one or several questions
// so that in the end the total of minutes or hours deploy you
//===============================
var formInputs = "#QuestionSection_72080413"; // Question that contains the time fields we want to add
var IDMinutes = "#389538923ID"; // Final field where the minutes will be deployed
var IDHours = "#389626454ID"; // Final field where the hours will be deployed

// We block the edition of our Total Time fields
// And I attach the default value to "0"
$(IDMinutes).attr('readonly', true);
$(IDMinutes).val("0");
$(IDHours).attr('readonly', true);
$(IDHours).val("0");

// We add a method that reads the edition of any field that we set up
$(document).ready(function() {
    $(formInputs + " input").keyup(function() {
        checkFields();
    });
});


function checkFields(){
  var totalMinutes = 0;
  var totalHours = 0;

  // We travel all the fields of the question we set up to make the sum
  $(formInputs + " input").each(function () {

     var element = $(this);
     var valueTxt = element.val();
     valueTxt = (valueTxt == "visible")? "" : valueTxt; // There is a validation field in the form that obtains the "visible" value and this system of the system is validated so that it does not affect the obtaining of numerical values

     if(valueTxt !== "") {
        var valNumber = parseInt(valueTxt);
        totalMinutes = totalMinutes + valNumber;
     }

  });

  totalHours = (totalMinutes > 0)? (totalMinutes / 60) : 0; 

  $(IDMinutes).val(totalMinutes);
  $(IDHours).val(totalHours);
      
}









//===============================
// Disable the browser button
// This in order to avoid the sequence of the survey
//===============================
(function (global) {
   if(typeof (global) === "undefined") { throw new Error("window is undefined"); }
   var _hash = "!";
   var noBackPlease = function () {
       global.location.href += "#";
       // making sure we have the fruit available for juice (^__^)
       global.setTimeout(function () { global.location.href += "!"; }, 50);
   };
   global.onhashchange = function () {
       if (global.location.hash !== _hash) { global.location.hash = _hash; }
   };
   global.onload = function () {
       noBackPlease();
       // disables backspace on page except on input fields and textarea..
       document.body.onkeydown = function (e) {
           var elm = e.target.nodeName.toLowerCase();
           if (e.which === 8 && (elm !== 'input' && elm  !== 'textarea')) { e.preventDefault(); }           
           e.stopPropagation(); // stopping event bubbling up the DOM tree..
       };
   }
})(window);




// Next button click without seeing the question
//===============================
 $(".survey-body-wrapper").hide();
setTimeout(function(){
 $("#SurveySubmitButtonElement").click();
}, 1000);





// Obtain the first element of an ordering question (Drag & Drop)
// The target, is the container where the list that we will order will be housed
// Control-Label is the text where our desired answer is
//===============================


  // Var textwrite = $ ("#target79408114 .Control-Label: First"). Text ();// get the 1st element of the list
  var textWrite =  $("#target79408114 .control-label:eq(0)").text(); // get the 1st element of the list
  var textWrite2 =  $("#target79408114 .control-label:eq(1)").text(); // get the 2nd element of the list
  // Note: The #target, is the container where the list that we will order (the box on the right) will be housed (the box on the right)


var textWrite = $("#target73370410 .control-label:first").text();
$survey.updateCustomVariable(10, textWrite);


// We add text to display the value obtained
//<span class="text-primary" id="QuestionDisplayText">___</span>

// display it in a specific text
// Question Displaytext is an element that we create in the title of the SIG preg.
var preText = $survey.surveyResponseJson.custom10;
setTimeout(function(){
$("#QuestionDisplayText").html('<span class="text-info strong">' + preText + '</span>');
}, 500);






// Obtain the record of a chain and be able to save it in different customs
// Apply for multiple options
var coma = ","; var cadenaADividir = "";
cadenaADividir = "gato, perro, rata, wwww, rrrrr";

   var arrayDeCadenas = cadenaADividir.split(coma);
   for (var i=1; i < arrayDeCadenas.length; i++) {
      
      if (i == 1) {
        updateCustomVariable(66, "" + arrayDeCadenas[i])
      }
       
      if (i == 2) {
        updateCustomVariable(67, "" + arrayDeCadenas[i])
      } 
   }
$survey.branchTo("Q23")






//===============================
// Obtain the body mass index.
//===============================
// It is based between two text boxes to display the result in a text field.
//===============================
var IDTxt1 = "#396713539ID"; //Talla
var IDTxt2 = "#396713540ID"; //Peso

$(document).ready(function() {

  $(IDTxt1).on("keyup blur paste", function (event)
  { processData(); });
  $(IDTxt2).on("keyup blur paste", function (event)
  { processData(); });

});


function processData(){
   var val1 = $(IDTxt1).val(); //Talla
   var val2 = $(IDTxt2).val(); //Peso
   var resp = 0;

  if (val1 == "") { val1 = 0; }else{ val1 = parseFloat(val1); }
  if (val2 == "") { val2 = 0; }else{ val2 = parseFloat(val2); }

  if(val1 == 0 || val2 == 0){
      resp = 0;
  }else{
      resp = (val2) / (val1 * val1);
  }  

   $("#TextResult").html(resp);
}





// Hide fields of a matrix
$optionNull1=$("#questionRow71480248 td:nth-child(7)");
$optionNull2=$("#questionRow71480249 td:nth-child(7)");
$optionNull3=$("#questionRow71480252 td:nth-child(7)");
$optionNull4=$("#questionRow71480253 td:nth-child(7)");
$optionNull5=$("#questionRow71480254 td:nth-child(7)");


$optionNull1.children().hide();
$optionNull2.children().hide();
$optionNull3.children().hide();
$optionNull4.children().hide();
//$optionNull5.children().hide();




/**
===============================
Ocultar columnas completas de una matriz dependientdo de respuesta anterior
===============================
NOTA: Se necesita guardar la respuesta en ua variable (actualización 2022)
===============================
**/
// Hide complete columns of a matrix depending on previous response
var TextResponse = $survey.getSelectedOptions("Q2");
var TextDisplay = TextResponse.toString();

if(!~TextDisplay.indexOf("Azul")){ CheckElements(2); }
if(!~TextDisplay.indexOf("Rojo")){ CheckElements(3); }
if(!~TextDisplay.indexOf("Amarillo")){ CheckElements(4); }
if(!~TextDisplay.indexOf("Negro")){ CheckElements(5); }
if(!~TextDisplay.indexOf("Verde")){ CheckElements(6); }
if(!~TextDisplay.indexOf("Rosa")){ CheckElements(7); }
if(!~TextDisplay.indexOf("Naranja")){ CheckElements(8); }

function CheckElements(number){
  var itemNumber = number;
  
  // It is very important to find the ID of the rows (example #Questionrow74401744 ...)
  $optionNull0=$("#QuestionSection_74401744 table thead tr td:nth-child("+itemNumber+")");
  $optionNull1=$("#questionRow74401744 td:nth-child("+itemNumber+")");
  $optionNull2=$("#questionRow74401745 td:nth-child("+itemNumber+")");
  $optionNull3=$("#questionRow74401758 td:nth-child("+itemNumber+")");
  $optionNull4=$("#questionRow74401760 td:nth-child("+itemNumber+")");
  $optionNull5=$("#questionRow74401762 td:nth-child("+itemNumber+")");
  
  // If we want the entire element to be hidden and not just the label
  $optionNull0.hide();
  $optionNull1.hide();
  $optionNull2.hide();
  $optionNull3.hide();
  $optionNull4.hide();
  $optionNull5.hide();
}




/**
=========================
Hide complete columns - Update (December 2023)
=========================
**/
var qtnNow = "codeQuestion";// NowQuestion - replace this with the question code
var qtnPre = "codeQuestion";// PreQuestion - replace this with source question code
var rootBase  = " .matrix-multipoint-question .parent-table ";

/* header & body (format)*/
$("."+qtnNow+rootBase+"thead tr").not('.anchor').each(function(){ $(this).find("td").each(function(e){ $(this).addClass("column_"+e); }); });
$("."+qtnNow+rootBase+"tbody tr").not('.error-tr').each(function(){ $(this).find("td").each(function(e){ $(this).addClass("column_"+e); }); });

/* source question */
var autot = $survey.getSelectedOptionsIndex(qtnPre);
for(var i=0; i < autot.length; i++){ // Show/Hide Columns
    $("."+qtnNow+rootBase+".column_0").addClass("show_column");
    $("."+qtnNow+rootBase+".column_"+autot[i]).addClass("show_column");       
}

/* header & body (format post)*/
$("."+qtnNow+rootBase+"thead tr").not('.anchor').each(function(){  $(this).find("td").not(".show_column").each(function(e){ $(this).remove(); }); });
$("."+qtnNow +rootBase+"tbody tr").not('.error-tr').each(function(){ $(this).find("td").not(".show_column").each(function(e){ $(this).remove(); }); });




/**
=========================
Hide complete columns - Update (November 2023)
=========================
**/
var listOpts = $survey.getSelectedOptions('Q52'); // We only change the question code where the previously selected options are captured.
listOpts = listOpts.filter(function(dato){ return dato != undefined });
listOpts = listOpts.map(function (dato){ return dato.trim(); });

var listColums = [];
$("thead:first td").each(function (index) { listColums.push( $(this).find('span').text()); })

for(var i = 1; i < listColums.length; i++)
{ if(!listOpts.includes(listColums[i].trim())) { $('td:nth-child('+(i+1)+')').toggle(); } }



/**
===============================
Ocultar columnas completas - UPDATE (MARZO 2023)
===============================
**/
// Hide complete columns of a matrix depending on previous response
var QCode = "Q2"; // Question code to process this way
var cVar = 5;
var posibleResponses = ['Angel','Esmirna','Alejandro','Ruth','Sara','Roberto','Paola','Gabriel','Itiel']

var TextDisplay = $survey.surveyResponseJson[('custom'+cVar)]; // Obtain the answer to text to process
QCode = '.' + QCode;
var rBase = ' .answer-container .table-wrapper table ';

$.each(posibleResponses, function (ind, elem) { // We analyze the options that are not in the answer
    if(!~TextDisplay.indexOf(elem)){ CheckElements((ind + 2)); } // The columns begin in 2
});
function CheckElements(number){ // The options not selected are hidden
  var iNum = number;
  $(QCode +rBase+'thead tr td:nth-child('+iNum+')').hide(); // Hide title
  $(QCode +rBase+'tbody tr[role="list"]').each(function(){ $(this).find('td:nth-child('+iNum+')').hide(); }); //OcultarFilas
}


/*
Hide complete columns of a matrix depending on previous response
*/
// Modifiable variables
var QCode = "Q2"; // Question code to process this way
var cVar = 5;
var posibleResponses = "Angel, Esmirna, Alejandro, Ruth, Sara, Roberto, Paola, Gabriel, Itiel";

// Operating variables (not playing)
posibleResponses = posibleResponses.split(",");
var TextDisplay = $survey.surveyResponseJson[('custom'+cVar)]; // Obtain the answer to text to process
QCode = '.' + QCode;
var rBase = ' .answer-container .table-wrapper table ';

//Information processing
$.each(posibleResponses, function (ind, elem) { // We analyze the options that are not in the answer
    if(!~TextDisplay.indexOf(elem)){ CheckElements((ind + 2)); } // The columns begin in 2
});
function CheckElements(number){ // The options not selected are hidden
  var iNum = number;
  $(QCode +rBase+'thead tr td:nth-child('+iNum+')').hide(); // Hide title
  $(QCode +rBase+'tbody tr[role="list"]').each(function(){ $(this).find('td:nth-child('+iNum+')').hide(); }); //OcultarFilas
}



// Select a default option when selecting a single option (from a multiple choice question)
var optionsQ1 =   $survey.getSelectedOptionsIndex("Q1");

var responseLength = optionsQ1.length;
var indexO = optionsQ1[0];

if(responseLength == 1){
 $survey.setOptionSelected("Q2",indexO); 
 alert("Se ha seleccionado el color -" + createUniqueResponse() + "- automáticamente.");
}

// We get the text of the previous answer.
function createUniqueResponse(){
  var MyArray = $survey.getSelectedOptions("Q1");
  var txtResponse = MyArray.toString();
  return txtResponse;
}






/**
=========================
Validate the following if the comment box has any value we want
=========================
**/
$('#SurveySubmitButtonElement').hide();
$("#408430378ID").on("keypress keyup blur", function (event) {    
  var str = $(this).val();
  if (~str.indexOf("angel.gonzalez@questionpro.com")){
      $('#SurveySubmitButtonElement').show();
  }else{
      $('#SurveySubmitButtonElement').hide();
  }
});




/**
=========================
Obtain the value of the "other" and attach it to an answer text
=========================
**/

// In our question we get the value of "other", and we keep it in a custom
// We apply the value in the postjs
if($('.R3 .answerRow52ID input[type=checkbox]').prop('checked') ) { // If the "other" is selected this option
    var myval = $(".R3 .answerRow52ID .control-label").text(); // We have to look for "inspect" the ID of the "other" response option.
    $survey.updateCustomVariable(10, myval);
}


// In the next question, we make the answer to the entire unique selection question read so much.
// And if the "other" responded to us, then in the response chain, the "other" is replaced by the text.
// The answer is saved in a new variable
setTimeout(function(){

	var listOptionsQP = $survey.getSelectedOptions("R3"); //Obtenemos la rspuesta total de la pregunta anterior
	var custom10 = $survey.surveyResponseJson.custom10; // We get the saved from the "other" of the previous question
	var displayText = ""

	if(typeof custom10 !== "undefined" || custom10 != ""){ // If there is any value saved in our custom, we do the processing and change of values
		var checkL = (listOptionsQP.length - 1);
		for(var i=0; i<checkL; i++){ // Through a "for", we will read the values of our array of answers and replace the last value
		    var coma = ", "; if (i == 0){ coma = "";}
		    displayText = displayText + coma + listOptionsQP[i];
		}
		displayText = displayText + ", " + custom10;
	}else{
		displayText = listOptionsQP.toString();
	}

	$survey.updateCustomVariable(1, displayText);

}, 1000);






/**
=========================
Hide the latest rows of a flex matrix according to previous response
=========================
Note: Flex Matrix, has 1 HTML row per question (it is easier to hide rows)
=========================
**/
var CodeQ = "Q2" // question code
var QPrev = 1; // previous answers (those answered if or yes)
var QEval = 9; // Answers to evaluate (Adicioaneles)

var customSave = $survey.getSelectedOption("Q1"); customSave = parseInt(customSave); // we convert the custom into number

var numIni = (QPrev + customSave)  + 1;
var numFin = ((QPrev + QEval) * 2) + 1;
var i = numIni;

while (++i < numFin) {
    $("." + CodeQ + " .answer-container table tr:nth(" + i + ")").hide(); //console.log('Actualmente en ' + i);
}





/**
=========================
Hide the latest rows of a Basic Matrix according to previous response
=========================
Note: The Basic Matrix, has 2 HTML row per question (since a separation space is added), then the rows analysis operation has to be multiplied.
=========================
**/

// Code settings
var CodeQ = "Q4" // question code
var QPrev = 3; // previous answers (those answered if or yes)
var QEval = 5; // Answers to evaluate (Adicioaneles)

var customSave = $survey.surveyResponseJson.custom100; customSave = parseInt(customSave); // we convert the custom into number

var numIni = (QPrev + customSave) * 2 ;
var numFin = ((QPrev + QEval) * 2) + 1;
var i = numIni;

while (++i < numFin) {
    $("." + CodeQ + " .answer-container table tr:nth(" + i + ")").hide(); //console.log('Actualmente en ' + i);
}



/**
=========================
Block response selection
=========================
In a single/multiple selection question
=========================
**/
setTimeout(function(){ 
   $('.Q1 .answer-container .answer-options .control-selection').css({"cursor": "not-allowed"});
   $('.Q1 .answer-container .answer-options .control-selection .control-label').css({"cursor": "not-allowed", "color" : "#ccc"});
   $('.Q1 .answer-container .answer-options .control-selection input[type="radio"]').attr('disabled', true);
}, 500);









/**
=========================
Answer counting a column responses
=========================
Within the code it is for a single and multiple selection matrix
=========================
Test survey (8037684) or (8207519 Vmejorada)
=========================
**/

var Qtn = ".Q2"; // Ask to validate (Survey question code)
var columCheck = 2; //Columna donde queremos hacer el conteo

$(document).ready(function() {

	/*
  ====================================================
We add the function to a button, to validate at the end of the submit
====================================================
  */
    $('#btnValidate').click(function(){
        var selected = '';    
        $(Qtn + ' .answer-container table tbody tr td:nth-child('+ columCheck +') input[type="checkbox"]').each(function(){
            if (this.checked) {
            	var space = ""; if (selected != ''){space = ", "} else {espace = ""}
                selected += space + $(this).val();
            }
        }); 

        if (selected != '') { alert('Se ha impreso la validación en la consola'); }
        if (selected != '') 
            console.log('Verificación por botón - Has seleccionado: '+selected);  
        else
            alert('Debes seleccionar al menos una opción.');

        return false;
    });
});    

/*====================================================
Improved Code - Prior Code.
=====================================================*/
$("#SurveySubmitButtonElement").click(function() {

	var Qtn = ".Q2"; // Ask to validate (Survey question code)
	var rootA = Qtn +' .answer-container table tbody tr td:nth-child('; rootB = ') input[type="radio"]'; // Search route
	var colum0 = 2; var colum1 = 3; var colum2 = 4; // column where we want to count
	var c0 = 0; var c1 = 0; var c2 = 0; // Accumulated count of options selected by each column

	$(rootA + colum0 +rootB).each(function(){ if (this.checked) { c0++; } }); //Conteo columna1   
	$(rootA + colum1 +rootB).each(function(){ if (this.checked) { c1++; } }); //Conteo columna2
	$(rootA + colum2 +rootB).each(function(){ if (this.checked) { c2++; } }); //Conteo columna3

	var PreQ = $survey.getSelectedOptionsIndex("Q1"); var LArray = PreQ.length;
	var TotalSum = c1 + (c2 * 2);
	var Prom = TotalSum / LArray; // This example helps us to get the total and promise of the scores

	$survey.updateCustomVariable(4, TotalSum); // Optional if we want to print the value in customs
	$survey.updateCustomVariable(5, Prom);
	
});


/*
================================================================
Añadimos la función a cada check, para validar al instante (checkbox)
================================================================
*/
  $(Qtn +' .answer-container table tbody tr td:nth-child('+ columCheck +') input[type="checkbox"]').change(function(){
    var selected2 = ''; var countCheck = 0;	        
      $(Qtn + ' .answer-container table tbody tr td:nth-child('+ columCheck +') input[type="checkbox"]').each(function(){
          if (this.checked) {
            var space = ""; if (selected2 != ''){space = ", "} else {espace = ""}
              selected2 += space + $(this).val();
              countCheck++;
          }
      }); 

      console.log('Click en elemento - Has seleccionado: ('+countCheck+') elementos de la columna '+ (columCheck - 1) +'');
});     


/*====================================================
Improved Code - Prior Code.
=====================================================*/

var Qtn = ".Q2"; // Ask to validate (Survey question code)
var rootA = Qtn +' .answer-container table tbody tr td:nth-child('; rootB = ') input[type="checkbox"]'; // Search route
var colum0 = 2; var colum1 = 3; var colum2 = 4; // column where we want to count
var c0 = 0; var c1 = 0; var c2 = 0; // Accumulated count of options selected by each column

$(rootA + colum0 +rootB).change(function(){ //Columna1
	var ci0 = 0; $(rootA + colum0 +rootB).each(function(){ if (this.checked) { ci0++;  } });  c0 = ci0; 
});      
$(rootA + colum1 +rootB).change(function(){ //Columna2
	var ci1 = 0; $(rootA + colum1 +rootB).each(function(){ if (this.checked) { ci1++;  } });  c1 = ci1;
});  
$(rootA + colum2 +rootB).change(function(){ //Columna3
	var ci2 = 0; $(rootA + colum2 +rootB).each(function(){ if (this.checked) { ci2++;  } });  c2 = ci2;
});  


/*
====================================================
We add the function to each check, to validate instantly (radio)
====================================================
*/
  $(Qtn +' .answer-container table tbody tr td:nth-child('+ columCheck +') input[type="radio"]').change(function(){
    var selected2 = ''; var countCheck = 0;	        
      $(Qtn + ' .answer-container table tbody tr td:nth-child('+ columCheck +') input[type="radio"]').each(function(){
          if (this.checked) {
            var space = ""; if (selected2 != ''){space = ", "} else {espace = ""}
              selected2 += space + $(this).val();
              countCheck++;
          }
      }); 

      console.log('Click en elemento - Has seleccionado: ('+countCheck+') elementos de la columna '+ (columCheck - 1) +'');
});       

/*====================================================
Improved Code - Prior Code.
=====================================================*/

var Qtn = ".Q2"; // Ask to validate (Survey question code)
var rootA = Qtn +' .answer-container table tbody tr td:nth-child('; rootB = ') input[type="radio"]'; // Search route
var colum0 = 2; var colum1 = 3; var colum2 = 4; // column where we want to count
var c0 = 0; var c1 = 0; var c2 = 0; // Accumulated count of options selected by each column

$(rootA + colum0 +rootB).change(function(){ //Columna1
	var ci0 = 0; $(rootA + colum0 +rootB).each(function(){ if (this.checked) { ci0++;  } });  c0 = ci0; 
});      
$(rootA + colum1 +rootB).change(function(){ //Columna2
	var ci1 = 0; $(rootA + colum1 +rootB).each(function(){ if (this.checked) { ci1++;  } });  c1 = ci1;
});  
$(rootA + colum2 +rootB).change(function(){ //Columna3
	var ci2 = 0; $(rootA + colum2 +rootB).each(function(){ if (this.checked) { ci2++;  } });  c2 = ci2;
});  



/*====================================================
Code application prior to an exact sum of two matrices to advance
======================================================
Survey: https://Questionpro.com/t/apuimzueto
=====================================================*/



var Qtn = "Q1"; Qtn = "."+Qtn; // Ask to validate (Survey question code)
var rootA = Qtn +' .answer-container table tbody tr td:nth-child('; rootB = ') input[type="radio"]'; // Search route
var colum0 = 2; var colum1 = 3; var colum2 = 4; // column where we want to count
var c0 = 0; var c1 = 0; // Accumulated count of options selected by each column
var totalResponses = 8; 

$(rootA + colum0 +rootB).change(function(){ //Columna1
	var ci0 = 0; $(rootA + colum0 +rootB).each(function(){ if (this.checked) { ci0++;  } });  c0 = ci0; 
	ValidateTotal();
});      
$(rootA + colum1 +rootB).change(function(){ //Columna2
	var ci1 = 0; $(rootA + colum1 +rootB).each(function(){ if (this.checked) { ci1++;  } });  c1 = ci1;
	ValidateTotal()
});  
setTimeout(function(){ 
	$("#SurveySubmitButtonElement").hide();
}, 200);
function ValidateTotal(){
	var totalCheck = c0 + c1;
	if(totalCheck >= totalResponses){
		alert("Has seleccionado las "+totalResponses+" respuestas requeridas, ahora pasaremos al siguiente apartado.");
		$("#SurveySubmitButtonElement").click();
	}
}







/**
=========================
Add a timer to a pagin
=========================
Test survey (8198640)
=========================
**/
var timeAdd = "1:05"; // Time we want the code "mm: ss" to validate

var timeArray = timeAdd.split(':');
var cMin = 0; var cSec = 0; cMin = parseInt(timeArray[0]); cSec = parseInt(timeArray[1]);
var isFinal = false; var lastCicle = false;

// We hide the button at the start of the count
setTimeout(function(){ 
	$("#SurveySubmitButtonElement").hide();
}, 1000);

// We start a loop to perform the timer
setInterval(function() {
	var checkSec = 0; checkSec = (cSec == 0)? 0 : cSec;
	
	if(cMin == 1 && cSec == 1){lastCicle = true;} 
	if(cMin == 0 && cSec == 1){lastCicle = false;} 

	checkSec = (lastCicle && cSec == 0)? 60 : checkSec;
    
  var formatSec = pad(checkSec.toString(), 2);
	$('#timerCheck').html(cMin + ":" + formatSec);

	if(cSec == 0){ cSec = (isFinal)? 0 : 59; }else{ cSec--; }	
	if(isFinal== true && cSec == 0){isValid();}

	if(cSec ==  0){cMin--;} 
	if(cMin < 0){ cMin = 0; isFinal = true;}	

}, 1000);


// Function to validate seconds as ("00").
function pad (str, max) {
  str = str.toString();
  return str.length < max ? pad("0" + str, max) : str;
}

// If the timer has reached the end, we want it to be done.
function isValid(){
	$("#SurveySubmitButtonElement").show();
	$("#TextNotify").html('<span class="text-success">Ahora puede pasar al siguiente apartado <i class="fa fa-check-square-o"></i></span>');
}


/**
=========================
Transform a unique selection matrix to MaxDiff
=========================
Test survey (9224969)
=========================
**/
// Use of variables
var Qtn = "Q6"; // Ask to validate (Survey question code)
var rootA = "." + Qtn +' .answer-container table tbody tr td:nth-child('; rootB = ') input[type="radio"]'; //Ruta de búsqueda
var rootAll = "." + Qtn +' .answer-container table tbody tr td input[type="radio]';
var btnP = "#SurveySubmitButtonElement";
var colum1 = 2; var colum2 = 3; // column where we want to count
var c1 = 0; var c2 = 0; // Accumulated count of options selected by each column
     

// Hides the button at the beginning to start validation
setTimeout(function(){ 
   $(btnP).hide();
}, 500);


//Validación por columnas
$(rootA + colum1 +rootB).change(function(){ //Columna1
	var ci1 = 0; $(rootA + colum1 +rootB).each(function(){ if (this.checked) { ci1++;  } });  c1 = ci1; if(c1 >= 2){ invalidOptions(this, colum1); }
});  
$(rootA + colum2 +rootB).change(function(){ //Columna2
	var ci2 = 0; $(rootA + colum2 +rootB).each(function(){ if (this.checked) { ci2++;  } });  c2 = ci2; if(c2 >= 2){ invalidOptions(this, colum2); }
});  


// Función para invalidar todas las opciones y seleccionar sola la última por cada columna
function invalidOptions(objCheck, column){
	$(rootA + column +rootB).each(function(){ $(this).prop("checked", false); });
	var invalidCheck = objCheck; $(invalidCheck).prop("checked", true);
}


// Función para detectar cuando se hayan seleccionado las dos opciones.
setInterval(function() {
	var countInterval = 0;
    $(rootAll).each(function(){ 
    	if (this.checked) { countInterval++;  }
     	if (countInterval == 2) { $(btnP).show(); }else{ $(btnP).hide(); }
 	});
}, 500);







/**
=========================
Validation of characters number in boxes of a spreadsheet matrix.
=========================
Note: With only one column of text boxes.
=========================
Test survey ()
=========================
**/
// Verification for each row
document.getElementById("SurveySubmitButtonElement").addEventListener("click", function(event){
var QtnCd1 = "P3";
    var cantCajas = $("." + QtnCd1 + " .answer-container .table-wrapper .parent-table tbody tr td:nth-child(2) .input-wrapper .form-input").length;

    for(var i =1; i <= cantCajas; i++)
    {
        var txt = $("." + QtnCd1 + " .answer-container .table-wrapper .parent-table tbody tr td:nth-child(2) .input-wrapper .form-input")[i-1].value;
        if(txt.length < 30)
        {
              event.preventDefault()
              alert("El texto ingresado debe tener una longitud mínima de 30 caracteres. Actualmente el texto en la casilla #" + i + " solo cuenta con " + txt.length + " caracteres.");
        }
    }
});

// Total and general verification
document.getElementById("SurveySubmitButtonElement").addEventListener("click", function(event){
    var QtnCd1 = "P3";
    var cantCajas = $("." + QtnCd1 + " .answer-container .table-wrapper .parent-table tbody tr td:nth-child(2) .input-wrapper .form-input").length;
    var valCount = false;

    for(var i =1; i <= cantCajas; i++)
    {
        var txt = $("." + QtnCd1 + " .answer-container .table-wrapper .parent-table tbody tr td:nth-child(2) .input-wrapper .form-input")[i-1].value;
        if(txt.length < 30) { valCount = true; }
    }

    if(valCount){
        event.preventDefault()
        alert("Todos los comentarios deben tener al menos 30 caracteres.");
    }
});



/**
=========================
Edit the login page of a survey.
=========================
Test survey ()
=========================
**/
// Decoment code to paste in the "user" or "access key" text
//Texto <script>setTimeout(function(){ CODE }, 2000); </script>
//Ingrese su clave de acceso <script>setTimeout(function(){  $('#passwordID').attr('type', 'text'); }, 2000); </script>

//Usuario <script>setTimeout(function(){ $('#passwordID').attr('type', 'text');$('.question-container').html('<b style="text-align:center;margin-top:40px;">Solicitud de ingreso de Angel Inc</b>');$('.survey-question-wrapper').prepend('<img style="margin:auto;display:block;" width="300" src="https://www.questionpro.com/qp_userimages/sub-3/3481185/QuestionPro.png"/>');}, 2000);</script>

//Usuario <script>setTimeout(function(){ $('#passwordID').attr('type', 'text');$('.question-container').html('<b>Solicitud de ingreso de Angel Inc</b>');$('.survey-question-wrapper').prepend('<img style="margin:auto;display:block;padding-bottom:40px;" width="300" src="https://www.questionpro.com/qp_userimages/sub-3/3481185/QuestionPro.png"/>');}, 2000);</script>

//Usuario <script>setTimeout(function(){ $('#passwordID').attr('type', 'text');$('.question-container').html('<b><i class="fa fa-user-secret"></i> Solicitud de ingreso de Angel Inc.</b><br>');$('.survey-question-wrapper').prepend('<img style="margin:auto;display:block;padding-bottom:40px;" width="500" src="https://www.questionpro.com/qp_userimages/sub-3/3481185/QuestionPro.png"/>');}, 1000);</script>





/**
=========================
NPS question answer step to a single matrix question.
=========================
In this case, it serves to unify the responses of a matrix when it is not shown in mobile version.
And instead of this a question NPS.
=========================
Test survey ()
=========================
**/

var generalQuestionCode = "P1"; // Matrix and preferably code Initial prefix of the NPS Question Code.
var numberOfNpsQstns = 4; // How many answers will be processed (both matrix and NPS).

//NPS o CSAT
$("#SurveySubmitButtonElement").click(function() {
	var c10Device = $survey.surveyResponseJson.custom10; // Only if it is mobile, code is executed to answer matrix by JS.
	if(c10Device == "MOBILE"){ ProcessNPSToMatrix(generalQuestionCode, numberOfNpsQstns); }
});

function ProcessNPSToMatrix(genQtnCode, numberOfNpsQstns){
	for (var i = 1; i < numberOfNpsQstns; i++) {
		var OptNPS = $('.'+ genQtnCode +'m' + i + ' .answer-container .answer-options .nps-options .controls input[type="radio"]:checked').parent().text();
		OptNPS = (OptNPS == 'undefined')? 0 : parseInt(OptNPS); // Question NPS - where the answer will be obtained.

		var QCode = '.'+ genQtnCode; // Matrix question - where the answer will be put.
		var ruteIni = " .answer-container .table-wrapper .parent-table tbody"; var ruteFin = " .control-selection .radio-check";

		var RowOption = IndexRowMatrix(i);
		var ValueOpt = OptNPS; ValueOpt = ValueOpt + 1; // add +1, because the title of the row subtracts a search option.
		$(QCode + ruteIni + ' tr:nth-child('+ RowOption +') td:nth-child('+ ValueOpt +')' + ruteFin).prop("checked", true);    
	}
}

function IndexRowMatrix(indexOrig){
	var newIndex = 1; newIndex = (indexOrig * 2) - 1; //Si 1=1, 2=3, 3=5, 4=7, 5=9
	return newIndex;
}






/**
=========================
Replicate words match criteria inside a comment box
=========================
In this code it was only implemented for NPS+ comments
=========================
Test survey (V1 - 2021)
=========================
**/
var codeQ = 'P7'; // Code of the question where the comment box is located
var words = 'Malo, Terrible, Ningún, Nada, Poco, Falta, Horrible, Falta, Deficiente, Ineficiente, Feo, Olvido, Inexplicable, Inconforme, Molesto, Enojado, Frustrar, Descontento, Decepcionado';  //Palabras clave

words = words.toLowerCase();
var textInput = $('.' + codeQ + ' .voting-question .comments-suggestions-question textarea').val();
var wordList = words.split(", ");

var openCheck = true;
var wordMatch = "";

if(textInput != ""){
	textInput = textInput.toLowerCase();
	$.each(wordList, function (ind, elem) { 
		if(openCheck){
			if (~textInput.indexOf(elem)){
				openCheck = false; wordMatch = elem.toLowerCase();
			}
		} 	
	}); 
	if (!openCheck){
		alert("En efecto, sí hay coincidencia. La palabra clave fue: " + wordMatch);
		//$survey.updateCustomVariable(7, "TrueNegativeMatch");
		//$survey.updateCustomVariable(8, wordMatch);
	}	
}




/**
=========================
Replicate words match criteria inside a comment box
=========================
In this code it was only implemented for NPS+ comments
=========================
Test survey (V2 - Dec 2023)
=========================
**/
var codeQ = 'Q6'; // Code of the question where the comment box is located
var words = 'Malo, Terrible, Ningún, Nada, Poco, Falta, Horrible, Faltaba, Deficiente, Ineficiente, Feo, Olvido, Inexplicable, Inconforme, Molesto, Enojado, Frustrar, Descontento, Decepcionado, Mal servicio, Terrible, Atención, Atender, Repuesto, Compra, Comprar, Servicio, Más, Asesor, Asesores, Técnico, Caja, Cajero, Cajera, Lleno, Había, Espera, Esperar, Tiempo, Mejor, Respuesta, Repuesta, Mejorar, Mejora, Taller, Hora, Factura; Demora, Tienda';  //Palabras clave

$("#SurveySubmitButtonElement").click(function(e) {

	words = replaceAccentsTxt(words);
	var textInput = $('.' + codeQ + ' .voting-question .comments-suggestions-question textarea').val();
	var wordList = words.split(", "); var openCheck = true;  var wordMatch = "";

	if(textInput !== ""){ textInput = replaceAccentsTxt(textInput);
		$.each(wordList, function (ind, elem) { 
			if(openCheck){
				if (~textInput.indexOf(elem)){
					openCheck = false; wordMatch = elem.toLowerCase();
				}
			} 	
		}); 
		if (!openCheck){			
			$survey.updateCustomVariable(7, "TrueNegativeMatch"); $survey.updateCustomVariable(8, wordMatch);
		}	
	}
});

function replaceAccentsTxt(evalTxt){ var accentWrd = "á, é, í, ó, ú"; var normaltWrd = "a, e, i, o, u"; var accentList = accentWrd.split(', '); var normalLst = normaltWrd.split(", "); var formatTxt = evalTxt.toLowerCase(); $.each(accentList, function (ind, elem) { formatTxt = replaceAll(formatTxt, elem, normalLst[ind]); }); return formatTxt; }
function escapeRegExp(string){ return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); } 
function replaceAll(str, term, replacement) {	return str.replace(new RegExp(escapeRegExp(term), 'g'), replacement); }







/**
=========================
Take the text of a comment and accommodate it within a custom
=========================
Not to use or cannot be used within the pagin
=========================
Test survey ()
=========================
**/

$("#SurveySubmitButtonElement").click(function() {
  var codeQ = 'P12_1'; // Code of the question to obtain information
  var nameClient = $('.' + codeQ + 'input[type=text]').val();
  $survey.updateCustomVariable(6, nameClient);
});





/**
=========================
Change the - Select - from a list selection question
=========================
Test survey ()
=========================
**/
var qCode = 'Q1'; // Code of the question to be modified (it is on the left side of the question)
var wordChng = '-- Seleccionar --'; // word to change
var wordNew = '-- Autocompletar --'; //Palabra nueva

setInterval(function() {
	var val1 = $('.' +qCode+' .filter-option').text();
	var val2 = $('.' +qCode+' .bs-searchbox input[type="text"]').attr('placeholder');
	if(val1 == wordChng){ $('.' +qCode+' .filter-option').text(wordNew); }
	if(val2 == wordChng){ $('.' +qCode+' .bs-searchbox input[type="text"]').attr('placeholder',wordNew); }
    $('a span:contains("'+wordChng+'")').html(wordNew);
}, 2000);






/**
=========================
Change all the letters with an accent in a text.
=========================
Test survey ()
=========================
**/
setTimeout(function(){ 
	var codeQ = 'Q1'; // Code of the question to obtain information // var comment = "";comment = $ Survey.surveyResjson.Custom9;
	var comment = $('.' + codeQ + ' .multi-row-question .comments-suggestions-question textarea').val();
	if(comment != ""){
		var newComment = replaceAccentsTxt(newComment);
		alert("El texto normalizado es: " + newComment); //$survey.updateCustomVariable(9, newComment);
	}
}, 10000);
function replaceAccentsTxt(evalTxt){
	var accentWrd = "á, é, í, ó, ú"; var normaltWrd = "a, e, i, o, u";
	var accentList = accentWrd.split(', '); var normalLst = normaltWrd.split(", "); var formatTxt = evalTxt.toLowerCase();
	$.each(accentList, function (ind, elem) { formatTxt = replaceAll(formatTxt, elem, normalLst[ind]); });
	return formatTxt;
}
function escapeRegExp(string){ return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); } 
function replaceAll(str, term, replacement) {	return str.replace(new RegExp(escapeRegExp(term), 'g'), replacement); }





/**
=========================
Detect ENTER in the INPUT with the keyboard and run function.
=========================
Test survey ()
=========================
**/
$(document).ready(function(){
    $("#dato").keypress(function(e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        if(code==13){ obtenerDatos(); }
    });
});
function obtenerDatos() { var valor = $("#dato").val();
    $.ajax({
      type: 'POST', 
      url:  'getDatos.php',
      data: "valor=" + valor,
      success: function(response){
            $("#wrap").html(response);
      }
    });
}

var codeQ = 'QEnter';
$('.' + codeQ + ' .multi-row-question input').keyup(function(event) {
    if (event.which === 13) {
        $("#SurveySubmitButtonElement").click();
    }
});






/**
=========================
Nourish a comment box with another comment box
=========================
Test survey ()
=========================
**/
//Variables editables
var customSave = $survey.surveyResponseJson.custom5; //Variable donde se guardó la respuesta de la pregunta de clasificación.
var codeQSaved = 'Q3'; // Code of the question to obtain information.
var codeQNew = 'Q4'; //Código de pregunta donde deseamos concentrar el comentario nutrido.
var lblCls = 'Área de clasificación: '; // Title for comment classification.
var lblCmt = 'Razón: '; // Title for comments.

// editable flow
$("#SurveySubmitButtonElement").click(function() {	
	var comment = $('.' + codeQSaved + ' .multi-row-question .comments-suggestions-question textarea').val();
	var ncomment = lblCls + customSave + ' || ' + lblCmt + comment;
	$('.' + codeQNew + ' textarea').val(ncomment);  
});



//===============================
// Obtain the body mass index.
//===============================
// It is based between two text boxes to display the result in a text field.
//===============================
var codeQ1 = 'P12_1';
var codeQ2 = 'P12_2';
var btnTxt = '#SurveySubmitButtonElement';

$(document).ready(function() {
  $('.' + codeQ1 + ' input[type=text]').on("keyup blur paste", function (event) { ProcessData(); });
  $('.' + codeQ2 + ' input[type=text]').on("keyup blur paste", function (event) { ProcessData(); });
});

function ProcessData(){
   var val1 = $('.' + codeQ1 + ' input[type=text]').val();
   var val2 = $('.' + codeQ2 + ' input[type=text]').val();
   var isValid = false;

  if(val1 !== '' && val2 !== ''){ isValid = (val1 === val2);   }   
  if(isValid){$(btnTxt).show();}else{$(btnTxt).hide();}   
}


// Limit Matrix Columns (The User Needs to Update Each Row ID and adjust depending on the matrix colum number)

// Row 1
var row1 = "m_89375312"; //name value of inputs (inspect this value)
var rowSelector1 = "input[name='" + row1 + "']";
$(rowSelector1).change(function () {
    var max = 3; // Option limit
    if ($(rowSelector1 + ":checked").length == max) {
// Disable Thos Who Have Not Been Selected
        $(rowSelector1 + ":not(:checked)").prop("disabled", true);
    } else {
// reactive if they are selected <max
        $(rowSelector1).prop("disabled", false);
    }
})

// Row 2
var row2 = "m_89375313"; //name value of inputs (inspect this value)
var rowSelector2 = "input[name='" + row2 + "']";
$(rowSelector2).change(function () {
    var max = 3; // Option limit
    if ($(rowSelector2 + ":checked").length == max) {
// Disable Thos Who Have Not Been Selected
        $(rowSelector2 + ":not(:checked)").prop("disabled", true);
    } else {
// reactive if they are selected <max
        $(rowSelector2).prop("disabled", false);
    }
})

// Row 3
var row3 = "m_89375314"; //name value of inputs (inspect this value)
var rowSelector3 = "input[name='" + row3 + "']";
$(rowSelector3).change(function () {
    var max = 3; //limite de opciones
    if ($(rowSelector3 + ":checked").length == max) {
// Disable Thos Who Have Not Been Selected
        $(rowSelector3 + ":not(:checked)").prop("disabled", true);
    } else {
// reactive if they are selected <max
        $(rowSelector3).prop("disabled", false);
    }
})

// Row 4
var row4 = "m_89375315"; //name value of inputs (inspect this value)
var rowSelector4 = "input[name='" + row4 + "']";
$(rowSelector4).change(function () {
    var max = 3; // Option limit
    if ($(rowSelector4 + ":checked").length == max) {
// Disable Thos Who Have Not Been Selected
        $(rowSelector4 + ":not(:checked)").prop("disabled", true);
    } else {
// reactive if they are selected <max
        $(rowSelector4).prop("disabled", false);
    }
})

// Row 5
var row5 = "m_89375319"; //name value of inputs (inspect this value)
var rowSelector5 = "input[name='" + row5 + "']";
$(rowSelector5).change(function () {
    var max = 3; // Option limit
    if ($(rowSelector5 + ":checked").length == max) {
// Disable Thos Who Have Not Been Selected
        $(rowSelector5 + ":not(:checked)").prop("disabled", true);
    } else {
// reactive if they are selected <max
        $(rowSelector5).prop("disabled", false);
    }
})

// Row 6
var row6 = "m_89375307"; //name value of inputs (inspect this value)
var rowSelector6 = "input[name='" + row6 + "']";
$(rowSelector6).change(function () {
    var max = 3; // Option limit
    if ($(rowSelector6 + ":checked").length == max) {
// Disable Thos Who Have Not Been Selected
        $(rowSelector6 + ":not(:checked)").prop("disabled", true);
    } else {
// reactive if they are selected <max
        $(rowSelector6).prop("disabled", false);
    }
})

// Row 7
var row7 = "m_89375318"; //name value of inputs (inspect this value)
var rowSelector7 = "input[name='" + row7 + "']";
$(rowSelector7).change(function () {
    var max = 3; // Option limit
    if ($(rowSelector7 + ":checked").length == max) {
// Disable Thos Who Have Not Been Selected
        $(rowSelector7 + ":not(:checked)").prop("disabled", true);
    } else {
// reactive if they are selected <max
        $(rowSelector7).prop("disabled", false);
    }
})

// Row 8
var row8 = "m_89375306"; //name value of inputs (inspect this value)
var rowSelector8 = "input[name='" + row8 + "']";
$(rowSelector8).change(function () {
    var max = 3; // Option limit
    if ($(rowSelector8 + ":checked").length == max) {
// Disable Thos Who Have Not Been Selected
        $(rowSelector8 + ":not(:checked)").prop("disabled", true);
    } else {
// reactive if they are selected <max
        $(rowSelector8).prop("disabled", false);
    }
})

// Row 9
var row9 = "m_89375310"; //name value of inputs (inspect this value)
var rowSelector9 = "input[name='" + row9 + "']";
$(rowSelector9).change(function () {
    var max = 3; // Option limit
    if ($(rowSelector9 + ":checked").length == max) {
// Disable Thos Who Have Not Been Selected
        $(rowSelector9 + ":not(:checked)").prop("disabled", true);
    } else {
// reactive if they are selected <max
        $(rowSelector9).prop("disabled", false);
    }
})

// Row 10
var row10 = "m_89375308"; //name value of inputs (inspect this value)
var rowSelector10 = "input[name='" + row10 + "']";
$(rowSelector10).change(function () {
    var max = 3; // Option limit
    if ($(rowSelector10 + ":checked").length == max) {
// Disable Thos Who Have Not Been Selected
        $(rowSelector10 + ":not(:checked)").prop("disabled", true);
    } else {
// reactive if they are selected <max
        $(rowSelector10).prop("disabled", false);
    }
})

// Row 11
var row11 = "m_89375311"; //name value of inputs (inspect this value)
var rowSelector11 = "input[name='" + row11 + "']";
$(rowSelector11).change(function () {
    var max = 3; // Option limit
    if ($(rowSelector11 + ":checked").length == max) {
// Disable Thos Who Have Not Been Selected
        $(rowSelector11 + ":not(:checked)").prop("disabled", true);
    } else {
// reactive if they are selected <max
        $(rowSelector11).prop("disabled", false);
    }
})

// Row 12
var row12 = "m_89375309"; //name value of inputs (inspect this value)
var rowSelector12 = "input[name='" + row12 + "']";
$(rowSelector12).change(function () {
    var max = 3; // Option limit
    if ($(rowSelector12 + ":checked").length == max) {
// Disable Thos Who Have Not Been Selected
        $(rowSelector12 + ":not(:checked)").prop("disabled", true);
    } else {
// reactive if they are selected <max
        $(rowSelector12).prop("disabled", false);
    }
})

// Row 13
var row13 = "m_89375316"; //name value of inputs (inspect this value)
var rowSelector13 = "input[name='" + row13 + "']";
$(rowSelector13).change(function () {
    var max = 3; // Option limit
    if ($(rowSelector13 + ":checked").length == max) {
// Disable Thos Who Have Not Been Selected
        $(rowSelector13 + ":not(:checked)").prop("disabled", true);
    } else {
// reactive if they are selected <max
        $(rowSelector13).prop("disabled", false);
    }
})






