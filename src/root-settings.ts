// import van from "vanjs-core";
import van from "vanjs-core/debug";

export const currentMode = van.state(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
); // TODO: 設定値は別のファイルに出すべきかも

van.derive(() => {
    document.body.style.colorScheme = currentMode.val ? "dark" : "light";
});
