import { useState } from "react";
export default function Formi() {
  const [textoInserido, setTextoInserido] = useState("");
  const adicionar = () => {
    console.log(textoInserido);

    window.alert("Olar " + textoInserido + " sua mensagem foi enviada");
    setTextoInserido("");
  };

  return (
    <form>
      <input
        className="form-control"
        value={textoInserido}
        onChange={(callback) => setTextoInserido(callback.target.value)}
        type="text"
        placeholder="Nome"
      />
      <br />
      <input className="form-control" type="email" placeholder="E-mail" />
      <br />
      <input
        className="form-control form-control-lg"
        type="textarea"
        placeholder="Mensagem"
      />
      <br />
      <button
        type="submit"
        className="btn btn-secondary"
        onClick={() => adicionar()}
      >
        Enviar
      </button>
    </form>
  );
}
