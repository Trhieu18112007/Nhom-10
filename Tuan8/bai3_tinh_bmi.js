// Bài 3: Tính chỉ số BMI cơ bản
// Yêu cầu: Nhập chiều cao (m) và cân nặng (kg). Tính BMI = cân nặng / (chiều cao * chiều cao) và in ra kết quả.

function calculateBMI() {
    let inputWeight = prompt("Nhập cân nặng của bạn (kg):");
    let inputHeight = prompt("Nhập chiều cao của bạn (m, ví dụ: 1.75):");

    let weight = parseFloat(inputWeight);
    let height = parseFloat(inputHeight);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        console.log("Vui lòng nhập số liệu cân nặng và chiều cao hợp lệ!");
        return;
    }

    let bmi = weight / (height * height);
    console.log(`Chỉ số BMI của bạn là: ${bmi.toFixed(2)}`);

    // Phân loại BMI cơ bản tham khảo
    if (bmi < 18.5) {
        console.log("Phân loại: Gầy");
    } else if (bmi < 25) {
        console.log("Phân loại: Bình thường");
    } else if (bmi < 30) {
        console.log("Phân loại: Thừa cân");
    } else {
        console.log("Phân loại: Béo phì");
    }
}

// Chạy hàm
calculateBMI();
