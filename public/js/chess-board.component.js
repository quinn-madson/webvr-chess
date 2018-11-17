window.AFRAME.registerComponent('chess-board', {
	schema: {
		// defaults
		squareSize: {
			default: 0.25
		}
	},
	init: function () {
		var offset = 0;
		this.buildRank = this.buildRank.bind(this);
		var ranks = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
		for (var i = 0, ranksLen = ranks.length; i < ranksLen; i++) {
			var altColor = false;
			if (i % 2 !== 0) {
				altColor = true;
			}
			var rankTemp = this.buildRank(ranks[i], offset, altColor);
			this.el.appendChild(rankTemp);
			offset = offset + parseFloat(this.data.squareSize);
		}
	},
	update: function () {},
	remove: function () {},
	buildRank: function(rank, offset, altColor) {
		offset = offset || 0;
		var files = [1, 2, 3, 4, 5, 6, 7, 8];
		var z = 0;
		var rankContainer = window.document.createElement('a-entity');
		rankContainer.setAttribute('id', rank);
		for (var i = 0, filesLen = files.length; i < filesLen; i++) {
			var box = window.document.createElement('a-box');
			var position = offset + ' ' + this.data.squareSize + ' ' + z;
			box.setAttribute('position', position);
			box.setAttribute('height', this.data.squareSize);
			box.setAttribute('width', this.data.squareSize);
			box.setAttribute('depth', this.data.squareSize);
			if (altColor) {
				box.setAttribute('color', (i % 2 === 0) ? 'black' : 'white' );
			} else {
				box.setAttribute('color', (i % 2 === 0) ? 'white' : 'black' );
			}
			box.setAttribute('square', rank + (i + 1));
			box.setAttribute('rank', rank);
			box.setAttribute('file', (i + 1));
			rankContainer.appendChild(box);
			z = z + parseFloat(this.data.squareSize);
		}
		return rankContainer;
	}
});