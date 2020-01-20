/** @format */
import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TrainIcon from '@material-ui/icons/Train';
import SecurityIcon from '@material-ui/icons/Security';

const useStyles = makeStyles({
    card: {
        width: 275,
        cursor: 'pointer',
    },
    icon: {
        fontSize: 100,
    },
    content: {
        display: 'flex',
        height: '50%',
        justifyContent: 'center',
    },
    container: {
        display: 'flex',
    },
    cardBox: {
        padding: 30,
    },
    a: {
        textDecoration: 'none',
    },
});

export default function Home() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.cardBox}>
                <a className={classes.a} href="http://12306.huzhihang.site:8081/" target="__blank">
                    <Card className={classes.card}>
                        <CardContent className={classes.content}>
                            <TrainIcon className={classes.icon} />
                        </CardContent>
                        <CardContent className={classes.content}>
                            <div>py12306刷票</div>
                        </CardContent>
                    </Card>
                </a>
            </div>
            <div className={classes.cardBox}>
                <a className={classes.a} href="http://monitor.huzhihang.site:8081/" target="__blank">
                    <Card className={classes.card}>
                        <CardContent className={classes.content}>
                            <SecurityIcon className={classes.icon} />
                        </CardContent>
                        <CardContent className={classes.content}>
                            <div>监控系统</div>
                        </CardContent>
                    </Card>
                </a>
            </div>
        </div>
    );
}
