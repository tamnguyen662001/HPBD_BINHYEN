// Ngày bắt đầu yêu nhau
const startDate = new Date("2024-01-31");
        
// Hàm tính số ngày yêu nhau
function calculateDaysOfLove() {
  const today = new Date(); // Ngày hiện tại
  const diffTime = today - startDate; // Hiệu số thời gian (mili giây)
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); // Chuyển sang ngày
  return diffDays;
}

// Hiển thị số ngày yêu nhau
document.getElementById("daysLoved").textContent = calculateDaysOfLove();