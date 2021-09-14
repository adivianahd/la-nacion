import Header from "./components/organism/Header";
import Banner from "./components/organism/Banner";
import "./theme/_theme.module.scss";
import AuthorCard from "./components/molecules/AuthorCard";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <AuthorCard
        lead="volanta"
        sizeTitle="XL"
        note="esta es la informacion del autor mas info  informacion del autor mas info  informacion del autor mas info  informacion del autor mas info  informacion del autor mas info"
        authorName="Astrid hernandez"
        urlImg="https://media-exp1.licdn.com/dms/image/C4D03AQHwSRl3rUIBvw/profile-displayphoto-shrink_800_800/0/1605207932656?e=1637193600&v=beta&t=xYstynEkSWogP_lklg2wqm9Khxv5BO_O3KLtO_cD_44"
      />
    </>
  );
}

export default App;
