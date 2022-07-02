import "../../styles/Modal.css";
import React from "react";

const Modal = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <p>You clicked the same champion, unfortunately, so you lose.</p>
        <p>Don't quit now though, with every loss you're improving. :)</p>
        <p>Feel free to play again. :D</p>
        <p>
          Just make sure that before you do: <br />
          Take a deep breath,😤
          <br />
          have a sip of water,🚰 <br />
          go for a nice nature walk,🌲 <br />
          and reset that mental!🧠
        </p>
        <button onClick={handleClose}>Close</button>
      </section>
    </div>
  );
};

export default Modal;
