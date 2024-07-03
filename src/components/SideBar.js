import React from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';


export default function SideBar() {
    return (
        <>
            <Stack direction="column" spacing={1}>
                <Button variant="outlined" startIcon={<AddIcon />}>
                    New File
                </Button>
                <Button variant="outlined" startIcon={<AddIcon />}>
                    New Folder
                </Button>
            </Stack>
        </>
    )
}
