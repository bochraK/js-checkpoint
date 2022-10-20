
// •	The length of the sentence (the number of characters).
const str = 'Life, the universe and everything. Answer:';

console.log(`${str} ${str.length}`);

// •	The number of words in the sentence (assuming that the words are separated by a single space).

•	
•	// javascript program to count no of words
•	// from given input string.
•	    var OUT = 0;
•	    var IN = 1;
•	     
•	    // returns number of words in str
•	    function countWords( str)
•	    {
•	        var state = OUT;
•	        var wc = 0; // word count
•	        var i = 0;
•	         
•	        // Scan all characters one
•	        // by one
•	        while (i < str.length)
•	        {
•	         
•	            // If next character is a separator,
•	            // set the state as OUT
•	            if (str[i] == ' ' || str[i] == '\n'||
•	                                  str[i] == '\t')
•	                state = OUT;
•	                 
•	     
•	            // If next character is not a word
•	            // separator and state is OUT, then
•	            // set the state as IN and increment
•	            // word count
•	            else if (state == OUT)
•	            {
•	                state = IN;
•	                ++wc;
•	            }
•	     
•	            // Move to next character
•	            ++i;
•	        }
•	         
•	        return wc;
•	    }
•	     
•	    // Driver program to test above functions
•	        var str = "One two     three\n four\tfive ";
•	        document.write("No of words : "
•	                              + countWords(str));
•	 
•	// This code is contributed by bunnyram19.
•


// •	The number of vowels in the sentence.


function countVowel(str) { 

    // find the count of vowels
    const count = str.match(/[aeiou]/gi).length;

    // return number of vowels
    return count;
}

// take input
const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);

