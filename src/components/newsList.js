import { getAll } from "../api/product";
const NewsList = {
    async render (){
        const { data } = await getAll();
        return /* html */ `
        <div class=" w-[1400px] mx-auto">
        <div class="border-2  mt-[30px] mb-[30px]  rounded-[30px] bg-indigo-500">
                <h2 class="text-center pl-[30px] text-2xl font-semibold uppercase my-4 ">Sản Phẩm</h2>
        </div>     
        <div class="grid grid-cols-4 gap-8">
        ${data.map((product) => `
            <div class="border px-4 py-3 ">
                <a  href="">
                    <img src="${product.img}" class="h-[300px] m-auto" alt="" />
                </a>
                <h3 class="my-3"><a href="/news/${product.id}" class="text-xl font-semibold text-orange-500">${product.title}</a></h3>
                <p >${product.price}</p>
            </div>
        `).join("")}     
    </div>
    </div>
        `;
    },
};
export default NewsList;