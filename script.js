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



// Future Weight Loss Calculation
document.getElementById("calculate_future_button").addEventListener("click", function()
{
  // get inputs
  var current_weight = parseInt(document.getElementById("weight_current").value);
  var target_weight = parseInt(document.getElementById("target_weight").value);
  var target_time = parseInt(document.getElementById("target_time").value);

  var result3 = Math.round(10*(current_weight-target_weight)/target_time)/10;
  console.log(result3);

  
  if (isNaN(result3))
      {
        document.getElementById("result_future").innerHTML = "Sorry, I didn't get that. Are you sure you have filled in all fields?";
      }
  else
      {
        
        if (result3 < 0.5)
        {
        document.getElementById("result_future").innerHTML = "To lose " + (current_weight-target_weight)+ " pounds in " + target_time + " weeks, you need to lose approximately " + result3 + " pounds per week. This is very feasible, and you should be aiming to have around a 250 calorie deficit every day to achieve this.";
        }
        else if (result3 < 1)
        {
        document.getElementById("result_future").innerHTML = "To lose " + (current_weight-target_weight)+ " pounds in " + target_time + " weeks, you need to lose approximately " + result3 + " pounds per week. This is somewhat feasible, and you should be aiming to have around a 500 calorie deficit every day to achieve this.";
        }
        else if (result3 == 1)
        {
        document.getElementById("result_future").innerHTML = "To lose " + (current_weight-target_weight)+ " pounds in " + target_time + " weeks, you need to lose approximately " + result3 + " pound per week. This is somewhat feasible, and you should be aiming to have around a 500 calorie deficit every day to achieve this.";
        }
        else
        {
        document.getElementById("result_future").innerHTML = "To lose " + (current_weight-target_weight)+ " pounds in " + target_time + " weeks, you need to lose approximately " + result3 + " pounds per week. This is not very feasible, since you should be aiming to have more than a 500 calorie deficit every day to achieve this.";
        }
      
      }
});



// Random quote generator
// defining the list of quotes
const quotelist = ["It does not matter how slowly you go as long as you do not stop. -Confucius", "It always seems impossible until it's done. -Nelson Mandela", "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. -Thomas A. Edison", "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy. -Norman Vincent Peale", "Start where you are. Use what you have. Do what you can. -Arthur Ashe"];

// randomly choose a quote and put it in the quote container in the DOM as a <p> element
function generate_quote()
{
  document.getElementById("quote_container").innerHTML = ("<p>" + quotelist[Math.floor(Math.random()*quotelist.length)] + "</p>");
}

// randomly pick a motivational quote on page load
window.onload = function()
{
  generate_quote();
}

document.getElementById("calculate_weekly_totals_button").addEventListener("click", function()
{
  // get the values for the food types
  var protein1 = (document.getElementById("protein1").value);
  if (protein1 == "Chicken")
    { // proportion of chicken (per gram) that is protein
      protein1 = 44/200;
    }
  var protein2 = (document.getElementById("protein2").value);
  var protein3 = (document.getElementById("protein3").value);
  var protein4 = (document.getElementById("protein4").value);
  var protein5 = (document.getElementById("protein5").value);
  var protein6 = (document.getElementById("protein6").value);
  var protein7 = (document.getElementById("protein7").value);
  
  var carb1 = (document.getElementById("carb1").value);
  if (carb1 == "Rice")
    {
      carb1 == 45/200;
    }
  var carb2 = (document.getElementById("carb2").value);
  var carb3 = (document.getElementById("carb3").value);
  var carb4 = (document.getElementById("carb4").value);
  var carb5 = (document.getElementById("carb5").value);
  var carb6 = (document.getElementById("carb6").value);
  var carb7 = (document.getElementById("carb7").value);
  
  var vegetable1 = (document.getElementById("vegetable1").value);
  if (vegetable1 == "Broccoli")
    {
      vegetable1 = 2.4/120;
    }
  var vegetable2 = (document.getElementById("vegetable2").value);
  var vegetable3 = (document.getElementById("vegetable3").value);
  var vegetable4 = (document.getElementById("vegetable4").value);
  var vegetable5 = (document.getElementById("vegetable5").value);
  var vegetable6 = (document.getElementById("vegetable6").value);
  var vegetable7 = (document.getElementById("vegetable7").value);
  
  var fat1 = (document.getElementById("fat1").value);
  if (fat1 == "Butter")
    {
      fat1 = 92/113;
    }
  var fat2 = (document.getElementById("fat2").value);
  var fat3 = (document.getElementById("fat3").value);
  var fat4 = (document.getElementById("fat4").value);
  var fat5 = (document.getElementById("fat5").value);
  var fat6 = (document.getElementById("fat6").value);
  var fat7 = (document.getElementById("fat7").value);
  
  // get the values for the food amounts
  var protein_amount1 = (document.getElementById("protein_size_text1").value);
  var protein_amount2 = (document.getElementById("protein_size_text2").value);
  var protein_amount3 = (document.getElementById("protein_size_text3").value);
  var protein_amount4 = (document.getElementById("protein_size_text4").value);
  var protein_amount5 = (document.getElementById("protein_size_text5").value);
  var protein_amount6 = (document.getElementById("protein_size_text6").value);
  var protein_amount7 = (document.getElementById("protein_size_text7").value);

  var carb_amount_1 = (document.getElementById("carb_amount_1").value);
  var carb_amount_2 = (document.getElementById("carb_amount_2").value);
  var carb_amount_3 = (document.getElementById("carb_amount_3").value);
  var carb_amount_4 = (document.getElementById("carb_amount_4").value);
  var carb_amount_5 = (document.getElementById("carb_amount_5").value);
  var carb_amount_6 = (document.getElementById("carb_amount_6").value);
  var carb_amount_7 = (document.getElementById("carb_amount_7").value);
  
  var vegetable_amount_1 = (document.getElementById("vegetable_amount_1").value);
  var vegetable_amount_2 = (document.getElementById("vegetable_amount_2").value);
  var vegetable_amount_3 = (document.getElementById("vegetable_amount_3").value);
  var vegetable_amount_4 = (document.getElementById("vegetable_amount_4").value);
  var vegetable_amount_5 = (document.getElementById("vegetable_amount_5").value);
  var vegetable_amount_6 = (document.getElementById("vegetable_amount_6").value);
  var vegetable_amount_7 = (document.getElementById("vegetable_amount_7").value);
  
  var fat_amount_1 = (document.getElementById("fat_amount_1").value);
  var fat_amount_2 = (document.getElementById("fat_amount_2").value);
  var fat_amount_3 = (document.getElementById("fat_amount_3").value);
  var fat_amount_4 = (document.getElementById("fat_amount_4").value);
  var fat_amount_5 = (document.getElementById("fat_amount_5").value);
  var fat_amount_6 = (document.getElementById("fat_amount_6").value);
  var fat_amount_7 = (document.getElementById("fat_amount_7").value);
  
  // macro metrics
  // ??????????? also need calories ???????????????
  var day1_total = (protein1*protein_amount_1) + (carb1*carb_amount_1) + (vegetable1*vegetable_amount1) + (fat1*fat_amount1);
  // ????????????????????????
  
});