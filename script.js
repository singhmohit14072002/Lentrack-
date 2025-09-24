// Anime character data
const animeCharacters = [
    {
        id: 1,
        name: "Goku",
        series: "Dragon Ball Z",
        description: "The main protagonist of the Dragon Ball series. A Saiyan warrior with incredible strength and the power to transform into various Super Saiyan forms.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=face",
        category: "action",
        tags: ["Saiyan", "Super Saiyan", "Martial Arts", "Hero"]
    },
    {
        id: 2,
        name: "Itachi Uchiha",
        series: "Naruto",
        description: "A prodigious ninja from the Uchiha clan, known for his mastery of the Sharingan and his complex moral journey.",
        image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=400&fit=crop&crop=face",
        category: "ninja",
        tags: ["Uchiha", "Sharingan", "Genius", "Anti-hero"]
    },
    {
        id: 3,
        name: "Naruto Uzumaki",
        series: "Naruto",
        description: "A young ninja with dreams of becoming the Hokage. Host to the Nine-Tails fox spirit, he never gives up on his goals.",
        image: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=400&h=400&fit=crop&crop=face",
        category: "ninja",
        tags: ["Jinchuriki", "Hokage", "Determined", "Hero"]
    },
    {
        id: 4,
        name: "Tanjiro Kamado",
        series: "Demon Slayer",
        description: "A kind-hearted boy who becomes a demon slayer to save his sister and avenge his family. Known for his water breathing techniques.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop&crop=face",
        category: "demon",
        tags: ["Demon Slayer", "Water Breathing", "Kind", "Determined"]
    },
    {
        id: 5,
        name: "Vegeta",
        series: "Dragon Ball Z",
        description: "The Prince of all Saiyans and Goku's rival. Initially an antagonist, he becomes a complex anti-hero and ally.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=face",
        category: "action",
        tags: ["Saiyan Prince", "Pride", "Rival", "Anti-hero"]
    },
    {
        id: 6,
        name: "Sasuke Uchiha",
        series: "Naruto",
        description: "Naruto's rival and best friend. A talented Uchiha with the Sharingan, driven by revenge and redemption.",
        image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=400&fit=crop&crop=face",
        category: "ninja",
        tags: ["Uchiha", "Sharingan", "Rival", "Redemption"]
    },
    {
        id: 7,
        name: "Luffy",
        series: "One Piece",
        description: "The captain of the Straw Hat Pirates with dreams of becoming the Pirate King. Possesses the power of the Gomu Gomu no Mi devil fruit.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=face",
        category: "action",
        tags: ["Pirate", "Rubber Powers", "Captain", "Dreamer"]
    },
    {
        id: 8,
        name: "Zenitsu Agatsuma",
        series: "Demon Slayer",
        description: "A demon slayer with thunder breathing abilities. Despite his cowardly nature, he shows incredible strength when unconscious.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop&crop=face",
        category: "demon",
        tags: ["Demon Slayer", "Thunder Breathing", "Coward", "Hidden Power"]
    },
    {
        id: 9,
        name: "Ichigo Kurosaki",
        series: "Bleach",
        description: "A teenager who becomes a Soul Reaper to protect his loved ones. Wields the powerful Zanpakuto Zangetsu.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=face",
        category: "action",
        tags: ["Soul Reaper", "Zanpakuto", "Protector", "Hero"]
    },
    {
        id: 10,
        name: "Kakashi Hatake",
        series: "Naruto",
        description: "The Sixth Hokage and former leader of Team 7. Known as the Copy Ninja with his Sharingan eye.",
        image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=400&fit=crop&crop=face",
        category: "ninja",
        tags: ["Hokage", "Copy Ninja", "Sharingan", "Teacher"]
    }
];

// DOM elements
const characterGrid = document.getElementById('characterGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const filterBtns = document.querySelectorAll('.filter-btn');

// Current filter state
let currentFilter = 'all';
let currentSearch = '';

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    renderCharacters(animeCharacters);
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    searchBtn.addEventListener('click', handleSearch);
    
    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', handleFilter);
    });
    
    // Enter key for search
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
}

// Handle search
function handleSearch() {
    currentSearch = searchInput.value.toLowerCase().trim();
    filterAndRenderCharacters();
}

// Handle filter
function handleFilter(e) {
    // Update active filter button
    filterBtns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    currentFilter = e.target.dataset.filter;
    filterAndRenderCharacters();
}

// Filter and render characters
function filterAndRenderCharacters() {
    let filteredCharacters = animeCharacters;
    
    // Apply category filter
    if (currentFilter !== 'all') {
        filteredCharacters = filteredCharacters.filter(character => 
            character.category === currentFilter
        );
    }
    
    // Apply search filter
    if (currentSearch) {
        filteredCharacters = filteredCharacters.filter(character => 
            character.name.toLowerCase().includes(currentSearch) ||
            character.series.toLowerCase().includes(currentSearch) ||
            character.description.toLowerCase().includes(currentSearch) ||
            character.tags.some(tag => tag.toLowerCase().includes(currentSearch))
        );
    }
    
    renderCharacters(filteredCharacters);
}

// Render characters
function renderCharacters(characters) {
    if (characters.length === 0) {
        characterGrid.innerHTML = '<div class="no-results">No characters found matching your criteria.</div>';
        return;
    }
    
    characterGrid.innerHTML = characters.map(character => `
        <div class="character-card" data-character-id="${character.id}">
            <img src="${character.image}" alt="${character.name}" class="character-image" 
                 onerror="this.src='https://via.placeholder.com/400x400/667eea/ffffff?text=${character.name}'">
            <div class="character-info">
                <h3 class="character-name">${character.name}</h3>
                <p class="character-series">${character.series}</p>
                <p class="character-description">${character.description}</p>
                <div class="character-tags">
                    ${character.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
    
    // Add click event listeners to character cards
    document.querySelectorAll('.character-card').forEach(card => {
        card.addEventListener('click', function() {
            const characterId = parseInt(this.dataset.characterId);
            showCharacterDetails(characterId);
        });
    });
}

// Show character details (modal-like functionality)
function showCharacterDetails(characterId) {
    const character = animeCharacters.find(char => char.id === characterId);
    if (!character) return;
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        backdrop-filter: blur(5px);
    `;
    
    modal.innerHTML = `
        <div style="
            background: white;
            border-radius: 20px;
            padding: 2rem;
            max-width: 500px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            position: relative;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
        ">
            <button onclick="this.closest('.modal').remove()" style="
                position: absolute;
                top: 1rem;
                right: 1rem;
                background: #ff6b6b;
                color: white;
                border: none;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                cursor: pointer;
                font-size: 1.2rem;
                font-weight: bold;
            ">×</button>
            
            <img src="${character.image}" alt="${character.name}" style="
                width: 100%;
                height: 300px;
                object-fit: cover;
                border-radius: 15px;
                margin-bottom: 1rem;
            " onerror="this.src='https://via.placeholder.com/500x300/667eea/ffffff?text=${character.name}'">
            
            <h2 style="font-size: 2rem; margin-bottom: 0.5rem; color: #333;">${character.name}</h2>
            <p style="color: #666; font-size: 1.2rem; margin-bottom: 1rem;">${character.series}</p>
            <p style="color: #777; line-height: 1.6; margin-bottom: 1.5rem;">${character.description}</p>
            
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                ${character.tags.map(tag => `
                    <span style="
                        background: linear-gradient(45deg, #667eea, #764ba2);
                        color: white;
                        padding: 0.5rem 1rem;
                        border-radius: 20px;
                        font-size: 0.9rem;
                        font-weight: 500;
                    ">${tag}</span>
                `).join('')}
            </div>
        </div>
    `;
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    // Close modal with Escape key
    const handleEscape = function(e) {
        if (e.key === 'Escape') {
            modal.remove();
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
    
    document.body.appendChild(modal);
}

// Add some interactive animations
document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation
    characterGrid.innerHTML = '<div class="loading"><div class="spinner"></div>Loading characters...</div>';
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        renderCharacters(animeCharacters);
    }, 1000);
});

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === '/' && e.target !== searchInput) {
        e.preventDefault();
        searchInput.focus();
    }
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe character cards for animations
function observeCharacterCards() {
    document.querySelectorAll('.character-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Call observe function after rendering
const originalRenderCharacters = renderCharacters;
renderCharacters = function(characters) {
    originalRenderCharacters(characters);
    setTimeout(observeCharacterCards, 100);
};
