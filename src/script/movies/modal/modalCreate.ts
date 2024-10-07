import getMovie from "../../functions/modal/getMovie.js";
import IMovie from "../../interfaces/IMovie.js";
import convertTime from "../../functions/modal/convertTime.js";
import formatCurrency from "../../functions/modal/fomatCurrency.js";
import roundToDecimal from "../../functions/modal/roundToDecimal.js";

export default async function modalCreate(id: number) {
  const wrapper: HTMLDivElement | null = document.querySelector('.wrapper');
  const body: HTMLElement = document.body;
  const movieData: IMovie | null = await getMovie(id);

  body.style.overflow = 'hidden';

  const modalWrapper: HTMLDivElement = document.createElement('div');
  modalWrapper.classList.add('modal__wrapper')

  const modal: HTMLDivElement = document.createElement('div');
  modal.classList.add('modal')

  const modalImage: HTMLImageElement = document.createElement('img');
  modalImage.classList.add('modal__img')
  modalImage.src = `https://image.tmdb.org/t/p/w500${movieData?.poster_path}`
  modal.append(modalImage)

  const modalInfo: HTMLDivElement = document.createElement('div');
  modalInfo.classList.add('modal__info')
  modal.append(modalInfo)

  const modalTitle: HTMLHeadingElement = document.createElement('h2');
  modalTitle.classList.add('modal__info__title')
  modalTitle.textContent = movieData?.title + ' ' + '(' + movieData?.release_date.split('-')[0] + ')'
  modalInfo.append(modalTitle)

  const movieInfo = document.createElement('div');
  movieInfo.classList.add('modal__movie__info')

  const movieInfoParagraph: HTMLParagraphElement = document.createElement('p');
  movieInfoParagraph.classList.add('modal__movie__info__paragraph')
  const genres = movieData?.genres.map(genre => genre.name)
  movieInfoParagraph.textContent = `${movieData?.release_date} | ${genres?.join(', ')} | ${convertTime(movieData!.runtime)}`

  movieInfo.append(movieInfoParagraph)


  const overviewDiv = document.createElement('div')
  overviewDiv.classList.add('modal__movie__overview__wrapper')

  const movieOverviewText: HTMLParagraphElement = document.createElement('p');
  movieOverviewText.textContent = 'Overview'
  movieOverviewText.classList.add('modal__movie__overview__text')

  const movieOverview: HTMLParagraphElement = document.createElement('p');
  movieOverview.classList.add('modal__movie__overview')
  movieOverview.textContent = movieData?.overview || 'No overview'
  overviewDiv.append(movieOverviewText, movieOverview)

  const detailsDiv = document.createElement('div')
  detailsDiv.classList.add('modal__movie__details')

  const statusDiv = document.createElement('div')
  statusDiv.classList.add('modal__movie__details__div')
  detailsDiv.append(statusDiv)

  const movieDetailsStatusText: HTMLParagraphElement = document.createElement('p');
  movieDetailsStatusText.classList.add('details__title')
  movieDetailsStatusText.textContent = 'Status'

  const movieDetailsStatus: HTMLParagraphElement = document.createElement('p');
  movieDetailsStatus.classList.add('details__text')
  movieDetailsStatus.textContent = movieData!.status
  statusDiv.append(movieDetailsStatusText, movieDetailsStatus)

  const movieDetailsBudgetDiv: HTMLDivElement = document.createElement('div');
  movieDetailsBudgetDiv.classList.add('modal__movie__details__div')

  const movieDetailsBudgetText: HTMLParagraphElement = document.createElement('p');
  movieDetailsBudgetText.classList.add('details__title')
  movieDetailsBudgetText.textContent = 'Budget'

  const movieDetailsBudget: HTMLParagraphElement = document.createElement('p');
  movieDetailsBudget.classList.add('details__text')
  movieDetailsBudget.textContent = formatCurrency(movieData!.budget)
  movieDetailsBudgetDiv.append(movieDetailsBudgetText, movieDetailsBudget)
  detailsDiv.append(movieDetailsBudgetDiv)

  const movieDetailsRevenueDiv: HTMLDivElement = document.createElement('div');
  movieDetailsRevenueDiv.classList.add('modal__movie__details__div')

  const movieDetailsRevenueText: HTMLParagraphElement = document.createElement('p');
  movieDetailsRevenueText.classList.add('details__title')
  movieDetailsRevenueText.textContent = 'Revenue'

  const movieDetailsRevenue: HTMLParagraphElement = document.createElement('p');
  movieDetailsRevenue.classList.add('details__text')
  movieDetailsRevenue.textContent = formatCurrency(movieData!.revenue)
  movieDetailsRevenueDiv.append(movieDetailsRevenueText, movieDetailsRevenue)
  detailsDiv.append(movieDetailsRevenueDiv)

  const movieDetailsRatingDiv: HTMLDivElement = document.createElement('div');
  movieDetailsRatingDiv.classList.add('modal__movie__details__div')

  const movieDetailsRatingText: HTMLParagraphElement = document.createElement('p');
  movieDetailsRatingText.classList.add('details__title')
  movieDetailsRatingText.textContent = 'Rating'

  const movieDetailsRating: HTMLParagraphElement = document.createElement('p');
  movieDetailsRating.classList.add('details__text')
  movieDetailsRating.textContent = roundToDecimal(movieData!.vote_average) + '/10'
  movieDetailsRatingDiv.append(movieDetailsRatingText, movieDetailsRating)
  detailsDiv.append(movieDetailsRatingDiv)

  const movieDetailsPopularityDiv: HTMLDivElement = document.createElement('div');
  movieDetailsPopularityDiv.classList.add('modal__movie__details__div')

  const movieDetailsPopularityText: HTMLParagraphElement = document.createElement('p');
  movieDetailsPopularityText.classList.add('details__title')
  movieDetailsPopularityText.textContent = 'Votes count'

  const movieDetailsPopularity: HTMLParagraphElement = document.createElement('p');
  movieDetailsPopularity.classList.add('details__text')
  movieDetailsPopularity.textContent = movieData!.vote__count + ' votes'
  movieDetailsPopularityDiv.append(movieDetailsPopularityText, movieDetailsPopularity)
  detailsDiv.append(movieDetailsPopularityDiv)

  const movieDetailsTagLineDiv: HTMLDivElement = document.createElement('div');
  movieDetailsTagLineDiv.classList.add('modal__movie__details__div')

  const movieDetailsTagLineText: HTMLParagraphElement = document.createElement('p');
  movieDetailsTagLineText.classList.add('details__title')
  movieDetailsTagLineText.textContent = 'Tagline'

  const movieDetailsTagLine: HTMLParagraphElement = document.createElement('p');
  movieDetailsTagLine.classList.add('details__text')
  movieDetailsTagLine.textContent = movieData!.tagline
  movieDetailsTagLineDiv.append(movieDetailsTagLineText, movieDetailsTagLine)
  detailsDiv.append(movieDetailsTagLineDiv)

  const createSvg = (): SVGElement => {
    const xmlns = "http://www.w3.org/2000/svg";

    const closeButton = document.createElementNS(xmlns, "svg");
    closeButton.setAttribute("viewBox", "0 0 24 24");
    closeButton.setAttribute("fill", "none");
    closeButton.setAttribute("xmlns", xmlns);

    const circlePath = document.createElementNS(xmlns, "path");
    circlePath.setAttribute("d", "M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z");
    circlePath.setAttribute("stroke", "#a28b55");
    circlePath.setAttribute("stroke-width", "2");

    const crossPath = document.createElementNS(xmlns, "path");
    crossPath.setAttribute("d", "M9 9L15 15M15 9L9 15");
    crossPath.setAttribute("stroke", "#a28b55");
    crossPath.setAttribute("stroke-width", "2");
    crossPath.setAttribute("stroke-linecap", "round");

    closeButton.appendChild(circlePath);
    closeButton.appendChild(crossPath);

    return closeButton;
  };

  const closeButton = createSvg();
  closeButton.classList.add('modal__close')
  modal.append(closeButton)

  modalInfo.append(movieInfo, overviewDiv, detailsDiv)
  modalWrapper.append(modal)
  wrapper?.append(modalWrapper)

  closeButton.addEventListener('click', () => {
    modalWrapper.remove()
    body.style.overflow = 'auto';
  })

  modalWrapper.addEventListener('click', (event) => {
    if (event.target === modalWrapper) {
      modalWrapper.remove()
      body.style.overflow = 'auto';
    }
  })
}
