// import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const DAY_MILLISECONDS = 86400000;
const clockContainer = document.getElementById('jsClock-container');
const clock = document.getElementById('jsClock');

const timeFormat = (time) => {
  return Math.floor(time);
};

function getTime() {
  // Don't delete this.
  const xmasDay = new Date('2020-12-24:00:00:00+0900');
  const time = new Date();
  const diffTime = xmasDay - time;
  const Days = diffTime / DAY_MILLISECONDS;
  const Hours = (Days - timeFormat(Days)) * 24;
  const Minutes = (Hours - timeFormat(Hours)) * 60;
  const Seconds = (Minutes - timeFormat(Minutes)) * 60;

  const getDays = timeFormat(Days);
  const getHours = timeFormat(Hours);
  const getMinutes = timeFormat(Minutes);
  const getSeconds = timeFormat(Seconds);

  clock.innerText = `${getDays < 10 ? `0${getDays}` : getDays}d ${
    getHours < 10 ? `0${getHours}` : getHours
  }h ${getMinutes < 10 ? `0${getMinutes}` : getMinutes}m ${
    getSeconds < 10 ? `0${getSeconds}` : getSeconds
  }s`;
}

function init() {
  setInterval(getTime, 1000);
}
init();
