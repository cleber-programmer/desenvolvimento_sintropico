Rex(function ({ atom }) {

  @atom.component('x-button')
  class Rex {

    state

  	@atom.event('click', 'input')
  	action(e) {
  		this.state[e.target.getAttribute('factory')]();
  	}

    @atom.created
    build() {
      this.state = {
        f: () => console.log('front'),
        b: () => console.log('back')
      };
    }

    @atom.attached
    render() {
      this.innerHTML = '<input type="button" value="back" factory="f">';
    }

  }

});