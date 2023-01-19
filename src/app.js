import GameSavingLoader from './GameSavingLoader';

(async () => {
  const result = await GameSavingLoader.load();
  console.log(result);
})();
