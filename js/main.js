(() => {
	console.log('JS linked');

	const sigils	= document.querySelectorAll('.sigilContainer'),
	lightbox 		= document.querySelector('.lightbox'),
	video 			= document.querySelector('video'),
	closeButton		= document.querySelector('.lightbox-close');	

	function openLightbox() {
		// debugger;
		let targetHouse = this.className.split(" ")[1];
		//this gives us a class for house name. this makes a 2nd class ont he shields.
		
		//flipping source to uppercase
		//let targetVid = targetHouse.charAt(0).toUpperCase() + targetHouse.slice(1);

		video.src = `video/House-${targetHouse}.mp4`; 
		// I changed the src files to lowercase. if i did not i need to include the code above and chage video.src to 'targetVid'
		lightbox.classList.add('lightbox-on');

		video.load();
		video.play();
		
	}

	function closeLightbox() {
		lightbox.classList.remove('lightbox-on');
		video.currentTime = 0;
		video.pause();
	}

	sigils.forEach(sigil => sigil.addEventListener('click', openLightbox));

	video.addEventListener('ended', closeLightbox);
	closeButton.addEventListener('click', closeLightbox);

})();