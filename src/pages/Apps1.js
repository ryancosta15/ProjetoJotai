import React from "react";
import Area from "../components/Area";
import Header from "../components/Header";
import Card from "../components/Card";
import Image from "../components/Image";

export default function Home() {
  return (
    <div>
      <Header texto="Portfolio" />
      <Area>
        <Card nome="Ryan Ferreira Costa" card="card cardl mb-3 border-warning">
          <Image src="https://pps.whatsapp.net/v/t61.24694-24/315429633_169660852093874_8335509074022558259_n.jpg?ccb=11-4&oh=01_AdT2kUyJa3LKjhbzLRZPec0sVPTd6m5yjo6W0EGdhq_WQw&oe=645CC6F6" />
        </Card>
        <Card
          nome="Maria Clara Limongi Drago de Alcântara"
          card="card mb-3 border-danger"
        >
          <Image src="https://pbs.twimg.com/profile_images/1653390047112986637/aUcNHn9r_400x400.jpg" />
        </Card>
        <Card
          nome="Fernando Jefferson Serrano Roza"
          src="https://instagram.fpoa10-1.fna.fbcdn.net/v/t51.2885-15/275973511_1024353034958977_2171834892462755720_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fpoa10-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=ay0GTuK8xL8AX-t5Kuz&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=Mjc5NzY3ODQ4MDgyMzI0MTk1Nw%3D%3D.2-ccb7-5&oh=00_AfCn8wQARMJ9OMSY_Xep_tOBWnCbIOA6alBvQ1kJ4iAiyg&oe=6457383C&_nc_sid=1527a3"
          card="card mb-3 border-info"
        >
          <Image src="https://pps.whatsapp.net/v/t61.24694-24/340962617_2394417500735569_889146490912450224_n.jpg?ccb=11-4&oh=01_AdQK6P11rxEHpR-k3Y7fXyyGFup-oCj6NKJIABhEH0VPWw&oe=645CCCA4" />
        </Card>
        <Card
          nome="Caio José Carneiro de Souza"
          src="https://s5.static.brasilescola.uol.com.br/be/2021/02/macaco-aranha-de-cara-preta.jpg"
          card="card cardr mb-3 border-success"
        >
          <Image src="https://pps.whatsapp.net/v/t61.24694-24/336449042_521756016581411_8054149941022485494_n.jpg?ccb=11-4&oh=01_AdTmYx0QHqgM6KqzQ_ymb164BkF6uWkTrxctHqHFJInSPQ&oe=645CD056" />
        </Card>
      </Area>
    </div>
  );
}
