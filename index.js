const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const startBtn = document.querySelector('[data-action="start"]');
  const stopBtn = document.querySelector('[data-action="stop"]');

  let timerId = null;
  
  startBtn.addEventListener('click', () => {
    timerId = setInterval(changeColor, 1000);
  });
  
  stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
    startBtn.removeAttribute("disabled");
  });

    function changeColor () {
    startBtn.setAttribute("disabled", true);
    const colorNumber = randomIntegerFromInterval(0,colors.length-1)
    document.body.setAttribute('style', `background-color: ${colors[colorNumber]}`)
  };
 



