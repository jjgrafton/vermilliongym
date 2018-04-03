/* eslint func-names: 0,  no-unused-vars: 0, no-alert: 0, class-methods-use-this: 0 , no-plusplus: 0 , indend: 0 , no-restricted-syntax: 0 , no-use-before-define: 0 , no-loop-func: 0, func-names: 0, space-before-blocks: 0, indent: 0, max-len: 0 */

window.onload = function (evt) {
  console.log('js loaded');
  // TRAINER CLASS

  class Character {
    constructor(characterName, pic, gif, stats, abilities) {
      this.name = characterName;
      this.pic = pic;
      this.gif = gif;
      this.stats = stats;
      this.abilities = abilities;
    }
    getCharacterPromise(characterName) {
      const endpoint = characterName || this.name;
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `${this.apiURL}/${endpoint}/`);
        xhr.send();
        xhr.onload = function () {
          resolve(JSON.parse(xhr.responseText));
        };
        xhr.onerror = function () {
          reject(xhr.statusText);
        };
      });
    }
    makeCharacterInstance(characterObject, gif = 'no gif') {
      // take all of the data on the object and format it in a clean, simple way, in order to pass
      // what we need to our contructor function:
      console.log(characterObject);
      // get the character name:
      const characterName = characterObject.name;
      // re-format the stats into an object, using the reduce method:
      const reformattedStats = characterObject.stats.reduce((reformatted, stat) => {
        reformatted[stat.stat.name] = stat.base_stat;
        return reformatted;
      }, {});
      const reformattedAbilities = characterObject.abilities.reduce((arr, ability, index) => {
        arr[index] = ability.ability.name;
        return arr;
      }, []);
      console.log('reformattedAbilities: ', reformattedAbilities);
      const defaultPic = characterObject.sprites.front_default;
      console.log('reformatted stats: ', reformattedStats);
      console.log('characterName: ', characterName);
      const character = new Character(
        characterName,
        defaultPic,
        gif,
        reformattedStats,
        reformattedAbilities,
      );
      console.log('Character Instance: ', character);
    }
  }
  Character.prototype.apiURL = 'https://pokeapi.co/api/v2/pokemon';
  //   Pokemon names: Oddish, Gloom and Weezing

  // Chuck's Pokemon:
  // const dragonair = new Character('dragonair');
  // const getDragonair = dragonair.getCharacterPromise();
  // getDragonair.then((character) => {
  //   console.log(character);
  // });
  // const butterfree = new Character('butterfree');
  // const getButterfree = butterfree.getCharacterPromise();
  // getButterfree.then((character) => {
  //   console.log(character);
  // });
  // const charmeleon = new Character('charmeleon');
  // const getCharmeleon = charmeleon.getCharacterPromise();
  // getCharmeleon.then((character) => {
  //   console.log(character);
  // });

  // Professor Gloom's Pokemon:

  getOddish = Character.prototype.getCharacterPromise('oddish');
  getOddish.then((character) => {
    // const oddish = Character.prototype.makeCharacterInstance(character);
    const gif = 'add gif URL here';
    Character.prototype.makeCharacterInstance(character, gif);
  });
  // const weezing = new Character('weezing');
  // getWeezing = weezing.getCharacterPromise();
  // getWeezing.then((character) => {
  //   console.log(character);
  // });

  // getGloom = Character.prototype.getCharacterPromise();
  // getGloom.then((character) => {
  //   const gloom = new Character();
  //   console.log('Gloom: ', gloom);
  // });

  class Player {
    constructor(playerName) {
      this.name = playerName;
      this.gym = {};
    }
    loadGym(arrayOfCharacters) {
      const arrayOfPromises = [];
      for (let i = 0; i < arrayOfCharacters.length; i++) {
        const characterName = arrayOfCharacters[i];
        const promise = Character.prototype.getCharacterPromise(characterName);
        arrayOfPromises[i] = promise;
      }
    }
  }

  // how to do async "when" the charactersLoaded === 6 ?
  const display = {
    charactersLoaded: 0,
  };

  const professorDoom = new Player('Professor Doom');
  const chuck = new Player('Chuck');

  //   const dragonairPromise = Character.prototype.getCharacterPromise('dragonair');
  //   dragonairPromise.then((character) => {
  //     console.log(character);
  //   })
  //   .catch(function(err) => {
  //       console.log(err);
  //   });
};
