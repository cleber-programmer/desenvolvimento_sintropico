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

  it('Metodo off esta definido', function () {
    
    Rex(function ({ radio }) {
      expect(radio(window).off).toBeDefined();
    });

  });

  it('Fluxo completo de uma transmissao', function () {
    
    Rex(function ({ radio }) {

      function predicate(data) {
        expect(data).toBe(true);
      }

      var context = {
        detachedCallback() {

        }
      }

      var r = radio(context);

      r.on('radio:1', predicate);
      r.on('radio:2', predicate);

      radio.emit('radio:1', true);
      radio.emit('radio:2', true);

      r.off('radio:1', predicate);

      radio.emit('radio:1', false);

      context.detachedCallback();

      radio.emit('radio:2', false);
      
    });

  });

  afterEach(window.onload);

 });