/*!
 * Transformers
 *
 * Date: 2013-8-3
 */
(function( window, undefined ) {
var
	transformer = {
		h: 0,
		a: 0.0001,
		v: 0.02,
		freq: 20,
		listobj: null,
		init: function(listobj) {
			this.listobj = listobj;
			this.h = parseInt(this.listobj.css('height'));
			console.log(0, this.listobj, this.h);
		},
		step: function() {
			console.log(2, transformer.listobj, transformer.h, transformer.v, transformer.a);
			transformer.h += transformer.v * transformer.freq;
			transformer.v += transformer.a * transformer.freq;
			transformer.listobj.css('height', transformer.h);
		},
		setInt: function() {
			console.log(1, this.listobj, this.h);
			setInterval(this.step, this.freq);
		}
	}
	window.transformer = transformer;
})( window );

$(document).ready(function() {
	transformer.init($('#i1'));
	transformer.setInt()
});
