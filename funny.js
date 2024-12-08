document.addEventListener('DOMContentLoaded', () => {
    const momentsGrid = document.getElementById('momentsGrid');

    funnyMomentsData.forEach(moment => {
        const card = document.createElement('div');
        card.className = 'moment-card';

        card.innerHTML = `
            <video class="moment-video" controls>
                <source src="${moment.video}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div class="moment-info">
                <h2 class="moment-title">${moment.title}</h2>
                <p class="moment-description">${moment.description}</p>
                <p class="moment-date">${moment.date}</p>
            </div>
        `;

        momentsGrid.appendChild(card);
    });
});