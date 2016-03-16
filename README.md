zulu-splitter
=========

A library to split according to

1. blocks
2. lines
3. block pattern
4. line pattern

## Installation

  npm install zulu-splitter --save

## Usage

  var splitter = require('zulu-splitter');

  var text1 = 'name: John Doe \n email: John.Doe@gmail.com \n id:88454 \n\n name: John Roe \n email: John.Roe@gmail.com \n id:88757 \n\n name: Richard Roe \n email: Richard.Roe@gmail.com \n id: 88151';

  var nodes = splitter.split('block', text1);

    return:
    [ 'name: John Doe \n email: John.Doe@gmail.com \n id:88454 ',
      ' name: John Roe \n email: John.Roe@gmail.com \n id:88757 ',
      ' name: Richard Roe \n email: Richard.Roe@gmail.com \n id: 88151' ]

  var nodes = splitter.split('line', text1);
    return:
    [ 'name: John Doe', 
    'email: John.Doe@gmail.com',
    'id:88454 ',
    ' name: Richard Roe,
    'email: John.Roe@gmail.com',
    'id:88757',
    'name: Richard Roe',
    'email: Richard.Roe@gmail.com',
    'id: 88151' ]

var text2 = "name: John Doe \n email: John.Doe@gmail.com \n id:88454 ====== \n\n name: John Roe \n email: John.Roe@gmail.com \n id:88757 ====== \n\n name: Richard Roe \n email: Richard.Roe@gmail.com \n id: 88151'";

var nodes = splitter.split('patternInBlock', text2);

    return:
    {
    pattern: '======';
    nodes:
    ['name: John Doe \n email: John.Doe@gmail.com \n id:88454',
     '\n\n name: John Roe \n email: John.Roe@gmail.com \n id:88757',
     '\n\n name: Richard Roe \n email: Richard.Roe@gmail.com \n id: 88151']
    }

var text3 = "name: John Doe name: Richard Roe name: John Roe";
var nodes = splitter.split('patternInLine', text3);

    return:
    {
    pattern: 'name';
    nodes:
    ['John Doe', 'Richard Roe', 'John Roe']
    }


## split()

  splitter.split(method, text) takes two arguments

  ### Types of Methods

1. 'block': split text according to its' distribution 
2. 'line': split text by lines
3. 'whitespace': split text by white spaces
4. 'patternInBlock': split text by the repetitive pattern in text block
5. 'patternInLine': split text by the repetitive pattern in line

## Release History

* 0.1.0 Initial release