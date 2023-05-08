export default function Image(props) {
  return (
    <div>
      <img className={props.card} src={props.src} alt="Foto do aluno" />
    </div>
  );
}
