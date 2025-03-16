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
  var protein = (document.getElementById("protein").value);
  // daily portion size, protein, carbs, fat, fiber, sodium(mg), calories(kcal)
  let item_1_list = [];
  if (protein == "Chicken") {item_1_list = [100, 31, 0, 3.6, 0, 44, 165];}
  if (protein == "Steak") {item_1_list = [85, 26, 0, 7.6, 0, 55, 179];}
  if (protein == "Pork") {item_1_list = [99, 29, 0, 15, 0, 59, 220];}
  
  var carb = (document.getElementById("carb").value);
  let item_2_list = [];
  if (carb == "Rice") {item_2_list = [158, 4.3, 45, 0.4, 0.6, 1.6, 205];}
  if (carb == "Bread") {item_2_list = [80, 5.5, 31, 2.1, 1.7, 300, 165];}
  if (carb == "Bagel") {item_2_list = [100, 12, 57.5, 1.5, 2.5, 480, 285];}
  
  var vegetable = (document.getElementById("vegetable").value);
  let item_3_list = [];
  if (vegetable == "Broccoli") {item_3_list = [240, 2.6, 6, 0.3, 2.4, 30, 35];}
  if (vegetable == "Lettuce") {item_3_list = [240, 0.5, 1.5, 0.1, 1, 12, 7.5];}
  if (vegetable == "Carrot") {item_3_list = [128, 1.2, 12, 0.3, 3.6, 50, 52];}
  
  var fat = (document.getElementById("fat").value);
  let item_4_list = [];
  if (fat == "Butter") {item_4_list = [14.2, 0.1, 0, 12, 0, 91, 102];}
  if (fat == "Olive oil") {item_4_list = [21, 0, 0, 14, 0, 0, 120];}
  
  // key:
  /*
  list[0]: amount in daily serving(g)
  list[1]: protein (g)
  list[2]: carbs (g)
  list[3]: fat(g)
  list[4]: fiber (g)
  list[5]: sodium (mg)
  list[6]: calories (kcal)
  */
  var protein_sum = 0;
  var carb_sum = 0;
  var fat_sum = 0;
  var fiber_sum = 0;
  var sodium_sum = 0;
  var calorie_sum = 0;
  
  protein_sum = item_1_list[1] + item_2_list[1] + item_3_list[1] + item_4_list[1];
  carb_sum = item_1_list[2] + item_2_list[2] + item_3_list[2] + item_4_list[2];
  fat_sum = item_1_list[3] + item_2_list[3] + item_3_list[3] + item_4_list[3];
  fiber_sum = item_1_list[4] + item_2_list[4] + item_3_list[4] + item_4_list[4];
  sodium_sum = item_1_list[5] + item_2_list[5] + item_3_list[5] + item_4_list[5];
  calorie_sum = item_1_list[6] + item_2_list[6] + item_3_list[6] + item_4_list[6];
  
  console.log(item_1_list, item_2_list, item_3_list, item_4_list);
  console.log(protein, carb, vegetable, fat);
  if (item_1_list.length == 0 || item_2_list.length == 0 || item_3_list.length == 0 || item_4_list.length == 0)
      {
        document.getElementById("result_planner").innerHTML = "Sorry, I didn't get that. Are you sure you have filled in all fields?";
      }
  else
      {
        document.getElementById("result_planner").innerHTML = "A daily serving of " + protein + " is " + item_1_list[0] + " grams, a daily serving of " + carb + " is " + item_2_list[0] + " grams, a daily serving of " + protein + " is " + item_3_list[0] + " grams, and a daily serving of " + fat + " is " + item_4_list[0] + " grams.";
        document.getElementById("cell1").innerHTML = protein_sum;
        document.getElementById("cell2").innerHTML = carb_sum;
        document.getElementById("cell3").innerHTML = fat_sum;
        document.getElementById("cell4").innerHTML = fiber_sum;
        document.getElementById("cell5").innerHTML = sodium_sum;
        document.getElementById("cell6").innerHTML = calorie_sum;
      }
});