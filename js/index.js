var loop1 = new Audio('audio/loop1.mp3');
var loop2 = new Audio('audio/loop2.mp3');
var loop3 = new Audio('audio/loop3.mp3');
var loop4 = new Audio('audio/loop4.mp3');
var loop5 = new Audio('audio/loop5.mp3');
var loop6 = new Audio('audio/loop6.mp3');
var loop7 = new Audio('audio/loop7.mp3');
var loop8 = new Audio('audio/loop8.mp3');
var loop9 = new Audio('audio/loop9.mp3');
var loop10 = new Audio('audio/loop10.mp3');
loop1.loop = true;
loop2.loop = true;
loop3.loop = true;
loop4.loop = true;
loop5.loop = true;
loop6.loop = true;
loop7.loop = true;
loop8.loop = true;
loop9.loop = true;
loop10.loop = true;

var mixerwidth = 1440;
var currwidth = 1440;
var shouldPlay = false;

$(document).ready(function() {
	//check for mobile and tablet, serve splash page if present
	if (window.mobileAndTabletcheck) {
		document.getElementById('container').style.display = 'none';
		document.getElementById('splashpage').style.display = 'block';
	}

	var viewheight = window.innerHeight;
	$('#remixer').css('height', viewheight);
	mixerwidth = $('#remixer').width();
	currwidth = window.innerWidth;

	$('#remixer').click(function() {
		shouldPlay = !shouldPlay;
		playloops(mixerwidth, currwidth, shouldPlay);
	});

	$(window).resize(function() {
		currwidth = window.innerWidth;
		playloops(mixerwidth, currwidth, shouldPlay);
	});
});

function playloops(mixerwidth, currwidth) {
	var ratio = currwidth * 100 / mixerwidth;
	console.log('Screen is at ' + ratio + '% of mixer width.');

	if (ratio > 92.8) {
		if (shouldPlay) {
			loop10.play();
			loop9.pause();
			loop8.pause();
			loop7.pause();
			loop6.pause();
			loop5.pause();
			loop4.pause();
			loop3.pause();
			loop2.pause();
			loop1.pause();
			loop9.currentTime = 0;
			loop8.currentTime = 0;
			loop7.currentTime = 0;
			loop6.currentTime = 0;
			loop5.currentTime = 0;
			loop4.currentTime = 0;
			loop3.currentTime = 0;
			loop2.currentTime = 0;
			loop1.currentTime = 0;
		} else {
			loop10.pause();
		}
	}
	else if (ratio > 85.5) {
		if (shouldPlay) {
			loop9.play();
			loop10.pause();
			loop8.pause();
			loop7.pause();
			loop6.pause();
			loop5.pause();
			loop4.pause();
			loop3.pause();
			loop2.pause();
			loop1.pause();
			loop10.currentTime = 0;
			loop8.currentTime = 0;
			loop7.currentTime = 0;
			loop6.currentTime = 0;
			loop5.currentTime = 0;
			loop4.currentTime = 0;
			loop3.currentTime = 0;
			loop2.currentTime = 0;
			loop1.currentTime = 0;
		} else {
			loop9.pause();
		}
	}
	else if (ratio > 78.2) {
		if (shouldPlay) {
			loop8.play();
			loop10.pause();
			loop9.pause();
			loop7.pause();
			loop6.pause();
			loop5.pause();
			loop4.pause();
			loop3.pause();
			loop2.pause();
			loop1.pause();
			loop9.currentTime = 0;
			loop10.currentTime = 0;
			loop7.currentTime = 0;
			loop6.currentTime = 0;
			loop5.currentTime = 0;
			loop4.currentTime = 0;
			loop3.currentTime = 0;
			loop2.currentTime = 0;
			loop1.currentTime = 0;
		} else {
			loop8.pause();
		}
	}
	else if (ratio > 70.9) {
		if (shouldPlay) {
			loop7.play();
			loop10.pause();
			loop8.pause();
			loop9.pause();
			loop6.pause();
			loop5.pause();
			loop4.pause();
			loop3.pause();
			loop2.pause();
			loop1.pause();
			loop9.currentTime = 0;
			loop8.currentTime = 0;
			loop10.currentTime = 0;
			loop6.currentTime = 0;
			loop5.currentTime = 0;
			loop4.currentTime = 0;
			loop3.currentTime = 0;
			loop2.currentTime = 0;
			loop1.currentTime = 0;
		} else {
			loop7.pause();
		}
	}
	else if (ratio > 63.7) {
		if (shouldPlay) {
			loop6.play();
			loop10.pause();
			loop8.pause();
			loop7.pause();
			loop9.pause();
			loop5.pause();
			loop4.pause();
			loop3.pause();
			loop2.pause();
			loop1.pause();
			loop9.currentTime = 0;
			loop8.currentTime = 0;
			loop7.currentTime = 0;
			loop10.currentTime = 0;
			loop5.currentTime = 0;
			loop4.currentTime = 0;
			loop3.currentTime = 0;
			loop2.currentTime = 0;
			loop1.currentTime = 0;
		} else {
			loop6.pause();
		}
	}
	else if (ratio > 56.4) {
		if (shouldPlay) {
			loop5.play();
			loop10.pause();
			loop8.pause();
			loop7.pause();
			loop6.pause();
			loop9.pause();
			loop4.pause();
			loop3.pause();
			loop2.pause();
			loop1.pause();
			loop9.currentTime = 0;
			loop8.currentTime = 0;
			loop7.currentTime = 0;
			loop6.currentTime = 0;
			loop10.currentTime = 0;
			loop4.currentTime = 0;
			loop3.currentTime = 0;
			loop2.currentTime = 0;
			loop1.currentTime = 0;
		} else {
			loop5.pause();
		}
	}
	else if (ratio > 49.2) {
		if (shouldPlay) {
			loop4.play();
			loop10.pause();
			loop8.pause();
			loop7.pause();
			loop6.pause();
			loop5.pause();
			loop9.pause();
			loop3.pause();
			loop2.pause();
			loop1.pause();
			loop9.currentTime = 0;
			loop8.currentTime = 0;
			loop7.currentTime = 0;
			loop6.currentTime = 0;
			loop5.currentTime = 0;
			loop10.currentTime = 0;
			loop3.currentTime = 0;
			loop2.currentTime = 0;
			loop1.currentTime = 0;
		} else {
			loop4.pause();
		}
	}
	else if (ratio > 42) {
		if (shouldPlay) {
			loop3.play();
			loop10.pause();
			loop8.pause();
			loop7.pause();
			loop6.pause();
			loop5.pause();
			loop4.pause();
			loop9.pause();
			loop2.pause();
			loop1.pause();
			loop9.currentTime = 0;
			loop8.currentTime = 0;
			loop7.currentTime = 0;
			loop6.currentTime = 0;
			loop5.currentTime = 0;
			loop4.currentTime = 0;
			loop10.currentTime = 0;
			loop2.currentTime = 0;
			loop1.currentTime = 0;
		} else {
			loop3.pause();
		}
	}
	else if (ratio > 34.8) {
		if (shouldPlay) {
			loop2.play();
			loop10.pause();
			loop8.pause();
			loop7.pause();
			loop6.pause();
			loop5.pause();
			loop4.pause();
			loop3.pause();
			loop9.pause();
			loop1.pause();
			loop9.currentTime = 0;
			loop8.currentTime = 0;
			loop7.currentTime = 0;
			loop6.currentTime = 0;
			loop5.currentTime = 0;
			loop4.currentTime = 0;
			loop3.currentTime = 0;
			loop10.currentTime = 0;
			loop1.currentTime = 0;
		} else {
			loop2.pause();
		}
	}
	else {
		if (shouldPlay) {
			loop1.play();
			loop10.pause();
			loop8.pause();
			loop7.pause();
			loop6.pause();
			loop5.pause();
			loop4.pause();
			loop3.pause();
			loop2.pause();
			loop9.pause();
			loop9.currentTime = 0;
			loop8.currentTime = 0;
			loop7.currentTime = 0;
			loop6.currentTime = 0;
			loop5.currentTime = 0;
			loop4.currentTime = 0;
			loop3.currentTime = 0;
			loop2.currentTime = 0;
			loop10.currentTime = 0;
		} else {
			loop1.pause();
		}
	}
}

////////////////////////
// Check for mobile
////////////////////////

window.mobileAndTabletcheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}();