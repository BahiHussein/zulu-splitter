/**
 * split text in many ways
 *
 * @param  {String} [method] [method of split]
 * @param  {String} [text]
 * @return {String[]} [results]
 * 
 */


var results = [];
var record  = [];
var pattern = "";
var exists = -1;

var foundKeyInArray = function(array, key){
	var index = -1;
	for(var i = 0; i < array.length; i++){
		if(array[i].key == key){
			return index = i;
		}
	}
	return index;
};

var occurrenceValueInArray = function(array){
	var index = -1;
	var holder= 0;

	for(var i = 0; i < array.length; i++){
		if(array[i].value > holder){
			holder = array[i].value;
			index = i;
		}
	}

	return index;
};

module.exports = {
  split: function(method, text) {

  	text = text.toString();
  	results = [];

  	switch(method){
  		case "block":
	  		results = text.split(new RegExp("[\\n\\r|\\n|\\r]{2}"));
	  		break;
	  	case "line":
	  		results = text.split(/\r?\n/);
	  		break;
	  	case "whitespace":
	  		results = text.split(/\s+/g);
	  		break;
	  	case "patternInBlock":
	  		results = text.split(/\r?\n/);
	  		record = [];

	  		//checkLinePattern
	  		for(var i = 0; i < results.length; i++){
	  			exists = foundKeyInArray(record, results[i]);
	  			if( exists > -1){
	  				record[exists].value += 1;
	  			} else {
	  				record.push({key: results[i], value: 0});
	  			}
	  		}

	  		//splitAccordingToOccourancePattern
	  		exists = occurrenceValueInArray(record);
	  		if(exists > -1){
	  			pattern = record[exists].key.trim();
	  			results = {pattern: pattern, nodes: text.split(pattern)};
	  		}
	  		break;

	  	case "patternInLine":
	  		results = text.split(/\s+/g);
	  		record = [];

	  		//checkLinePattern
	  		for(var i = 0; i < results.length; i++){
	  			exists = foundKeyInArray(record, results[i]);
	  			if( exists > -1){
	  				record[exists].value += 1;
	  			} else {
	  				record.push({key: results[i], value: 0});
	  			}
	  		}

	  		//splitAccordingToOccourancePattern
	  		exists = occurrenceValueInArray(record);
	  		if(exists > -1){
	  			pattern = record[exists].key.trim();
	  			results = {pattern: pattern, nodes: text.split(pattern)};
	  		}
	  		break;

	  	default:
	  		results = text.split();
  	}

    return results;
  }

};