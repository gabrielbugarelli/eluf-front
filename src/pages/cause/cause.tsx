//components
import { Container, Title, Context, Interaction, Icons } from './s_cause';

// components-share
import Layout from '../../componentsShare/LayoutShare/LayoutShare';

//icons
import { AiFillLike, AiFillDislike } from "react-icons/ai";

const Cause = () => {
  return (
    <Layout>
        <Container>
          <section>
            <Title>Project Cause</Title>
          </section>

          <Context>
            <p style={{textIndent:'30px'}}>Did you know that about 17% of the food available in the world ends up being thrown away?</p>

            <p style={{textIndent:'30px'}}>According to the UN, it is estimated that between 8% and 10% of global greenhouse gas emissions are associated with food that is not consumed.</p>

            <p style={{textIndent:'30px'}}>The Eluf platform came to contribute, improving food on many tables and helping to reduce food waste.</p>  

            <p style={{textIndent:'30px'}}>In addition to reducing losses, the platform brings a simple form of trading. It serves the small producer, the trade and all those who want to trade easily and consciously.</p>

            <p style={{textIndent:'30px'}}>
            It works this way, the person opens the application on the home page, where the products will be listed, the cart page where all the selected foods will be, the maps page will simulate the user experience, there will be the user's page where they will store their data</p>

            <p style={{textIndent:'30px'}}>Eluf, in addition to being a simple and intuitive platform, arrives on the market to reduce waste, hunger and help to promote a more sustainable world, making us more aware people, aligning with the sustainable development goals (SDGs) that are part of the 2030 agenda platform.</p>
          </Context>

          <Interaction>
            Was this information helpful?
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

export default Cause;