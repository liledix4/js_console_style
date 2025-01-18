// HINT: use %c
// EXAMPLE: console.info(`%c%d files were detected`, `${consoleStyle[1]} background-color: #009444`, fileCount);
const css = {
    bold: 'font-weight: bold; ',
    border_radius: 'border-radius: 4px; ',
    font2x: 'font-size: 2em; ',
    font_system: 'font-family: system-ui; ',
    fullWidth: 'min-width: 100%; ',
    italic: 'font-style: italic; ',
    padding10: 'padding: 5px 10px; ',
    text_shadow: 'text-shadow: 0 1px 2px #00000044; '
};
export const consoleStyle = [
    css.border_radius + css.font2x + css.bold + css.font_system + css.padding10 + css.fullWidth + css.text_shadow,
    css.border_radius + css.font_system + css.italic + css.padding10 + css.fullWidth + css.text_shadow
];