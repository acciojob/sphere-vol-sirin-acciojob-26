function volume_sphere() {
    //Write your code here
  function volume_sphere() {
    // Retrieve the radius value from the input field
    let radius = document.getElementById('radius').value;

    // Validate the input to ensure it's a non-negative number
    radius = parseFloat(radius);
    if (isNaN(radius) || radius < 0) {
        document.getElementById('volume').textContent = 'NaN';
        return;
    }

    // Calculate the volume of the sphere using the formula V = (4/3) * π * r^3
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Round the calculated volume to four decimal places
    volume = volume.toFixed(4);

    // Display the calculated volume in the designated output field
    document.getElementById('volume').textContent = volume;
}

} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
