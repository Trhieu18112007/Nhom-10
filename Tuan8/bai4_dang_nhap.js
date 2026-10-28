// Bài 4: Logic Đăng nhập (Mô phỏng)
// Yêu cầu: Tạo 2 biến username và password cố định. Viết cấu trúc if kiểm tra nếu người dùng nhập đúng cả 2 thì hiện "Đăng nhập thành công", nếu sai 1 trong 2 thì hiện "Thông tin không chính xác".

const CORRECT_USERNAME = "admin";
const CORRECT_PASSWORD = "123";

function simulateLogin() {
    let usernameInput = prompt("Nhập tên đăng nhập (username):");
    let passwordInput = prompt("Nhập mật khẩu (password):");

    if (usernameInput === CORRECT_USERNAME && passwordInput === CORRECT_PASSWORD) {
        console.log("Đăng nhập thành công");
        alert("Đăng nhập thành công!");
    } else {
        console.log("Thông tin không chính xác");
        alert("Thông tin không chính xác!");
    }
}

// Chạy hàm
simulateLogin();
