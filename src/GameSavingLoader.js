import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      (async () => {
        try {
          const data =  await read();
          const value = await json(data);
          console.log(JSON.parse(value))
          resolve(JSON.parse(value))
        }
        catch(err) {
          console.log(err);
        }
      })();
    });
  }
}
