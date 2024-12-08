import { legendsData } from './legendsData.js';

document.addEventListener('DOMContentLoaded', () => {
    const legendsGrid = document.getElementById('legendsGrid');

    legendsData.forEach(legend => {
        const card = document.createElement('div');
        card.className = 'legend-card';

        card.innerHTML = `
            <img src="${legend.image}" alt="${legend.name}" class="legend-image">
            <div class="legend-info">
                <h2 class="legend-name">${legend.name}</h2>
                <p>${legend.description}</p>
                <div class="legend-stats">
                    ${Object.entries(legend.stats).map(([key, value]) => `
                        <div class="stat">
                            <span class="stat-label">${key.charAt(0).toUpperCase() + key.slice(1)}</span>
                            <span class="stat-value">${value}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        legendsGrid.appendChild(card);
    });
});