
const createEmptyStrings = require('../src/component/chatUtil');

test('first test - single word', () => {
    expect(createEmptyStrings("hey")).toBe(["","",""]);
  });