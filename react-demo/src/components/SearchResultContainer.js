import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import "../../src/styles/SearchResultContainer.css"
import projects from "../projects.json";

function SearchResultContainer() {
  return (

    <div>
      <Header />
      <Navbar />
      <Card
        name={projects[0].name}
        image={projects[0].image}
        content={projects[0].content}

     
      />
      <Card
        name={projects[1].name}
        image={projects[1].image}
        content={projects[1].content}

       
      />
      <Card
        name={projects[2].name}
        image={projects[2].image}
        content={projects[2].content}

      />
      <Card
        name={projects[3].name}
        image={projects[3].image}
        content={projects[3].content}
      
      />
      <Card
        name={projects[4].name}
        image={projects[4].image}
        content={projects[4].content}

    
      />
      <Card
        name={projects[5].name}
        image={projects[5].image}
        content={projects[5].content}

      />
      <Footer />
    </div>
  );
}


export default SearchResultContainer;
