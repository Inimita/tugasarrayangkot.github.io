var penumpang = [];//array kosong
var tambahPenumpang = function(namaPenumpang, penumpang){
    if (penumpang.length == 0)//panjang array atau data
    {
        penumpang.push(namaPenumpang);//untuk menambahkan penumpang pertama atau data ke dalam array
        return penumpang;//untuk mengembalikan isi array & keluar dari function
    }else{
        for(i=0; i < penumpang.length; i++)//untuk menelusuri seluruh kursi dari awal
        {
        if(namaPenumpang == penumpang[i])//jika nama penumpang sudah ada didalm array
        {
            console.log(namaPenumpang + 'sudah ada didalam angkot');//akan menampilkan pesan kesalahan
            return penumpang;//mengembalikan isi array & keluar dari function
        }else if (i == penumpang.length - 1)// i bernilai 0 dan penumpang.length bernilai 1. -1 berfungsi 
        //untuk menyamakan nilai i dan penumpang.length
        {
        penumpang.push(namaPenumpang);//menambahkan penumpang atau data di akhir
        return penumpang;// mengembalikan isi array & keluar dari function
        }
      }
    }
}