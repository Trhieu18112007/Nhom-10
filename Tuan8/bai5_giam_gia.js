// Bài 5: Máy tính giảm giá (Discount Calculator)
// Yêu cầu: Nhập số tiền hóa đơn. Nếu số tiền > 500.000đ thì giảm giá 10%, ngược lại không giảm. Tính số tiền cuối cùng phải trả.

const DISCOUNT_THRESHOLD = 500000;
const DISCOUNT_RATE = 0.10; // 10%

function calculateDiscount() {
    let inputAmount = prompt("Nhập số tiền hóa đơn (VNĐ):");
    let totalAmount = parseFloat(inputAmount);

    if (isNaN(totalAmount) || totalAmount < 0) {
        console.log("Vui lòng nhập số tiền hợp lệ!");
        return;
    }

    let finalAmount = totalAmount;
    let discountApplied = false;

    if (totalAmount > DISCOUNT_THRESHOLD) {
        let discountAmount = totalAmount * DISCOUNT_RATE;
        finalAmount = totalAmount - discountAmount;
        discountApplied = true;
    }

    console.log(`--- HÓA ĐƠN THANH TOÁN ---`);
    console.log(`Tổng tiền ban đầu: ${totalAmount.toLocaleString('vi-VN')} đ`);
    if (discountApplied) {
        console.log(`Được giảm giá 10%: ${(totalAmount * DISCOUNT_RATE).toLocaleString('vi-VN')} đ`);
    } else {
        console.log(`Không đủ điều kiện giảm giá (Hóa đơn cần > 500.000đ).`);
    }
    console.log(`Số tiền cuối cùng phải trả: ${finalAmount.toLocaleString('vi-VN')} đ`);
}

// Chạy hàm
calculateDiscount();
