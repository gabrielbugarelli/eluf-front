//components
import Layout from '../../components/Layout/Layout';
import { Container, Title, Context, Interaction, Icons } from './s_conscience';

//icons
import { AiFillLike, AiFillDislike } from "react-icons/ai";

const conscience = () => {
  return (
    <Layout>
      <Container>
        <section>
          <Title>5 dicas para congelar e preservar alimentos para evitar o desperdício</Title>
        </section>

        <Context>
          <p><strong>1. Antes de congelar…</strong></p> 
          <p style={{textIndent:'30px'}}>
            É importante destacar que a comida deve ser congelada no auge do seu frescor. Para saber se seu alimento ainda está em boa qualidade ao descongelar, primeiro cheque o cheiro. Se estiver forte, é melhor jogá-lo fora. Pode ser que com o tempo o alimento fique com uma forma feia, mas isso não quer dizer que não possa ser comido. Quando for assim, use-o em vitaminas ou sopas.
          </p>

          <p><strong>2. Utilize as tabelas</strong></p> 
          <p style={{textIndent:'30px'}}>
            Embora não sejam indício de seguranças, as tabelas são boas para saber por quanto tempo a comida terá a mesma qualidade de quando foi congelada. Por exemplo, depois de 6 meses no congelador, uma banana não terá a mesma textura e sabor exato de uma banana fresca, mas isso não quer dizer que ela faça mal à saúde. Colocar os alimentos no congelador é uma forma de preservá-los em relação ao crescimento de microorganismos que provocam doenças.
          </p>

          <p><strong>3. Temperatura ideal do freezer</strong></p> 
          <p style={{textIndent:'30px'}}>
          18 ºC é a melhor temperatura para congelar alimentos a longo prazo. Leve isso em conta na hora de programar o seu freezer. Se você achar que o sorvete fica muito duro e difícil servir com a colher, armazene-o na porta. Ali, a temperatura não é tão baixa. Não prejudique a qualidade dos outros alimentos por causa dele.
          </p>

          <p><strong>4. Não deixe o congelador vazio</strong></p> 
          <p style={{textIndent:'30px'}}>
          Um freezer cheio mantém a temperatura melhor do que um vazio. Isso acontece porque os alimentos congelados também produzem uma massa de ar frio. Toda vez que você abre a porta, esses alimentos ajudam o eletrodoméstico a manter a temperatura e ele precisa fazer menos esforço para eliminar o ar quente que entrou. Apesar de ser melhor ter um freezer cheio de alimentos, não é bom que ele esteja completamente lotado. O ar precisa de espaço para circular lá dentro.
          </p>
          
          <p><strong>5. Embrulhe os alimentos corretamente</strong></p> 
          <p style={{textIndent:'30px'}}>
          Não importa se você usa papel-alumínio, filme plástico ou saquinhos. Na hora de proteger os alimentos para congelar, o importante é envolvê-los de forma bem justa para eliminar qualquer ar em volta, para não prejudicar o alimento. A mesma dica vale para aqueles armazenados em potes com tampas. Nesses casos, você deve preencher o recipiente quase até o topo. Deixe apenas o espaço suficiente para que o alimento expanda após o congelamento sem levantar a tampa.
          </p>
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

export default conscience;
