anagrams = ["cook", "save", "taste", "aves", "vase", "state", "map"];

function anagramGroup(anagram) {
  // untuk menyimpan kumpulan anagram
  const container = {};
  // nomor prime digunakan untuk kalkulasi nomor unik pada setiap string
  const primeNumber = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101,
  ];

  for (const a of anagram) {
    let key = 1;
    for (let i = 0; i < a.length; i += 1) {
      // mencari kode ascii untuk setiap string
      const ascii = a.charCodeAt(i);
      // kode ascii a dimulai dari angka 97
      key *= primeNumber[ascii - 97];
    }
    // abc cba
    if (container[key]) {
      // jika key terdapat pada kontainer maka kata tersebut ditambahkan
      container[key].push(a);
    } else {
      // jika belum ada maka akan membuat array baru
      container[key] = [a];
    }
  }
  // console.log(container)
  return Object.values(container);
}

// anagramGroup(anagrams)
const result = anagramGroup(anagrams);
console.log(result);
