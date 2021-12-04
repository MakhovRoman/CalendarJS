const table = document.createElement('table');
document.body.append(table);
table.style.borderCollapse = 'collapse';
table.style.margin = `${50}px auto`;

const cellBorderStyle = '1px solid black';
const cellWidth = `${50}px`;
const cellHeight = cellWidth;



function createCalendar (elem, year = Number(prompt("Enter the year: ", 0)), month = Number(prompt("Enter the month: ", 0))) {
	

	let thead = document.createElement('thead');
	let tr = document.createElement('tr');
	elem.append(thead);
	thead.append(tr);
	thead.style.backgroundColor = 'rgb(230, 230, 230)';

	let days = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

	for (let i = 0; i < 7; i++) {
		tr.insertAdjacentHTML('beforeend', `<th>${days[i]}</th>`);
	}

	const thList = table.querySelectorAll('th');
		for (let th of thList) {
			th.style.border = cellBorderStyle;
			th.style.width = cellWidth;
			th.style.height = cellHeight;
	}

	let date = new Date(year, month - 1, 1, 0);
	console.log(date);

	let day = date.getDate();
	let weekDay = date.getDay();
	console.log(weekDay);
	let lastDay = new Date(year, month, 0, 0);
	console.log(lastDay.getDate())
	

	let numberOfWeek;

	if (month == 2 && day == weekDay && lastDay.getDate() == 28) {
		numberOfWeek = 4;
	} else {
		numberOfWeek = 5;
	}

	for (let i = 0; i < numberOfWeek; i++) {
		let tr = document.createElement('tr');
		let td = document.createElement('td');

		tr.insertAdjacentHTML('beforeend', '<td></td><td></td><td></td><td></td><td></td><td></td><td></td>');
		elem.append(tr);
		
		for (let item of tr.querySelectorAll('td')) {
			item.style.border = cellBorderStyle;
			item.style.width = cellWidth;
			item.style.height = cellHeight;
			item.style.textAlign = 'center';
		}
	}


	let cellValue = 1;
	let coordinates = [];

	for (let i = 1; i < elem.rows.length; i++) {
		for (let j = 0; j < elem.rows[i].cells.length; j++) {
			coordinates.push([i, j]);
		}
	}

	console.log(coordinates);
	if (weekDay == 0) weekDay = 7;
	for (let i = 0; i < coordinates.length; i ++) {

		if (i < weekDay-1) continue;
		console.log(`row: ${coordinates[i][0]}, cell: ${coordinates[i][1]}`);
		elem.rows[coordinates[i][0]].cells[coordinates[i][1]].innerHTML = cellValue;
		if (cellValue == lastDay.getDate()) break;
		cellValue++;
	}
	
}
createCalendar(table);
