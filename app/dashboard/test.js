const data = [
  {"date": "2023-05", "emission": {'transport':20,'housing':50,'food':60} },
  {"date": "2023-03", "emission": {'transport':80,'travel':20} },
  {"date": "2023-01", "emission": {'transport':90,'travel':10,'others':10, housing:20} }
];

const EMISSION_TYPES = ['transport','housing','food','travel','others'];

function getEmissionByMonth(data) {
  // Sort the data by date
  data.sort((a, b) => new Date(a['date']) - new Date(b['date']));

  // Create label for each individual month
  const labels = data.map((item) => item['date']);

  // Extract data for each category for each individual month
  const emissions_data = EMISSION_TYPES.map(emission_type => {
    return {
      data: data.map(item => item['emission'][emission_type] || 0),
      label: emission_type,
      stack: 'A'
    };
  });

  // Convert to the desired format
  return {
    labels: labels,
    series: emissions_data
  };
}

function getCumulativeEmissionData(data) {
  const labels = EMISSION_TYPES;

  const cumulative_emissions = EMISSION_TYPES.map(emission_type => {
    let sum = 0
    data.forEach(item =>  sum += item['emission'][emission_type] || 0 )
    return sum;
  });

  return {
    labels: labels,
    series: [{data: cumulative_emissions}]
  };
}

function getTotalEmissions(data) {
  let total = 0;

  data.forEach(entry => {
      for (let value of Object.values(entry.emission)) {
          total += value;
      }
  });

  return total;
}

test = getCumulativeEmissionData(data)
test1 = getEmissionByMonth(data)
test2 = getTotalEmissions(data)
console.log(test);
console.log(test1);
console.log(test2);
