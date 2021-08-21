import { useState } from "react";

//components
import Layout from "../../componentsShare/LayoutShare/LayoutShare";
import TitleShare from "../../componentsShare/TitleShare/TitleShare";

// components-share

//styles
import {Forms, Input, Button} from './s_userdatalocation'

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
        {endereco.map((item, index) =>{
          return(
            <Forms key={index}>
              <TitleShare name={item.address}/>
              <Input type="text" disabled placeholder={item.road} />
              <Input type="text" disabled placeholder={item.district} />
              <Input type="email" disabled placeholder={item.city} />
              <Input type="email" disabled placeholder={item.state} />
              <Input type="number" disabled placeholder={`${item.cep}`} />
              <Button disabled>Edit</Button>
            </Forms>
          )
        })}
    </Layout>
  );
}

export default UserDataLocation;
