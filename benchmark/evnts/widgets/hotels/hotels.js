Rex(function ({ atom, ['hotels.close']: close }) {

  @atom.component('evnts-hotels', 'section')
  class Hotel {

    @atom.created
    build() {
      this.paint = close(this);
    }

    @atom.attached
    async render() {
      this.innerHTML = await this.paint();
    }

    @atom.event('click', 'td')
    select({ target }) {
      location.assign(`./hotel.html?id=${ target.parentNode.dataset.id }`);
    }

    @atom.event('click', 'a')
    toggle(e) {
      e.preventDefault();
      this.paint.toggle().render();
    }
    
  }

});