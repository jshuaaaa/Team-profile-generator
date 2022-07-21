const Employee = require('../index')
const Intern = require('../index')
const Engineer = require('../index')

describe("Employee", () => {
    it("Can instantiate Employee instance", () => {
        const test = new Employee();
        expect(typeof(test)).toBe("object");
    });
})