// Lấy các phần tử cần sử dụng
const iconSearch = document.querySelector(".iconSearch");
const textInput = document.querySelector("input");

// Xử lý sự kiện click vào iconSearch
iconSearch.addEventListener("click", function () {
  // Thay đổi màu sắc của iconSearch thành màu đen
  iconSearch.style.color = "#000";
});

// Xử lý sự kiện click ra ngoài
document.addEventListener("click", function (event) {
  const target = event.target;
  // Kiểm tra nếu click không phải vào iconSearch hoặc input
  if (!target.matches(".iconSearch") && !target.matches("input")) {
    // Thay đổi màu sắc của iconSearch thành màu ban đầu
    iconSearch.style.color = "#555";
  }
});
