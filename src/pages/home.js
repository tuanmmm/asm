import Header from "../components/header";
import NewsList from "../components/newsList";
import Footer from "../components/footer";
const HomePage = {
  async render() {
        return /* html */`     
        <div>${Header.render()}</div>
        <div>${await NewsList.render()}</div>    
        <div>${Footer.render()}</div>
        `;
    },
};
export default HomePage ;