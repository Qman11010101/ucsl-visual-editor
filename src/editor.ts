// import van from "vanjs-core";
import van from "vanjs-core/debug";
import { reactive } from "vanjs-ext";

import "./editor.css";

const { b, div, section, input, label, span } = van.tags;

interface MetaData {
    id: string;
    grade: number;
    defVersion: number;
    title: string;
    description: {
        l1: string;
        l2: string;
        l3: string;
        l4: string;
    };
}

const initialMetaData: MetaData = {
    id: "{Skill ID}",
    grade: 0,
    defVersion: 1,
    title: "",
    description: {
        l1: "",
        l2: "",
        l3: "",
        l4: "",
    },
};
const metaData = reactive(initialMetaData);

const Meta = () => {
    return section(
        { id: "editor-meta-wrapper" },
        section(
            { class: "editor-meta" },
            label(
                { class: "meta-item-label", for: "meta-skill-id" },
                "スキル識別子",
            ),
            input({
                type: "text",
                class: "meta-item-value",
                id: "meta-skill-id",
                oninput: (e) => {
                    // TODO: ファイル名として許容される文字のチェック
                    metaData.id = e.target.value;
                },
            }),
            label(
                { class: "meta-item-label", for: "meta-skill-grade" },
                "スキルグレード",
            ),
            input({
                type: "number",
                class: "meta-item-value",
                id: "meta-skill-grade",
                min: 0,
                step: 1,
                value: 0,
                oninput: (e) => {
                    metaData.grade = Number.parseInt(e.target.value);
                },
            }),
            label(
                { class: "meta-item-label", for: "meta-skill-def-version" },
                "UCSLバージョン",
            ),
            input({
                type: "number",
                class: "meta-item-value",
                id: "meta-skill-def-version",
                value: 1,
                readonly: true,
                disabled: true,
                oninput: (e) => {
                    metaData.defVersion = Number.parseInt(e.target.value);
                },
            }),
        ),
        div(
            { class: "meta-displaier" },
            b("ファイル名："),
            span(
                {
                    class: "meta-displaier-value",
                    id: "meta-filename-displaier",
                },
                () => `${metaData.id}_${metaData.grade}.ucsl`,
            ),
        ),
        section(
            { class: "editor-meta" },
            label(
                { class: "meta-item-label", for: "meta-skill-name" },
                "スキル名",
            ),
            input({
                type: "text",
                class: "meta-item-value",
                id: "meta-skill-name",
                oninput: (e) => {
                    metaData.title = e.target.value;
                },
            }),
            // スキル説明は1行以上4行以下。
            label(
                {
                    class: "meta-item-label",
                    for: "meta-skill-description-1",
                    id: "meta-skill-description-1-label",
                },
                "スキル説明",
            ),
            input({
                type: "text",
                class: "meta-item-value meta-description-text",
                id: "meta-skill-description-1",
                oninput: (e) => {
                    metaData.description.l1 = e.target.value;
                },
            }),
        ),
    );
};

const Script = () => div();

export const Editor = () => {
    return div({ class: "editor" }, Meta(), Script());
};
