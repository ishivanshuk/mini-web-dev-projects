function countVowel()
{
    const str=document.getElementById('inp').value;
    var x=0;

  const vowels = ["a", "e", "i", "o", "u"]
  if(str=="")
  {
      alert("Enter some text")
  }
  // loop through string to test if each character is a vowel
  for (let letter of str.toLowerCase()) {
      if (vowels.includes(letter)) {
          x++;
      }
  }
  document.getElementById('vowel-count').value=x;

}
