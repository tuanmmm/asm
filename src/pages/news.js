import NewsList from "../components/newsList";
import Header from "../components/header";
const NewsPage = {
    render(){
        return `
               ${Header.render()}
              ${NewsList.render()}
        `;
    },
};
export default NewsPage;