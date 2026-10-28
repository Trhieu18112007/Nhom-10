// Hoạt động 1: "Hello JS Console" - Đối thoại với trình duyệt
console.log("=== CHÀO MỪNG ĐẾN VỚI JS CONSOLE ===");

// 1. Khai báo tên và tuổi
let ten = "Nguyen Thanh Hien";
let tuoi = 20;
console.log("Họ tên:", ten);
console.log("Tuổi:", tuoi);

// 2. Thực hiện các phép toán cơ bản trực tiếp
console.log("Phép cộng (5 + 3):", 5 + 3);
console.log("Phép trừ (10 - 4):", 10 - 4);
console.log("Phép nhân (6 * 7):", 6 * 7);
console.log("Phép chia (20 / 4):", 20 / 4);

// 3. Giải thích hiện tượng Vibe Coding: '10' + 20
let ketQuaSai = '10' + 20;
console.log("Kết quả của '10' + 20 là:", ketQuaSai); // Ra '1020' do nối chuỗi

let ketQuaDung = Number('10') + 20;
console.log("Kết quả sau khi ép kiểu Number('10') + 20 là:", ketQuaDung); // Ra 30