(() => {
	console.log('JS linked');

	const sigils = document.querySelectorAll('.sigilContainer'),
	lightbox = document.querySelector('.lightbox'),
	video = document.querySelector('video');

	function openLightbox() {
		lightbox.classList.add('lightbox-on');
	}

	function closeLightbox() {
		lightbox.classList.remove('lightbox-on');
	}

	sigils.forEach(sigil => sigil.addEventListener('click', openLightbox));

	video.addEventListener('ended', closeLightbox);


})();