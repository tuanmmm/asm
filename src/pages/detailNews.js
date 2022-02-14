import { get } from "../api/posts";
import Header from "../components/header";
const DetailNewsPage = {
    async render(id) {
        const {data} = await get(id);
        return `
        ${Header.render()}
                <h1>${data.title}</h1>
                <img src="${data.img}" />
                <p>${data.price}</p>
        `;
    },
};
export default DetailNewsPage;