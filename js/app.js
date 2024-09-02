const btn = document.querySelector("#change");
const colorBg = document.querySelector("#bg");

btn.addEventListener("click", () => {
    colorBg.classList.add("bg")

    setTimeout(() => {
        colorBg.classList.remove("bg");
    }, 3000);
});