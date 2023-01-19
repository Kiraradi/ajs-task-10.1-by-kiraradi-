import GameSavingLoader from "../GameSavingLoader";

jest.setTimeout(15000);

test('test without mock', (done) => {
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

