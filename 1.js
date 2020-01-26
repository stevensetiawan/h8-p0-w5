function sorting(arrNumber) {
  // code di sini
  for(i=0; i<arrNumber.length;i++){
      for(j=0; j<arrNumber.length-1; j++){
          if(arrNumber[j]<arrNumber[j+1]){
              temp=arrNumber[j]
              arrNumber[j]=arrNumber[j+1]
              arrNumber[j+1]=temp
          }
      }
  }
  return arrNumber;
}

function getTotal(arrNumber) {
  // code di sini
  var hasil=[[arrNumber[0],1]]

  for(k=1; k<arrNumber.length; k++){
      for(n=0; n<hasil.length; n++){
    if(arrNumber[k]==hasil[n][0]){
            hasil[n][1]++
  }
  else{hasil.push([arrNumber[k],1])}
  }
}
if(arrNumber.length==0){
    return "''"
}
  return `angka paling besar adalah ${hasil[0][0]} dan kemunculan sebanyak ${hasil[0][1]}`;
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));