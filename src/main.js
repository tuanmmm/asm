import Navigo from "navigo";
import HomePage from "./pages/home";
import NewsPage from "./pages/news";
import DetailNewsPage from "./pages/detailNews";
const router = new Navigo("/", {linksSelector: "a"});

const print = async (content,id) => {
   document.getElementById("app").innerHTML = await content.render(id);
}
router.on({
   "/": () => 
      print(HomePage),
   "/news/:id":( data ) => print(DetailNewsPage,data.data.id),
   
});
router.resolve();