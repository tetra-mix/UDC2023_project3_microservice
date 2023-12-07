import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Home from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LinkIcon from '@mui/icons-material/Link';
import { useNavigate } from 'react-router-dom';

export default function Info() {
    const [value, setValue] = React.useState(1);
    const navigate = useNavigate();

    return (
        <>
            <AppBar position="static" sx={{ width: '100%', height: '10%' }}>
                <Container maxWidth="xl">
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        伊勢データベース -Ise Database-
                    </Typography>
                </Container>
            </AppBar>
            <Box sx={{ width: '100%', height: '80%' }}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <div>

                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div>

                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            使い方 -How to use-
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        ① 指定されたデータIDを入力してください。
                    </Grid>
                    <Grid item xs={6}>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            お知らせ -Information-
                        </Typography>
                    </Grid>
                    <Grid item xs= {12}>
                        <ul>
                            <li>当サイトを制作しました。2023/12/07</li>
                        </ul>
                    </Grid>
                </Grid>
            </Box >
            <Box sx={{ width: '100%', height: '10%' }}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction onClick={() => { navigate('/') }} label="Home" icon={<Home />} />
                    <BottomNavigationAction onClick={() => { navigate('/Info') }} label="Info" icon={<InfoIcon />} />
                    <BottomNavigationAction onClick={() => { navigate('/Links') }} label="Links" icon={<LinkIcon />} />
                </BottomNavigation>
            </Box>
        </>
    );
}