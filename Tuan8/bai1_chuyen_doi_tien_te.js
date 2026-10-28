// Bài 1: Chuyển đổi tiền tệ đơn giản
// Yêu cầu: Viết mã JS cho phép nhập số lượng USD và tính ra số tiền VND tương ứng (giả sử tỉ giá 25.000). Kết quả hiện ra console.

const EXCHANGE_RATE = 25000;

function convertUSDToVND() {
    let inputUSD = prompt("Nhập số lượng USD cần chuyển đổi:");
    let usd = parseFloat(inputUSD);

    if (isNaN(usd) || usd < 0) {
        console.log("Vui lòng nhập một số hợp lệ!");
        return;
    }

    let vnd = usd * EXCHANGE_RATE;
    console.log(`${usd} USD tương đương với ${vnd.toLocaleString('vi-VN')} VNĐ (Tỉ giá: 1 USD = ${EXCHANGE_RATE.toLocaleString('vi-VN')} VNĐ)`);
}

// Chạy hàm
convertUSDToVND();
