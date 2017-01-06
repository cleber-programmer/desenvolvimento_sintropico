describe('Rex', function () {

  it('Rex esta definido', function () {
    expect(Rex).toBeDefined();
  });

  it('Definir modulo Soma', function () {

    Rex('soma', function () {
      return function (a, b) {
        return a + b;
      };
    });
    
  });

  it('Modulo Soma esta definido', function () {

    Rex(function ({ soma }) {
      expect(soma).toBeDefined();
    });
    
  });

  it('Soma dois numeros', function () {

    Rex(function ({ soma }) {
      expect(soma(1, 2)).toBe(3);
    });
    
  });

  it('Definir modulo Calcula', function () {

    Rex('calcula', function () {
      return function (operador, a, ...b) {
        return b.reduce(operador, a);
      };
    });
    
  });

  it('Modulo Calcula esta definido', function () {

    Rex(function ({ calcula }) {
      expect(calcula).toBeDefined();
    });
    
  });

  it('Calcular a Soma de numeros', function () {

    Rex(function ({ calcula, soma }) {
      expect(calcula(soma, 1)).toBe(1);
      expect(calcula(soma, 1, 2)).toBe(3);
      expect(calcula(soma, 1, 2, 3)).toBe(6);
    });
    
  });

  afterEach(window.onload);

});