import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { borderRadius } from '@mui/system';

export default function ControlledCheckbox() {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return (
        <Checkbox
            sx={{ '& .MuiSvgIcon-root': { fontSize: 40, borderRadius: 50 }, color: "#5F9DF7", }}
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
        />
    );
}