const COUNTRY_LS = 'currentCountry';
const jsSelect = document.getElementById('jsSelect');
// const options = document.querySelectorAll('option');

const saveValue = (currentValue) => {
  localStorage.setItem(COUNTRY_LS, currentValue);
};

const handleChange = () => {
  const currentValue = jsSelect.value;
  setOption(currentValue);
  saveValue(currentValue);
};

const askCountry = () => {
  jsSelect.addEventListener('change', handleChange);
};

const setOption = (currentCountry) => {
  const set = document.querySelector(`option[value=${currentCountry}`);
  // const setOptionValue = Array.from(options).find(
  //   (option) => option.value === currentCountry
  // );
  set.selected = true;
};

const loadCountry = () => {
  const currentCountry = localStorage.getItem(COUNTRY_LS);
  askCountry();
  setOption(currentCountry);
};

const init = () => {
  loadCountry();
};

init();
