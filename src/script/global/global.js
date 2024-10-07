import searchBar from "../movies/searchBar.js";
function goToAnotherPage(section) {
    const agendaSection = document.querySelector('.agenda');
    const moviesSection = document.querySelector('.movies');
    const reviewsSection = document.querySelector('.reviews');
    const sections = [agendaSection, moviesSection, reviewsSection].filter(Boolean);
    sections.forEach(section => section.style.display = 'none');
    switch (section.toLowerCase()) {
        case 'movies':
            moviesSection && (moviesSection.style.display = 'block');
            break;
        case 'agenda':
            agendaSection && (agendaSection.style.display = 'block');
            break;
        case 'reviews':
            reviewsSection && (reviewsSection.style.display = 'block');
            break;
        default:
            console.error('Invalid section');
    }
}
const agendaLink = document.querySelector('.agenda__link');
const moviesLink = document.querySelector('.movies__link');
const reviewsLink = document.querySelector('.reviews__link');
const links = [agendaLink, moviesLink, reviewsLink].filter(Boolean);
links.forEach(link => link.addEventListener('click', (event) => goToAnotherPage(event.currentTarget.textContent || '')));
document.addEventListener('DOMContentLoaded', () => {
    goToAnotherPage('movies');
    searchBar();
});
window.addEventListener('beforeunload', () => localStorage.clear());
//# sourceMappingURL=global.js.map