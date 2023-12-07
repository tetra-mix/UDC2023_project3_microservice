import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import Home from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LinkIcon from '@mui/icons-material/Link';
import { useNavigate } from 'react-router-dom';

export default function Links() {
    const [value, setValue] = React.useState(2);
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
                            リンク集 -Links-
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography component="p" sx={{ flexGrow: 1 }}>
                            アーバンデータチャレンジ2023に応募する際の関連する制作物のリンクを完成したものから順に掲載していきます。
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <ul>
                            <li>伊勢市データベース </li>
                            <li>Coming soon</li>
                            <li>Coming soon</li>
                            <li>Coming soon</li>
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