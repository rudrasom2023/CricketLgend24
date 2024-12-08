import { memesData } from './memesData.js';

document.addEventListener('DOMContentLoaded', () => {
    const memesGrid = document.getElementById('memesGrid');

    memesData.forEach(meme => {
        const card = document.createElement('div');
        card.className = 'meme-card';

        card.innerHTML = `
            <img src="${meme.image}" alt="${meme.title}" class="meme-image">
            <div class="meme-info">
                <h2 class="meme-title">${meme.title}</h2>
                <p class="meme-caption">${meme.caption}</p>
            </div>
        `;

        memesGrid.appendChild(card);
    });
});