import React from "react";
import Area from "../components/Area";
import Header from "../components/Header";
import Python from "../components/icons/Python";
import Cpp from "../components/icons/Cpp";
import Php from "../components/icons/Php";
import Java from "../components/icons/Java";
import Peace from "../components/icons/Peace";
import Css from "../components/icons/Css";
import Html from "../components/icons/Html";
import Card2 from "../components/Card2";

export default function Sobre() {
  return (
    <div>
      <Header texto="Sobre os Alunos" />
      <Area>
        <Card2
          nome="Ryan"
          card="card cardl carde mb-3 border-warning"
          texto="Atua principalmente na área back-end do software, desenvolvendo códigos principalmente na linguagem python"
        >
          <Python />
          <Cpp />
          <Php />
        </Card2>
        <Card2
          nome="Limongi"
          card="card carde mb-3 border-danger"
          texto="Curso técnico em informática mas quero fazer artes visuais na universidade federal fluminense, e trabalho para o laboratório de audiovisual e cultura do IFRJA como bolsista."
        >
          <Html />
          <Css />
        </Card2>
        <Card2
          nome="Fernando"
          card="card carde mb-3 border-info"
          texto="Sou estudante do IFRJ e um desenvolvedor back-end. As linguagens de programação que mais uso são PHP e Python."
        ></Card2>
        <Card2
          nome="Caio José"
          card="card carde cardr mb-3 border-success"
          texto="Com conhecimentos baseados em orientação a objetos ele possui grande familiriaridade com java"
        >
          <Java />
          <Peace />
        </Card2>
      </Area>
    </div>
  );
}
