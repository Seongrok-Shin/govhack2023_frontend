'use client';
import styles from '../page.module.css';
import Nav from '../Nav';
import Footer from '../_components/footer';
import { BarChart } from '@mui/x-charts/BarChart';

import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <h1> Freebie page</h1>
      <Nav />
    </div>
  );
};

export default Dashboard;

// const data = [
//   {"date": "2023-05", "emission": {'transport':20,'housing':50,'food':60} },
//   {"date": "2023-03", "emission": {'transport':80,'food':20} },
//   {"date": "2023-01", "emission": {'transport':90,'housing':10,'food':10} }
// ];

// const EMISSION_TYPES = ['transport','housing','food','travel','others'];

// function getTotalEmissions(data) {
//   let total = 0;

//   data.forEach(entry => {
//       for (let value of Object.values(entry.emission)) {
//           total += value;
//       }
//   });

//   return total;
// }

// function getEmissionByMonth(data) {
//   // Sort the data by date
//   data.sort((a, b) => new Date(a['date']) - new Date(b['date']));

//   // Create label for each individual month
//   const labels = data.map((item) => item['date']);

//   // Extract data for each category for each individual month
//   const emissions_data = EMISSION_TYPES.map(emission_type => {
//     return {
//       data: data.map(item => item['emission'][emission_type] || 0),
//       label: emission_type,
//       stack: 'A'
//     };
//   });

//   // Convert to the desired format
//   return {
//     labels: labels,
//     series: emissions_data
//   };
// }

// function getCumulativeEmissionData(data) {
//   const labels = EMISSION_TYPES;

//   const cumulative_emissions = EMISSION_TYPES.map(emission_type => {
//     let sum = 0
//     data.forEach(item =>  sum += item['emission'][emission_type] || 0 )
//     return sum;
//   });

//   return {
//     labels: labels,
//     series: [{data: cumulative_emissions}]
//   };
// }

// const Dashboard = () => {
//   const [chartSize, setChartSize] = useState(600);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 768) {
//         setChartSize(400); // Mobile size
//       } else {
//         setChartSize(600); // Desktop size
//       }
//     };

//     window.addEventListener('resize', handleResize);

//     // Cleanup
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   // ... your data and other logic ...
//   let monthlyData = getEmissionByMonth(data);
//   let aggregatedData = getCumulativeEmissionData(data);

//   let totalEmissions = getTotalEmissions(data)

//   return (
//     <div className={styles.container}>
//       <h1> Dashboard page</h1>
//       <div>
//       <h3 style={{textAlign:'center'}}>{totalEmissions}</h3>
//       <h3 style={{textAlign:'left'}}>Your Footprint</h3>
//       <BarChart
//         xAxis={[{ scaleType: 'band',
//                   data: aggregatedData.labels,
//                   categoryGapRatio: 0.8 }]}
//         series={aggregatedData.series}
//         width={chartSize}
//         height={chartSize*0.6}
//       />
//       </div>
//       <div>
//       <h3 style={{textAlign:'left'}}>Monthly Emission</h3>
//       <BarChart
//         xAxis={[{ scaleType: 'band',
//                   data: monthlyData.labels,
//                   categoryGapRatio: 0.8 }]}
//         series={monthlyData.series}
//         width={chartSize}
//         height={chartSize*0.6}
//       />
//       </div>
//       <nav className={styles.navigation}>
//         <Footer></Footer>
//       </nav>
//     </div>
//   )
// }

// export default Dashboard;
