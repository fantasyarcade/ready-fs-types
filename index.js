const Directory 	= 0x0000;

const TextMask 		= 0x0200;
const SourceMask	= TextMask | 0x0100;

function text(t) { return TextMask | t; }
function source(t) { return SourceMask | t; }

module.exports = {
	isDirectory(t) { return t === Directory; }
	isText(t) { return (t & TextMask) === TextMask; },
	isSource(t) { return (t & SourceMask) === SourceMask; },
	Types: {
		Directory			: Directory,

		TextPlain			: text(0),
		
		TextReadyScript		: source(0),
		TextReadyDoc		: source(1),
		TextReadyLisp		: source(2),
		TextReadyBasic		: source(3),
		TextJavaScript		: source(4),
		TextGLSL			: source(5),
		TextZ80				: source(6),
		TextCSS				: source(7),
		TextHTML			: source(8)
	}
};
