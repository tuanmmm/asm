import Header from "../components/header";
import NewsList from "../components/newsList";
import Footer from "../components/footer";
import Banner from "../components/banner";
const HomePage = {
  async render() {
        return /* html */`     
        <div>${Header.render()}</div>
        <div>${Banner.render()}</div>
        <div>${await NewsList.render()}</div>    
        <div>${Footer.render()}</div>
        `;
    },
      afterRender(){
        Header.afterRender()
      },
};
export default HomePage ;