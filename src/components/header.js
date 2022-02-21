const Header = {
    render (){
        return /* html */ `
  
    <header class="text-white  w-full pt-2 pb-2 bg-indigo-500" >
        <nav class=" m-auto  flex justify-between items-center  ">
          <img class="max-w-0px] ml-[100px] m-[20px]" src="https://res.cloudinary.com/asm-acma-06/image/upload/v1644935389/logo_tgl8n3.png" alt="">
          <ul class="flex text-lg ">
            <li class="pr-3 pl-3   hover:text-orange-500"><a href="/">Trang Chủ</a></li>
            <li class="pr-3 pl-3   hover:text-orange-500"><a href="/news">Sản Phẩm</a></li>
            <li class="pr-3 pl-3   hover:text-orange-500"><a href="/admin/dashboard">admin</a></li>
            <li class="pr-3 pl-3   hover:text-orange-500"><a href="">Liên Hệ</a></li>
          </ul>
          <ul class=" flex text-lg ">
            <li class="pr-3 pl-3"><a href="#"><i class="fa-solid fa-magnifying-glass"></i></a></li>
            <li class="pr-3 pl-3"><a href="#"><i class="fa-solid fa-circle-user"></i></a></li>
            <li class="pr-3 pl-3"><a href=""><i class="fa-solid fa-heart"></i></a></li>
            <li class="pr-3 pl-3"><a href="/cart"><i class="fa-solid fa-cart-shopping"></i></a></li>
          </ul>
          <div class="mr-[100px]">
          <a href="/signup"><button class="border p-[5px] font-bold  bg-[#5e6df7] text-white text-[17px] hover:bg-[#027bc6]">Đăng kí</button></a>
          <a href="/signin"><button class="border p-[5px] font-bold   bg-[#5e6df7] text-white text-[17px] hover:bg-[#027bc6]">Đăng nhập</button></a>
        </div>
        </nav>
      </header>
      
        `;
    },
};
export default Header;
