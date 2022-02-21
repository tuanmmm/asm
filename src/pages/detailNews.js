import { get } from "../api/product";
import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";
import { addToCart } from "../utils/cart";
const DetailNewsPage = {
    async render(id) {
        const {data} = await get(id);
        return /*html*/ `         
                 <div>
                        ${Header.render()}
                       ${Banner.render()} 
                </div>
                <div class="border-2  mt-[30px] mb-[30px]  rounded-[30px] bg-indigo-500">
                        <h2 class="text-center pl-[30px] text-2xl font-semibold uppercase my-4 ">chi tiết sản phẩm</h2>
               </div>     
                <div class="w-[1200px] mx-auto grid grid-cols-2 my-[50px] bg-white rounded-[10px]"> 
                    <div class="m-[20px]">
                        <img src="${data.img}" alt="">
                    </div>
                    <div class="m-[20px]">
                        <p class="text-[36px] pb-[20px] text-[#027bc6]">${data.title}</p>
                        <p class="text-[36px] pb-[20px] text-red-600">${data.price} VND</p>
                        
                        <input type="number" id="inputValue" class="border border-black w-[50px] mb-[10px]" value="1" /> <br>
                        <button id="btnAddTocart" class="border p-[10px] rounded-[10px] bg-[#57d7ff] hover:bg-[#027bc6] text-[17px] font-bold text-white ">Thêm vào giỏ hàng</button>
                    </div>
                </div>
                <div id="footer">
                    ${Footer.render()}
                </div>
                    `;
    },
    afterRender(id){
        const btnAddTocart = document.querySelector('#btnAddTocart');
        const inputValue = document.querySelector('#inputValue');


        btnAddTocart.addEventListener('click', async () => {
            const { data } = await get(id);
            addToCart({...data, quantity: inputValue.value ? +inputValue.value : 1}, function(){
                toastr.success("Thêm vào giỏ hàng thành công!");
            })
            
        })
    }
};
export default DetailNewsPage;