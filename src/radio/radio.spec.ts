describe('radio', function () {

  it('radio esta definido', function () {
    
    Rex(function ({ radio }) {
      expect(radio).toBeDefined();
    });

  });

  it('Metodo estatico emit esta definido', function () {
    
    Rex(function ({ radio }) {
      expect(radio.emit).toBeDefined();
    });

  });

  it('Metodo on esta definido', function () {
    
    Rex(function ({ radio }) {
      expect(radio(window).on).toBeDefined();
    });

  });

  it('Iniciando uma esculta', function () {
    
    Rex(function ({ radio }) {

      radio(window).on('radio:test', function (data) {
        expect(data).toBe(true);
      });

      radio.emit('radio:test', true);
      
    });

  });

  it('Metodo off esta definido', function () {
    
    Rex(function ({ radio }) {
      expect(radio(window).off).toBeDefined();
    });

  });

  afterEach(window.onload);

 });