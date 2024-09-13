// Set the target date
const targetDate = new Date('July 15, 2025 00:00:00').getTime();

// Array of romantic and positive quotes
const quotes = [
    "Every day with you is a new adventure. 🌹",
    "You are my sunshine, my only sunshine. ☀️",
    "Together is a wonderful place to be. 💖",
    "You are the reason I smile every day. 😊",
    "Love is not about how many days, but how much love we put into those days. 💕",
    "With you, every moment is a precious memory. 🌟",
    "You make my heart skip a beat. 💓",
    "You are my dream come true. 🌟",
    "In you, I've found my forever. 💞",
    "Every moment with you is a treasure. 🌷"
    
];

// Function to get a daily quote based on the date
function getDailyQuote() {
    const startDate = new Date('January 1, 2024').getTime(); // Adjust to your desired start date
    const daysElapsed = Math.floor((new Date().getTime() - startDate) / (1000 * 60 * 60 * 24));
    return quotes[daysElapsed % quotes.length];
}

// Update the countdown every second
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    // Calculate total time between now and target date
    const totalMonths = Math.floor((targetDate - new Date('January 1, 2025').getTime()) / (1000 * 60 * 60 * 24 * 30.44));
    const totalWeeks = Math.floor((targetDate - new Date('January 1, 2025').getTime()) / (1000 * 60 * 60 * 24 * 7));
    const totalDays = Math.floor((targetDate - new Date('January 1, 2025').getTime()) / (1000 * 60 * 60 * 24));
    const totalHours = totalDays * 24;
    const totalMinutes = totalHours * 60;
    const totalSeconds = totalMinutes * 60;

    // Calculate remaining time units
    const months = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 30.44));
    const weeks = Math.floor((timeRemaining % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24 * 7));
    const days = Math.floor((timeRemaining % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Calculate percentages
    const monthsPercent = (months / totalMonths) * 100;
    const weeksPercent = (weeks / totalWeeks) * 100;
    const daysPercent = (days / totalDays) * 100;
    const hoursPercent = (hours / totalHours) * 100;
    const minutesPercent = (minutes / totalMinutes) * 100;
    const secondsPercent = (seconds / totalSeconds) * 100;

    // Update countdown display
    document.getElementById('months').textContent = months;
    document.getElementById('weeks').textContent = weeks;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    // Update progress bars and percentages
    document.getElementById('months-bar').style.width = monthsPercent + '%';
    document.getElementById('weeks-bar').style.width = weeksPercent + '%';
    document.getElementById('days-bar').style.width = daysPercent + '%';
    document.getElementById('hours-bar').style.width = hoursPercent + '%';
    document.getElementById('minutes-bar').style.width = minutesPercent + '%';
    document.getElementById('seconds-bar').style.width = secondsPercent + '%';

    document.getElementById('months-percent').textContent = Math.floor(monthsPercent) + '%';
    document.getElementById('weeks-percent').textContent = Math.floor(weeksPercent) + '%';
    document.getElementById('days-percent').textContent = Math.floor(daysPercent) + '%';
    document.getElementById('hours-percent').textContent = Math.floor(hoursPercent) + '%';
    document.getElementById('minutes-percent').textContent = Math.floor(minutesPercent) + '%';
    document.getElementById('seconds-percent').textContent = Math.floor(secondsPercent) + '%';

    // Update the daily quote
    document.getElementById('daily-quote').textContent = getDailyQuote();

    // When the countdown is finished
    if (timeRemaining < 0) {
        clearInterval(countdown);
        document.querySelector('.timer').innerHTML = `
            <div class="message">You made it! 🌸 I'm so proud of you!</div>
        `;
    }
}, 1000);
