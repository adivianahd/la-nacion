import Header from "./components/organism/Header";
import Banner from "./components/organism/Banner";
import "./theme/_theme.module.scss";
import CardRegular from "./components/molecules/CardRegular";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <CardRegular
        title="hooalalaljshgcbhdjbchdsc"
        sizeTitle="XXL"
        leadTitle="lead"
        colorLead="strongBlue"
      />
    </>
  );
}

export default App;
