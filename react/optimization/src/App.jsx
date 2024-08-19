import "./App.css";
import LazyImage from "./LazyImage";

const ImageCard = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <img src={props.img} alt="" loading="lazy" />
    </div>
  );
};
const data = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/23196798/pexels-photo-23196798/free-photo-of-a-man-walking-across-the-street-in-a-black-and-white-photo.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/21038758/pexels-photo-21038758/free-photo-of-black-and-white-photo-of-tall-buildings-in-dubai.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/21601856/pexels-photo-21601856/free-photo-of-a-bicycle-is-parked-under-an-umbrella-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/19220583/pexels-photo-19220583/free-photo-of-balconies-of-a-apartment-building.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
  },
  {
    id: 5,
    url: "https://images.pexels.com/photos/23096924/pexels-photo-23096924/free-photo-of-a-balcony-with-pots-of-plants-and-a-statue.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
  },
  {
    id: 6,
    url: "https://images.pexels.com/photos/21919162/pexels-photo-21919162/free-photo-of-a-woman-in-a-hat-and-a-long-skirt-is-sweeping-the-road.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
  },
  {
    id: 7,
    url: "https://images.pexels.com/photos/20419403/pexels-photo-20419403/free-photo-of-ollantaytambo-cusco-peru.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
  },
  {
    id: 8,
    url: "https://images.pexels.com/photos/22819919/pexels-photo-22819919/free-photo-of-a-person-pouring-honey-on-a-wooden-table-with-fruit.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
  },
  {
    id: 9,
    url: "https://images.pexels.com/photos/21775187/pexels-photo-21775187/free-photo-of-unknown.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
  },
  {
    id: 10,
    url: "https://images.pexels.com/photos/22816077/pexels-photo-22816077/free-photo-of-a-woman-sitting-on-a-curb-in-front-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
  },
];

function App() {
  return (
    <>
      {data.map((item) => (
        <LazyImage
        id={item.id}
        width="800"
        height="1000"
        src={item.url}
        key={item.id}
        />
      ))}
    </>
  );
}

export default App;
