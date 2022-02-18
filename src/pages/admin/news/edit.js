import NavAdmin from "../../../components/NavAdmin";
import axios from "axios";
import { get , update } from "../../../api/product";
const Editsp = {
   async render(id){
    const { data } = await get(id);
       return /*html*/ `
          <div>
              ${NavAdmin. render()}
        </div>
         <div>
         <div class="md:grid md:grid-cols-3 md:gap-6">
           <div class="mt-5 md:mt-0 md:col-span-2">
             <form action="#" id="edit_product" method="POST">
               <div class="shadow sm:rounded-md sm:overflow-hidden">
                 <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                   <div class="grid grid-cols-3 gap-6">
                     <div class="col-span-3 sm:col-span-2">
                       <label for="company-website" class="block text-sm font-medium text-gray-700"> TITLE </label>
                       <div class="mt-1 ">
                         <input type="text" value="${data.title}"  id="title" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" >
                       </div>
                     </div>
                   </div>
       
                   <div>
                     <label for="about" class="block text-sm font-medium text-gray-700"> price </label>
                     <div class="mt-1">
                       <input type="text" id="price" value="${data.price}" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" >
                     </div>
                   </div>
       
                   <div>
                     <label class="block text-sm font-medium text-gray-700"> img </label>
                     <div class="mt-1 flex items-center">
                         <input type="file" id="image_product">
                         <img src="${data.img}" id="previewImage" class="w-[100px] h-[100px]" >                      
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
    afterRender(id) {
        const formEdit = document.querySelector("#edit_product");
        const imgProduct = document.querySelector("#image_product");
        const imgPreview = document.querySelector('#previewImage');
        let imgUploadedLink = "";
        
        imgProduct.addEventListener("change", async (e) => {
          imgPreview.src = URL.createObjectURL(imgProduct.files[0])
        });

        formEdit.addEventListener("submit", async (e) => {
          e.preventDefault();
  
          const file = imgProduct.files[0];
          if(file){
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
            });
            imgUploadedLink = data.url
          }
          
          update({
            id,
            title: document.querySelector("#title").value,
            img: imgUploadedLink ? imgUploadedLink : imgPreview.src,
            price: document.querySelector("#price").value,
          })
          .then((result) => console.log(result.data))
          .catch((error) => console.log(error));
        });
    }
};
export default Editsp;