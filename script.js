document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navBar a');

    // Add 'hovered' class to links on hover
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.classList.add('hovered');
        });

        link.addEventListener('mouseleave', () => {
            link.classList.remove('hovered');
        });
    });

    // Observer for fading in sections
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Function to create overlay
    function createOverlay() {
        // Check if overlay already exists to prevent duplication
        if (document.getElementById('overlay')) {
            return;
        }
    
        const overlay = document.createElement('div');
        overlay.id = 'overlay';
        const overlayContent = document.createElement('div');
        overlayContent.classList.add('overlay-content');
        overlayContent.innerHTML = '? ykwim...';
        overlay.appendChild(overlayContent);
        document.body.appendChild(overlay);
    }    

    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c' || e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j')) {
            // Ctrl+Shift+C or Ctrl+Shift+I or Ctrl+Shift+J pressed
            e.preventDefault();
            createOverlay();
            const overlay = document.getElementById('overlay');
            if (overlay) overlay.style.display = 'flex';
        } else if (e.ctrlKey && (e.key === 'U' || e.key === 'u')) {
            // Ctrl+U pressed
            e.preventDefault();
            createOverlay();
            const overlay = document.getElementById('overlay');
            if (overlay) overlay.style.display = 'flex'; // Show overlay if hidden
        }
    });
      

    // Prevent context menu from showing on right-click
    document.addEventListener('contextmenu', event => event.preventDefault());
});

