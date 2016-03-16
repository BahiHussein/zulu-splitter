var should = require('chai').should(),
    splitter = require('../index');


describe('#split', function() {

  it('split by dist', function() {
    var result = splitter.split('dist', 'name: John Doe \n email: John.Doe@gmail.com \n id:88454 \n\n name: John Roe \n email: John.Roe@gmail.com \n id:88757 \n\n name: Richard Roe \n email: Richard.Roe@gmail.com \n id: 88151');
    console.log(result);
    result.length.should.equal(3);
  });

  it('split by line', function() {
    var result = splitter.split('dist', 'name: John Doe \n email: John.Doe@gmail.com \n id:88454 \n\n name: John Roe \n email: John.Roe@gmail.com \n id:88757 \n\n name: Richard Roe \n email: Richard.Roe@gmail.com \n id: 88151');
    for(var i = 0; i <result.length; i++){
    	var row = splitter.split('line', result[i]);
    	for(var x = 0; x <row.length; x++){
    		console.log(row[x].trim());
    	}
    	console.log("==================");
    }
  });

  it('split by whitespace', function() {
    var result = splitter.split('dist', 'name: John Doe \n email: John.Doe@gmail.com \n id:88454 \n\n name: John Roe \n email: John.Roe@gmail.com \n id:88757 \n\n name: Richard Roe \n email: Richard.Roe@gmail.com \n id: 88151');
    for(var i = 0; i <result.length; i++){
    	var row = splitter.split('line', result[i]);
    	for(var x = 0; x <row.length; x++){
    		console.log(splitter.split('whitespace',row[x].trim()));
    	}
    	console.log("==================");
    }
  });

  it('split by detect pattern in block', function() {
    var result = splitter.split('patternInBlock', "='USER ID:pandya.maitri01@gmail.com'; \n='PASSWARD:97270727'; \n ?><?php"+
" \n ='USER ID:KANU';"+
" \n ='PASSWARD:VOILAAA';"+
" \n ?><?php"+
" \n ='USER ID:darfaisal222@yahoo.com';"+
" \n ='PASSWARD:9123456789';"+
" \n ?><?php"+
" \n ='USER ID:mehrajnazir@gmail.com';"+
" \n ='PASSWARD:901837074545';"+
" \n ?><?php"+
" \n ='USER ID:khanmehandilo@gmail.com';"+
" \n ='PASSWARD:horsefish';"+
" \n ?><?php"+
" \n ='USER ID:vickylove0001@gmail.com';"+
" \n ='PASSWARD:9023239124';"+
" \n  ?><?php"+
" \n ='USER ID:jerin41@gmail.com';"+
" \n ='PASSWARD:redhotchiile';"+
" \n ?><?php"+
" \n ='USER ID:abiddar@yahoo.");
    console.log(result.nodes.length);
    console.log("=======>   " + result.pattern);
    
  });

    it('split by detect pattern in line', function() {
    var result = splitter.split('patternInLine', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
    console.log(result.nodes.length);
    console.log("=======>   " + result.pattern);
    
  });





});