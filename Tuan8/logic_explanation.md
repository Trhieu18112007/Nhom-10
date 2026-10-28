# Giải thích logic: Chào mừng theo thời gian thực

## 1. Mục đích chương trình

Chương trình sử dụng JavaScript để tự động hiển thị lời chào phù hợp với thời gian hiện tại của người dùng.

- Từ 05:00 đến trước 12:00: Chào buổi sáng!
- Từ 12:00 đến trước 18:00: Chào buổi chiều!
- Các khung giờ còn lại: Chào buổi tối!

## 2. Giải thích hàm `new Date().getHours()`

Dòng lệnh trong chương trình:

```javascript
const currenthour = new Date().getHours();
```

Ý nghĩa của từng thành phần:

- **`new Date()`**: Tạo một đối tượng ngày giờ, lấy thời gian hiện tại theo múi giờ địa phương của thiết bị đang chạy trình duyệt.
- **`.getHours()`**: Lấy giờ hiện tại, trả về số nguyên từ `0` đến `23`.
- **`const currenthour`**: Khai báo biến `currenthour` để lưu giá trị giờ vừa lấy.

Ví dụ:

| Thời gian hiện tại | Giá trị trả về |
|---|---:|
| 07:30 | 7 |
| 13:15 | 13 |
| 17:45 | 17 |
| 20:00 | 20 |

Lưu ý: Hàm `getHours()` chỉ lấy giờ, không lấy phút hoặc giây.

## 3. Giải thích điều kiện chọn lời chào

```javascript
let message = "";

if (currenthour >= 5 && currenthour < 12) {
    message = "Chào buổi sáng!";
} else if (currenthour >= 12 && currenthour < 18) {
    message = "Chào buổi chiều!";
} else {
    message = "Chào buổi tối!";
}
```

- `let message = ""`: Khai báo biến lưu nội dung lời chào.
- `if`: Kiểm tra giờ hiện tại có từ 5 giờ đến trước 12 giờ hay không.
- `else if`: Kiểm tra giờ có từ 12 giờ đến trước 18 giờ hay không.
- `else`: Nếu không thỏa mãn hai điều kiện trên, chương trình hiển thị lời chào buổi tối.
- `&&`: Là toán tử logic AND, có nghĩa là cả hai điều kiện phải đúng.

## 4. Hiển thị lời chào trên website

```javascript
document.getElementById("greeting").innerHTML = message;
```

- `document.getElementById("greeting")`: Tìm phần tử HTML có thuộc tính `id="greeting"`.
- `innerHTML = message`: Gán nội dung lời chào vào phần tử đó để hiển thị trên website.

## 5. Quy trình hoạt động của chương trình

1. Trình duyệt chạy mã JavaScript.
2. `new Date()` lấy thời gian hiện tại.
3. `getHours()` lấy giờ hiện tại từ 0 đến 23.
4. Câu lệnh `if / else if / else` xác định lời chào phù hợp.
5. `getElementById()` tìm thẻ tiêu đề và `innerHTML` hiển thị lời chào.

## 6. Kết luận

Hàm `new Date().getHours()` giúp chương trình tự động xác định giờ hiện tại theo thời gian địa phương của thiết bị. Kết hợp với câu lệnh điều kiện, website có thể hiển thị lời chào phù hợp mà không cần người dùng nhập thời gian thủ công.

**Lưu ý:** Theo logic hiện tại, từ 00:00 đến trước 05:00, chương trình cũng hiển thị “Chào buổi tối!” vì các giờ này thuộc nhánh `else`.
