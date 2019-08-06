import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import Navbar from './MuiNavbar';
import DonutChart from './DonutChartComponent';
import RadarChart from './RadarChartComponent';
import BarChart from './Barchart';
import WordCloud from './WordCloudComponent';
import AnalyticsStyle from '../assets/css/AnalyticsPage.css';

class AnalyticsPage extends React.Component{

    render() {
        return (
            <div className={'analytics-div'} style={AnalyticsStyle}>
                <Navbar/>
                <Grid container>
                    <Grid item sm>
                        <Paper style={{width:"98%"}}>
                            <RadarChart/>
                            <Typography variant="title" style={{textAlign:"center"}}>
                                Tweets distribution based on topics in each cities
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item sm>
                        <Paper>
                            <DonutChart/>
                            <Typography variant="title" style={{textAlign:"center"}}>
                                Tweets under topic <span style={{fontWeight:'bold'}}>Crime</span>
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
                <br/>
                <br/>
                <Paper>
                    <Typography variant="title" style={{textAlign:"center"}}>
                        Total tweets per city
                    </Typography>
                    <BarChart/>
                </Paper>
                <br/>
                <br/>
                <Grid container>
                    <Grid item sm>
                        <Paper style={{width:"98%"}}>
                            <Typography variant='title' style={{textAlign:'center'}}>
                                Trending Hashtags in topic <span style={{fontWeight:'bold'}}>Crime</span>
                            </Typography>
                            <WordCloud/>
                        </Paper>
                    </Grid>
                    <Grid item sm>
                        <Paper>
                            <Typography variant='title' style={{textAlign:'center'}}>
                                Trending Hashtags in topic <span style={{fontWeight:'bold'}}>Politics</span>
                            </Typography>
                            <WordCloud/>
                        </Paper>
                    </Grid>
                </Grid>
                <br/>
                <br/>
                <Grid container>
                    <Grid item sm>
                        <Paper style={{width:"98%"}}>
                            <Typography variant='title' style={{textAlign:'center'}}>
                                Trending Hashtags in topic <span style={{fontWeight:'bold'}}>Crime</span>
                            </Typography>
                            <WordCloud/>
                        </Paper>
                    </Grid>
                    <Grid item sm>
                        <Paper>
                            <Typography variant='title' style={{textAlign:'center'}}>
                                Trending Hashtags in topic <span style={{fontWeight:'bold'}}>Politics</span>
                            </Typography>
                            <WordCloud/>
                        </Paper>
                    </Grid>
                </Grid>
                <br/>
                <br/>
                <Paper>
                    <Typography variant='title' style={{textAlign:'center'}}>
                        Trending Hashtags in topic <span style={{fontWeight:'bold'}}>Crime</span>
                    </Typography>
                    <WordCloud/>
                </Paper>
                <br/>
                <br/>
            </div>
        )
    }
}
export default AnalyticsPage;