/** FEEDBACK: Great job! You have all test cases passing! */
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
  if (team.matches[0] === undefined) {
    return null
  } else {
    return team.matches[0].teamName
  }
};

const listAllKeys = (obj) => {
  return Object.keys(obj)
};

const listAllValues = (obj) => {
  return Object.values(obj)
};

// const users = [
//   {
//     name: 'Sara',
//     age: 30,
//     bio: 'What a legend',
//   },
//   {
//     name: 'Bob',
//     age: 30,
//     bio: "Kind of mean if we're being honest",
//   },
// ];

const convertToMatrix = (arr) => {
  let newArr = [];
  if (arr[0] === null || arr[0] === undefined) return newArr;
  newArr.push(Object.keys(arr[0]))

  for (const items in arr) {
    newArr.push(Object.values(arr[items]))
  }

  return newArr;
};

// console.log(convertToMatrix(users))


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
