/*
  Write a function that converts HEX to RGB. Then Make that function autodetect
  the formats so that if you enter HEX color format it returns RGB and if you
  enter RGB color format it returns HEX.
  Bonus: Release this tool as a npm package.
*/

let hex = "F2AB7D"; // Equivalent to rgb(242,171,125)
let rgb = [242, 171, 125]; // Equivalente to the upper hex value


const hexTable = number => {

	if (parseInt(number) < 10) return parseInt(number);
	
	else {
		switch(number) {
			case 10: return "A";
				break;
			case 11: return "B";
				break;
			case 12: return "C";
				break;
			case 13: return "D";
				break;
			case 14: return "E";
				break;
			case 15: return "F";
				break;

			case "A": return 10;
				break;
			case "B": return 11;
				break;
			case "C": return 12;
				break;
			case "D": return 13;
				break;
			case "E": return 14;
				break;
			case "F": return 15;
				break;
		}
	}
}

const HEXandRGB = value => {
	//if is hex / TO RGB
	if (value.length === 6) {
		let rgb = new Array(3);

		rgb[0] = (hexTable(value[0])*16) + hexTable(value[1]);
		rgb[1] = (hexTable(value[2])*16) + hexTable(value[3]);
		rgb[2] = (hexTable(value[4])*16) + hexTable(value[5]);
		return rgb;

	} 
	// if is rgb / TO HEX
	else if (value.length === 3) {
		
		let hex = "";
		for (let i=0; i<3; i++) hex += hexTable(Math.floor(value[i]/16)) + hexTable(value[i]%16);

		return hex;
	} 
	else return undefined;
}

// Testing HEXandRGB function
console.log(HEXandRGB(hex));
console.log(HEXandRGB(rgb));