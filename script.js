
document.addEventListener('DOMContentLoaded', function() {
    // Actualizar año actual en el footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Botón de tema oscuro/claro
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const icon = this.querySelector('i');
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.replace('fa-moon', 'fa-sun');
            this.textContent = ' Modo Claro';
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
            this.textContent = ' Modo Oscuro';
        }
    });

    // Animación de la barra de progreso académico
    const academicProgress = document.getElementById('academic-progress');
    setTimeout(() => {
        academicProgress.style.width = '50%';
    }, 500);

    // Botones para expandir/secciones colapsables
    const expandButtons = document.querySelectorAll('.expand-btn');
    expandButtons.forEach(button => {
    button.addEventListener('click', function() {
        const section = this.closest('section');
        const content = section.querySelector('.expandable');
        const isOpen = content.classList.contains('open');

        this.classList.toggle('rotated');
        content.classList.toggle('open');

        if (isOpen) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});

    // Inicializar todas las secciones expandibles como cerradas
    document.querySelectorAll('.expandable').forEach(item => {
        item.style.maxHeight = '0';
    });

    // Formulario de contacto
    const contactFormToggle = document.getElementById('contact-form-toggle');
    const contactForm = document.getElementById('contact-form');
    
    contactFormToggle.addEventListener('click', function() {
        if (contactForm.classList.contains('hidden')) {
            contactForm.classList.remove('hidden');
            this.textContent = 'Ocultar formulario';
        } else {
            contactForm.classList.add('hidden');
            this.textContent = 'Mostrar formulario de contacto';
        }
    });
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Formulario enviado. ¡Gracias por tu mensaje!');
        this.reset();
        this.classList.add('hidden');
        contactFormToggle.textContent = 'Mostrar formulario de contacto';
    });

    // Timeline de experiencia (podrías reemplazar esto con datos reales cuando los tengas)
    const experienceTimeline = document.getElementById('experience-timeline');
    const placeholderExperience = [
        {
            date: "Actualmente",
            title: "Estudiante Universitario",
            description: "Cursando la carrera de Ingeniería en Computación."
        },
        {
            date: "Futuro",
            title: "Desarrollador Profesional",
            description: "Busco oportunidades para comenzar mi carrera profesional."
        }
    ];
    
    placeholderExperience.forEach((exp, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;
        
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-date">${exp.date}</div>
                <h3>${exp.title}</h3>
                <p>${exp.description}</p>
            </div>
        `;
        
        experienceTimeline.appendChild(timelineItem);
    });

    // Enlaces sociales (actualiza con tus enlaces reales)
    document.getElementById('linkedin').addEventListener('click', function(e) {
        e.preventDefault();
        const hasLinkedIn = confirm("¿Te gustaría agregar un enlace a tu perfil de LinkedIn?");
        if (hasLinkedIn) {
            const linkedInUrl = prompt("Por favor, ingresa tu URL de LinkedIn:");
            if (linkedInUrl) {
                this.href = linkedInUrl;
                window.open(linkedInUrl, '_blank');
            }
        } else {
           
        }
    });

 
});


