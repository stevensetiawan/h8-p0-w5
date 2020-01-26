function changeVocals (str) {
  //code di sini
  let hasil=""
  let kamus="aiueo"
  let kamus2="bjvfp"
  for(i=0; i<str.length; i++){
      val=false
      for(j=0; j<kamus.length; j++){
        let upper=str[i].toUpperCase()
        let lower=str[i].toLowerCase()
        if(str[i].toLowerCase()==kamus[j]){
            val=true
            if(str[i]==upper){
            hasil+=kamus2[j].toUpperCase()}
            else if(str[i]==lower){
                hasil+=kamus2[j].toLowerCase()}
            }
            
        }
        if(val===false)
        {hasil+=str[i]}        
  }
  return hasil;
}

function reverseWord (str) {
  //code di sini
  let hasil=""
  for(k=str.length-1; k>=0; k--){
      hasil+=str[k]
  }
  return hasil
}

function setLowerUpperCase(str) {
  //code di sini
  let hasil2=""
  for(m=0; m<str.length; m++){
    let upper=str[m].toUpperCase()
    let lower=str[m].toLowerCase()
    if(str[m]==upper){
        hasil2+=str[m].toLowerCase()}
        else if(str[m]==lower){
            hasil2+=str[m].toUpperCase()}
  }
  return hasil2;
}

function removeSpaces (str) {
  //code di sini  
  let hasil=""
  for(n=0; n<str.length; n++){
      if(str[n]!==" "){
            hasil+=str[n]
      }
  }
  return hasil
}

function passwordGenerator (name) {
  //code di sini
  let hasil=""
  hasil=removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))))
  return hasil
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex'));