// 신청 폼은 데모이므로 실제 서버로 전송하지 않고 완료 화면만 보여줍니다.
const form = document.getElementById("registration-form");
const success = document.getElementById("success-message");
form.addEventListener("submit", event => {
  event.preventDefault(); // 페이지가 새로고침되는 것을 막습니다.
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const name = data.get("name");
  const date = data.get("date");
  const people = data.get("people");
  document.getElementById("success-detail").textContent =
    `${name}님, ${date} / ${people} 참가 신청 내용이 확인되었습니다. (화면 시연용)`;
  form.style.display = "none";
  success.classList.add("show");
  success.scrollIntoView({behavior:"smooth",block:"center"});
});