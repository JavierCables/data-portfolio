// Sample project data
const projects = [
    {
        id: 1,
        title: "<i class='ri-music-2-fill'></i> Unsupervised Music Track Clustering",
        description: "AI system organizing music catalogs using <strong>unsupervised clustering</strong> on 196 acoustic features from GTZAN.",
        image: "assets/img/portfolio-1.jpg",
        tags_1: ["Python", "Jupyter Notebook"],
        tags_2: ["Data Cleaning", "Data Transformation", "Data Visualization", "Data Analysis", "Data Modeling", "Data Engineering"],
        link: "projects/project-music-clustering.html"
    },
    {
        id: 2,
        title: "<i class='ri-steering-2-fill'></i> Automatic Number Plate Recognition",
        description: "Automatic Number Plate Recognition using <strong>YOLOv8</strong>, object tracking (SORT), and <strong>EasyOCR</strong>.",
        image: "assets/img/portfolio-2.jpg",
        tags_1: ["Python"],
        tags_2: ["Data Cleaning", "Data Transformation", "Data Visualization", "Data Analysis", "Data Modeling", "Data Engineering"],
        link: "projects/project-number-plate-recognition.html"
    },
    {
        id: 3,
        title: "<i class='ri-heart-2-fill'></i> Medical Chatbot with Generative AI",
        description: "<strong>Generative AI</strong> medical chatbot (RAG) using custom data (4505-page book) and <strong>Pinecone</strong> Vector DB.",
        image: "assets/img/portfolio-3.jpg",
        tags_1: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
        tags_2: ["Data Transformation", "Data Visualization", "Data Analysis", "Data Modeling", "Data Engineering"],
        link: "projects/project-medical-chatbot.html"
    },
    {
        id: 4,
        title: "<i class='ri-roadster-fill'></i> Road Accident Analysis Power BI Dashboard",
        description: "Dynamic <strong>Power BI</strong> dashboard analyzing 2021-2022 road accident data, casualties, and trends.",
        image: "assets/img/portfolio-4.jpg",
        tags_1: ["Power BI"],
        tags_2: ["Data Cleaning", "Data Transformation", "Data Visualization", "Data Analysis", "Data Modeling"],
        link: "projects/project-road-accident-analysis.html"
    },
    {
        id: 5,
        title: "<i class='ri-movie-2-fill'></i> Netflix Movies and TV Shows Data Analysis",
        description: "Analysis of 8,807 Netflix titles using <strong>PostgreSQL</strong>, solving 15 complex business problems.",
        image: "assets/img/portfolio-5.jpg",
        tags_1: ["SQL"],
        tags_2: ["Data Transformation", "Data Analysis", "Data Modeling"],
        link: "projects/project-netflix-content-analysis.html"
    },
];

// Function to create project card
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.onclick = () => {
        if (project.link !== '#') {
            window.location.href = project.link;
        }
    };

    const tags1HTML = project.tags_1.map(tag => {
        const tagClass = getTagClass(tag);
        return `<span class="tag ${tagClass}">${tag}</span>`;
    }).join('');

    const tags2HTML = project.tags_2.map(tag => {
        const tagClass = getTagClass(tag);
        return `<span class="tag ${tagClass}">${tag}</span>`;
    }).join('');

    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-card-image">
        <div class="project-card-content">
            <h3 class="project-card-title">${project.title}</h3>
            <p class="project-card-description">${project.description}</p>
            <div class="project-card-tags-1">
                ${tags1HTML}
            </div>
            <div class="project-card-tags-2">
                ${tags2HTML}
            </div>
        </div>
    `;

    return card;
}

// Function to get tag class based on tag name
function getTagClass(tag) {
    const tagMap = {
        'SQL': 'tag-brown',
        'Python': 'tag-green',
        'Power BI': 'tag-yellow',
        'Jupyter Notebook': 'tag-orange',
        'HTML': 'tag-orange',
        'CSS': 'tag-blue',
        'JavaScript': 'tag-yellow',
        'Flask': 'tag-pink',
        'Data Cleaning': 'tag-blue',
        'Data Transformation': 'tag-purple',
        'Data Visualization': 'tag-pink',
        'Data Analysis': 'tag-red',
        'Data Modeling': 'tag-orange',
        'Data Engineering': 'tag-yellow',
    };
    return tagMap[tag] || 'tag-blue';
}

// Function to render projects
function renderProjects() {
    const container = document.getElementById('projectsContainer');
    if (!container) return;

    container.innerHTML = '';
    projects.forEach(project => {
        container.appendChild(createProjectCard(project));
    });
}

// View toggle functionality
function initViewToggles() {
    const container = document.getElementById('projectsContainer');

    container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(250px, 1fr))';
}

// Scroll animation observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections that should animate
    const animatedElements = document.querySelectorAll('.callout');
    animatedElements.forEach(el => {
        if (!el.classList.contains('fade-in')) {
            observer.observe(el);
        }
    });

    // Animate project cards on scroll
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
}

// Add smooth hover effects to project cards
function addCardAnimations() {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    initViewToggles();
    initScrollAnimations();

    // Add card animations after rendering
    setTimeout(() => {
        addCardAnimations();
    }, 100);
});