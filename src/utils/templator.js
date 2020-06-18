// Простая версия для тестов в спринте 2-3
import get from 'lodash/get';

const TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;

function _compileTemplate(tmpl, ctx) {
    let key = null;
    let html = tmpl;

    // Regexp не нужно создавать каждый раз, так как это также экземпляр класса и очень дорого по времени / памяти
    // А в данном кейсе вообще заведет в бесконечный цикл
    while ((key = TEMPLATE_REGEXP.exec(tmpl))) {
        if (key[1]) {
            const data = get(ctx, key[1].trim());
            if (typeof data === 'function') {
                window[key[1].trim()] = data;
                html = html.replace(
                    new RegExp(key[0], 'gi'),
                    `window.${key[1].trim()}()`,
                );
                continue;
            }

            html = html.replace(new RegExp(key[0], 'gi'), data);
        }
    }

    return html;
}

export function compile(template, ctx) {
    return _compileTemplate(template, ctx);
}
