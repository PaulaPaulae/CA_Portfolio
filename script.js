document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.menu-link');
    const sections = document.querySelectorAll('section');

    // Set the initial underline for 'About'
    updateUnderline(document.querySelector('.menu-link.active'));

    // Add click event listeners to update active link on click
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            setActiveLink(this);
        });
    });

    // Add scroll event listener to update active link on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 50) {
                current = section.getAttribute('id');
            }
        });
        menuLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                setActiveLink(link);
            }
        });
    });

    function setActiveLink(link) {
        menuLinks.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
        updateUnderline(link);
    }

    function updateUnderline(link) {
        const textLength = link.textContent.trim().length;
        const underline = '='.repeat(textLength);
        link.setAttribute('data-underline', underline);
    }
});




document.querySelectorAll('.serviceTitle').forEach(item => {
    item.addEventListener('click', function() {
        // Cierra todas las descripciones excepto la actual y cambia el símbolo a "+"
        document.querySelectorAll('.description').forEach(desc => {
            if (desc !== this.nextElementSibling) {
                desc.style.display = 'none';
            }
        }, this);
        document.querySelectorAll('.toggle-symbol').forEach(symbol => {
            if (symbol !== this.querySelector('.toggle-symbol')) {
                symbol.textContent = '+';
            }
        }, this);
        
        // Alterna la visibilidad de la descripción actual
        const description = this.nextElementSibling;
        if (description.style.display === 'block') {
            description.style.display = 'none';
            this.querySelector('.toggle-symbol').textContent = '+';
        } else {
            description.style.display = 'block';
            this.querySelector('.toggle-symbol').textContent = '-';
        }
    });
});
