import NavAdmin from "../../../components/NavAdmin";
import { add } from "../../../api/product";
import axios from "axios";
const Addsp = {
      render(){
         return /*html*/ `
            <div>
                ${NavAdmin. render()}
          </div>
           <div>
           <div class="md:grid md:grid-cols-3 md:gap-6">
             <div class="mt-5 md:mt-0 md:col-span-2">
               <form action="#" id="form-add-product" method="POST">
                 <div class="shadow sm:rounded-md sm:overflow-hidden">
                   <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                     <div class="grid grid-cols-3 gap-6">
                       <div class="col-span-3 sm:col-span-2">
                         <label for="company-website" class="block text-sm font-medium text-gray-700"> TITLE </label>
                         <div class="mt-1 ">
                           <input type="text"  id="title" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" >
                         </div>
                       </div>
                     </div>
         
                     <div>
                       <label for="about" class="block text-sm font-medium text-gray-700"> price </label>
                       <div class="mt-1">
                         <textarea id="price" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" ></textarea>
                       </div>
                     </div>
         
                     <div>
                       <label class="block text-sm font-medium text-gray-700"> img </label>
                       <div class="mt-1 flex items-center">
                           <input type="file" id="img">
                           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png" id="previewImage" class="w-[100px] h-[100px]" >                      
                       </div>
                     </div>
                   </div>
                   <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                     <button class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                   </div>
                 </div>
               </form>
             </div>
           </div>
         </div>      
           `;
      },
      afterRender(){
          const formAdd = document.querySelector("#form-add-product");
          const imgProduct = document.querySelector("#img");
          const imgPreview = document.querySelector('#previewImage');
          imgProduct.addEventListener("change", async (e) => {
            imgPreview.src = URL.createObjectURL(imgProduct.files[0])
          });
          formAdd.addEventListener("submit", async (e) => {
            e.preventDefault();
    
            const file = imgProduct.files[0];
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "mrtuan");
    
            const { data } = await axios({
              url: "https://api.cloudinary.com/v1_1/asm-acma-06/image/upload",
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-formendcoded",
              },
              data: formData,
            })
            add({
              title: document.querySelector("#title").value,
              img: data.url,
              price: document.querySelector("#price").value,
            })
            .then((result) => console.log(result.data))
            .catch((error) => console.log(error));
          });
          
      },
};
export default Addsp;