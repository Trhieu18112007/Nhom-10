# AI Prompt Log – Week 4

Tệp này ghi lại prompt dùng để hỗ trợ xây dựng 4 hoạt động thực hành và 6 bài tập responsive web. Có thể chỉnh sửa để phản ánh đúng prompt đã dùng trong quá trình làm bài.

## HD1 – CSS Variables
> Hãy tạo bộ CSS Variables trong `:root` gồm hai màu chủ đạo primary và secondary, ba mức màu xám cho chữ và một màu nền. Áp dụng các biến vào portfolio HTML/CSS, tránh lặp mã màu trực tiếp khi có thể dùng biến. Khi thay đổi biến trong `:root`, giao diện phải đổi màu đồng bộ.

## HD2 – Responsive Portfolio
> Dùng CSS Grid tạo portfolio hai cột trên desktop gồm sidebar và nội dung chính. Với màn hình nhỏ hơn 768px, chuyển thành một cột, đặt sidebar lên đầu trang, bỏ sticky nếu cần và đảm bảo không có tràn ngang.

## HD3 – Responsive Breakpoint Challenge
> Dùng CSS Grid và Media Queries tạo `.services-container` có bốn cột khi màn hình lớn hơn 1024px, hai cột từ 768px đến 1024px và một cột dưới 768px. Giữ `gap: 20px` ở mọi breakpoint.

## HD4 – Design System Refactoring
> Trích xuất màu sắc, khoảng cách margin/padding, bo góc và các giá trị thiết kế lặp lại thành CSS Variables trong `:root`. Thay các giá trị tương ứng bằng `var()` và giữ giao diện nhất quán.

## Exercise 1 – Responsive Typography Scale
> Thiết lập biến CSS cho h1, h2, h3 và p. Dùng Media Queries dưới 600px để giảm cỡ chữ, giữ line-height dễ đọc và ngăn nội dung tràn khỏi màn hình.

## Exercise 2 – Adaptive Card Layout
> Tạo product card có ảnh minh họa, tiêu đề, mô tả và nút. Trên desktop, dùng Flexbox đặt ảnh bên trái và chữ bên phải; dưới 768px chuyển `flex-direction` thành `column` để ảnh nằm trên chữ.

## Exercise 3 – Smart Navigation Bar
> Tạo thanh điều hướng có đầy đủ liên kết trên màn hình từ 768px trở lên. Dưới 768px ẩn menu desktop và hiển thị nút Menu/Hamburger. Dùng HTML/CSS thuần, không cần thư viện ngoài.

## Exercise 4 – Dark/Light Mode
> Khai báo biến CSS cho nền, bề mặt, chữ, chữ phụ, viền và màu nhấn. Tạo `.dark-theme` và `.light-theme` để ghi đè biến. Thêm hiệu ứng transition mượt và cách chuyển class trên body để thử nghiệm.

## Exercise 5 – Responsive Image Gallery
> Tạo gallery bằng CSS Grid với `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))` và `gap: 20px`. Các thẻ tự xuống dòng theo chiều rộng mà không cần nhiều Media Queries. Dùng minh họa CSS để trang không phụ thuộc ảnh ngoài.

## Exercise 6 – Mobile-First Contact Form
> Thiết kế form liên hệ gồm họ tên, email, chủ đề, nội dung và nút gửi. Mobile phải chiếm 100% chiều rộng; desktop giới hạn chiều rộng và căn giữa. Thêm label, trạng thái focus và ghi chú rõ nếu form chưa kết nối backend.

## Kiểm tra trước khi nộp
- Mở `index.html` trong từng thư mục để kiểm tra giao diện.
- Dùng DevTools responsive mode để thử chiều rộng 375px, 768px, 1024px và desktop.
- Thay đổi biến trong `:root` và xác nhận các thành phần liên quan đổi đồng bộ.
- Chụp ảnh màn hình bài làm nếu giảng viên yêu cầu minh chứng.
