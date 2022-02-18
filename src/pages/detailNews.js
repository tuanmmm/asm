import { get } from "../api/product";
import Header from "../components/header";
import Banner from "../components/banner";
const DetailNewsPage = {
    async render(id) {
        const {data} = await get(id);
        return `     
        ${Header.render()}
        ${Banner.render()}
        <div class="border-2  mt-[30px] mb-[30px]  rounded-[30px] bg-indigo-500">
            <h2 class="text-center pl-[30px] text-2xl font-semibold uppercase my-4 ">Chi tiết sản phẩm</h2>
        </div>    
                <h1>${data.title}</h1>
                <img src="${data.img}" />
                <p>${data.price}</p>
  
        `;
    },
};
export default DetailNewsPage;