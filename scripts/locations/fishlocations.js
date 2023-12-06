import { getLocations } from '../database.js'

export const fishLocations = (locations) =>{
    let locationsHTML = ''
    for (const location of locations) {
        locationsHTML += `<section class="locations card">
        <div></div>
        </section>
        `;
    }
    return locationsHTML
};