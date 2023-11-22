import Header from "./components/Header/Header.jsx";
import Input from "./components/Input/Input.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="user-input">
          <div className="input-group">
            <Input label="Initial Input" />
            <Input label="Initial Input 2" />
          </div>
          <div className="input-group">
            <Input label="Initial Input" />
            <Input label="Initial Input 2" />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
