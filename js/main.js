(() => {
	console.log('JS linked');

	const sigils = document.querySelectorAll('.sigilContainer'),
	lightbox = document.querySelector('.lightbox'),
	video = document.querySelector('video');

	function openLightbox() {
		//debugger;
		let targetHouse = this.className.split(" ")[1];

		//this give us back a lowercase house name -> the second class on all of the shield ie stark , baratheon
		//flip this to upercase
		targetHouse = targetHouse.replace(targetHouse.chartAt(0),
			targetHouse.splice(1));


		let targetSource = `video/House-${targetHouse}.mp4`;

		lightbox.classList.add('lightbox-on');
		video.load();
		video.play();
	}

	function closeLightbox() {
		lightbox.classList.remove('lightbox-on');

		//rewind the current video and pause it
		video.currentTime = 0;
		video.pause();

	}

	



	sigils.forEach(sigil => sigil.addEventListener('click', openLightbox));

	video.addEventListener('ended', closeLightbox);


})();