import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

type Props = {
  stap?: number;
}

const steps = [
  'Compra',
  'Pagamento',
  'Confirmação'
];

export function TabLoading({ stap = 0 } : Props) {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={stap} alternativeLabel>
        {steps.map((label) => (
          <Step key={label} sx={{ }}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

// Function para utilizar na minha page

// import { useState } from 'react';
// import { TabLoading } from "../../components/TabLoading";
// import { Container } from "./styles";

// export function Pagamento(){
//     const [stap, setStap] = useState(0);

//     function handleNext(isNext: boolean = true){
//         setStap(isNext ? stap + 1 : stap - 1);
//     }

//     return(
//         <Container>
//            <TabLoading stap={stap} />  
           
//            {stap === 0
//            ? <form>
//                 <p>tela 1</p>
//             </form>
//             : <form>
//                 <p>tela 2</p>
//             </form>
//         }
//                    <button onClick={() => handleNext(false)}>back</button>
//            <button onClick={() => handleNext(true)}>Next</button>
//         </Container>
//     )
// }