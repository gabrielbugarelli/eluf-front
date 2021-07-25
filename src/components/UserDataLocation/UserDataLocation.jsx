import { useState } from "react";

//components
import Layout from "../Layout/Layout";
import TitleData from "../TitleData/TitleData";

//styles
import {Container,Forms, Input, Button} from './s_userDataLocation'

const UserDataLocation = () => {

  const [endereco, setEndereco] = useState(
    [
      {
        address: 'Address 1',
        road: 'Road São Benedito',
        district: 'CPA',
        city: 'Cuiabá',
        state: 'MT',
        cep: 12345678
      },
      {
        address: 'Address 2',
        road: 'Road São Benedito',
        district: 'CPA',
        city: 'Cuiabá',
        state: 'MT',
        cep: 12345678
      }
    ]
  )

  return (
    <Layout>
      <Container>
        {endereco.map((item, index) =>{
          return(
            <Forms key={index}>
              <TitleData name={item.address}/>
              <Input type="text" disabled placeholder={item.road} />
              <Input type="text" disabled placeholder={item.district} />
              <Input type="email" disabled placeholder={item.city} />
              <Input type="email" disabled placeholder={item.state} />
              <Input type="number" disabled placeholder={item.cep} />
              <Button disabled>Edit</Button>
            </Forms>
          )
        })}
      </Container>
    </Layout>
  );
}

export default UserDataLocation;
