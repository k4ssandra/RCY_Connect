// Initialize charts when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Blood Donations Chart
    const bloodCtx = document.getElementById('bloodChart').getContext('2d');
    new Chart(bloodCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            datasets: [{
                label: 'Blood Units Donated',
                data: [85, 92, 78, 105, 120, 95, 110, 130, 145, 85],
                borderColor: '#C8102E',
                backgroundColor: 'rgba(200, 16, 46, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });

    // Environment Chart
    const envCtx = document.getElementById('environmentChart').getContext('2d');
    new Chart(envCtx, {
        type: 'doughnut',
        data: {
            labels: ['Trees Planted', 'Clean-up Drives', 'Recycling'],
            datasets: [{
                data: [2856, 45, 28],
                backgroundColor: [
                    '#4CAF50',
                    '#8BC34A',
                    '#CDDC39'
                ],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    // Training Chart
    const trainingCtx = document.getElementById('trainingChart').getContext('2d');
    new Chart(trainingCtx, {
        type: 'bar',
        data: {
            labels: ['First Aid', 'CPR', 'Disaster Prep', 'Leadership', 'Community'],
            datasets: [{
                label: 'Participants',
                data: [450, 320, 280, 190, 310],
                backgroundColor: '#C8102E',
                borderColor: '#A40F25',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });

    // Volunteer Growth Chart
    const volunteerCtx = document.getElementById('volunteerChart').getContext('2d');
    new Chart(volunteerCtx, {
        type: 'line',
        data: {
            labels: ['2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'Active Volunteers',
                data: [680, 750, 890, 1020, 1205],
                borderColor: '#C8102E',
                backgroundColor: 'rgba(200, 16, 46, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });

    // Campus Comparison Chart
    const campusCtx = document.getElementById('campusChart').getContext('2d');
    new Chart(campusCtx, {
        type: 'bar',
        data: {
            labels: ['Main Campus', 'Alijis', 'Talisay', 'Bacolod'],
            datasets: [
                {
                    label: 'Blood Donations',
                    data: [450, 320, 280, 197],
                    backgroundColor: '#C8102E'
                },
                {
                    label: 'Trees Planted',
                    data: [850, 620, 480, 906],
                    backgroundColor: '#4CAF50'
                },
                {
                    label: 'Trainings',
                    data: [65, 45, 32, 42],
                    backgroundColor: '#2196F3'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                }
            }
        }
    });

    // Time filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            // Here you would typically update the charts with filtered data
            // For now, we'll just log the filter change
            console.log('Filter changed to:', this.textContent);
        });
    });
});