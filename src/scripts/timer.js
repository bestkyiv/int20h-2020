function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;
  
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }
  
  function describeArc(x, y, radius, startAngle, endAngle){
  
      var start = polarToCartesian(x, y, radius, endAngle);
      var end = polarToCartesian(x, y, radius, startAngle);
  
      var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  
      var d = [
          "M", start.x, start.y, 
          "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
      ].join(" ");
  
      return d;       
  }
  
  window.onload = function() {
    document.getElementById("timer__days").setAttribute("d",describeArc(100, 100, 50, 0, (59/60*360)));
    document.getElementById("timer__days__back").setAttribute("d",describeArc(100, 100, 60, 0, 359));
    
    document.getElementById("timer__hours").setAttribute("d",describeArc(270, 100, 50, 0, (6/24*360)));
    document.getElementById("timer__hours__back").setAttribute("d",describeArc(270, 100, 60, 0, 359));

    document.getElementById("timer__minutes").setAttribute("d",describeArc(440, 100, 50, 0, (30/60*360)));
    document.getElementById("timer__minutes__back").setAttribute("d",describeArc(440, 100, 60, 0, 359));

    document.getElementById("timer__seconds").setAttribute("d",describeArc(610, 100, 50, 0, (30/60*360)));
    document.getElementById("timer__seconds__back").setAttribute("d",describeArc(610, 100, 60, 0, 359));

    // document.getElementById("arc1").setAttribute("d", describeArc(150, 150, 100, 0, 180));
    // document.getElementById("arc2").setAttribute("d", describeArc(150, 150, 100, 0, 180));
    // document.getElementById("arc3").setAttribute("d", describeArc(150, 150, 100, 0, 180));
    // document.getElementById("arc4").setAttribute("d", describeArc(150, 150, 100, 0, 180));
  };

 // https://tecadmin.net/get-current-date-time-javascript/
  