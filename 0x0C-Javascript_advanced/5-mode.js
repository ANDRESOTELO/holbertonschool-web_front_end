function changeMode(size, weight, transform, background, color) {
	return () => {
		const body = document.querySelector('body');
		body.style.fontSize = size;
		body.style.fontWeight = weight;
		body.style.textTransform = transform;
		body.style.backgroundColor = background;
		body.style.color = color;
	};
}

function main() {
	const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
	const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
	const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

	const body = document.querySelector('body');

	// Create elements to displaying
	const paragraph = document.createElement('P');
	paragraph.innerText = 'Welcome Holberton!';
	body.appendChild(paragraph);

	const buttonSpooky = document.createElement('BUTTON');
	buttonSpooky.innerText = 'Spooky';
	const buttonDark = document.createElement('BUTTON');
	buttonDark.innerText = 'Dark mode';
	const buttonScream = document.createElement('BUTTON');
	buttonScream.innerText = 'Scream mode';

	body.appendChild(buttonSpooky);
	body.appendChild(buttonDark);
	body.appendChild(buttonScream);

	buttonSpooky.onclick = spooky;
	buttonDark.onclick = darkMode;
	buttonScream.onclick = screamMode;
}

main();