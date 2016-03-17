zulu-splitter
=========

A library to split text in many different ways. When mining or harvesting data, it is very important to keep the text scope and group related data together. ZULU-SPLITTER offers you different methods to split text and group text according to their distibution, pattern and more. Here is a list by all the current methods to split text 

* blocks
* lines
* block pattern
* line pattern

## Installation

    npm install zulu-splitter --save

## Usage
```javascript
var splitter = require('zulu-splitter');
```
**Example 1**: if you have text file in the following formate and you want to extract data according to their distribution

```txt
name: John Doe
email: John.Doe@gmail.com
id:88454

name: John Roe
email: John.Roe@gmail.com
id:88757

name: Richard Roe
email: Richard.Roe@gmail.com
id:88757
```
using splitter.split('block', text) will split text according to their grouping and will return an array with the following 

```txt
[ 'name: John Doe \n email: John.Doe@gmail.com \n id:88454 ',
  ' name: John Roe \n email: John.Roe@gmail.com \n id:88757 ',
  ' name: Richard Roe \n email: Richard.Roe@gmail.com \n id: 88757' 
]
```

**Example 2**: if you are scanning file with unknown pattern, you may use linePatter or/and blockPattern to split the text. see the text below. 

```php
='USER ID:pandmaitr.ya01i@gmail.com';
='PASSWARD:97270727';
?><?php
='USER ID:KANU';
='PASSWARD:VOILAAA';
?><?php
='USER ID:aisal222darf@yahoo.com';
='PASSWARD:9123456789';
?><?php
='USER ID:naxirmehra@gmail.com';
='PASSWARD:901837074545';
?><?php
```
using 'patternInBlock' the splitter will find the pattern in the text and will split it. 
**NOTE**: patterns retun an object the has pattern(String) and nodes(Array)

```javascript
{ pattern: '?><?php',
  nodes:[ 
    '=\'USER ID:pandmaitr.ya01i@gmail.com\'; \n=\'PASSWARD:97270727\'; \n ',
    ' \n =\'USER ID:KANU\'; \n =\'PASSWARD:VOILAAA\'; \n ',
    ' \n =\'USER ID:aisal222darf@yahoo.com\'; \n =\'PASSWARD:9123456789\'; \n ',
    ' \n =\'USER ID:naxirmehra@gmail.com\'; \n =\'PASSWARD:901837074545\'; \n ',
    ' \n =\'USER ID:khanmehandilo@gmail.com\'; \n =\'PASSWARD:horsefish\'; \n ',
    ' \n =\'USER ID:viloveckylo01@gmail.com\'; \n =\'PASSWARD:9023239124\'; \n  ',
    ' \n =\'USER ID:jrrin4ove1@gmail.com\'; \n =\'PASSWARD:redhotchiile\'; \n ',
    ' \n =\'USER ID:abidamor@yahoo.com' 
    ] 
}
```
## Methods

### split() 

 + @param  {String} [method] [method of split]
 + @param  {String} [text]
 + @return {String[]} [results]

### Methods of split

1. 'block': split text by multi new lines
2. 'line': split text by lines
3. 'whitespace': split text by white spaces
4. 'patternInBlock': split text by the repetitive pattern in text block
5. 'patternInLine': split text by the repetitive pattern in line

## Release History

* 0.1.0 Initial release