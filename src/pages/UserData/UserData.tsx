//components
import Layout from "../../componentsShare/LayoutShare/LayoutShare";
import TitleData from "../../componentsShare/TitleShare/TitleShare";

// components share

//styles
import {Container,Forms, Input, Button} from './s_userdata'


const UserData = () => {
  return (
    <Layout>
        <Container>
          <Forms>
              <TitleData name='My data'/>
              <Input type="text" disabled placeholder="username" />
              <Input type="text" disabled placeholder="CPF" />
              <Input type="email" disabled placeholder="email" />
              <Input type="number" disabled placeholder="contact number
  " />
              <Button disabled>Edit</Button>
          </Forms>
        </Container>
    </Layout>
  );
}

export default UserData;