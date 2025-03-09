document.getElementById("calculate_BMR_button").addEventListener("click", function()
{
    // get inputs
    var weight = parseInt(document.getElementById("weight").value, 10);
    var feet = parseInt(document.getElementById("height_feet").value, 10);
    var inches = parseInt(document.getElementById("height_inches").value, 10);
    var age = parseInt(document.getElementById("age").value, 10);
    var sex = document.getElementById("sex").value;
    var BMR = "error";
    if (sex = "female")
    {
      BMR = 655 + (4.35*weight) + (4.7*(12*feet + inches)) - (4.7*age);
    }
    else
    {
      BMR = 66 + (6.23*weight) + (12.7*(12*feet + inches)) - (6.8*age);
    }
    document.getElementById("result").innerHTML = BMR;
});