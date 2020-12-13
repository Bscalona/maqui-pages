import React, { useState } from "react";
import "./style.css";
import { sendMessage } from "../../utils/fetch";
export interface MessageProps {}

const Message: React.FC<MessageProps> = () => {
  const [messageSend, setMessageSend] = useState("");

  const sendSecret = async () => {
    try {
      const newMessage = messageSend.replaceAll(" ", "_");
      //  console.log(newMessage);
      await sendMessage(newMessage);
      setMessageSend("");

    } catch (err) {
      alert("No se pudo enviar el mensaje");
      setMessageSend("");
    }
  };

  return (
    <div className="content-message-dashboard">
      <div className="center-message-send">
        <textarea
          className="text-area-message"
          value={messageSend}
          onChange={({ target }) => setMessageSend(target.value)}
        ></textarea>
        <button onClick={sendSecret} className="button-accept-maqui tsx">
          Enviar Secreto
        </button>
      </div>
    </div>
  );
};

export default Message;
