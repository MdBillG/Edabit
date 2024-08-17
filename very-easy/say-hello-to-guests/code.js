function greetPeople(names) {
  // Your code here.
  return names.map(name => `Hello ${name}`).join(', ');
}

module.exports = greetPeople;
