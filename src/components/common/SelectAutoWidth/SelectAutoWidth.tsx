import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectAutoWidth() {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
        <div >
            <FormControl sx={{ minWidth: 200 }}>
                <InputLabel id="demo-simple-select-autowidth-label">Semester</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={age}
                    onChange={handleChange}
                    autoWidth
                    label="Semester"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1 Sem</MenuItem>
                    <MenuItem value={2}>2 Sem</MenuItem>
                    <MenuItem value={3}>3 Sem</MenuItem>
                    <MenuItem value={4}>4 Sem</MenuItem>
                    <MenuItem value={5}>5 Sem</MenuItem>
                    <MenuItem value={6}>6 Sem</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}