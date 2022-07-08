document.querySelector('#check').addEventListener('click', check)

const showResult = document.getElementById('placeToSee');
const daysOfTheWeek = ['monday', 'tuesday', 'wednesday', 'thursday','friday','saturday','sunday'];

function check() {

  const day = document.querySelector('#day').value.toLowerCase();
  console.log(daysOfTheWeek[5]);
  //Conditionals go here
  
  if (!daysOfTheWeek.includes(day)) {
    return showResult.innerText = 'Please enter a valid day of the week!'
  } else if (day == daysOfTheWeek[5]) {
    return showResult.innerText = 'It\'s a day off, no more tutoring!'
  } 
  return showResult.innerText = 'It\'s a tutoring day, good luck!'; 
}