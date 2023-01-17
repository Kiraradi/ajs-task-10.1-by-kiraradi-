import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  // eslint-disable-next-line class-methods-use-this
  load() {
    return new Promise((resolve) => {
      read().then((data) => {
        json(data).then((value) => {
          resolve(JSON.parse(value));
        });
      });
    });
  }
}
