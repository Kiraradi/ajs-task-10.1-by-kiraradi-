import GameSavingLoader from '../src/GameSavingLoader';

jest.setTimeout(15000);

test('test 1', async(done) => {
  const gameSaving = new GameSavingLoader();

  const objTrue = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  };
  gameSaving.load().then((response) => {
    expect(response).toEqual(objTrue);
    done();
  });
});
