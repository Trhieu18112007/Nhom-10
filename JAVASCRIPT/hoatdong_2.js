// Hoạt động 2: "Logic Builder" - Máy tính mini xếp loại điểm số

function xepLoaiHocLuc() {
    let inputDiem = prompt("Nhập vào số điểm của bạn (0 - 10):");
    let diem = parseFloat(inputDiem);

    // Kiểm tra tính hợp lệ của điểm số
    if (isNaN(diem) || diem < 0 || diem > 10) {
        alert("Vui lòng nhập một số hợp lệ từ 0 đến 10!");
        console.log("Lỗi: Điểm nhập vào không hợp lệ.");
        return;
    }

    let xepLoai = "";

    // Kiểm tra điều kiện theo thang điểm yêu cầu
    if (diem > 8) {
        xepLoai = "Giỏi";
    } else if (diem > 6.5) {
        xepLoai = "Khá";
    } else if (diem >= 5) {
        xepLoai = "Trung bình";
    } else {
        xepLoai = "Yếu";
    }

    // Hiển thị thông báo kết quả
    let thongBao = `Điểm số của bạn: ${diem} - Xếp loại: ${xepLoai}`;
    alert(thongBao);
    console.log(thongBao);
}

// Chạy hàm
xepLoaiHocLuc();