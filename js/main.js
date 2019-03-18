(() => {
	console.log('JS linked');

	const sigils = document.querySelectorAll('.sigilContainer'),
	lightbox = document.querySelector('.lightbox'),
	video = document.querySelector('video');

	function openLightbox() {
		lightbox.classList.add('lightbox-on');
		video.play();
		
	}

	function closeLightbox() {
		lightbox.classList.remove('lightbox-on');
		video.currentTime = 0;
		video.pause();
	}

	sigils.forEach(sigil => sigil.addEventListener('click', openLightbox));

	video.addEventListener('ended', closeLightbox);


})();