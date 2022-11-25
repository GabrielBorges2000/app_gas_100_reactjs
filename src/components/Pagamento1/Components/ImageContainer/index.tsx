import Mastercard from '../../assets/Mastercard.svg'
import Visa from '../../assets/Visa.svg'
import Elo from '../../assets/Elo.svg'

import {
Container, ImgContainer, Logoimage,
} from './styles';
import { PropsFor } from '@mui/system';

type Props = {
    title?: string;

}

export function ImageContainer({title} : Props) {
    return (
        <Container>
            <ImgContainer>
                <Logoimage src={Mastercard} />
                <Logoimage src={Visa} />
                <Logoimage src={Elo}></Logoimage>
            </ImgContainer>
        </Container>
    )
}