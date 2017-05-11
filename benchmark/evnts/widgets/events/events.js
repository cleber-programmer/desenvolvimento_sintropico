Rex(function ({ atom, template, ['events.state']: state }) {

  @atom.component('evnts-event', 'ul')
  class Event {

    @atom.attached
    async render() {
      this.innerHTML = template('#events', await state());
    }

  }

});