// import van from "vanjs-core";
import van from "vanjs-core/debug";
import { reactive } from "vanjs-ext";

import "./editor.css";

const { b, div, section, input, label, span, button, textarea } = van.tags;

const initialMetaData = {
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

const MetaTopArr = () => {
    return [
        div(
            { class: "editor-meta form-short" },
            label(
                { class: "meta-item-label", for: "meta-skill-id" },
                "スキル識別子",
            ),
            input({
                type: "text",
                class: "meta-item-value meta-input-short",
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
    ];
};

const MetaMidArr = () => {
    const currentTextColor = van.state("#000000");
    const ctcTagFormat = van.derive(() => {
        return `<#c:${currentTextColor.val.replace("#", "")}>`;
    });
    van.derive(() => console.log(currentTextColor.val));
    return [
        div(
            { class: "editor-meta" },
            label(
                { class: "meta-item-label", for: "meta-skill-name" },
                "スキル名",
            ),
            input({
                type: "text",
                class: "meta-item-value meta-input-short",
                id: "meta-skill-name",
                oninput: (e) => {
                    metaData.title = e.target.value;
                },
            }),
        ),
        div(
            { class: "editor-description" },
            label(
                { class: "meta-item-label", for: "meta-skill-description" },
                "スキル説明（最大4行）",
            ),
            div(
                { class: "editor-description-control" },
                input({
                    type: "color",
                    oninput: (e) => {
                        currentTextColor.val = e.target.value;
                    },
                }),
                button("文字色タグ", span(ctcTagFormat), "を挿入する"),
                button("文字色初期化タグ", span("<#r>"), "を挿入する"),
            ),
            textarea({ id: "meta-skill-description" }),
        ),
    ];
};

export const Meta = () => {
    return section(
        { id: "editor-meta-wrapper" },
        ...MetaTopArr(),
        ...MetaMidArr(),
    );
};
