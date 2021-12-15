import { useState } from "react";
import { getAllPizzas } from "../store/pizzas/selectors";
import { useSelector, useDispatch } from "react-redux";

const Homepage = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const dispatch = useDispatch();
  const pizzaList = useSelector(getAllPizzas);

  const onCreateClick = () => {
    // right now only redux => not real life
    const action = { type: "pizzas/ADD", payload: { name, description: desc } };
    dispatch(action);

    // if we had a backend
    // collect data in form
    // POST request to POST - /pizza (endpoint to create a new pizza)
    // get the response
    // now that we know this is added to the DB => send to redux and add to state
  };

  return (
    <div>
      <h1>Hello this is the homepage</h1>
      <div style={{ marginBottom: 20, border: "2px solid white", padding: 20 }}>
        <label>Pizza Name</label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Description</label>
        <input
          type='text'
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button onClick={onCreateClick}>Create!</button>
      </div>
      <div>
        {pizzaList.map((p) => (
          <div key={p.id}>
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
