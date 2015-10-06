$(document).ready(function() {
	window.setTime();
	window.setInterval(function() {
		setTime()
	}, 2000);
})

function setTime() {
	var date = new Date(),
		s = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();
		color = "#" + '08' + '45' + s;
		$('.clock').text(color);
		$('body').css('background-color', color);
}