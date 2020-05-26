function cekString(str) {
  const teks = 'pada suatu hari saya pergi ke kantor ternyata kantor saya hari ini tutup'
  const strSplit = str.split(' ')

  //console.log(strSplit)

  for ( i = 0; i < strSplit.length; i++) {
    const check = teks.search(strSplit[i])
    if (check == -1) {
      return false
    }
  }
  return true
}
console.log(cekString('saya tutup kantor suatu hari nanti'))
