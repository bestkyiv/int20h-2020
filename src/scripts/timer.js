function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {

  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);

  var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  var d = [
    "M", start.x, start.y,
    "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
  ].join(" ");

  return d;
}

function getTimeRemaining(endtime) {
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor((t / 1000) % 60);
	var minutes = Math.floor((t / 1000 / 60) % 60);
	var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	var days = Math.floor(t / (1000 * 60 * 60 * 24));
	return {
		'total': t,
		'days': days,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
}

function drawTimerCircle(attributeId, x, y, timePercentage) {
  document.getElementById(attributeId).setAttribute("d", describeArc(x, y, 50, 0, (timePercentage * 3.6)));
  document.getElementById(`${attributeId}__back`).setAttribute("d", describeArc(x, y, 60, 0, 359));
}

function initializeClock(deadline) {
  function updateClock() {
    var t = getTimeRemaining(deadline);
        document.getElementById(`timer__days__number`).innerHTML = t.days;
        document.getElementById(`timer__hours__number`).innerHTML = t.hours;
        document.getElementById(`timer__minutes__number`).innerHTML = t.minutes;
        document.getElementById(`timer__seconds__number`).innerHTML = t.seconds;
    
        drawTimerCircle("timer__days", 85, 100, t.days / 365 * 100);
        drawTimerCircle("timer__hours", 255, 100, t.hours / 24 * 100);
        drawTimerCircle("timer__minutes", 425, 100, t.minutes / 60 * 100);
        drawTimerCircle("timer__seconds", 595, 100, t.seconds / 60 * 100);
      }

  var timeinterval = setInterval(updateClock, 1000);
}


document.addEventListener('DOMContentLoaded', function () {
  var startDate = new Date(2020, 1, 22, 11);
  var offset = startDate.getTime() - new Date().getTime();
  var deadline = new Date(Date.parse(new Date()) + offset);

  initializeClock(deadline);
  
  
});
