import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import '../styles/App.css';

const App = () => {

  const userData = [
    { name: "Mango"       ,src:"https://images.hindustantimes.com/img/2021/06/25/1600x900/9a156550-c367-11eb-9d53-2d5cae187b44_1624624374058.jpg"},
    { name: "Apple"       ,src:"https://w7.pngwing.com/pngs/319/218/png-transparent-sliced-apple-with-leaf-apple-juice-green-purxe9e-apple-natural-foods-food-green-apple.png"},
    { name: "Orange"      ,src:"https://w7.pngwing.com/pngs/1001/506/png-transparent-slices-of-oranges-orange-juice-flavor-fruit-nutritious-orange-natural-foods-food-orange.png"},
    { name: "Dragonfruit" ,src:"https://w7.pngwing.com/pngs/233/1020/png-transparent-dragon-fruit-ice-cream-juice-dried-fruit-pitaya-plants-food-photography-cooking.png"},
    { name: "Guava"       ,src:"https://www.pngfind.com/pngs/m/505-5057002_guava-png-common-guava-transparent-png.png"},
    { name: "Papaya"      ,src:"https://e7.pngegg.com/pngimages/685/75/png-clipart-papaya-papaya-beauty-food.png"},
    { name: "Pineapple"   ,src:"https://w7.pngwing.com/pngs/238/575/png-transparent-pineapple-juice-smoothie-cocktail-pineapple-juice-juice-dried-fruit-food-fruit.png"},
    { name: "Cherry"      ,src:"https://toppng.com/uploads/preview/cherry-png-picture-cheri-fruits-11563271567esgx1jgdzd.png"},
    { name: "Strawberry"  ,src:"https://w7.pngwing.com/pngs/102/28/png-transparent-strawberry-juice-fruit-smoothie-strawberry-fruit-natural-foods-frutti-di-bosco-food-thumbnail.png"},
    { name: "Kiwi"        ,src:"https://e7.pngegg.com/pngimages/924/918/png-clipart-kiwifruit-juice-smoothie-food-kiwi-juice-natural-foods-food.png"},
  ];

  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userData);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);

    }
  };

  return (
    <div id="main">
       <div className="App" style={{ width: "500px",  padding:"40px" }}>
      <form className="form w-100">
        <h3>Select Fruits</h3>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="allSelect"
            checked={!users.some((user) => user?.isChecked !== true)}
            onChange={handleChange}
          />
          <label className="form-check-label ms-2">All Select</label>
        </div>
        {users.map((user, index) => (
          <div className="form-check" key={index}>
            <input
              type="checkbox"
              className="form-check-input"
              name={user.name}
              checked={user?.isChecked || false}
              onChange={handleChange}
            />
            <label className="form-check-label ms-2">{user.name}</label>
          </div>
          
        ))}
      </form>
      <div id="images">
      {users.map((user, index) => (
         <Image src={user.isChecked===true?user.src:'https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg'} height='150px' width='180px' alt="responsive" />
      ))}
    </div>
    </div>
      
    </div>
  )
}


export default App;
