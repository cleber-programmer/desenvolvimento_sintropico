describe('Rex', function () {

  it('Rex esta definido', function () {
    expect(Rex).toBeDefined();
  });

  it('Definindo um modulo chamado add', function () {

    Rex('add', function () {
      return function (a, b) {
        return a + b;
      };
    });
    
  });

  it('Verificando se o modulo add esta definido', function () {

    Rex(function ({ add }) {
      expect(add).toBeDefined();
    });
    
  });

  it('Consumindo modulo add', function () {

    Rex(function ({ add }) {
      expect(add(1, 2)).toBe(3);
    });
    
  });

  it('Definindo um modulo chamado soma, composto pelo modulo add', function () {

    Rex('soma', function ({ add }) {
      return function (a, ...b) {
        return b.reduce(add, a);
      };
    });
    
  });

  it('Verificando se o modulo soma esta definido', function () {

    Rex(function ({ soma }) {
      expect(soma).toBeDefined();
    });
    
  });

  it('Consumindo o modulo soma', function () {

    Rex(function ({ soma }) {
      expect(soma(1)).toBe(1);
      expect(soma(1, 2)).toBe(3);
      expect(soma(1, 2, 3)).toBe(6);
    });
    
  });

  afterEach(window.onload);

});