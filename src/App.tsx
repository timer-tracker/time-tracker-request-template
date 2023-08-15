import React, { useState } from "react";
import { Modal } from "./comoponents/Modal";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="App">
      <button
        onClick={() => {
          setVisible(true);
        }}
      >
        템플릿 1
      </button>
      <button>템플릿 2</button>
      <button>템플릿 3</button>
      <button>템플릿 4</button>
      <button>템플릿 5</button>
      <button>템플릿 6</button>
      <Modal visible={visible} onClose={() => setVisible(false)} />
    </div>
  );
}

export default App;
