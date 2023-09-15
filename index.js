const xArray = [30,55,58,63,65,75,78,82,88,91,95,103,110,118,121,124,126,130,134,140,147,158,163,170,175,188];
const yArray = [1,8,8,7,7,12,12,11,11,9,9,10,10,13,13,12,12,15,15,14,14,11,11,12,12,16];

// Define Data
const data = [{
  x: xArray,
  y: yArray,
  mode:"lines",

//   marker: {
//     color: ['orange'],
//     size: [10]
//   }
}];

// Define Layout
const layout = {
  xaxis: {range: [40, 200]},
  yaxis: {range: [5, 16]},
};

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);