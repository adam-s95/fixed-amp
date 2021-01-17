// ==UserScript==
// @name Disable AMP 
// @name:lt Išjungti AMP 
// @name:zh 禁用 AMP 
// @name:ms Nyahdayakan AMP 
// @name:ar تعطيل AMP 
// @name:nl AMP uitschakelen 
// @name:cs Zakázat AMP 
// @name:pl Wyłącz AMP 
// @name:de AMP deaktivieren 
// @name:pt-PT Desactivar AMP 
// @name:es Deshabilitar AMP 
// @name:pt Desativar AMP 
// @name:fa غيرفعالسازي شتاب دهنده صفحات موبایل 
// @name:ro Dezactivare AMP 
// @name:he AMP השבת 
// @name:ru Отключить AMP 
// @name:id Nonaktifkan AMP 
// @name:sk Vypnúť AMP 
// @name:ja AMPを無効化 
// @name:sl Onemogoči AMP 
// @name:be Адключыць AMP 
// @name:sr Isključi sve 
// @name:bg Деактивирайте AMP 
// @name:sv Stäng av AMP 
// @name:fr Désactiver AMP 
// @name:it Disabilita AMP 
// @name:zh-TW 禁用加速的行動頁面（AMP） 
// @name:vi Vô hiệu hóa AMP 
// @name:uk Вимкнути AMP 
// @name:tr AMP'yi devre dışı bırak 
// @name:ko AMP 비활성화 
// @name:hr Onemogući AMP 
// @name:et Keela AMP 
// @name:da Deaktiver AMP 
// @namespace    adguard
// @version      1.0.11
// @description This is a very simple userscript to disable AMP on the Google search results page and Turbo pages on Yandex 
// @description:lt Tai labai paprastas naudotojo skriptas, atjungiantis AMP Google paieškos rezultatų puslapyje. 
// @description:zh 这是一个非常简单的用于在 Google 搜索结果页禁用 AMP 的用户脚本。 
// @description:ms Ini adalah skrip pengguna sangat ringkas yang menyahdayakan AMP pada laman hasil carian Google. 
// @description:ar هذا سكربت بسيط جدا، يعمل على تعطل AMP في صفحات بحث Google. 
// @description:nl Dit is een eenvoudig userscript dat AMP uitschakelt op de Google zoek resultaatspagina. 
// @description:cs Jedná se o velmi jednoduchý uživatelský skript, který zakáže AMP na stránce s výsledky vyhledávání Google. 
// @description:pl Jest to bardzo prosty skrypt użytkownika, który wyłącza AMP na stronie wyników wyszukiwania Google. 
// @description:de Dies ist ein sehr einfaches Userscript, das AMP auf der Seite der Google-Suchergebnisse deaktiviert. 
// @description:pt-PT Este é um script muito simples que desactiva as AMP na página de resultados de pesquisa do Google. 
// @description:es Este es un userscript muy simple que deshabilita AMP en la página de resultados de búsqueda de Google. 
// @description:pt Este é um script muito simples que desativa o AMP na página de resultados de pesquisa do Google. 
// @description:fa این یک یوزراسکریپت بسیار ساده است که شتاب دهنده صفحات موبایل را در نتایج صفحه جستجو گوگل غیرفعال می کند. 
// @description:ro Dezactivați AMP în pagina de rezultate căutare Google cu acest foarte simplu script utilizator. 
// @description:he זהו סקריפט משתמש פשוט מאוד שמשבית את AMP בדף תוצאות החיפוש של גוגל 
// @description:ru Это очень простой скрипт, который убирает AMP из результатов поиска Google и Турбо страницы из Яндекс 
// @description:id Ini adalah userscript yang sangat mudah yang dapat menonaktifkan AMP pada halaman hasil pencarian Google. 
// @description:sk Toto je veľmi jednoduchý používateľský skript, ktorý na stránke s výsledkami vyhľadávania Google zakáže AMP. 
// @description:ja Google検索結果ページでAMPを無効にするシンプルなユーザースクリプトです。 
// @description:sl To je zelo preprost uporabniški skript, ki onemogoči AMP na Googlovi strani z rezultati iskanja. 
// @description:be Гэта - вельмі просты скрыпт, які прыбірае AMP з вынікаў пошуку Google. 
// @description:sr Ovo je veoma jednostavan userscript koji isključuje AMP na stranici sa rezultatima Google pretrage. 
// @description:bg Това е много прост потребителски скрипт, който деактивира AMP на страницата с резултати от търсенето с Google. 
// @description:sv Det här är ett väldigt enkelt användarskript som förhindrar AMP i Googles sökresultat. 
// @description:fr C'est un script utilisateur très simple pour désactiver AMP sur les pages de résultats de Google. 
// @description:it Questo è un userscript molto semplice che disabilita AMP nei risultati delle pagine di ricerca di Google. 
// @description:zh-TW 這是一個非常簡單的使用者腳本，其禁用於 Google 搜尋結果頁面上之加速的行動頁面（AMP）。 
// @description:vi Đây là một mô tả người dùng rất đơn giản, vô hiệu hóa AMP trên trang kết quả tìm kiếm của Google. 
// @description:uk Це дуже простий користувацький скрипт, який вимикає AMP на сторінці результатів пошуку Google. 
// @description:tr Bu, Google arama sonuçları sayfasında AMP’yi devre dışı bırakan çok basit bir kullanıcı betiğidir. 
// @description:ko 이것은 Google 검색 결과 페이지에서 AMP를 비활성화하는 매우 간단한 사용자 스크립트입니다. 
// @description:hr Ovo je jednostavan userscript koji onemogućuje AMP u Google rezultatima pretraživanja. 
// @description:et Tegemist on lihtsa kasutajaskriptiga, mis keelab Google otsingutulemustes AMP-i. 
// @description:da Dette er et meget simpelt userscript, der deaktiverer AMP på Googles søgeresultatside. 
// @homepageURL  https://adguard.com/
// @author       AdGuard
// @include      https://www.google.*/*
// @include      https://yandex.*/*
// @include      https://*.turbopages.org/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";function n(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.r(e);function a(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var u,c,l=/^https?:\/\/.+/i,f="__".concat(Math.random()),s=function(t){var e=t.querySelector('[aria-label="AMP logo"], [aria-label="Logo AMP"]');e&&(e.style.display="none")},p=function(){!function(){if(document.location.pathname.includes("/amp/")){var t,e=null===(t=document.querySelector("#amp-hdr .amp-cantxt"))||void 0===t?void 0:t.textContent;e&&l.test(e)&&document.location.replace(e)}}(),a(document.querySelectorAll("a.amp_r[data-amp-cur]")).forEach((function(t){if(!t[f]){t[f]=!0;var e=t.getAttribute("data-amp-cur");e&&(t.setAttribute("href",e),t.addEventListener("click",(function(t){t.preventDefault(),t.stopPropagation(),document.location.href=e}),!0),s(t))}})),document.querySelectorAll("a[data-amp-cdn]").forEach((function(t){var e=t.href;e.includes("cdn.ampproject.org")&&(e="https://"+e.substr(e.indexOf("cdn.ampproject.org/wp/s/")+24)),e.substr(8).startsWith("amp.")&&(e="https://"+e.substr(12)),(e=e.replace("?amp&","?&"))!==t.href&&(t.setAttribute("href",e),t.addEventListener("click",(function(t){t.preventDefault(),t.stopPropagation(),document.location.href=e}),!0),s(t))}))},d=function(t){new MutationObserver(t).observe(document,{childList:!0,subtree:!0})};document.location.origin.includes("google.")&&d(p),document.location.origin.includes("yandex.")&&d((function(){n(document.querySelectorAll('a[href^="https://yandex.ru/turbo/s/"]')).forEach((function(t){var e,r=t.href.replace("yandex.ru/turbo/s/","");t.setAttribute("href",r),t.addEventListener("click",(function(t){t.preventDefault(),t.stopPropagation(),document.location.href=r}),!0),(e=t).querySelector(".text-with-icon")&&(e.style.position="absolute",e.style.left="-99999px")}))})),document.location.origin.includes("turbopages.org")&&(u=document.location.href.split("turbopages.org/s/").pop(),c=document.location.protocol,u&&c&&(document.location.href="".concat(c,"//").concat(u)))}]);