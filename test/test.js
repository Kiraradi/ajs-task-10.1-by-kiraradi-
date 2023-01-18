import GameSavingLoader from '../src/GameSavingLoader';
import read from '../src/reader';

jest.mock('../src/reader');
beforeEach(() => {
  jest.resetAllMocks();
});

jest.setTimeout(15000);

test('test 1', (done) => {
  const objTrue = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  };
  GameSavingLoader.load().then((response) => {
    expect(response).toEqual(objTrue);
    done();
  });
});

test('test 2', async () => {
  expect.assertions(1);
  try {
    read.mockRejectedValueOnce(new Error('Async error message'));
    await GameSavingLoader.load();
  } catch (error) {
    expect(error).toEqual('oops');
  }
});
