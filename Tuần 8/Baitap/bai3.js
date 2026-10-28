
let chieuCao = Number(prompt("Nhap chieu cao (m):"));
let canNang = Number(prompt("Nhap can nang (kg):"));

if (chieuCao > 0) {
    let bmi = canNang / (chieuCao * chieuCao);
    console.log("Chi so BMI la: " + bmi.toFixed(2));
} else {
    console.log("Chieu cao khong hop le");
}
