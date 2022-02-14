import Header from "../components/header";
import NewsList from "../components/newsList";
const HomePage = {
  async render() {
        return /* html */`     
        <div>${Header.render()}</div>
        <div>${await NewsList.render()}</div>    
  
        `;
    },
};
export default HomePage ;