// Bài 6: Phân loại tam giác
// Yêu cầu: Nhập vào 3 cạnh của một tam giác. Kiểm tra xem đó có phải là tam giác đều không (3 cạnh bằng nhau).

function checkEquilateralTriangle() {
    let a = parseFloat(prompt("Nhập độ dài cạnh thứ nhất (a):"));
    let b = parseFloat(prompt("Nhập độ dài cạnh thứ hai (b):"));
    let c = parseFloat(prompt("Nhập độ dài cạnh thứ ba (c):"));

    if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
        console.log("Vui lòng nhập độ dài các cạnh là số dương hợp lệ!");
        return;
    }

    // Kiểm tra điều kiện tồn tại của tam giác
    if (a + b > c && a + c > b && b + c > a) {
        console.log(`Ba cạnh ${a}, ${b}, ${c} tạo thành một tam giác hợp lệ.`);
        
        // Kiểm tra tam giác đều (3 cạnh bằng nhau)
        if (a === b && b === c) {
            console.log("=> Đây là TAM GIÁC ĐỀU.");
        } else {
            console.log("=> Đây KHÔNG PHẢI là tam giác đều.");
        }
    } else {
        console.log(`Ba cạnh ${a}, ${b}, ${c} không thỏa mãn điều kiện lập thành tam giác!`);
    }
}

// Chạy hàm
checkEquilateralTriangle();
