const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it('função uppercase transforma as letras de uma palavra em letras maiúsculas.', (done) => {
  uppercase('test', (str) => {
    try {
      expect(str).toBe('TEST');
      done();
    } catch (error) {
      done(error);
    }
  });
});