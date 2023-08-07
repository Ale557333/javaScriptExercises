const clockContainer = document.querySelector('.clock-container')

const getClockHTML = (hours, minutes, seconds) => `
<span>${formatTimeUnit(hours)}</span> :
<span>${formatTimeUnit(minutes)}</span> :
<span>${formatTimeUnit(seconds)}</span>
`

const formatTimeUnit = unit => String(unit).length === 1 ? `0${unit}` : unit

const updateClock = () => {
  const present = new Date()
  const hours = present.getHours()
  const minutes = present.getMinutes()
  const seconds = present.getSeconds()
  
  clockContainer.innerHTML = getClockHTML(hours, minutes, seconds)
  
  
}

setInterval(updateClock, 1000)