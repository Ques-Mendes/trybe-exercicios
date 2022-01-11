beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

/* line 1 beforeEach before every test
   line 4 run the test
   line 2 afterEach after each test 
   line 6 beforeEach before every test
   line 7 beforeEach before every test inside the describe
   line 10 run the test
   line 8 afterEach after each test inside the describe*/