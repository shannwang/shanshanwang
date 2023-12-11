const text = 'Transitions between quasi-stationary states in traffic systems: Cologne orbital motorways as an example'+
'Response functions as a new concept to study local dynamics in traffic networks'+
'Identifying subdominant collective effects in a large motorway network'+
'Spatial Correlation Analysis of Traffic Flow on Parallel Motorways in Germany'+
'Collective behavior in the North Rhine-Westphalia motorway network'+
'Quasi-stationary states in temporal correlations for traffic systems: Cologne orbital motorway as an example'+
'Grasping asymmetric information in price impacts'+
'Statistical properties of market collective responses'+
'Local fluctuations of the signed traded volumes and the dependencies of demands: a copula analysis'+
'Microscopic understanding of cross-responses between stocks: a two-component price impact model'+
'Trading strategies for stock pairs regarding to the cross-impact cost'+
'Average cross-responses in correlated financial markets'+
'Cross-response in correlated financial markets: individual stocks'+
'Price response in correlated financial markets: empirical results'+
'Geometric effect on the vortex configuration and motion in mesoscopic superconducting cylinders'+
'Geometric effect on the phase transition in mesoscopic loops threaded by an Aharonov-Bohm flux';

const stopwords = ['on', 'in', 'for', 'to', 'of', 'the', 'a', 'an', 'and', 'as', 'by'];

let lines = text.replace(/[():'?0-9]+/g, '').split(/[,\. ]+/g);
let data = lines.reduce((arr, word) => {
  if (stopwords.includes(word.toLowerCase())) {
    return arr;
  }
  
  let obj = arr.find(obj => obj.name === word);
  if (obj) {
    obj.weight += 1;
  } else {
    obj = {
      name: word,
      weight: 1
    };
    arr.push(obj);
  }
  return arr;
}, []);

Highcharts.chart('wdcontainer', {
  accessibility: {
    screenReaderSection: {
      beforeChartFormat: '<h5>{chartTitle}</h5>' +
        '<div>{chartSubtitle}</div>' +
        '<div>{chartLongdesc}</div>' +
        '<div>{viewTableButton}</div>'
    }
  },
  series: [{
    type: 'wordcloud',
    data,
    name: 'Occurrences in titles'
  }],
  title: {
    text: '',
    align: 'center'
  },
  subtitle: {
    text: '',
    align: 'center'
  },
  tooltip: {
    headerFormat: '<span style="font-size: 16px"><b>{point.key}</b></span><br>'
  }
});
