Rex(function ({ atom }) {

  @atom.component('evnts-image', 'section')
  class Image {

    @atom.attached
    echo() {
      requestAnimationFrame(() =>
        this.style.backgroundImage = `url(${ this.getAttribute('src') })`
      )
    }

  }

});