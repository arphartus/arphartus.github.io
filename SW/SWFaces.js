const faces = {
	ability: {
		svg : "height='40' width='40' viewbox='0 0 200 200'><polygon points='100,35 13,185 187,185' style='fill:rgb(0,216,0)'",
		faces: {
			blank: "",
			a: "<text text-anchor='middle' x='100' y='146' fill='black' font-family='SW' font-size='50pt'>a</text>",
			s: "<text text-anchor='middle' x='100' y='148' fill='black' font-family='SW' font-size='55pt'>s</text>",
			ss: "<text text-anchor='middle' x='100' y='116' fill='black' font-family='SW' font-size='36pt'>s</text><text text-anchor='middle' x='100' y='160' fill='black' font-family='SW' font-size='36pt'>s</text>",
			as: "<text text-anchor='middle' x='100' y='110' fill='black' font-family='SW' font-size='28pt'>a</text><text text-anchor='middle' x='100' y='160' fill='black' font-family='SW' font-size='36pt'>s</text>",
			aa: "<text text-anchor='middle' x='100' y='110' fill='black' font-family='SW' font-size='28pt'>a</text><text text-anchor='middle' x='100' y='155' fill='black' font-family='SW' font-size='28pt'>a</text>",
		}
	},

	boost: {
		svg : "height='40' width='40' viewbox='0 0 200 200'><polygon points='25,35 25,185 175,185 175,35' style='fill:rgb(64,240,240)'",
		faces: {
			blank: "",
			a: "<text text-anchor='middle' x='100' y='135' fill='black' font-family='SW' font-size='70pt'>a</text>",
			s: "<text text-anchor='middle' x='100' y='140' fill='black' font-family='SW' font-size='75pt'>s</text>",
			aa: "<text text-anchor='middle' x='75' y='100' fill='black' font-family='SW' font-size='38pt'>a</text><text text-anchor='middle' x='125' y='155' fill='black' font-family='SW' font-size='38pt'>a</text>",
			as: "<text text-anchor='middle' x='75' y='100' fill='black' font-family='SW' font-size='38pt'>a</text><text text-anchor='middle' x='125' y='155' fill='black' font-family='SW' font-size='45pt'>s</text>",
		}
	},

	proficiency: {
		svg: "height='38' width='38' viewbox='-25 -10 225 190'><polygon points='100,0 5,70 41,181 159,181 195,70' style='fill:rgb(240,240,0)'",
		faces: {
			blank: "",
			a: "<text text-anchor='middle' x='100' y='125' fill='black' font-family='SW' font-size='63pt'>a</text>",
			s: "<text text-anchor='middle' x='100' y='125' fill='black' font-family='SW' font-size='75pt'>s</text>",
			S: "<text text-anchor='middle' x='100' y='125' fill='black' font-family='SW' font-size='70pt'>x</text>",
			aa: "<text text-anchor='middle' x='100' y='85' fill='black' font-family='SW' font-size='40pt'>a</text><text text-anchor='middle' x='100' y='145' fill='black' font-family='SW' font-size='40pt'>a</text>",
			as: "<text text-anchor='middle' x='100' y='85' fill='black' font-family='SW' font-size='40pt'>a</text><text text-anchor='middle' x='100' y='148' fill='black' font-family='SW' font-size='45pt'>s</text>",
			ss: "<text text-anchor='middle' x='100' y='85' fill='black' font-family='SW' font-size='45pt'>s</text><text text-anchor='middle' x='100' y='148' fill='black' font-family='SW' font-size='45pt'>s</text>",
		}
	},

	force: {
		svg: "height='38' width='38' viewbox='-25 -10 225 190'><polygon points='100,0 5,70 41,181 159,181 195,70' style='fill:white'",
		faces: {
			d: "<text text-anchor='middle' x='100' y='130' fill='black' font-family='SW' font-size='70pt'>z</text>",
			dd: "<text text-anchor='middle' x='100' y='85' fill='black' font-family='SW' font-size='45pt'>z</text><text text-anchor='middle' x='100' y='148' fill='black' font-family='SW' font-size='45pt'>z</text>",
			l: "<text text-anchor='middle' x='100' y='130' fill='black' font-family='SW' font-size='65pt'>Z</text>",
			ll: "<text text-anchor='middle' x='100' y='85' fill='black' font-family='SW' font-size='42pt'>Z</text><text text-anchor='middle' x='100' y='148' fill='black' font-family='SW' font-size='42pt'>Z</text>",
		}
	},

	setback: {
		svg : "height='40' width='40' viewbox='0 0 200 200'><polygon points='25,35 25,185 175,185 175,35' style='fill:black'",
		faces: {
			blank: "",
			t: "<text text-anchor='middle' x='100' y='140' fill='white' font-family='SW' font-size='75pt'>t</text>",
			f: "<text text-anchor='middle' x='100' y='145' fill='white' font-family='SW' font-size='75pt'>f</text>",
		}
	},

	challenge: {
		svg: "height='38' width='38' viewbox='-25 -10 225 190'><polygon points='100,0 5,70 41,181 159,181 195,70' style='fill:rgb(216,0,0)'",
		faces: {
			blank: "",
			t: "<text text-anchor='middle' x='100' y='130' fill='white' font-family='SW' font-size='70pt'>t</text>",
			f: "<text text-anchor='middle' x='100' y='135' fill='white' font-family='SW' font-size='70pt'>f</text>",
			F: "<text text-anchor='middle' x='100' y='120' fill='white' font-family='SW' font-size='70pt'>y</text>",
			tt: "<text text-anchor='middle' x='100' y='85' fill='white' font-family='SW' font-size='45pt'>t</text><text text-anchor='middle' x='100' y='148' fill='white' font-family='SW' font-size='45pt'>t</text>",
			ft: "<text text-anchor='middle' x='100' y='85' fill='white' font-family='SW' font-size='45pt'>t</text><text text-anchor='middle' x='100' y='153' fill='white' font-family='SW' font-size='45pt'>f</text>",
			ff: "<text text-anchor='middle' x='100' y='90' fill='white' font-family='SW' font-size='45pt'>f</text><text text-anchor='middle' x='100' y='153' fill='white' font-family='SW' font-size='45pt'>f</text>",
		}
	},

	difficulty: {
		svg : "height='40' width='40' viewbox='0 0 200 200'><polygon points='100,35 13,185 187,185' style='fill:rgb(96,0,192)'",
		faces: {
			blank: "",
			t: "<text text-anchor='middle' x='100' y='146' fill='white' font-family='SW' font-size='50pt'>t</text>",
			f: "<text text-anchor='middle' x='100' y='160' fill='white' font-family='SW' font-size='50pt'>f</text>",
			tt: "<text text-anchor='middle' x='100' y='110' fill='white' font-family='SW' font-size='32pt'>t</text><text text-anchor='middle' x='100' y='160' fill='white' font-family='SW' font-size='32pt'>t</text>",
			ft: "<text text-anchor='middle' x='100' y='110' fill='white' font-family='SW' font-size='32pt'>t</text><text text-anchor='middle' x='100' y='165' fill='white' font-family='SW' font-size='32pt'>f</text>",
			ff: "<text text-anchor='middle' x='100' y='115' fill='white' font-family='SW' font-size='32pt'>f</text><text text-anchor='middle' x='100' y='165' fill='white' font-family='SW' font-size='32pt'>f</text>",
		}
	}
};