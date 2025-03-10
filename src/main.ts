// import van from "vanjs-core";
import van from "vanjs-core/debug";
import { Editor } from "./editor.ts";
import { Header } from "./header.ts";
import "./main.css";
import "./header.css";

const { p, main, footer } = van.tags;

const Main = () => {
    return main(Editor());
};

const StaticFooter = () => {
    return footer(p("(C) 2025 Kjuman Enobikto"));
};

van.add(document.body, Header());
van.add(document.body, Main());
van.add(document.body, StaticFooter());
