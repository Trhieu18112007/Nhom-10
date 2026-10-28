
let hoaDon = Number(prompt("Nhap so tien hoa don:"));
let giamGia = 0;

if (hoaDon > 500000) {
    giamGia = hoaDon * 0.1;
}

let thanhToan = hoaDon - giamGia;

console.log("So tien giam gia: " + giamGia + " dong");
console.log("So tien phai tra: " + thanhToan + " dong");
