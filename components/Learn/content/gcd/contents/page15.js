export default pageFifteen = {
    "title":"Extended Euclidean Algorithm",
    "tableHead": ['a', 'b', 'r', 'q', 'a1', 'a2', 'b1', 'b2'],
    "tableData": [
        ['282', '23', '6', '12', '1', '0', '0', '1'],
        ['23', '6', '5', '3', '0', '1', '1', '-12'],
        ['6', '5', '1', '1', '1', '-3', '-12', '37'],
        ['5', '1', '0', '5', '-3', '4', '37', '49']
    ],
    "text": `<p>Stop when r = 0 like in the original Euclidean Algorithm<br/>
Now to find out the multiplicative inverse.<br/>
First, the GCD must be 1 like in this case<br/>
If your find that the GCD is not 1, there is no multiplicative inverse for the value you are comparing<br/><br/>
So to get the multiplicative inverse of 23 when modulus is 282<br/>
Since 23 is under b, we look at b2<br/>
If you did the table differently and the value is under a then look at a2<br/><br/>
b2 = -49 and therefore, the multiplicative inverse of 23 is -49 mod 292<br/>
Since -49 is negative,<br/>
282 - 49 = 233<br/>
<b>233 is the multiplicative inverse of 23 mod 282.</b></p>`
}