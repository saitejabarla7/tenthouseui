// // import React from 'react';
// // import styled from 'styled-components';
// // import { Line, Bar, Doughnut } from 'react-chartjs-2';
// // import {
// //   Chart as ChartJS,
// //   CategoryScale,
// //   LinearScale,
// //   PointElement,
// //   LineElement,
// //   BarElement,
// //   ArcElement,
// //   Title,
// //   Tooltip,
// //   Legend,
// // } from 'chart.js';

// // // Register ChartJS components
// // ChartJS.register(
// //   CategoryScale,
// //   LinearScale,
// //   PointElement,
// //   LineElement,
// //   BarElement,
// //   ArcElement,
// //   Title,
// //   Tooltip,
// //   Legend
// // );

// // const DashboardContainer = styled.div`
// //   padding: 2rem;
// //   background: #f8f9fa;
// //   min-height: 100vh;
// // `;

// // const Header = styled.div`
// //   margin-bottom: 2rem;
// // `;

// // const Title1 = styled.h1`
// //   color: #2c3e50;
// //   font-size: 2rem;
// //   margin-bottom: 1rem;
// // `;

// // // Remove the duplicate Title declaration that was commented out

// // const MetricsGrid = styled.div`
// //   display: grid;
// //   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
// //   gap: 1.5rem;
// //   margin-bottom: 2rem;
// // `;

// // const MetricCard = styled.div`
// //   background: white;
// //   padding: 1.5rem;
// //   border-radius: 10px;
// //   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// //   transition: transform 0.3s ease;

// //   &:hover {
// //     transform: translateY(-5px);
// //   }
// // `;

// // const ChartContainer = styled.div`
// //   background: white;
// //   padding: 1.5rem;
// //   border-radius: 10px;
// //   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// //   margin-bottom: 1.5rem;
// // `;

// // const GridLayout = styled.div`
// //   display: grid;
// //   grid-template-columns: 2fr 1fr;
// //   gap: 1.5rem;
// // `;

// // const Dashboard = () => {
// //   // Sample data for charts
// //   const lineChartData = {
// //     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
// //     datasets: [
// //       {
// //         label: 'Applications',
// //         data: [65, 59, 80, 81, 56, 55],
// //         borderColor: '#3498db',
// //         tension: 0.4,
// //       },
// //     ],
// //   };

// //   const professionData = {
// //     labels: ['Doctors', 'Lab Technicians', 'Nurses', 'Specialists'],
// //     datasets: [
// //       {
// //         data: [300, 150, 200, 100],
// //         backgroundColor: ['#3498db', '#2ecc71', '#e74c3c', '#f1c40f'],
// //       },
// //     ],
// //   };

// //   const locationData = {
// //     labels: ['North', 'South', 'East', 'West', 'Central'],
// //     datasets: [
// //       {
// //         label: 'Applications by Region',
// //         data: [120, 190, 150, 170, 160],
// //         backgroundColor: '#3498db',
// //       },
// //     ],
// //   };

// //   return (
// //     <DashboardContainer>
// //       <Header>
// //         <Title1>Credentials Dashboard</Title1>
// //       </Header>

// //       <MetricsGrid>
// //         <MetricCard>
// //           <h3>Total Applications</h3>
// //           <h2>1,234</h2>
// //         </MetricCard>
// //         <MetricCard>
// //           <h3>Pending Review</h3>
// //           <h2>45</h2>
// //         </MetricCard>
// //         <MetricCard>
// //           <h3>Approved</h3>
// //           <h2>890</h2>
// //         </MetricCard>
// //         <MetricCard>
// //           <h3>Rejected</h3>
// //           <h2>123</h2>
// //         </MetricCard>
// //       </MetricsGrid>

// //       <GridLayout>
// //         <ChartContainer>
// //           <h3>Application Trends</h3>
// //           <Line data={lineChartData} options={{ responsive: true }} />
// //         </ChartContainer>

// //         <ChartContainer>
// //           <h3>Profession Distribution</h3>
// //           <Doughnut data={professionData} options={{ responsive: true }} />
// //         </ChartContainer>
// //       </GridLayout>

// //       <ChartContainer>
// //         <h3>Applications by Location</h3>
// //         <Bar data={locationData} options={{ responsive: true }} />
// //       </ChartContainer>
// //     </DashboardContainer>
// //   );
// // };

// // export default Dashboard;

import React, { useState } from 'react';
import styled from 'styled-components';
import { Line, Bar, Doughnut, Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

const DashboardContainer = styled.div`
  padding: 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const Title1 = styled.h1`
  background: linear-gradient(120deg, #2c3e50, #3498db);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2.2rem;
  font-weight: 800;
`;

const FilterSection = styled.div`
  display: flex;
  gap: 1rem;
`;

const Select = styled.select`
  padding: 0.5rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  
  &:hover {
    border-color: #3498db;
  }
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const MetricCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom, #3498db, #2ecc71);
  }
`;

const MetricValue = styled.h2`
  font-size: 2.5rem;
  color: #2c3e50;
  margin: 1rem 0;
`;

const MetricLabel = styled.h3`
  color: #7f8c8d;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const MetricTrend = styled.span`
  color: ${props => props.trend > 0 ? '#2ecc71' : '#e74c3c'};
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const ChartContainer = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('month');
  const [region, setRegion] = useState('all');

  // Enhanced chart data and options...




  return (
    <DashboardContainer>
    
   
    </DashboardContainer>
  );
};

export default Dashboard;

