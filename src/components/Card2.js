import { useAtom } from "jotai";
import { cor } from "../index";

export default function Card2(props) {
  const [corlocal] = useAtom(cor);
  return (
    <div className="col-sm-3">
      <div class={props.card} style={{ background: corlocal }}>
        <h2 className="card-header font-monospace">{props.nome}</h2>
        <br />
        {props.texto}

        <div class="slide2">{props.children}</div>
      </div>
    </div>
  );
}
