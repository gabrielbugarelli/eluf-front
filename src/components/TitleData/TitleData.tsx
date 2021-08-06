import {Title} from './s_titledata'

interface Data {
  name:string
}

export default function TitleData({name}:Data) {
  return (
    <Title>
      {name}
    </Title>
  )
}