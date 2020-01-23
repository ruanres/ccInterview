module.exports = (table, name, tester) => {
  describe.each(table)(name, tester);
};
