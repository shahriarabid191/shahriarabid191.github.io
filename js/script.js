let lang = "en";
const path = window.location.pathname;

const icons = {
    introduction: {
        light: `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve"  viewBox="0 0 50.8 50.8"><path d="M21.414 7.203h7.973v7.973h-7.973zM21.414 17.583h7.973v26.543h-7.973z" style="fill:none;stroke:#000;stroke-width:1.32292;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:5;stroke-dasharray:none;stroke-opacity:1;paint-order:normal" transform="translate(0 -.265)"/></svg>`,
        dark: `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve"  viewBox="0 0 50.8 50.8"><path d="M21.414 5.639h7.973v7.973h-7.973z" style="fill:#000;stroke:none;stroke-width:1.32292;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:5;stroke-dasharray:none;stroke-opacity:1" transform="translate(0 1.564)"/><path d="M21.414 15.489h7.973v26.543h-7.973z" style="fill:#000;stroke:none;stroke-width:2.41384;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:5;stroke-dasharray:none;stroke-opacity:1" transform="translate(0 1.564)"/></svg>`
    },
    experience: {
        light: `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve"  viewBox="0 0 50.8 50.8"><path d="M21.067-14.854h10.29v10.29h-10.29zM32.181-3.74h10.29V6.55h-10.29zM34.987-17.66h10.29v10.29h-10.29zM18.261-.934h10.29v10.29h-10.29z" style="fill:none;stroke:#000;stroke-width:.823626;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:5;stroke-dasharray:none;stroke-opacity:1;paint-order:normal" transform="rotate(45 -4.75 -5.754) scale(1.21496)"/></svg>`,
        dark: `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve"  viewBox="0 0 50.8 50.8"><path d="M22.918-13.003H35.42V-.501H22.918zM36.421.5h12.502v12.502H36.421zM39.831-16.412h12.502V-3.91H39.831zM19.509 3.91h12.502v12.502H19.509z" style="fill:#000;stroke:none;stroke-width:1.00067;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:5;stroke-dasharray:none;stroke-opacity:1;paint-order:normal;fill-opacity:1" transform="rotate(45)"/></svg>`
    },
    index: {
        light: `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve"  viewBox="0 0 50.8 50.8"><path d="M41.302 15.835h6.517v9.212h-6.517z" style="fill:none;stroke:#000;stroke-width:1.14259;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:5;stroke-dasharray:none;stroke-opacity:1" transform="rotate(-3.717 -14.591 -.473)"/><path d="M7.435 15.485h6.517v9.212H7.435z" style="fill:none;stroke:#000;stroke-width:1.14259;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:5;stroke-dasharray:none;stroke-opacity:1" transform="rotate(-33.039 -1.596 -.473)"/><path d="M-4.354 17.416h6.517v9.212h-6.517z" style="fill:none;stroke:#000;stroke-width:1.14259;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:5;stroke-dasharray:none;stroke-opacity:1" transform="rotate(-36.553 -1.434 -.473)"/><path d="M-15.699 21.12h6.517v9.212h-6.517z" style="fill:none;stroke:#000;stroke-width:1.14259;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:5;stroke-dasharray:none;stroke-opacity:1" transform="rotate(-40.068 -1.298 -.473)"/><path d="M21.079 16.306h6.517v9.212h-6.517z" style="fill:none;stroke:#000;stroke-width:1.14259;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:5;stroke-dasharray:none;stroke-opacity:1" transform="rotate(-22.795 -2.349 -.473)"/></svg>`,
        dark: `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve"  viewBox="0 0 50.8 50.8"><path d="M41.363 14.891h6.517v9.212h-6.517z" style="fill:#000;stroke:none;stroke-width:1.14259;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:5;stroke-dasharray:none;stroke-opacity:1" transform="rotate(-3.717)"/><path d="M7.952 14.691h6.517v9.212H7.952z" style="fill:#000;stroke:none;stroke-width:1.14259;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:5;stroke-dasharray:none;stroke-opacity:1" transform="rotate(-33.04)"/><path d="M-3.79 16.655h6.517v9.212H-3.79z" style="fill:#000;stroke:none;stroke-width:1.14259;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:5;stroke-dasharray:none;stroke-opacity:1" transform="rotate(-36.553)"/><path d="M-15.09 20.395h6.517v9.212h-6.517z" style="fill:#000;stroke:none;stroke-width:1.14259;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:5;stroke-dasharray:none;stroke-opacity:1" transform="rotate(-40.068)"/><path d="M21.446 15.433h6.517v9.212h-6.517z" style="fill:#000;stroke:none;stroke-width:1.14259;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:5;stroke-dasharray:none;stroke-opacity:1" transform="rotate(-22.795)"/></svg>`
    },
    academics: {
        light: `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve"  viewBox="0 0 50.8 50.8"><path d="M25.4 9.553 49.462 18.4 25.4 27.246 1.338 18.4Z" style="fill:none;stroke:#000;stroke-width:1.32292;stroke-linecap:square;stroke-miterlimit:5;stroke-dasharray:none;stroke-opacity:1" transform="matrix(.93333 0 0 .93333 1.693 .474)"/><path d="M11.47 24.215v11.967h-.002v1.163l.164.085c3.056 1.579 11.748 5.249 22.069 2.217l.475-.14V26.11L25.4 29.336Zm1.323 1.895L25.4 30.747l7.453-2.74v10.476c-9.206 2.522-16.901-.43-20.06-1.985Z" style="baseline-shift:baseline;display:inline;overflow:visible;opacity:1;vector-effect:none;stroke-miterlimit:5;enable-background:accumulate;stop-color:#000;stop-opacity:1" transform="matrix(.93333 0 0 .93333 1.693 .474)"/><path d="M32.063 41.352c-.506.18-1.01.343-1.509.49v3.498h1.51z" style="fill:#000;fill-opacity:1;stroke:#000;stroke-width:1.32292;stroke-miterlimit:5;stroke-dasharray:none;stroke-opacity:1" transform="matrix(.93333 0 0 .93333 4.37 -.867)"/><path d="M31.868 40.587c-.359.132-.715.251-1.068.36v3.972h1.068v-2.161z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:.952775;stroke-miterlimit:5;stroke-dasharray:none;stroke-opacity:1" transform="matrix(.93333 0 0 .93333 4.37 -.867)"/><path d="M30.554 28.518v11.954c.5-.147 1.003-.31 1.51-.49V27.963Z" style="fill:#000;fill-opacity:1;stroke:#000;stroke-width:1.32292;stroke-miterlimit:5;stroke-dasharray:none;stroke-opacity:1" transform="matrix(.93333 0 0 .93333 4.37 -.867)"/><path d="M34.93 26.553v11.79a24.694 24.694 0 0 0 2.535-1.24v-11.58l-2.535 1.03z" style="fill:none;stroke:#000;stroke-width:1.36262;stroke-miterlimit:5" transform="matrix(.93333 0 0 .93333 1.693 .474)"/></svg>`,
        dark: `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve"  viewBox="0 0 50.8 50.8"><path d="m25.4 5.14 24.062 8.847L25.4 22.833 1.338 13.987Z" style="stroke-width:.802134;stroke-linecap:square;stroke-miterlimit:5" transform="translate(0 4.413)"/><path d="M33.686 21.24v12.019a29.916 29.916 0 0 0 3.84-1.68h-.194V19.9ZM10.794 19.9v11.68h-.196c2.972 1.535 11.493 5.131 21.579 2.168V21.795l-8.114 2.983z" style="stroke-width:1.41605;stroke-miterlimit:0" transform="translate(1.338 4)"/><path d="M33.686 33.259c-.506.18-1.01.343-1.51.49v3.498h1.51z" style="fill:#000;stroke-width:1.6779;stroke-miterlimit:0" transform="translate(1.338 4)"/><path d="M32.177 21.795v11.953c.5-.146 1.003-.31 1.51-.489v-12.02Z" style="fill:#fff;stroke-width:1.6779;stroke-miterlimit:0" transform="translate(1.338 4)"/></svg>`
    },
    connect: {
        light: `<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50.8 50.8"><g fill="none" stroke="#000" stroke-miterlimit="5" stroke-width="1.323"><path d="M9.696 2.719H1.844v7.56h7.852zM41.104 2.719h7.852v7.56h-7.852zM9.696 12.169H1.844v7.56h7.852zM11.659 12.169h7.852v7.56h-7.852zM39.141 12.169h-7.852v7.56h7.852zM41.104 12.169h7.852v7.56h-7.852zM9.696 21.62H1.844v7.56h7.852zM11.659 21.62h7.852v7.56h-7.852zM21.474 21.62h7.852v7.56h-7.852zM39.141 21.62h-7.852v7.56h7.852zM41.104 21.62h7.852v7.56h-7.852zM9.696 31.07H1.844v7.56h7.852zM11.659 31.07h7.852v7.56h-7.852zM39.141 31.07h-7.852v7.56h7.852zM41.104 31.07h7.852v7.56h-7.852zM9.696 40.521H1.844v7.56h7.852zM41.104 40.521h7.852v7.56h-7.852z"/></g></svg>`,
        dark: `<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50.8 50.8"><path d="M9.696 2.72H1.844v7.56h7.852zM41.105 2.72h7.852v7.56h-7.852zM9.696 12.17H1.844v7.56h7.852zM11.66 12.17h7.852v7.56h-7.853zM39.142 12.17h-7.853v7.56h7.853zM41.103 12.17h7.853v7.56h-7.853zM9.696 21.62H1.844v7.56h7.852zM11.66 21.62h7.852v7.56h-7.853zM21.474 21.62h7.852v7.56h-7.852zM39.142 21.62h-7.853v7.56h7.853zM41.103 21.62h7.853v7.56h-7.853zM9.696 31.07H1.844v7.561h7.852zM11.66 31.07h7.852v7.561h-7.853zM39.142 31.07h-7.853v7.561h7.853zM41.103 31.07h7.853v7.561h-7.853zM9.696 40.52H1.844v7.56h7.852zM41.103 40.52h7.853v7.56h-7.853z"/></svg>`
    }
};



document.addEventListener('DOMContentLoaded', () => {
    if (path.includes("bn")) 
        lang = "bn";

    loadNavBar();
    loadBnYr();
});


// loading the navbar
async function loadNavBar() {
    let navbarFile = "/en/navbar.html";
    if (lang === "bn") 
        navbarFile = "/bn/navbar.html";

    try {
        const res = await fetch(navbarFile);
        const html = await res.text();

        document.body.insertAdjacentHTML("beforeend", html);

        const navBar = document.querySelector(".bottom-nav");
        const indicator = document.querySelector("#nav-indicator");
        const navItemLst = document.querySelectorAll(".nav-item");

        const currentPg = path.split("/").pop().replace(".html", "") || "index";
        let actvLink = null;

        function positionIndicator(show = false) {
            if (!actvLink) return;

            const itemRect = actvLink.getBoundingClientRect();
            const navRect = navBar.getBoundingClientRect();

            indicator.style.width = `${itemRect.width - 8}px`;
            const center = (itemRect.left - navRect.left) + (itemRect.width / 2);
            indicator.style.left = `${center}px`;
            indicator.style.transform = "translateX(-50%)";

            if (show) 
                indicator.style.opacity = '1';
        }

        for (let i = 0; i < navItemLst.length; i++) {
            const item = navItemLst[i];
            const icon = item.querySelector(".nav-icon");

            const href = item.getAttribute("href").split("/").pop().replace(".html", "");
            if (href === currentPg) {
                item.classList.add("active");
                actvLink = item;
                icon.innerHTML = icons[href].dark;
            } 
            else {
                item.classList.remove("active");
                icon.innerHTML = icons[href].light;
            }
        }

        indicator.style.opacity = "0";
        setTimeout(() => {
            window.requestAnimationFrame(() => positionIndicator(true));
        }, 50);

        window.addEventListener('resize', () => {
            window.requestAnimationFrame(positionIndicator);
        });

    } catch (err) {
        console.error("Navbar loading failed: ", err);
    }
}


// adding linking function to the logo
const logo = document.getElementById("logo");
if (logo) {
    logo.addEventListener("click", function (e) {
        e.preventDefault();
        if (lang === "en") {
            window.location.href = "/index.html";
        } 
        else {
            window.location.href = "/bn/index.html";
        }
    });
}


// toggling lang
const toggleBtn = document.getElementById("toggleBNG");
if (toggleBtn) {
    const thisPg = path.split("/").pop().replace(".html", "") || "index";
    toggleBtn.addEventListener("click", function (e) {
        e.preventDefault();
        if (thisPg === "index") {
            if (lang === "en") 
                window.location.href = "/bn/index.html";
            else
                window.location.href = "/index.html";
        }
        else {
            if (lang === "en") 
                window.location.href = path.replace("/en/", "/bn/");
            else
                window.location.href = path.replace("/bn/", "/en/");
        } 
    });
}


// loading bangla year
function loadBnYr() {
    const yr = String(new Date().getFullYear());

    const bnDig = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

    let bnYr = "";
    for (let i = 0; i < yr.length; i++) {
        bnYr += bnDig[parseInt(yr[i])];
    }

    const cr = document.getElementById("copyRight");
    if (cr)
        cr.textContent = `© ${bnYr} শাহরিয়ার আবিদ। সর্বস্বত্ব সংরক্ষিত।`;
}


// handling anonymous msg form
const form = document.getElementById('anonForm') 

if (form) {
    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        const formData = new FormData(form);

        try {
            await fetch(form.action, {
                method: form.method,
                mode: 'no-cors',
                body: formData
            });

            const message = document.createElement("p");
            message.className = "container";
            
            if (lang === "en") 
                message.textContent = "message received. Thanks!"; 
            else 
                message.textContent = "বার্তাটি পেয়েছি। ধন্যবাদ!";

            form.parentNode.replaceChild(message, form);
            document.getElementById("toggleBNG").remove();

        } 
        catch (err) {
            console.error('Form submission failed:', err);
        }
    });
}

