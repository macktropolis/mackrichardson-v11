(() => {
  const preview = document.currentScript.hasAttribute("data-startup-preview");
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  if (typeof HTMLDialogElement === "undefined" ||
      typeof HTMLDialogElement.prototype.showModal !== "function") return;

  if (!preview) {
    try {
      const key = "mackos-startup-seen";
      if (localStorage.getItem(key) !== null) return;
      localStorage.setItem(key, "1");
    } catch {
      // If the browser blocks storage, avoid repeating startup on every page.
      return;
    }
  }

  function playStartup() {
    const dialog = document.createElement("dialog");
    dialog.className = "mac-startup";
    dialog.setAttribute("aria-labelledby", "mac-startup-title");
    dialog.innerHTML = `
      <div class="mac-startup__screen">
        <div class="mac-startup__panel">
          <img src="/assets/images/mackos-startup-logo.png" width="228" height="228" alt="">
          <p id="mac-startup-title">MackOS 9</p>
        </div>
        <p class="mac-startup__status">Starting Up…</p>
        <div class="mac-startup__track" aria-hidden="true">
          <div class="mac-startup__progress"></div>
        </div>
        <form method="dialog">
          <button type="submit" class="button primary" autofocus>Continue...</button>
        </form>
      </div>
    `;

    document.body.prepend(dialog);
    dialog.showModal();
    const timeout = setTimeout(() => dialog.close(), 2600);

    dialog.addEventListener("close", () => {
      clearTimeout(timeout);
      dialog.remove();
    }, { once: true });
  }

  if (preview) {
    document.getElementById("replay-startup").addEventListener("click", playStartup);
  }

  if (preview || !reducedMotion.matches) playStartup();
})();
