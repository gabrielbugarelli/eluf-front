//components
import Layout from "../Layout/Layout";
import TitleData from "../TitleData/TitleData";

//styles
import {Container,Forms, Input, Button} from './s_userData'

const UserData = () => {
  return (
    <Layout>
      <Container>
        <Forms>
            <TitleData name='Meus Dados'/>
            <Input type="text" disabled placeholder="Nome do Usuário" />
            <Input type="text" disabled placeholder="CPF" />
            <Input type="email" disabled placeholder="Email do Usuário" />
            <Input type="number" disabled placeholder="Número de contato" />
            <Button disabled>Edit</Button>
        </Forms>
      </Container>
    </Layout>
  );
}

export default UserData;
