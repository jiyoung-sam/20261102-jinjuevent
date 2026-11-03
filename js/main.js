// 모바일 메뉴 열기/닫기
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");
menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("show");
  menuButton.setAttribute("aria-expanded", isOpen);
});
navigation.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => navigation.classList.remove("show"));
});

// 팝업 열기: 버튼의 data-open 값과 팝업 id를 연결합니다.
document.querySelectorAll("[data-open]").forEach(button => {
  button.addEventListener("click", () => {
    const modal = document.getElementById(button.dataset.open);
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  });
});

// 팝업 닫기: 닫기 버튼, 어두운 배경, ESC 키를 지원합니다.
function closeModal(modal) {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}
document.querySelectorAll(".modal").forEach(modal => {
  modal.querySelector(".modal-close").addEventListener("click", () => closeModal(modal));
  modal.addEventListener("click", event => {
    if (event.target === modal) closeModal(modal);
  });
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") document.querySelectorAll(".modal.open").forEach(closeModal);
});

// 날짜 탭을 누르면 해당 날짜의 예시 일정으로 바뀝니다.
const scheduleData = {
  day1: [
    ["18:00","야행의 시작, 빛의 점등식","진주성 정문 앞 특설무대","개막"],
    ["18:30","해설사와 함께하는 문화유산 산책","촉석루 – 의암 – 성곽길","투어"],
    ["19:30","진주 풍류 야외 공연","진주성 야외마당","공연"],
    ["20:30","달빛 공예 체험 & 야시장","문화마당 및 원도심 거리","체험"]
  ],
  day2: [
    ["18:00","어린이 풍물놀이","진주성 야외마당","공연"],
    ["18:30","가족 역사 퀴즈 탐험","진주성 일원","체험"],
    ["19:30","달빛 국악 콘서트","특설무대","공연"],
    ["20:30","밤에 만나는 문화유산 해설","촉석루 주변","투어"]
  ]
};
const timeline = document.getElementById("timeline");
document.querySelectorAll(".day-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".day-tab").forEach(item => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    timeline.innerHTML = scheduleData[tab.dataset.day].map(item => `
      <div class="timeline-item">
        <time>${item[0]}</time><span class="timeline-dot"></span>
        <div><b>${item[1]}</b><p>${item[2]}</p></div>
        <span class="timeline-type">${item[3]}</span>
      </div>`).join("");
  });
});
