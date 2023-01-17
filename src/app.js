import GameSavingLoader from './GameSavingLoader';

const gameSaving = new GameSavingLoader();
gameSaving.load().then((response) => {
  // eslint-disable-next-line no-console
  console.log(response);
});
