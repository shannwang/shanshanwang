function createBarChart(data, labels) {
  var chartContainer = document.getElementById('bar-chart-container');
  
  // Clear any existing content
  chartContainer.innerHTML = '';
  

  // Create bars based on data
  for (var i = 0; i < data.length; i++) {
    // Create a container for each bar and label
    var barContainer = document.createElement('div');
    barContainer.className = 'bar-container';

    var bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.width = data[i]-20 + '%';


    // Create the label
    var label = document.createElement('div');
    label.className = 'label';
    label.textContent = labels[i];

    // Create the label
    var datalabel = document.createElement('div');
    datalabel.className = 'datalabel';
    datalabel.textContent = ' '+data[i]+'%';

    // Append the bar and label to the container
    barContainer.appendChild(label);
    barContainer.appendChild(bar);
    barContainer.appendChild(datalabel);

    // Append the container to the chart
    chartContainer.appendChild(barContainer);
  }
}

 // Wait for the DOM to fully load before executing the script
window.onload = function() {
// Sample data and labels
var data = [90, 80, 80, 80, 60, 60, 50, 50];
var labels = ['Matlab', 'Python', 'Mathematica','QGIS', 'C++', 'Shell script', 'HTML,css','JavaScript'];

// Call the function to create the bar chart
createBarChart(data, labels);
};
  
