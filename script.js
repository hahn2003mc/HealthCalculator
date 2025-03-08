function CalculateBMR()
{

}

document.getElementById('calculate_BMR_button').addEventListener('click', function()
{
    // get inputs
    var weight = document.getElementById('weight').value;
    var feet = document.getElementById('height_feet').value;
    var inches = document.getElementById('height_inches').value;

    var resultText = 55; // placeholder value
    document.getElementById('result').innerHTML = resultText;
});