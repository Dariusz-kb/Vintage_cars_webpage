
/* display detail for car on pictures pf gallery function*/
/* the 'this' keyword in the parameters of the fucntion on the html doc indicates that we are putting that element through the fucntion */
/* here the selected picture is refered to as clickedPicture*/
function displayDetails(clickedPicture) {
  /* create a variable imagetext and set its value as the clicked pictures imagetext - query selector returns one element */  
  var imagetext = clickedPicture.querySelector('.imagetext');
  /* create a variable computedStyle and set its value to the computed style of imagetext - the computed style info included the display property */
  var computedStyle = window.getComputedStyle(imagetext);
  /* we can then alternate between displaying or not displaying (hiding or unhiding) the image text using a if and else statement - if the imagetext is not displayed (=== 'none') we display it and vice versa */
  if (computedStyle.display === 'none') {
      imagetext.style.display = 'block';
    } else {
      imagetext.style.display = 'none';
    }

}

/* the validate form fucntion for the value car form initiated on the forms submission */
function validateForm() {
  /* create variable for each form input to be validated and set their values to the value inputted by the user on that form */
  var fname = document.forms.valuecarform.Fname.value;
  var lname = document.forms.valuecarform.Lname.value;
  var email = document.forms.valuecarform.email.value;
  var phone = document.forms.valuecarform.phone.value;
  var reg = document.forms.valuecarform.reg.value;
  var odemeter = document.forms.valuecarform.odemeter.value;
  var checkbox1 = document.forms.valuecarform.checkbox1.value;
  var checkbox2 = document.forms.valuecarform.checkbox2.value;
  
  /*call function reset input validation text to reset the validation texts on each submission so fixed errors dont appear again*/
  resetInputValidationText();
  
 
  /* if loop where the condition meets as true if the fname variable set at the start of the fucntion (taken from the users input) is blank */
  if (fname === "") {
    /* if true, a variable fnamevalidation is set prompt user to enter name*/
    var fnamevalidation = "Please enter your first name!";
    /* the input is also highlighted to further prompt user */
    document.getElementById("Fname").focus();
    /* the element fnamevalidation text saved under the form input has its inner.HTML value set to that of the fnamevalidation string above*/
    document.getElementById("fnamevalidation").innerHTML = fnamevalidation;
    /* false is returned so the fucntion ends and the form is not submitted*/
    return false;
  }

  /* same validation method as above but for the last name */
  if (lname === "") {
    var lnamevalidation = "Please enter your Last name!";
    document.getElementById("Lname").focus();
    document.getElementById("lnamevalidation").innerHTML = lnamevalidation;
    return false;
  }

  /* validation for email to ensure it includes and @ symbol and is longer than 8 characters or else validation fails and user notified */
  if (!email.includes("@") || email.length < 8) {
    var emailvalidation = "Please enter a valid email address!";
    document.getElementById("email").focus();
    document.getElementById("emailvalidation").innerHTML = emailvalidation;
    return false;
  }

  /* validation for phone input to ensure it longer than 10 digits or else validation fails and user notified */
  if (phone.length < 10) {
    var phonevalidation = "Please enter a valid phone number!";
    document.getElementById("phone").focus();
    document.getElementById("phonevalidation").innerHTML = phonevalidation;
    return false;
  }

  /* validation for reg input to ensure it longer than 6 digits or else validation fails and user notified */
  if (reg.length < 6) {
    var registrationvalidation = "Please enter a valid registration!";
    document.getElementById("reg").focus();
    document.getElementById("registrationvalidation").innerHTML = registrationvalidation;
    return false;

  }

  /* validation for checkbox1 input to ensure it is checked or else validation fails and user notified */
  if (!document.getElementById('checkbox1').checked) {
    var checkbox1validation = "Please consent to the terms and conditions!";
    document.getElementById("checkboxvalidation").innerHTML = checkbox1validation;
    return false;
  }

  /* validation for checkbox2 input to ensure it is checked or else validation fails and user notified */

  if (!document.getElementById('checkbox2').checked) {
    var checkbox2validation = "Please consent to the being contacted!";
    document.getElementById("checkboxvalidation").innerHTML = checkbox2validation;
    return false;
  }

  /*window alert on succeful form validation to notify user */
  window.alert("Thank you for your enquiry, we will be in contact shortly");
  /*for successfully submitted*/
  return true;
}

/* reset each input validation text by setting each value to a a blank string */
function resetInputValidationText() {
  document.getElementById("fnamevalidation").innerHTML = "";
  document.getElementById("lnamevalidation").innerHTML = "";
  document.getElementById("emailvalidation").innerHTML = "";
  document.getElementById("phonevalidation").innerHTML = "";
  document.getElementById("registrationvalidation").innerHTML = "";
  document.getElementById("checkboxvalidation").innerHTML = "";
  document.getElementById("checkboxvalidation").innerHTML = "";
}



// code to validate user email on index page subscription
// function prevents default behaviour of submit button
// it uses regular expresion format to check if user entered 
// valid email, displays message to the user
// code source https://www.w3resource.com/
function ValidateEmail()
{
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const form = document.querySelector("#emailform");
  userentry = document.getElementById("email1");

form.addEventListener("submit", event => {
    event.preventDefault();
  });

if(userentry.value.match(mailformat))
  {
    document.formEmail.email1.focus();
    userentry.value = "";
    alert("Thank you for subscribing");

    return true;
  }
else
  {
    alert("You have entered an invalid email address!");
    document.formEmail.email1.focus();
    return false;
  }
}


// Java scrip code for the game page



    // Start of a game if button clicked 
async function StartGame()
{
   // create array of objects cars, each object 
        // has a path to image file and name of the car and year

        // images source: https://luxe.digital/lifestyle/garage/best-classic-cars/


  let cars = 
  [
      {carImagePath: "Images/Game/game1.jpg", carName: "aston martin", carYear: "1964" },
      {carImagePath: "Images/Game/game2.jpg", carName: "ferrari", carYear: "1962" },                
      {carImagePath: "Images/Game/game3.jpg", carName: "jaguar", carYear: "1961" },
      {carImagePath: "Images/Game/game4.jpg", carName: "porsche", carYear: "1963" },
      {carImagePath: "Images/Game/game5.jpg", carName: "el camino", carYear: "1970" },
      {carImagePath: "Images/Game/game6.jpg", carName: "mini", carYear: "1951" },
      {carImagePath: "Images/Game/game7.jpg", carName: "mustang", carYear: "1965" },
      {carImagePath: "Images/Game/game8.jpg", carName: "gullwing", carYear: "1954" },
      {carImagePath: "Images/Game/game9.jpg", carName: "corvette", carYear: "1963" },
      {carImagePath: "Images/Game/game10.jpg", carName: "bugatti", carYear: "1938" },
      {carImagePath: "Images/Game/game11.jpg", carName: "rolls royce", carYear: "1949" },
      {carImagePath: "Images/Game/game12.jpg", carName: "thunderbird", carYear: "1971" },
      {carImagePath: "Images/Game/game13.jpg", carName: "jaguar", carYear: "1989" },
      {carImagePath: "Images/Game/game14.jpg", carName: "dodge", carYear: "1991" },
      {carImagePath: "Images/Game/game15.jpg", carName: "bmw", carYear: "1972" },
      {carImagePath: "Images/Game/game16.jpg", carName: "pantera", carYear: "1970" },
      {carImagePath: "Images/Game/game17.jpg", carName: "lamborghini", carYear: "1966" },
      {carImagePath: "Images/Game/game18.jpg", carName: "beetle", carYear: "1938" },
  ]

// arraySize variable to store cars array size
let arraySize = cars.length;

// create array to store 5 randomly picked car names
let carsPicked = [];

// fill up carsPicked array with random cars from cars object array
// start loop
for (let i = 5; i > 0; i-- ) 
{
  // generate random number in a range from 0 - size of array of car objects
  let x = Math.floor(Math.random() * arraySize);

  // get the car object and  add it into random cars array
  var randomCar = cars[x];
  carsPicked.push(randomCar);
}

// variable to store the size of array of random cars
var randomCars = carsPicked.length;

// declares variable to store image path and car name
const image_Path = document.getElementById("gameImage");
const car_Name = document.getElementById("carName");
const car_Year = document.getElementById("carYear");
const animOpacity = document.getElementById("GameContent");


        // display hiden cards
    document.getElementById("GameContent").style.display = "block";
        // hide start game button during game
    document.getElementById("Start_Game_Button").style.display = "none";
        // Hide game rules
    document.getElementById("gameRules").style.display = "none";


            // Start of countdown to begin game
        for (let i = 3; i > 0; i-- ) 
        {
            car_Name.innerHTML = " Starts in " + i;

                // call function sleep to delay loop
            await sleep(1);
        }

    
            // start loop to iterate over array of random cars
    for (let i = 0; i < randomCars; i++ )
        {
          
                // get image path and car name and year from array of car objects

            image_Path.src = carsPicked[i].carImagePath;
            car_Name.innerHTML = carsPicked[i].carName;
            car_Year.innerHTML = carsPicked[i].carYear;
            await sleep(0.5);
            animOpacity.style.opacity = 1;

    // call function sleep to delay
        await sleep(3);
         animOpacity.style.opacity = 0;

        await sleep(1);
        }
      // hide cards
      document.getElementById("GameContent").style.display = "none";
      await sleep(1);
        // declare vsriable to store score
    var score = 0;
        // start of loop to get user answwers
    for (let i = 0; i < randomCars; i++ )
    {
            // popup window to get user entry
        var userCar = window.prompt("enter car name");
            // check if user input is the same as in the array 
         if(!(userCar === carsPicked[i].carName))
         {
           // display alert if user enters wrong answer
            alert("Wrong answer.!");
            document.getElementById("gameover").style.display = "inline";
            document.getElementById("gameovertitle").innerHTML = "Game Over";
            document.getElementById("gameovertext").innerHTML = "Try again..";

            // show start game button 
            //document.getElementById("Start_Game_Button").style.display = "inline";
            //document.getElementById("gameRules").style.display = "inline";

            // break the loop
            break;

         }
         // if user enters corect answer add one to score display alert
         else if(userCar === carsPicked[i].carName){
            score = score += 1;
            alert("correct");
            if(score==5)
            {
              document.getElementById("gameover").style.display = "inline";
              document.getElementById("gameovertitle").innerHTML = "Congratulations!";
              document.getElementById("gameovertext").innerHTML = "You guessed them all.";

            }
         }

    }
        // display total score
        //alert("Total score: " + score);

       

        document.getElementById("Score").innerHTML = score;
        await sleep(3);
        document.getElementById("gameover").style.display = "none";

        // show start game button
        document.getElementById("Start_Game_Button").style.display = "inline";
        document.getElementById("gameRules").style.display = "inline";
        // reset game 
        animOpacity.style.opacity = 1;
        image_Path.src = "Images/Game/game0.jpg";
        car_Year.innerHTML = "";
        carsPicked = [];
            for (let i = 5; i > 0; i-- ) 
            {
                let x = Math.floor(Math.random() * arraySize);
                var randomCar = cars[x];
                carsPicked.push(randomCar);
            }


        // call function sleep, wait 2 seconds
        await sleep(2);

}

// async function for delay using promise and set timeout
async function sleep(seconds){
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}



// service page javascript code

function showServices() {
  // Get selected values from the dropdowns
  var carYear = document.getElementById("carYear").value;
  var carMileage = document.getElementById("carMileage").value;
  var usageFrequency = document.getElementById("UsageFrequency").value;
  var serviceDate = document.getElementById("ServiceDate").value;
  var storageConditions = document.getElementById("StorageConditions").value;
  var primaryUse = document.getElementById("PrimaryUse").value;

  console.log("test before" + carYear, carMileage, usageFrequency, serviceDate, storageConditions, primaryUse);

  var restorationService =
  (carYear === "Year3" || carYear === "Year4") &&
  (storageConditions === "Uncovered outdoor area" || storageConditions === "Covered outdoor area") &&
  (usageFrequency === "Rarely" || usageFrequency === "Monthly") &&
  (carMileage === "160000+" || carMileage === "80001-160000" || carMileage === "30001-80000") &&
  (serviceDate === "Over 2 years ago" || serviceDate === "Less than 6 months ago" || serviceDate === "1-2 years ago" || serviceDate === "6 months to 1 year ago") &&
  (primaryUse === "Daily transportation" || primaryUse === "Recreational/Weekend drives");

  var preservationService =
  (carYear === "Year2" || carYear === "Year3" || carYear === "Year4") &&
  (storageConditions === "Uncovered outdoor area" || storageConditions === "Covered outdoor area" || storageConditions === "Garage" || storageConditions === "Indoor Car Storage Facility") &&
  (usageFrequency === "Rarely" || usageFrequency === "Monthly") &&
  (carMileage === "160000+" || carMileage === "80001-160000" || carMileage === "0-30000") &&
  (serviceDate === "Over 2 years ago" || serviceDate === "1-2 years ago" || serviceDate === "6 months to 1 year ago") &&
  (primaryUse === "Car shows/Exhibitions" || primaryUse === "Collectible/Not in use" || primaryUse === "Recreational/Weekend drives");

  var performanceEnhancementService =
  (carYear === "Year1" || carYear === "Year2" || carYear === "Year3") &&
  (storageConditions === "Uncovered outdoor area" || storageConditions === "Covered outdoor area" || storageConditions === "Garage" || storageConditions === "Indoor Car Storage Facility") &&
  (usageFrequency === "Daily" || usageFrequency === "Weekly" || usageFrequency === "Monthly") &&
  (carMileage === "30001-80000" || carMileage === "0-30000") &&
  (serviceDate === "Over 2 years ago" || serviceDate === "Less than 6 months ago" || serviceDate === "1-2 years ago" || serviceDate === "6 months to 1 year ago") &&
  (primaryUse === "Car shows/Exhibitions" || primaryUse === "Daily transportation" || primaryUse === "Recreational/Weekend drives");

  var routineMaintenanceService =
  !restorationService && !preservationService && !performanceEnhancementService;

      console.log("test after---" + carYear, carMileage, usageFrequency, serviceDate, storageConditions, primaryUse);
      console.log("test after===" + routineMaintenanceService, restorationService, preservationService, performanceEnhancementService);
  
  // Display the appropriate services based on conditions
  document.getElementById("routineMaintenanceService").style.display = routineMaintenanceService ? "block" : "none";
  document.getElementById("restorationService").style.display = restorationService ? "block" : "none";
  document.getElementById("preservationService").style.display = preservationService ? "block" : "none";
  document.getElementById("performanceEnhancementService").style.display = performanceEnhancementService ? "block" : "none";
}

function showDescription(descriptionId, bookingFormId) {
var descriptions = document.getElementsByClassName('description');
var bookingForms = document.getElementsByClassName('booking-form');

// Hide all booking forms and toggle only the selected description
for (var i = 0; i < descriptions.length; i++) {
  if (descriptions[i].id !== descriptionId) {
      descriptions[i].style.display = 'none';
  }
  bookingForms[i].style.display = 'none';
}

// Toggle the selected description
var selectedDescription = document.getElementById(descriptionId);
if (selectedDescription.style.display === 'block') {
  selectedDescription.style.display = 'none';
} else {
  selectedDescription.style.display = 'block';
}
}

      function showBookingForm(formId) {
          event.stopPropagation();
// Hide all descriptions and booking forms
var bookingForms = document.getElementsByClassName('booking-form');
for (var i = 0; i < bookingForms.length; i++) {
  bookingForms[i].style.display = 'none';
}

// Show only the booking form related to the button clicked
document.getElementById(formId).style.display = 'block';

}
