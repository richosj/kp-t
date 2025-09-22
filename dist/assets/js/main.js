(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) return;
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) processPreload(link);
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") continue;
      for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep) return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
document.addEventListener("DOMContentLoaded", function() {
  $(".datepicker").datepicker({
    dateFormat: "yy-mm-dd",
    dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
    // 주 전체 이름
    dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
    // 축약 이름(헤더)
    monthNames: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월"
    ],
    // 월 이름
    monthNamesShort: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월"
    ],
    // 축약 월 이름
    prevText: "이전",
    nextText: "다음",
    currentText: "오늘",
    closeText: "닫기",
    changeMonth: true,
    changeYear: true,
    showMonthAfterYear: true,
    // 년 뒤에 월 표시
    yearSuffix: "년"
  });
  const quantityControls = document.querySelectorAll(".quantity-control");
  quantityControls.forEach((control) => {
    const minusBtn = control.querySelector(".minus");
    const plusBtn = control.querySelector(".plus");
    const input = control.querySelector(".qty-input");
    minusBtn.addEventListener("click", () => {
      let value = parseInt(input.value);
      if (value > 1) {
        input.value = value - 1;
      }
    });
    plusBtn.addEventListener("click", () => {
      let value = parseInt(input.value);
      input.value = value + 1;
    });
  });
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", function() {
      const tabContainer = this.closest(".order-tabs");
      const allTabs = tabContainer.querySelectorAll(".tab");
      allTabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
