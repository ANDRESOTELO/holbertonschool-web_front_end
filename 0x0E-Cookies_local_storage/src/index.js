function setCookies() {
	let firstnameCookie = document.getElementById('firstname').value;
	let emailCookie = document.getElementById('email').value;

	document.cookie = `firstname=${firstnameCookie}; expires=Fri, 10 Jun 2022 12:00:00 UTC`;
	document.cookie = `email=${emailCookie}; expires=Fri, 10 Jun 2022 12:00:00 UTC`;
	showWelcomeMessageOrForm();
}

function showCookies() {
	let firstnameCookie = getCookie('firstname');
	let emailCookie = getCookie('email');
	const para = document.createElement('p');
	const node = document.createTextNode(`Email: ${emailCookie} - Firstname: ${firstnameCookie}`);
	para.appendChild(node);

	document.body.appendChild(para);
}

function getCookie(name) {
	let cname = name + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let cookieArray = decodedCookie.split(";")

	for(let i=0; i<cookieArray.length; i++) {
		let cookie = cookieArray[i];
		while (cookie.charAt(0) == ' ') {
			cookie = cookie.substring(1);
		}
		if (cookie.indexOf(cname) == 0) {
			return cookie.substring(cname.length, cookie.length);
		}
	}
	return ""
}


function showForm() {
	document.getElementById('login').style.display = 'block';
}


function hideForm() {
	document.getElementById('login').style.display = 'none';
}


function deleteCookiesAndShowForm() {
	document.cookie = "firstname=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
	document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
	showForm();
}


function showWelcomeMessageOrForm() {
	const firstnameCookie = getCookie('firstname');
	const emailCookie = getCookie('email');

	if(firstnameCookie != "" && emailCookie != "") {
		hideForm();
		let title = document.createElement('h1');
		title.setAttribute('id', 'title')
		let titleText = document.createTextNode(`Welcome: ${firstnameCookie}`);
		title.appendChild(titleText);
		document.body.appendChild(title);

		let logout = document.createElement('a');
		let logoutText = document.createTextNode('(logout)');
		logout.appendChild(logoutText);
		logout.setAttribute('id', 'logout_button');
		title.appendChild(logout);
		document.getElementById('logout_button').style.fontStyle = 'italic';
		document.getElementById('logout_button').style.marginLeft = '10px';
		document.getElementById('logout_button').style.textDecoration = 'none';
		document.getElementById('logout_button').style.color = 'black';
		document.getElementById('logout_button').style.cursor = 'pointer';
		document.getElementById('logout_button').onclick = function() {
			deleteCookiesAndShowForm();
			location.reload(true)
		}
	} else {
		showForm();
	}
}
