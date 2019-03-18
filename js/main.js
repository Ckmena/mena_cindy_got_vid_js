(() => {
	console.log('JS linked');

	const sigils = document.querySelectorAll('.sigilContainer'),
		  lightbox = document.querySelector('.lightbox'),
		  video = document.querySelector('video'),
		  lbClose = document.querySelector('.lightbox-close'),
		  banner = document.getElementById('houseImages');


	function openLightbox() {
		//debugger;
		let targetHouse = this.className.split(" ")[1];

		//this give us back a lowercase house name -> the second class on all of the shield ie stark , baratheon
		//flip this to upercase
		//targetHouse = targetHouse.replace(targetHouse.chartAt(0),
			//targetHouse.splice(1));
		let targetVideo = targetHouse.chartAt(0).toUpperCase() + targetHouse.slice(1);


		video.src = `video/House-${targetVideo}.mp4`;
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

	function animateBanner(){
		//move the banners to the left so that the current house banner is available
		const offset = 600;
		let currentOffset = this.dataset.offset * offset;

		TweenMax.to(topBanners, 0.7 { right: currentOffset });

		//banner.style.right = currentOffset + "px";
	}
	

	//sigils.forEach(sigil => sigil.addEventListener('click', openLightbox));
	sigils.forEach(sigil => sigil.addEventListener('click', animateBanner));

	video.addEventListener('ended', closeLightbox);
	lbClose.addEventListener('click', closeLightbox);

	//add video automatic after animation and change the tex in the bottom 


})();