//components
import Layout from '../../componentsShare/LayoutShare/LayoutShare';
import { Container, Title, Context, Interaction, Icons } from './s_conscience';

// components-share
import ContextShare from '../../componentsShare/ContentShare/ContentShare';

//icons
import { AiFillLike, AiFillDislike } from "react-icons/ai";

const conscience = () => {
  return (
    <Layout>
      <ContextShare>
        <Container>
          <section>
            <Title>5 tips for freezing and preserving food to avoid waste</Title>
          </section>

          <Context>
            <p><strong>1. Before freezing...</strong></p> 
            <p style={{textIndent:'30px'}}>
            It is important to note that food must be frozen at the height of its freshness. To find out if your food is still of good quality when defrosting, first check the smell. If it's strong, it's better to throw it away. It may be that over time the food will take on an ugly shape, but that doesn't mean it can't be eaten. When so, use it in smoothies or soups.
            </p>

            <p><strong>2. Use the tables</strong></p> 
            <p style={{textIndent:'30px'}}>
            Although they are not a sign of security, tables are good for knowing how long food will have the same quality as when it was frozen. For example, after 6 months in the freezer, a banana won't have the exact same texture and flavor as a fresh banana, but that doesn't mean it's bad for your health. Putting food in the freezer is a way to preserve it from the growth of disease-causing microorganisms.
            </p>

            <p><strong>3. Optimal freezer temperature</strong></p> 
            <p style={{textIndent:'30px'}}>
            18°C is the best temperature for long-term freezing food. Take this into account when programming your freezer. If you find that ice cream is too hard and difficult to serve with a spoon, store it at the door. There, the temperature is not so low. Don't harm the quality of other foods because of it.
            </p>

            <p><strong>4. Don't leave the freezer empty</strong></p> 
            <p style={{textIndent:'30px'}}>
            A full freezer holds the temperature better than an empty one. This is because frozen foods also produce a mass of cold air. Every time you open the door, these foods help the appliance maintain its temperature, and it has less effort to clear the incoming hot air. While it's best to have a freezer full of food, it's not good if it's completely full. The air needs space to circulate inside.
            </p>
            
            <p><strong>5. Wrap food correctly</strong></p> 
            <p style={{textIndent:'30px'}}>
            It doesn't matter if you use aluminum foil, plastic wrap or sachets. When protecting food for freezing, the important thing is to wrap it tightly to eliminate any surrounding air, so as not to harm the food. The same tip goes for those stored in jars with lids. In these cases, you should fill the container almost to the top. Leave just enough space for the food to expand after freezing without lifting the lid.
            </p>
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
      </ContextShare>
    </Layout>
  );
}

export default conscience;
