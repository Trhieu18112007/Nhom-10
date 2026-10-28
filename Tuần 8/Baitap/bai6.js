
let a = Number(prompt("Nhap canh a:"));
let b = Number(prompt("Nhap canh b:"));
let c = Number(prompt("Nhap canh c:"));

if (a > 0 && b > 0 && c > 0 &&
    a + b > c && a + c > b && b + c > a) {

    if (a === b && b === c) {
        console.log("Day la tam giac deu");
    } else {
        console.log("Day khong phai tam giac deu");
    }

} else {
    console.log("Ba canh khong tao thanh tam giac");
}
