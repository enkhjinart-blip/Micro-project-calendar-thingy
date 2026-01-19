window.addEventListener('DOMContentLoaded', () => {
  const minBtn = document.getElementById('min-btn');
  const closeBtn = document.getElementById('close-btn');

  minBtn.addEventListener('click', () => {
    window.api.windowControl('minimize');
  });

  closeBtn.addEventListener('click', () => {
    window.api.windowControl('close');
  });
});

function updateCalendar () {
  const now = new Date();
  const day = now.getDate();
  const monthNames = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December",];

    const month = monthNames [now.getMonth()];

  const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const weekday = weekdayNames [now.getDay()];

    document.getElementById("day").textContent = day;
    document.getElementById("month").textContent = month;
    document.getElementById("weekday").textContent = weekday;

}

updateCalendar();
setInterval(updateCalendar, 60_000);