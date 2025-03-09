document.getElementById("calculate_BMR_button").addEventListener("click", function()
{
    // get inputs
    var weight = parseInt(document.getElementById("weight").value, 10);
    var feet = parseInt(document.getElementById("height_feet").value, 10);
    var inches = parseInt(document.getElementById("height_inches").value, 10);
    var age = parseInt(document.getElementById("age").value, 10);
    var sex = document.getElementById("sex").value;
    console.log(typeof(weight));
    console.log(typeof(feet));
    console.log(typeof(inches));
    if (sex == "female")
    {
      BMR = Math.round(655 + (4.35*weight) + (4.7*(12*feet + inches)) - (4.7*age));
    }
    else
    {
      BMR = Math.round(66 + (6.23*weight) + (12.7*(12*feet + inches)) - (6.8*age));
    }
    if (isNaN(BMR))
      {
        document.getElementById("result").innerHTML = "Sorry, I didn't get that. Are you sure you have filled in all fields?";
      }
    else
    {
    document.getElementById("result").innerHTML = "Without exercising, your body burns approximately " + BMR + " calories a day, on average.";
  }
});