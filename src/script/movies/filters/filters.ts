const sortShowButton: HTMLElement | null = document.querySelector('.movies__main__filters__sort__wrapper')
const sortDropdown: HTMLElement | null = document.querySelector('.movies__main__filters__sort__dropdown')


sortShowButton?.addEventListener('click', () => {
  sortDropdown?.classList.toggle('hidedDropdown')
})