import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { borderRadius } from '@mui/system';

type Props = {

}

export default function ControlledCheckbox() {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return (
        <Checkbox
            sx={{ '& .MuiSvgIcon-root': { fontSize: 40 }, color: 'transparent', borderRadius: 50, textColor: "#5F9DF7", }}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
            
        />
    );
}