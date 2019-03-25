(() => {
	console.log('JS linked');

	const sigils = document.querySelectorAll('.sigilContainer'),
		  lightbox = document.querySelector('.lightbox'),
		  video = document.querySelector('video'),
		  lbClose = document.querySelector('.lightbox-close'),
		  banner = document.getElementById('houseImages'),
		  tagline = document.querySelector('.house-name'),
		  houseInfo = document.querySelector('.house-info');


	// this is a conatainer  for some dinamic data (march 25) it has to be back tick --> `` <--
	const houseData = [//STARK
	//backticks (javascript template string) let you keep puctuation you're using inside text 
		`House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and Daenerys Targaryen's invasion of Westeros, the leaders of House Stark ruled over the region as the Kings in the North.`


	];



	function openLightbox() {
		//debugger;
		let targetHouse = this.className.split(" ")[1];

		//this give us back a lowercase house name -> the second class on all of the shield ie stark , baratheon
		//flip this to upercase
		//targetHouse = targetHouse.replace(targetHouse.chartAt(0),
			//targetHouse.splice(1));
		let targetVideo = targetHouse.charAt(0).toUpperCase() + targetHouse.slice(1);


		//populate the tag line 
		tagline.textContent = `House ${targetVideo}`;

		//populate House Content
		houseInfo.textContent = houseData[0];



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




		TweenMax.to(topBanners, 0.7, { right: currentOffset });

		//banner.style.right = currentOffset + "px";
	}
	

	sigils.forEach(sigil => sigil.addEventListener('click', openLightbox));
	//sigils.forEach(sigil => sigil.addEventListener('click', animateBanner));

	video.addEventListener('ended', closeLightbox);
	lbClose.addEventListener('click', closeLightbox);

	//add video automatic after animation and change the tex in the bottom 


})();