import React from "react";
import HeroImg from "../../assets/clubes10.jpg";

function Hero() {
  return (
    <div className="bg-primary">
      <div className="flex justify-center items-center">
        <img
          src={HeroImg}
          alt="Imagem"
          className="w-1/2 mt-20 rounded-lg h-full shadow-xl"
        />
      </div>
      <div className="my-5 mx-80">
        <h1 className="text-4xl text-fourth font-bold text-center">
          Às voltas com a Ciência
        </h1>
        <p className="text-fourth text-center my-5 text-xl">
          O nosso clube, que pertence à Rede Nacional de Clubes Ciência Viva,
          propõe promover a aprendizagem das ciências, em particular na sua
          vertente prática, experimental e laboratorial, em diferentes áreas de
          Biologia e Geologia, Física, Química, Matemática e Informática. As
          ações do clube, neste ano letivo, incluem a dinamização de
          aprendizagem com base em projetos, a promoção de trabalho de campo, a
          realização de seminários e palestras, a participação em concursos e a
          organização de eventos de partilha e divulgação de ciência.
        </p>
        <p className="text-fourth text-center my-5 text-xl">
          As atividades são desenvolvidas em contextos diversos, integrando
          alunos de todos os níveis de ensino, com diferentes interesses e
          motivações, procurando desenvolver competências previstas no perfil
          dos alunos à saída da escolaridade obrigatória.
        </p>
      </div>
      <iframe
        className="my-5 w-full h-96"
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3089.5885056171614!2d-8.582738085295842!3d39.2522118335575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd18f157d2ab9ceb%3A0x559e472782067d4!2sAgrupamento%20de%20Escolas%20de%20Jos%C3%A9%20Relvas!5e0!3m2!1spt-PT!2spt!4v1667393662368!5m2!1spt-PT!2spt"
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default Hero;
