// import van from "vanjs-core";
import van from "vanjs-core/debug";
import { Meta } from "./editor-meta.ts";
import { Script } from "./editor-script.ts";
import { Header } from "./header.ts";
import "./main.css";
import "./header.css";

const { p, main, div, footer } = van.tags;

const Main = () => {
    return main(div({ class: "editor" }, Meta(), Script()));
};

const StaticFooter = () => {
    return footer(p("(C) 2025 Kjuman Enobikto"));
};

van.add(document.body, Header());
van.add(document.body, Main());
van.add(document.body, StaticFooter());
