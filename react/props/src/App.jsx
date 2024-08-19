import Props from "./Props";

function App() {
  const data = {
    title: "title for the props",
    description: "a new description for the props",
    price: "66.50$",
  };
  return (
    <>
      {/* 1 way */}
      {/* <Props {...data} /> */}
      {/* 2 way */}
      {/* <Props 
  title = {data.title}
  description ={data.description}
  price= {data.price}
  /> */}
      {/* 3 way */}
      <Props title="a title" description="a description" price="554.12$" />
    </>
  );
}

export default App;
