import GameSavingLoader from '../GameSavingLoader';
import read from '../reader';

jest.mock('../reader');
beforeEach(() => {
  jest.resetAllMocks();
});

jest.setTimeout(15000);

test('test mock', async () => {
  try {
    read.mockRejectedValueOnce(new Error('Async error message'));
    await GameSavingLoader.load();
  } catch (error) {
    expect(error).toEqual('oops');
  }
});
