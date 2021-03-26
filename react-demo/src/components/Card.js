import React from "react";

const styles = {
  card: {
    margin: 20,
    background: "#e8eaf6",
    opacity: ".9"

  },
  heading: {
    background: "rgb(159, 184, 159)",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px"
  },
  content: {
    padding: 20
  }
};

function Card(props) {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>{props.name}</div>

      <div style={styles.content}>

        <img alt={props.name} src={props.image} />
        {props.content}

      </div>

    </div>
  );
}

export default Card;
