// BMR/Passive Calories burned calculation
document.getElementById("calculate_BMR_button").addEventListener("click", function()
{
    // get inputs
    var weight = parseInt(document.getElementById("weight").value, 10);
    var feet = parseInt(document.getElementById("height_feet").value, 10);
    var inches = parseInt(document.getElementById("height_inches").value, 10);
    var age = parseInt(document.getElementById("age").value, 10);
    var sex = document.getElementById("sex").value;

    // female
    if (sex == "female")
    {
      BMR = Math.round(655 + (4.35*weight) + (4.7*(12*feet + inches)) - (4.7*age));
    }

    // male
    else
    {
      BMR = Math.round(66 + (6.23*weight) + (12.7*(12*feet + inches)) - (6.8*age));
    }
    
    // mistyped inputs
    if (isNaN(BMR))
      {
        document.getElementById("result_BMR").innerHTML = "Sorry, I didn't get that. Are you sure you have filled in all fields?";
      }

    // output BMR
    else
    {
    document.getElementById("result_BMR").innerHTML = "Without exercising, your body burns approximately " + BMR + " calories a day, on average.";
    }
});



// Active Calories Burned Calculation
document.getElementById("calculate_active_cals_button").addEventListener("click", function()
{
  // get inputs and standardize values
  var weight = Math.round(parseInt(document.getElementById("weight_2").value, 10)/100);
  var intensity = document.getElementById("intensity").value;
  if (intensity == "Low")
    {
      intensity = 0.5;
    }
  else if (intensity == "Medium")
    {
      intensity = 1;
    }
  else
    {
      intensity = 2;
    }
  var duration = document.getElementById("duration").value;
  if (duration == "10-20")
    {
      duration = 15;
    }
  if (duration == "20-30")
    {
      duration = 25;
    }
  if (duration == "30-45")
    {
      duration = 37.5;
    }
  else
    {
      
    }
  var frequency = document.getElementById("frequency").value;
  if (frequency == "1-2")
    {
      frequency = 1.5;
    }
  else if (frequency == "3-4")
    {
      frequency = 3.5;
    }
  else
    {
      frequency = 6;
    }
  
  var result1 = Math.round(weight*intensity*duration*4.8);
  var result2 = Math.round(result1*frequency);
  
  if (isNaN(result2))
      {
        document.getElementById("result_active").innerHTML = "Sorry, I didn't get that. Are you sure you have filled in all fields?";
      }
  else
      {
        document.getElementById("result_active").innerHTML = "When you weight train, your body burns approximately " + result1 + " calories every lift, and about " + result2 + " calories every week.";
      }
});