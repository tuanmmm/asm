import Navigo from "navigo";
import HomePage from "./pages/home";
// import NewsPage from "./pages/news";
import Signup from "./pages/signup";
import DetailNewsPage from "./pages/detailNews";
import AdminNewsPage from "./pages/admin/news";
import DashboardPage from "./pages/admin/dashboard";
import Addsp from "./pages/admin/news/addsp";
import Editsp from "./pages/admin/news/edit";
import Signin from "./pages/signin";
import CartPage from "./pages/cart";
const router = new Navigo("/", {linksSelector: "a"});

const print = async (content,id) => {
   document.getElementById("app").innerHTML = await content.render(id);
   if (content.afterRender) content.afterRender(id);
}
router.on({
   "/": () =>  print(HomePage),   
   "/news/:id":( data ) => print(DetailNewsPage,data.data.id),
   "/signup": () => print(Signup),
   "/signin": () => print(Signin),
   "/admin/dashboard": () =>  print(DashboardPage) , 
   "/admin/news": () => print(AdminNewsPage),
   "/admin/news/addsp": () => print(Addsp),
   "/admin/news/:id/edit": ({data}) => print(Editsp, data.id),
   "/cart": () => print(CartPage),
});
router.resolve();