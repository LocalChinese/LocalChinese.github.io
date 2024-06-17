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
        overlayContent.innerHTML = 'YOU MADE IT!';
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
            audio.play();
        } else if (e.ctrlKey && (e.key === 'U' || e.key === 'u')) {
            // Ctrl+U pressed
            e.preventDefault();
            createOverlay();
            const overlay = document.getElementById('overlay');
            if (overlay) overlay.style.display = 'flex'; // Show overlay if hidden
            audio.play();
        }
    });

    // Initial overlay setup
    const continueButton = document.createElement('button');
    continueButton.id = 'continue-button';
    continueButton.textContent = 'Click to Continue';
    continueButton.style.position = 'absolute';
    continueButton.style.top = '50%';
    continueButton.style.left = '50%';
    continueButton.style.transform = 'translate(-50%, -50%)';
    continueButton.style.padding = '10px 20px';
    continueButton.style.fontSize = '16px';
    continueButton.style.cursor = 'pointer';
    continueButton.style.zIndex = '1001';
    continueButton.style.color = 'white';
    continueButton.style.backgroundColor = 'rgba(0,0,0,0.7)';
    continueButton.style.border = 'none';
    continueButton.style.borderRadius = '5px';

    const initialOverlay = document.createElement('div');
    initialOverlay.id = 'initial-overlay';
    initialOverlay.style.position = 'fixed';
    initialOverlay.style.top = '0';
    initialOverlay.style.left = '0';
    initialOverlay.style.width = '100%';
    initialOverlay.style.height = '100%';
    initialOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    initialOverlay.style.display = 'flex';
    initialOverlay.style.justifyContent = 'center';
    initialOverlay.style.alignItems = 'center';
    initialOverlay.style.zIndex = '1000';
    initialOverlay.appendChild(continueButton);

    document.body.appendChild(initialOverlay);

    continueButton.addEventListener('click', () => {
        initialOverlay.style.display = 'none';
    });

    // Prevent context menu from showing on right-click
    document.addEventListener('contextmenu', event => event.preventDefault());
});

var audio = new Audio('just_an_audio.mp3');