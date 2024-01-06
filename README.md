# Monetary Mask

#### Brief description
A mask to handle with monetry values in html inputs.

#### Use
Is very simple of use Monetary Mask. Put the one script tag after body tag in the html file using the `MonetaryMask.js` as source:

    <script src="<your path>/MonetaryMask.js"</script>
  
 In a script, in the same html file, created a instance of `MonetaryMask` passing as parameter the id of a input html element and and the kind of decimal separator, both as `string`:
 

    const mask = new MonetaryMask("id", ",")
 
 That is it, the `MonetaryMask` will be apply to the indicated input element.
 
 The MonetaryMask only will work if the html element indicated by the id is  a text type input. In all other cases, `Error` objects containg different error messages will throw by `MonetaryMask` constructor.

#### Testing the application
The html _testing-interface_ can be used to test the application. It can be download together with  *MonetaryMask* JS file.