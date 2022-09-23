/* Author : Benhard Sim */
const fs = require('fs');
const readline = require('readline');
const path = require('path')

// variable default lokasi directory file yang mau diubah namanya
let dirLocation = __dirname;
let fileName = 'default';
let exten = 'txt';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// copyright

console.log('=================================================================\n');
console.log('=================================================================\n');
console.log('==========       Created By : Benhard Sim           =============\n');
console.log('=================   Benhard Sim © 2022  =========================\n');
console.log('=================================================================\n');
console.log('=================================================================\n\n\n');

console.log("NOTE PENTING !!");
console.log('1. PATH harus di isi dengan lengkap');
console.log('   contoh : D:\\Document\\node-js\\change-name\\testing');
console.log('2. nama file baru tidak perlu ditulis menggunakan extention');
console.log('3. jenis extention harus disi');
console.log('   contoh : txt,py,cpp\n');
console.log('Selamat menggunakan :) :)\n');


// input data
rl.question('Masukkan PATH dari directory yang mau diganti : ', (dirLoc) => {
    rl.question('Masukkan nama file yang baru : ', (newFileName) => {
        rl.question('Masukkan extention baru : ', (newExten) => {
            console.log(`Lokasi directory : ${dirLoc}`);
            console.log(`nama file yang baru : ${newFileName}`);
            console.log(`extention baru : ${newExten}`);
            if(dirLoc === '' || newFileName === '' || newExten === ''){
                throw console.error('PATH, nama file, dan extention harus diisi');
            }
            // ubah variable
            dirLocation = dirLoc;
            fileName = newFileName;
            exten = newExten;
            // Mengganti nama file
            fs.readdir(dirLocation, (err, fileNames) => {
                if (err) throw err;
                try {
                    fileNames.forEach((file, idx) => {
                        // membuat path folder full dari file lama dan file baru yang akan dibuat
                        let newName = `${fileName}_${idx + 1}.${exten}`;
                        let newNamePath = path.join(dirLocation, newName);
                        let oldNamePath = path.join(dirLocation, file);;
                        try {
                            fs.renameSync(oldNamePath, newNamePath);
                        } catch (err) {
                            console.log(err);
                        }
                        console.log(`File changed from ${file} to ${newName}`);
                    })
                } catch (err) {
                    console.log(err);
                }
            })
            rl.close();
        })
    })
})