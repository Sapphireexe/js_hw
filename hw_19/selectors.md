Task 2.

## Xpath/CSS: элемент с id - ‘submit’
* XPath: 
>//*[@id='submit']
* CSS:
>#submit

## Xpath/CSS: все элементы с классом ‘txt’
* XPath: 
>//*[@class='txt']
* CSS:
>.txt

## Xpath: первый элемент с классом ‘txt’
>//*[@class='txt'][1]

## Xpath: кнопку которая содержит текст: ‘Remove comment’
>//button[text() = 'Remove comment']

## Xpath: первый элемент с классом ‘one’ 
>//*[contains(@class,'one')][1]

## Xpath/CSS: элемент с атрибутом ‘multitag2’ и значением  ‘on’ 
* XPath: 
>//*[@multitag2='on']
* CSS:
>[multitag2='on']

## Xpath/CSS: всех детей элемента ‘div’ с классом ‘content’ 
* XPath: 
>//div/*[@class='content']
* CSS:
>div > .content

## CSS: все элементы ‘span’ и  ‘button’ с классом ‘content’ 
>span.content, button.content

## Xpath: используя за основу селектор //*[@id='submit'] найти элемент body 
>//*[@id='submit']/ancestor::body