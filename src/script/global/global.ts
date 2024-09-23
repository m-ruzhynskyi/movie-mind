function goToAnotherPage(section: string) {
  const agendaSection: HTMLElement | null = document.querySelector('.agenda')
  const moviesSection: HTMLElement | null = document.querySelector('.movies')
  const reviewsSection: HTMLElement | null = document.querySelector('.reviews')

  const sections = [agendaSection, moviesSection, reviewsSection].filter(Boolean) as HTMLElement[];

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

const agendaLink: HTMLParagraphElement | null = document.querySelector('.agenda__link');
const moviesLink: HTMLParagraphElement | null = document.querySelector('.movies__link');
const reviewsLink: HTMLParagraphElement | null = document.querySelector('.reviews__link');

const links = [agendaLink, moviesLink, reviewsLink].filter(Boolean) as HTMLParagraphElement[];

links.forEach(link =>
  link.addEventListener('click', (event) => goToAnotherPage((event.currentTarget as HTMLParagraphElement).textContent || ''))
);

document.addEventListener('DOMContentLoaded', () => goToAnotherPage('movies'));