import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";
import ImgGallery from "./imgGallery";

function App() {
  return (
    <div>
      <h1 className="jumbotron bg-primary full-width-header">Image Gallery</h1>
      <ImgGallery />
    </div>
  );
}

export default App;
