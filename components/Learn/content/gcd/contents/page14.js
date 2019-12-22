export default pageFourteen = {
    "title":"<h1>Extended Euclidean Algorithm</h1>",
    "tableHead": ['a', 'b', 'r', 'q', 'a1', 'a2', 'b1', 'b2'],
    "tableData": [
        ['282', '23', '6', '12', '1', '0', '0', '1'],
        ['23', '6', '5', '3', '0', '1', '1', '-12'],
        ['6', '5', '1', '1', '1', '-3', '-12', '37'],
        ['5', '1', '0', '5', '-3', '4', '37', '49']
    ],
    "text": `<p>Remember the following formulas:<br/>
<b>a1 = a2<br/>a2 = a1<br/>a2 = a1 - q * a2<br/>b2 = b1 - q * b2</b><br/><br/>
Fill in the next row like in the standard Euclidean algorithm<br/>
Now to get a1 and b1, look at the previous row a2 and b2<br/>
Notice all the values shifting left?<br/>
Calculate a2 and b2 with the formula above<br/><br/>
Continue for the remaining rows</p>`
}