Rex(function ({ atom, template, ['hotel.state']: state }) {

  @atom.component('evnts-hotel', 'main')
  class Hotel {

    @atom.attached
    async render() {
      this.innerHTML = template('#hotel', await state());
    }

  }

});