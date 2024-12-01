import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Register necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const chartData = {
    labels: ['Prototyping', 'Usability Testing', 'Visual Design', 'User Research', 'Wireframing', 'Storyboarding'],
    datasets: [
      {
        label: 'Skills Overview',
        data: [95, 90, 95, 80, 93],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  const chartOptions = {
    plugins: {
      legend: {
        position: 'bottom', // Legends displayed at the bottom
        labels: {
          boxWidth: 20, // Width of the box next to each label
          padding: 15, // Space between the legend and the chart
        }
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw} %`;
          }
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        bottom: 50 // Space at the bottom of the chart to fit the legend
      }
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>As a UI/UX Designer, I focus on creating seamless, user-friendly interfaces and experiences.<br />My skills include:</p>
              <div style={{ height: '400px', width: '100%' }}> {/* Container with defined height */}
                <Doughnut data={chartData} options={chartOptions} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
