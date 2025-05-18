import Layout from "./Layout";

function App() {
  return (
    <>
      <Layout
        title={"TOOLS"}
        textTitle={
          "Do you need color, gradients, fonts, frameworks, web, plugins?"
        }
        text={"It`s you site, here you will find what do you need"}
        removeTitle={true}
        descripetion={true}
        menuIs={true}
      />
    </>
  );
}

export default App;
