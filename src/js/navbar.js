const nav = document.querySelector(".nav-links");
const toggle = document.querySelector(".burger-menu");

toggle.addEventListener("click", () => {
    const visibilty = nav.getAttribute("data-visible");

    if(visibilty === "false") {
        nav.setAttribute("data-visible", true);
        toggle.setAttribute("aria-expended", true);
    }

    else if(visibilty === "true") {
        nav.setAttribute("data-visible", false);
        toggle.setAttribute("aria-expended", false);
    }
});

// nav.addEventListener("click", () => {
//     const visibilty = nav.getAttribute("data-visible");

//     if(visibilty === "false") {
//         nav.setAttribute("data-visible", true);
//         toggle.setAttribute("aria-expended", true);
//     }

//     else if(visibilty === "true") {
//         nav.setAttribute("data-visible", false);
//         toggle.setAttribute("aria-expended", false);
//     }
// });