import '../styles/Projetos.css'

const Projetos = () => {
    return (
        <section className='container-proj '>
            <h1 className='titulo-proj' id='projetos'>Projetos</h1>
            <h4 className='sub-t'>Confira este e projetos em andamento nas seguintes plataformas</h4>
            <div className='cards-container'>
                
            <a href="https://github.com/codebyazeredo">
                <div className='projetos-card'> 
                <i className="devicon-github-original-wordmark" id='git'></i>
                </div>
            </a> 
            <a href="https://www.figma.com/files/team/1407673164471991293/user/1407673160390811363?fuid=1407673160390811363">    
                <div className='projetos-card'> 
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" className="img-figma"/>
                </div>
            </a>    
                <br />
            </div>
        </section>
    );
};
export default Projetos;