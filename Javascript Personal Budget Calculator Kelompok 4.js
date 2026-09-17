//Penulisan judul
console.log("=== Personal Budget Calculator ===")
console.log("")
console.log("")

//Input pendapatan
Pendapatan = Number(prompt("Masukkan pendapatan anda: Rp."))
console.log("")

//Input jumlah pengeluaran (Dalam berapa kategori)
jumlahItem = Number(prompt("Jumlah pengeluaran yang ingin dimasukkan: "))

console.log("")

TotalPengeluaran = 0
daftarPengeluaran = []

//Input nilai pengeluaran per-kategori
for (let i = 1; i <= jumlahItem; i++) {
  let kategori = prompt("Kategori pengeluaran ke-" + i + ": ")
  let jumlah = Number(prompt("Jumlah pengeluaran untuk " + kategori + ": Rp."))
console.log("")
  TotalPengeluaran += jumlah
  daftarPengeluaran.push({kategori: kategori, jumlah: jumlah})
}


console.log("")
console.log("")
console.log("=== RINGKASAN ANGGARAN ===")

console.log("")
console.log ("Total Pengeluaran: Rp." + TotalPengeluaran)

//Penghitungan sisa saldo
console.log("")
SisaSaldo = Pendapatan - TotalPengeluaran
console.log ("Sisa Saldo: Rp." + SisaSaldo)

//Pelabelan status keuangan berdasarkan sisa saldo
console.log("")
if (SisaSaldo >= 0.3*Pendapatan) {
  console.log ("Status keuangan: Baik")
} else if (SisaSaldo >= 0.1*Pendapatan) {
  console.log("Status keuangan: Perlu Perhatian")
} else
  console.log("Status keuangan: Kritis")
