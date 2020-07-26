window.onload = function () {
    const dark_mode_btn = document.querySelector("#dark-mode");
    const dark_mode_label = document.querySelector("#dark-mode-label");
    const dark_mode_navbar = document.querySelector(".navbar-collapse");
    const dark_mode_targets = document.querySelectorAll(".dark-mode-target");
    const dark_mode_target_links = document.querySelectorAll(".dark-mode-target-font");
    const dark_mode_strongs = document.querySelectorAll(".strong-color");

    // チェックした時の挙動
    dark_mode_btn.addEventListener("change", () => {
        if (dark_mode_btn.checked == true) {
            // ダークモード
            dark_mode_label.innerText = "ダークモード";
            dark_mode_label.setAttribute("style", "color: #ffffff");
            dark_mode_navbar.setAttribute("style", "background: #202225");
            dark_mode_targets.forEach(function (target) {
                target.classList.remove("light-theme");
                target.classList.add("dark-theme");
            });
            dark_mode_target_links.forEach(function (target) {
                target.setAttribute("style", "color: #ffffff");
            });
            dark_mode_strongs.forEach(function (target) {
                target.classList.remove("strong-color-blue");
                target.classList.add("strong-color-red");
            });
        } else {
            // ライトモード
            dark_mode_label.innerText = "ライトモード";
            dark_mode_label.setAttribute("style", "color: #000000");
            dark_mode_navbar.setAttribute("style", "background: #e6e7ee");
            dark_mode_targets.forEach(function (target) {
                target.classList.remove("dark-theme");
                target.classList.add("light-theme");
            });
            dark_mode_target_links.forEach(function (target) {
                target.setAttribute("style", "color:#000000");
            });
            dark_mode_strongs.forEach(function (target) {
                target.classList.remove("strong-color-red");
                target.classList.add("strong-color-blue");
            });
        }
    });
    AOS.init({ duration: 1200, })
}



