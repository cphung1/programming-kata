const urlDecode = function(text) {
  text = text.replace(/%20/g, ' ')
  text = text.replace(/=/g, ': ')
  text = text.split('&')
  let outputObject = {} 

  for (let i = 0; i < text.length; i++) {
    let split = text[i].split(':');
    outputObject[split[0].trim()] = split[1].trim();
  }
  
  return(outputObject)

};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);