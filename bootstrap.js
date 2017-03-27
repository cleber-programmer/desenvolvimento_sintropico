Rex(function ({ atom, memoize, radio }) {

  @atom.component('todo-header', 'header')
	class Input {

		@atom.event('keypress')
		action (e) {
			return (/enter/i.test(e.key) && this.triggerNewItem().clearValue()), this;
		}

		clearValue() {
			return this.getInput().value = '', this;
		}

    @memoize
    getInput() {
      return this.querySelector('input');
    }

    triggerNewItem() {
      return radio.emit('list:add', this.getInput().value), this;
    }

	}

});

Rex(function ({ atom, radio, storage }) {

  @atom.component('todo-list', 'ul')
  class List {

    addItem(item) {
      return storage.set('items', storage.get('items', []).concat(item)), this.render();
    }

    @atom.attached
    build() {
      this.radio = radio(this).on('list:add', this.addItem, this).on('list:refresh', this.render, this);
      this.render();
      return this;
    }

    @atom.detached
    destroy() {
      this.radio.drop();
    }

    render() {
      return this.innerHTML = storage.get('items', []).map((v, i) => `<li is="todo-item" id="${i}"></li>`).join(''), this;
    }

  }

});

Rex(function ({ atom, memoize, radio, storage }) {

  @atom.component('todo-item', 'li')
  class Item {

    @atom.event('click', 'input.toggle')
    completedItem(e) {
      return this.classList[e.target.checked ? 'add' : 'remove']('completed'), this;
    }

    @atom.event('click', 'button.destroy')
    destroyItem() {
      storage.set('items', storage.get('items',  []).filter((v, i) => i != this.getId()));
      radio.emit('list:refresh');
      return this;
    }

    @atom.event('dblclick', 'label')
    editingToggleItem() {
      return this.classList.toggle('editing'), this.focus();
    }

    focus() {
      return this.getInput().focus(), this.getInput().setSelectionRange(1024, 1025), this;
    }

    getId() {
      return this.getAttribute('id');
    }

    @memoize
    getInput() {
      return this.querySelector('input.edit');
    }

    getValue() {
      return storage.get('items', [])[this.getId()];
    }

    @atom.attached
    render() {
      this.innerHTML = `
        <div class="view">
          <input class="toggle" type="checkbox">
          <label>${ this.getValue() }</label>
          <button class="destroy"></button>
        </div>
        <input class="edit" value="${ this.getValue() }">
      `;
      return this;
    }

    save() {
      storage.set('items', storage.get('items',  []).map((v, i) => i == this.getId() ? this.getInput().value : v));
      return this;
    }

    @atom.event('blur', 'input.edit', true)
    @atom.event('change', 'input.edit')
    updateItem(e) {
      return /enter|undefined/i.test(e.key) && (this.save().editingToggleItem().render());
    }

  }

});