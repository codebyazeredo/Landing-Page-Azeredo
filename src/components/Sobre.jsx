import { useEffect, useState } from 'react';
import '../styles/Sobre.css'; // Adicione seus estilos personalizados aqui

const Sobre = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4); // Estado para o número de itens a mostrar

  const stacks = [
    { icon: "devicon-java-plain colored" },
    { icon: "devicon-spring-original colored" },
    { icon: "devicon-javascript-plain colored" },
    { icon: "devicon-nodejs-plain-wordmark colored" },
    { icon: "devicon-react-original colored" },
    { icon: "devicon-mysql-plain-wordmark colored" },
    { icon: "devicon-mongodb-plain-wordmark colored" },
    { icon: "devicon-insomnia-plain colored" },
    { icon: "devicon-reactbootstrap-original colored" },
    { icon: "devicon-html5-plain-wordmark colored" },
    { icon: "devicon-css3-plain-wordmark colored" },
    { icon: "devicon-figma-plain" },
  ];

  const totalItems = stacks.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsToShow) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - itemsToShow + totalItems) % totalItems);
  };

  // Ajuste do número de itens mostrados com base no tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsToShow(3);
      } else {
        setItemsToShow(4);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Chama uma vez para configurar no início

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, [currentIndex, itemsToShow]);


  // Função para determinar a cor da barra de progresso
  const getProgressColor = (percentage) => {
    if (percentage <= 20) return '#f44336'; // Vermelho
    if (percentage <= 45) return '#ff9800'; // Laranja
    if (percentage <= 65) return '#acb843'; // Amarelo
    if (percentage <= 75) return '#4caf50'; // Verde claro
    if (percentage <= 85) return '#44922e'; // Verde
    return '#00ff00'; 
  };

  // Habilidades ativas (tecnológicas)
  const activeSkills = [
    { name: 'Desenvolvimento Front-End', level: 88 },
    { name: 'Desenvolvimento Back-End', level: 88 },
    { name: 'Git', level: 83 },
    { name: 'Banco de Dados Relacional', level: 86 },
    { name: 'Banco de Dados Não Relacional', level: 65 },
    { name: 'Lógica de Programação', level: 90 },
    { name: 'Programação Orientada a Objetos', level: 90 },
    { name: 'Revisão de Códigos', level: 70 },
    { name: 'Análise de Requisitos', level: 75 },
    { name: 'Metodologias Ágeis', level: 85 },
    { name: 'Design', level: 70 },
    { name: 'UI/UX', level: 65 },
  ];

  // Habilidades passivas (socioemocionais)
  const passiveSkills = [
    { name: 'Aprendizado', level: 100 },
    { name: 'Criatividade', level: 100 },
    { name: 'Resolução de Problemas', level: 90 },
    { name: 'Trabalho em Equipe', level: 90 },
    { name: 'Adaptabilidade', level: 88 },
    { name: 'Pensamento Lógico', level: 95 },
    { name: 'Pensamento Crítico', level: 85 },
    { name: 'Proatividade', level: 99 },
    { name: 'Comunicação Eficaz', level: 90 },
    { name: 'Gestão de Tempo', level: 85 },
    { name: 'Empatia', level: 99 },
    { name: 'Inteligência Emocional', level: 88 },
  ];

  return (
    <section className="sobre" id='sobre'>
      <h2 className='titulo-principal'>Desenvolvedor Full Stack</h2>
      <div className="divisoria"></div>
      <h2 className='titulo-sobre'>Tecnologias</h2> 
      <div className="carousel">
        <button className="carousel-btn prev" onClick={prevSlide}>❮</button>
        <div className="carousel-inner">
          {stacks.slice(currentIndex, currentIndex + itemsToShow).map((stack, index) => (
            <div key={index} className="stack-item">
              <i className={stack.icon} style={{ fontSize: '70px' }}></i>
            </div>
          ))}
        </div>
        <button className="carousel-btn next" onClick={nextSlide}>❯</button>
      </div>
      <div className="container">
        <div className="divisoria"></div>

        <h2 className='titulo-sobre'>Sobre Mim</h2>
        <p className='texto-sobre'>
          Olá! Me chamo Matheus Azeredo, como muitos, sou um entusiasta da tecnologia
          com muita paixão em CRIAR. Sou um DJ aposentado, o que me fez desenvolver minhas habilidades 
          sociais e a pensar fora da caixa. Hoje em dia, uso essa criatividade
          para resolver problemas de forma inovadora.
        </p>
        <p className='texto-sobre'>
          Estou sempre buscando melhorar e acredito que o melhor jeito de fazer isso é colocando a mão na massa
          e aprendendo com os feedbacks. Por isso, resolvi montar este espaço para compartilhar meus projetos e criações, 
          onde posso receber críticas e novas ideias para continuar evoluindo e entregando resultados cada vez melhores.
        </p>

        <div className="skills-section">
          <div className="skills-card">
            <h3 className='titulo-sobre'>Habilidades Ativas</h3>
            <div className="skills-bar">
              {activeSkills.map((skill, index) => (
                <div key={index} className="skill">
                  <span className="skill-name">{skill.name}</span>
                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: getProgressColor(skill.level)
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-card">
            <h3 className='titulo-sobre'>Habilidades Passivas</h3>
            <div className="skills-bar">
              {passiveSkills.map((skill, index) => (
                <div key={index} className="skill">
                  <span className="skill-name">{skill.name}</span>
                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: getProgressColor(skill.level)
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <br />
      </div>
    </section>
  );
};

export default Sobre;
