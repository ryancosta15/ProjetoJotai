import React from "react";
import Area from "../components/Area";
import Header from "../components/Header";
import Aluno from "../components/Aluno";
import Github from "../components/icons/Github";
import Insta from "../components/icons/Insta";
import Mail from "../components/icons/Mail";
import Zap from "../components/icons/Whatsapp";
import In from "../components/icons/In";
import Formi from "../components/Formi";

export default function Contato() {
  return (
    <div>
      <Header texto="Contatos dos alunos" />
      <Area>
        <Aluno nome="Ryan" card="card cardl mb-3 border-warning">
          <Mail link="https://mailto:ryanfcosta9@gmail.com" />
          <Github link="https://github.com/ryancosta15" />
          <Insta link="https://instagram.com/ryanfcosta_" />
          <Zap link="https://wa.me/5521979283366" />
          <In link="https://www.linkedin.com/in/ryan-costa-a17011248/" />
        </Aluno>
        <Aluno nome="Limongi" card="card mb-3 border-danger">
          <Insta link="https://instagram.com/limongiii_" />
        </Aluno>
        <Aluno nome="Fernando" card="card mb-3 border-info">
          <Github link="https://github.com/fernandojeff" />
        </Aluno>
        <Aluno nome="Caio José" card="card cardr  mb-3 border-success">
          <Insta link="https://instagram.com/oicaioze" />
          <Zap link="https://wa.me/5521978845342" />
        </Aluno>
      </Area>
      <Header texto="Formulário" />
      <Formi />
    </div>
  );
}
