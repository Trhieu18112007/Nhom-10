// Bài 2: Kiểm tra số chẵn/lẻ
// Yêu cầu: Nhập một số bất kỳ từ bàn phím. Thông báo cho người dùng biết đó là số chẵn hay số lẻ.

function checkEvenOrOdd() {
    let inputNumber = prompt("Nhập một số bất kỳ:");
    let number = Number(inputNumber);

    if (isNaN(number)) {
        console.log("Vui lòng nhập vào một số hợp lệ!");
        return;
    }

    if (number % 2 === 0) {
        console.log(`Số ${number} là số chẵn.`);
    } else {
        console.log(`Số ${number} là số lẻ.`);
    }
}

// Chạy hàm
checkEvenOrOdd();
