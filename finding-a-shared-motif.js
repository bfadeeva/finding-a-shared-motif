// Rosalind - finding a shared motif
// https://rosalind.info/problems/lcsm/

fetch('rosalind_lcsm.txt')
  .then(response => response.text())
  .then(data => {

    // Splitting to array with each ">Rosalind_xxxx\nABCD"
    let lines = data.split('>');

    // First element is ' ', so this is to delete it
    lines.shift();
    
    // console.log(lines)

    // Function to delete "Rosalind_XXXX" and all \r\n
    function deleteRosalind(str) {
        return str.slice(13).replaceAll('\r\n', '');
       }
     
       dnaArray = lines.map(deleteRosalind);
 
     console.log(dnaArray);
    
    // how to find a longest common substring of the collection?

    function longestCommonSubstring(arr) {
        // checks whether the input array arr is falsy or empty, 
        // and returns an empty string if that's the case, because there are no strings to compare
        if (!arr || arr.length === 0) return '';
      
        // first string will be a reference point for checking all possible substrings 
        // among all strings in the input array
        const firstString = arr[0];

        // This variable will be used to store the longest common substring found so far
        let longestSubstring = '';
      
        for (let i = 0; i < firstString.length; i++) { // iterates through each character of firstString
          for (let j = i + 1; j <= firstString.length; j++) { // also iterates through each char of firstString BUT is initialized to i + 1
            const substring = firstString.slice(i, j);
            let isCommon = true; // will be used to keep track of whether the current substring is common
      
        // About the 4 lines above (39-42):
        /* 
        By initializing these variables and creating the nested loops, 
        we are setting up the framework for the function 
        to start comparing each possible substring of firstString against all other strings. 
        The isCommon variable is used later in the function to determine whether the current substring 
        is a common substring among all strings in the input array.
        */
            for (let k = 1; k < arr.length; k++) {
              if (!arr[k].includes(substring)) { // each string in the array (except the first one) is checked to see if it includes the current substring
                isCommon = false; // if the substring is not found
                break; // the loop is broken
              }
            }
      
            if (isCommon && substring.length > longestSubstring.length) { // if the current substring is common to all strings in the array and is longer than the longestSubstring variable
              longestSubstring = substring; // then it becomes the new longest common substring
            }
          }
        }
      
        return longestSubstring;
      }
    
    console.log(longestCommonSubstring(dnaArray));

  })
  .catch(error => {
    console.error(error);
  });