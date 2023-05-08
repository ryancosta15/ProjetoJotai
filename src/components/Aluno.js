import { useAtom } from "jotai";
import { cor } from "../index";

export default function Aluno(props) {
  const [corlocal] = useAtom(cor);
  return (
    <div className="col-sm-3">
      <div class={props.card} style={{ background: corlocal }}>
        <div className="card-body">
          <h2 className="card-header font-monospace">{props.nome}</h2>
          <br />
          <p>{props.texto1}</p>
          <p>{props.texto2}</p>
        </div>
        <div>{props.children}</div>
      </div>
    </div>
  );
}
