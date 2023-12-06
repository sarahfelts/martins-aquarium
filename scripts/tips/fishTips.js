import { getTips } from '../database.js'

export const fishTips = (tips) => {
    let tipsHTML = ''
    for (const tip of tips) {
        tipsHTML += `<section class="tips card">
        <div class="tip_quote">${tip.quote}</div>
        <div class="tip_name">${tip.name}</div>
    </section>
`;
    }
    return tipsHTML
};
