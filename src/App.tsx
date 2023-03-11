import styles from "./App.module.scss";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleWeight = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(event.target.value);
    console.log(event.target.value);
  };

  const handleHeight = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(event.target.value);
    console.log(event.target.value);
  };

  function handleFormSubmitted(e: React.FormEvent) {
    e.preventDefault();
    if (weight === "" || height === "") {
      toast.warn("Please fill in all required fields!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      return;
    } else {
      setIsSubmitted(true);
    }
  }

  let kg = parseInt(weight);
  let hg = parseFloat(height);

  const bmiCalc = kg / (hg * hg);

  return isSubmitted ? (
    <div>
      <main>
        <div className={styles.container}>
          <h1>Your BMI is</h1>
          <h4>{bmiCalc.toFixed(1)}</h4>
          <div className={styles.categories}>
            <h2>BMI Categories:</h2>
            <img className={styles.table} src="./bmi-meaning.png" alt="" />
          </div>
        </div>
      </main>
    </div>
  ) : (
    <main>
      <div className={styles.container}>
        <h1>Calculate your BMI</h1>
        <p>
          Body mass index, or BMI, is used to determine whether you are in
          healthy weight range for your height
        </p>
        <form className={styles.form} onSubmit={handleFormSubmitted}>
          <div className={styles.values}>
            <input
              type="number"
              placeholder="What's your weight? *"
              value={weight}
              onChange={handleWeight}
            />
            <h3>kg</h3>
          </div>
          <div className={styles.values}>
            <input
              type="number"
              placeholder="What's your height? *"
              value={height}
              onChange={handleHeight}
            />
            <h3>m</h3>
          </div>
          <button className={styles.button} type="submit">
            Calculate
          </button>
        </form>
      </div>
    </main>
  );
}

export default App;
