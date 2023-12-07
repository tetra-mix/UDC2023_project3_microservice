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
import axios from 'axios';

export default function Top() {
    const baseurl = "https://otxhqkwbofa4a2c246yhvpoffq0acttv.lambda-url.ap-northeast-1.on.aws/?";
    const [value, setValue] = React.useState(0);
    const [dataID, setDataID] = React.useState<string>();
    const [genre, setGenre] = React.useState<string>();
    const [lat, setLat] = React.useState<string>();
    const [lng, setLng] = React.useState<string>();
    const [description, setDescription] = React.useState<string>();
    const [dataname, setDataName] = React.useState<string>();

    const navigate = useNavigate();

    const RegisterClicked = async () => {
        await axios({
            method: 'get',
            url: baseurl + 'dataid=' + dataID + '&name=' + dataname + '&genre=' + genre + '&=lat' + lat + '&=lng' + lng + '&discription=' + description,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }).then((response) => {
            alert(response.data);
        }).catch(error => alert(error));
    }

    const PlaceClicked = () => {
        navigator.geolocation.getCurrentPosition(position => {
            setLat(String(position.coords.latitude));
            setLng(String(position.coords.longitude));
          });
    }
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
                            説明 -Description-
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography component="p" sx={{ flexGrow: 1 }}>
                            伊勢市のお店(商業施設)や観光地(お寺、神社)などをデータベースとして登録したいと考えています。
                            このデータはアーバンデータチャレンジ2023に出す作品に使います。その後はオープンデータとして公開します。
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            id="geodataID"
                            label="データID -Geodata ID-"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            sx={{ width: 150 }}
                            value={dataID}
                            onChange={(e) => {
                                setDataID(e.target.value)
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            id="name"
                            label="名前 -Name-"
                            sx={{ width: 150 }}
                            onChange={(e) => {
                                setDataName(e.target.value)
                            }}
                            value={dataname}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            id="genre"
                            label="ジャンル -Genre-"
                            sx={{ width: 150 }}
                            onChange={(e) => {
                                setGenre(e.target.value)
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Button onClick={PlaceClicked} sx={{ width: 150 }} variant="contained">現在地取得</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            id="latitude"
                            label="緯度 -Latitude-"
                            sx={{ width: 150 }}
                            onChange={(e) => {
                                setLat(e.target.value)
                            }}
                            value={lat}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            id="longitude"
                            label="経度 -Longitude-"
                            sx={{ width: 150 }}
                            onChange={(e) => {
                                setLng(e.target.value)
                            }}
                            value={lng}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            id="description"
                            label="説明 -Description-"
                            multiline
                            rows={3}
                            sx={{ width: 150 }}
                            onChange={(e) => {
                                setDescription(e.target.value)
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Button onClick={RegisterClicked} sx={{ width: 150 }} variant="contained">登録 -Register-</Button>
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