const coolGreeting = (person) => {
  let capName = person.name.toUpperCase()
  if (person.isCool === true) {
    return `What is UP ${capName}? How you been doin'?`
  } else {
    return `Greetings ${person.name}, how have you been lately?`
  }
};

const haveBirthday = (person) => {
  person.age = person.age + 1
};

const becomeSecretAgent = (person, spyHandle) => {

};

const carMaker = (name, maker, year) => {
  const car = {
    name: name,
    maker: maker,
    year: year,
    needsOilChange: false
  }
  return car
};

const weAreNotFriends = () => {
};

const listHobbies = () => {
};

const getNextOpponent = () => {
};

const listAllKeys = () => {
};

const listAllValues = () => {
};

const convertToMatrix = () => {
};

module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};
