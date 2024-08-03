class Main {

	decklist = null;

	races() {
		const path = '/assets/img/decks/';
		const races = [
			{id: 'angels', name: 'Anjos'},
			{id: 'demons', name: 'Demônios'},
			{id: 'dwarves', name: 'Anões'},
			{id: 'elfs', name: 'Elfos'},
			{id: 'humans', name: 'Humanos'},
			{id: 'monsters', name: 'Monstros'},
			{id: 'orcs', name: 'Orcs'},
			{id: 'vampires', name: 'Vampiros'}
		];
		return races.map(race => {return {name: race.name, id: race.id, url: path+race.id} });
	}

	shuffleArray(array) {
		return array.sort(() => Math.random() - 0.5);
	}

	toggleTransition() {
		document.querySelector("#card").classList.add('spin360');
		setTimeout(() => {
			document.querySelector("#card").classList.remove('spin360');
		}, 1000);
	}

	changeCard(position) {
		document.querySelector("#card .top .card-name").innerHTML = deck[position].name;
		document.querySelector("#card .top img").src = deck[position].image;
		document.querySelector("#card .top .race").innerHTML = deck[position].race;
		document.querySelector("#card .top .description .text").innerHTML = deck[position].description;
		document.querySelector("#card .top .description .especial").innerHTML = this.gainEspecial();
		document.querySelector("#card .top .description .helth").innerHTML = this.gainLife();
		document.querySelector("#card .top .life").innerHTML = this.setLife();
		document.querySelector("#card .top .damage").innerHTML = '+'+this.setDamage();
	}

	rand(min, max) {
		min = Math.ceil(min);
	    max = Math.floor(max);
	    return Math.floor(Math.random() * (max - min + 1) + min);
	}

	setLife() {
		return this.rand(20,30);
	}

	setDamage() {
		return this.rand(3,9);
	}
	
	gainLife() {
		let cure = this.rand(3, 10);
		let chance = this.rand(1, 50);
		let path = '/assets/img/images/cure.png';
		if(chance >= 30) {
			return `<img src="${path}" class="icon-helth">${cure}`;
		} else {
			return '';
		}
	}

	gainEspecial() {
		let races = ['Elfos','Orcs','Humanos','Monstros'];
		let path = '/assets/img/images/especial.png';
		let especial = [
			'Aumente +{x} de dano.',
			'Aumente +{x} de vida.',
			'Cause o dobro o seu dano no próximo ataque.',
			'Suas rolagens são sempre a metade.',
			'Próxima carta recebe +{x} de vida extra.',
			'Próxima carta recebe +{x} de dano extra.',
			'O dano que sofrer será sempre a metade.',
			'O dano que sofrer será reduzido em {x}.',
			'Você recebe +{x} de dano contra {race}.',
			'A sua última carta tem +{x} dano e vida.'
		];
		let position = this.rand(0, especial.length-1);
		let race_position = this.rand(0, races.length-1);
		especial = especial[position].replace('{x}', this.rand(1,6));
		especial = especial.replace('{race}', races[race_position]);
		let chance = this.rand(1, 50);
		if(chance >= 40) {
			return `<img src="${path}" class="icon-especial"><span>${especial}</span>`;
		} else {
			return '';
		}
	}

	getDeck(deck) {
		return deck.slice(0, MAXCARDS_DECK);
	}

	setDecklist(name) {
		switch(name) {
			case 'angels': this.decklist = this.getDeck(this.shuffleArray(angels));
			break;
			case 'demons': this.decklist = this.getDeck(this.shuffleArray(demons));
			break;
			case 'dwarves': this.decklist = this.getDeck(this.shuffleArray(dwarves));
			break;
			case 'elfs': this.decklist = this.getDeck(this.shuffleArray(elfs));
			break;
			case 'humans': this.decklist = this.getDeck(this.shuffleArray(humans));
			break;
			case 'monsters': this.decklist = this.getDeck(this.shuffleArray(monsters));
			break;
			case 'orcs': this.decklist = this.getDeck(this.shuffleArray(orcs));
			break;
			case 'vampires': this.decklist = this.getDeck(this.shuffleArray(vampires));
			break;
		}
	}

	setDecks() {
		const object = this;
		let HTML = '';
		this.races().forEach(deck => {
			HTML += `
			<div class="deck" data-id="${deck.id}" data-name="${deck.name}">
				<span>${deck.name}</span>
				<img src="${deck.url}.jpg">
			</div>
			`;
		});
		document.querySelector("#decks").innerHTML = HTML;

		document.querySelectorAll('.deck').forEach(element => {
			element.addEventListener('click', function() {
				document.querySelectorAll('.deck img').forEach(e => {
					e.style.border = '5px solid #000';
					element.querySelector('img').style.transition = '0.3s';
				});
				object.setDecklist(element.dataset.id);
				deck = object.decklist;
				localStorage.setItem('deckname', element.dataset.id);
				document.querySelector("#mydeck").innerHTML = element.dataset.name;
				element.querySelector('img').style.border = '5px solid #00FF00';
				setTimeout(function() {
					document.querySelector('.modal').classList.remove('fadein');
					document.querySelector('.modal').classList.add('fadeout');
					window.location.reload();
				}, 1000);
			});
		});
	}
}