const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it('uppercase "quesia" to eqaul "QUESIA"', (done) => {
    uppercase('quesia', (str) => {
        try {
            expect(str).toBe('QUESIA');
            done();
        } catch (error) {
            done(error);
        }
    });
});