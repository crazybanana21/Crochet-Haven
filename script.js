document.addEventListener('DOMContentLoaded', function() {
    // Navigation
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    sections[0].classList.add('active');
    navLinks[0].classList.add('active');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            document.getElementById(targetId).classList.add('active');
            
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Video popups
    const videoPopup = document.querySelector('.video-popup');
    const videoContainer = document.querySelector('.video-container');
    const closePopup = document.querySelector('.close-popup');
    const cards = document.querySelectorAll('[data-video]');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const videoUrl = this.getAttribute('data-video');
            
            if (videoUrl && videoUrl !== 'ADD_YOUTUBE_LINK_HERE') {
                let videoId = '';
                
                if (videoUrl.includes('youtube.com/watch?v=')) {
                    videoId = videoUrl.split('v=')[1].split('&')[0];
                } else if (videoUrl.includes('youtu.be/')) {
                    videoId = videoUrl.split('youtu.be/')[1].split('?')[0];
                } else {
                    videoId = videoUrl;
                }
                
                videoContainer.innerHTML = `
                    <iframe 
                        src="https://www.youtube.com/embed/${videoId}?autoplay=1" 
                        frameborder="0" 
                        allow="autoplay; encrypted-media" 
                        allowfullscreen>
                    </iframe>
                `;
                
                videoPopup.style.display = 'block';
            } else {
                alert('Video link not added yet. Replace ADD_YOUTUBE_LINK_HERE with a YouTube URL.');
            }
        });
    });
    
    closePopup.addEventListener('click', function() {
        videoPopup.style.display = 'none';
        videoContainer.innerHTML = '';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === videoPopup) {
            videoPopup.style.display = 'none';
            videoContainer.innerHTML = '';
        }
    });
    
    // Contact form
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thanks for your message! I\'ll reply soon.');
        contactForm.reset();
    });
});
