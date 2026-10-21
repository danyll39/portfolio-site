// Keep the footer year current.
document.querySelectorAll("[data-year]").forEach(function (el) {
  el.textContent = new Date().getFullYear();
});

// Hero ticket: check off each step, then mark the ticket resolved.
(function () {
  var steps = document.querySelectorAll(".ticket-steps li");
  var status = document.querySelector("[data-status]");
  if (!steps.length || !status) return;

  function resolve() {
    status.textContent = "Resolved";
    status.classList.add("resolved");
  }

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    steps.forEach(function (li) { li.classList.add("done"); });
    resolve();
    return;
  }

  steps.forEach(function (li, i) {
    setTimeout(function () {
      li.classList.add("done");
      if (i === steps.length - 1) setTimeout(resolve, 450);
    }, 700 + i * 650);
  });
})();
