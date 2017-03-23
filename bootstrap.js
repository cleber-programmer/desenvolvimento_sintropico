Rex(function ({ atom }) {

	@atom.component('x-x')
	class X {

		@atom.event('click', 'span')
		action() {
			console.log('kkkkk')
		}

		@atom.attached
		render() {
			this.innerHTML = '<span>ola</span>';
		}

	}

});