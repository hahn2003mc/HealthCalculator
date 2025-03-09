function CalculateBMR()
{

}

document.getElementById("calculate_BMR_button").addEventListener("click", function()
{
    // get inputs
    var weight = document.getElementById("weight").value;
    var feet = document.getElementById("height_feet").value;
    var inches = document.getElementById("height_inches").value;
    var age = document.getElementById("age").value;
    var sex = document.getElementById("sex").value;

    if (typeof(weight) == typeof(feet) == typeof(inches) == number)
    {
        if (sex = "female")
        {
            var BMR = 655 + (4.35*weight) + (4.7*(12*feet + inches)) - (4.7*age);
        }
        else
        {
            var BMR = 66 + (6.23*weight) + (12.7*(12*feet + inches)) - (6.8*age);
        }
        var resultText = 55; // placeholder value
        document.getElementById("result").innerHTML = resultText;
    }
});