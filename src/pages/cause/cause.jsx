//components
import Layout from '../../components/Layout/Layout';
import { Container, Title, Context, Interaction, Icons } from './s_cause';

//icons
import { AiFillLike, AiFillDislike } from "react-icons/ai";

const cause = () => {
  return (
    <Layout>
      <Container>
        <section>
          <Title>Causa do Projeto</Title>
        </section>

        <Context>
          <p style={{textIndent:'30px'}}>Você Sabia que cerca de 17% dos alimentos disponíveis no mundo acabam sendo jogados no lixo?</p>

          <p style={{textIndent:'30px'}}>Segundo a ONU, estima-se que entre 8% e 10% das emissões globais de gases de efeito estufa estão associadas a alimentos que não são consumidos.</p>

          <p style={{textIndent:'30px'}}>A plataforma Eluf veio para contribuir, melhorando a alimentação em muitas mesas e para ajudar na redução do desperdício de alimentos. </p>  

          <p style={{textIndent:'30px'}}>Além de diminuir perdas, a plataforma trás uma simples forma de comercialização. Ela serve para o pequeno produtor, para o comercio e para todos aqueles que desejam comercializar de forma fácil e consciente.</p>

          <p style={{textIndent:'30px'}}>Funciona dessa maneira, a pessoa abre o aplicativo na pagina home, na qual vai estar listada os produtos, pagina que carrinho onde estara todos os alimentos selecionados, pagina maps vai simular a experiência do usuário, tera a pagina do usuario onde armazenara seus dados </p>

          <p style={{textIndent:'30px'}}>A Eluf, além de ser uma plataforma simples e intuitiva ela chega no mercado para reduzir o desperdício, a fome e ajudar
            a promover um mundo mais sustentável, nos tornando pessoas mais conscientes, se alinhando com os objetivos de desenvolvimento sustentável(ODS) que faz parte da plataforma agenda 2030.</p>
        </Context>

        <Interaction>
          Essa informação foi útil?
          <Icons>
              <AiFillLike 
                className="hover:text-green-500" 
              />

              <AiFillDislike 
                className="hover:text-red-500"
              />
          </Icons>
        </Interaction>
      </Container>
    </Layout>
  );
}

export default cause;
