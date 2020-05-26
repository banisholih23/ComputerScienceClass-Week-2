function arraySame(array1 = [], array2 = []) {

  const arrayFind = []
  const tmp = []

  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        tmp.push(array1[i])
        i++
      }
      if ( j === array2.length-1) {
        if (tmp.length > 0) {
          arrayFind.push([...tmp])
          tmp.length = 0
        }
      }
    }
  }
  return arrayFind
}
console.log(arraySame([2,3,4,7,9,10,11],[2,3,4,9,10,11]))