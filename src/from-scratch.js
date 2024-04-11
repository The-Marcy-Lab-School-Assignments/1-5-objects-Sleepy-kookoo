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
  delete person.name;

  person.spyHandle = spyHandle
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

const weAreNotFriends = (person) => {
  return person.friends.pop()

};

const listHobbies = (person) => {
  const { name, age, hobbies } = person
  for (let i = 0; i < person.hobbies.length; i++) {
    console.log(`${name} likes ${person.hobbies[i]}.`)
  };
}

const getNextOpponent = (team) => {
  // for (let i = 0; i < team.matches.teamName.length; i++) {
  //   return team.teamName[i]
  // }
  // another way?
  if (team.matches[0] === undefined) {
    return null
  } else {
    return team.matches[0].teamName
  }
};

const listAllKeys = (obj) => {

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
