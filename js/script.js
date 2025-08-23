document.addEventListener("DOMContentLoaded", function () {
            //const link = document.getElementsByTagName("link");
            const img = document.images;
            const links = document.links;
            const solidIcons = document.querySelectorAll("i.fa-solid");
            const brandIcons = document.querySelectorAll("span.fa-brands");
            const slicedIcons = Array.prototype.slice.call(solidIcons, -4, -1);
            /* for (i = 0; i < Math.min(3, link.length); i++) {
                link[i].crossOrigin = "anonymous";
                link[i].addEventListener("error", function () {
                    location.reload();
                });
            } */
            img.item(3).src = "https://img.shields.io/badge/Volkswagen-Golf_Typ19E_1.6_TD_CL_(1991)-151f5d?style=flat-square&logo=volkswagen&logoColor=white";
            img.item(3).onerror = function () { this.src = "https://badgen.net/static/Volkswagen/Golf%20Typ19E%201.6%20TD%20CL%20(1991)/0096d6"; }
            img.item(4).src = "https://img.shields.io/badge/Fujitsu-Lifebook_S751-ff0000?style=flat-square&logo=fujitsu&logoColor=white";
            img.item(4).onerror = function () { this.src = "https://badgen.net/static/Fujitsu/Lifebook%20S751/ff0000"; }
            img.item(5).src = "https://img.shields.io/badge/HP_Compaq-cd7100_Base_Model_Small_Form_Factor-0096d6?style=flat-square&logo=hp&logoColor=white";
            img.item(5).onerror = function () { this.src = "https://badgen.net/static/HP%20Compaq/cd-7100%20Base%20Model%20Small%20Form%20Factor/0096d6"; }
            img.item(6).src = "https://img.shields.io/github/v/release/twbs/bootstrap?filter=v5.3.*&logo=bootstrap&logoColor=white&label=Bootstrap&color=7952b3&cacheSeconds=300";
            img.item(6).onerror = function () { this.src = "https://badgen.net/github/release/twbs/bootstrap/stable?label=Bootstrap&color=7952b3"; }
            img.item(7).src = "https://img.shields.io/cdnjs/v/font-awesome?logo=fontawesome&logoColor=white&label=Font%20Awesome&color=528dd7&cacheSeconds=300";
            img.item(7).onerror = function () { this.src = "https://badgen.net/npm/v/@fortawesome/fontawesome-free?label=Font%20Awesome&color=538dd7"; }
            img.item(8).src = "https://img.shields.io/github/v/release/microsoft/vscode?logo=visualstudiocode&label=Visual%20Studio%20Code&color=007acc&cacheSeconds=300";
            img.item(8).onerror = function () { this.src = "https://badgen.net/github/tag/microsoft/vscode?label=Visual%20Studio%20Code&color=007acc"; }
            for (i = 0; i < Math.min(2, img.length); i++) {
                img[i].classList.add("card-img");
            }
            for (i = 2; i < img.length; i++) {
                img[i].classList.add("img-fluid");
            }
            for (i = 5; i < img.length; i++) {
                img[i].classList.add("align-text-bottom");
            }
            for (i = 0; i < links.length; i++) {
                //links[i].setAttribute("target", "_blank");
                links[i].target = "_blank";
            }
            solidIcons.forEach(icon => {
                icon.classList.add("fa-lg", "pe-1");
            });
            brandIcons.forEach(icon => {
                icon.style.padding = "2px 1px";
            });
            slicedIcons.forEach(icon => {
                icon.classList.add("align-middle");
            });
            function updateLinks() {
                //const links = document.querySelectorAll("a");
                const indicesToUpdate = [1, 4, 10, 13, 14];

                indicesToUpdate.forEach(index => {
                    if (index >= 0 && index < links.length) {
                        links[index].rel = "me";
                    }
                });
            }
            updateLinks();
            function loadCSS(href) {
                const link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = href;
                link.crossOrigin = "anonymous";
                document.head.appendChild(link);
            };
            loadCSS("https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/css/bootstrap.min.css");
            loadCSS("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@7/css/all.min.css");
            loadCSS("https://cdn.jsdelivr.net/npm/bootstrap-social@5/bootstrap-social.min.css");
            document.scripts[0].crossOrigin = "anonymous";
            document.getElementById("year").innerText = new Date().getFullYear();
            document.normalize();
        });
