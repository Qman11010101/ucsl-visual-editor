// import van from "vanjs-core";
import van from "vanjs-core/debug";

import { currentMode } from "./root-settings.ts";

import darkDocumentIcon from "./assets/dark-document.svg";
import darkTogglerIcon from "./assets/dark-toggler.svg";
import lightDocumentIcon from "./assets/light-document.svg";
import lightTogglerIcon from "./assets/light-toggler.svg";

const { header, div, h1, img, a, button } = van.tags;

const txtOpenDocument = "UCSLのドキュメントを開く";
const txtToggleTheme = "ライトテーマ・ダークテーマを切り替える";

export const Header = () => {
    return header(
        div({ class: "header-title-wrapper" }, h1("UCSL Visual Editor")),
        div(
            { class: "header-menus-wrapper" },
            a(
                {
                    title: txtOpenDocument,
                    class: "document-link",
                    href: "https://gist.github.com/inonote/d4f9a1ee84da849b5b8962db13d42220",
                    target: "_blank",
                },
                img({
                    src: van.derive(() =>
                        currentMode.val ? darkDocumentIcon : lightDocumentIcon,
                    ),
                    alt: txtOpenDocument,
                }),
            ),
            button(
                {
                    class: "theme-toggle",
                    title: txtToggleTheme,
                    onclick: () => {
                        currentMode.val = !currentMode.val;
                    },
                },
                img({
                    src: van.derive(() =>
                        currentMode.val ? darkTogglerIcon : lightTogglerIcon,
                    ),
                    alt: txtToggleTheme,
                }),
            ),
        ),
    );
};
