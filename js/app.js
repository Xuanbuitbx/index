// countdown
// Thời gian đích
var countDownDate = new Date().getTime() + 5 * 60 * 1000;

// Cập nhật thời gian đếm ngược mỗi giây
var x = setInterval(function () {

  // Lấy thời gian hiện tại
  var now = new Date().getTime();

  // Tính thời gian còn lại giữa hiện tại và đích
  var distance = countDownDate - now;

  // Tính toán các giá trị cho giờ, phút, giây
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Hiển thị kết quả trong các thẻ span
  document.getElementById("countdown-hours").innerHTML = hours.toString().padStart(2, '0');
  document.getElementById("countdown-minutes").innerHTML = minutes.toString().padStart(2, '0');
  document.getElementById("countdown-seconds").innerHTML = seconds.toString().padStart(2, '0');

  // Nếu thời gian kết thúc, dừng đếm ngược
  if (distance < 0) {
    clearInterval(x);
  }
}, 1000);

// End countdown
