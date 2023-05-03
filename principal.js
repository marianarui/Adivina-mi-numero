        let min = 1;
		let max = 100;
		let guess = 50;

		function guessNumber(response) {
			if (response === 'menor') {
				max = guess - 1;
			} else if (response === 'igual') {
				alert('¡Adiviné!');
			} else if (response === 'mayor') {
				min = guess + 1;
			}

			guess = Math.floor((max + min) / 2);
			document.getElementById('guess').textContent = guess;
		}