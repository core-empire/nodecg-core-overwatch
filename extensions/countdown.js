module.exports = function(nodecg) {
	const countdownRep = nodecg.Replicant('countdown', {
		defaultValue: false,
		persistent: false
	});

	function getTimeRemaining(endTime) {
		let distance = Date.parse(endTime) - Date.parse(new Date());

		// Time calculations for days, hours, minutes, and seconds
		let days = Math.floor(distance / (1000 * 60 * 60 * 24));
		let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((distance % (1000 * 60)) / 1000);

		return {
			'total': distance,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		}
	}

	function countDown(endTime) {
		let timeInterval = setInterval(function() {
			let time = getTimeRemaining(endTime);

			// We want numbers less than 10 to display as "09", for example.
			let formatted = {
				"days": time.days < 10 ? "0" + time.days : time.days,
				"hours": time.hours < 10 ? "0" + time.hours : time.hours,
				"minutes": time.minutes < 10 ? "0" + time.minutes : time.minutes,
				"seconds": time.seconds < 10 ? "0" + time.seconds : time.seconds
			}

			// Save our countdown to our countdownRep Replicant
			countdownRep.value =
        formatted.days + ":" +
				formatted.hours + ":" +
				formatted.minutes + ":" +
				formatted.seconds;

      // When the countdown is finished, display a message
      if(time.total <= 0) {
        clearInterval(timeInterval);

        countdownRep.value = "Starting!";
      }
		}, 1000);
	}

	nodecg.listenFor('setCountdown', function(time) {
    countDown(time);
	});
};
