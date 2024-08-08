document.getElementById('khodamform').addEventListener('submit', function(e){
    e.preventDefault();
    const nama = document.getElementById('namaLengkap').value;
    const khodam = generatekhodam(nama);
    document.getElementById('hasil').innerHTML = `<p>Khodam untuk nama ${nama} adalah ${khodam}</p>`;
    document.getElementById('namaLengkap').value = "";
})


function generatekhodam(nama){
  const khodams = [
      'kosong',
      'Cacing berenang',
      'Kucing terbang',
      'ikan jalan',
      'kuda jantan',
      'buah naga',
      'Ayam terbang',
      'Kosong',
      'kelinci gemas',
      'naga berenang',
      'kelinci joget',
      'kosong',
      'Naga kentut',
      'kosong',
      'Kosong',
      'Macan putih',
      'Monyet terbang',
      'Semut',
      'kosong',
    
    ];
    
    const index = nama.length % khodams.length;
    return khodams[index];
}
