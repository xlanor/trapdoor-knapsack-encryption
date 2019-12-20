export default pageTwelve = {
    "title":"<h1>Extended Euclidean Algorithm</h1>",
    "tableHead": ['a', 'b', 'r', 'q', 'a1', 'a2', 'b1', 'b2'],
    "tableData": [
        ['282', '23', '6', '12', '1', '0', '0', '1'],
        ['23', '6', '5', '3', '0', '', '1', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '']
    ],
    "text": `<p>Remember the following formulas:<br/>
    <b>a1 = a2, a2 = a1<br/>
    a2 = a1 - q * a2, b2 = b1 - q * b2</b><br/>
    Fill in the next row like in the standard Euclidean algorithm<br/>
    Now to get a1 and b1, look at the previous row a2 and b2<br/>
    Notice all the values shifting left?</p>`
}