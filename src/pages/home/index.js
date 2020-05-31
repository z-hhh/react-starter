/** @format */
import React from 'react';
import { Card, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
    Router as RouterIcon,
    Pageview as PageviewIcon,
    Train as TrainIcon,
    Security as SecurityIcon,
    Book as BookIcon,
    DirectionsCar as DirectionsCarIcon,
    CloudDownload as CloudDownloadIcon,
    Radio as RadioIcon,
} from '@material-ui/icons';

const useStyles = makeStyles({
    card: {
        padding: 3,
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 90,
    },
    a: {
        textDecoration: 'none',
        textAlign: 'center',
        color: '#666',
        lineHeight: 2,
    },
    header: {
        width: '100%',
        height: 150,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgb(205, 236, 254)',
        color: '#bf0000',
    },
    content: {
        padding: 20,
    },
});

const apps = [
    {
        title: '12306刷票',
        href: 'http://192.168.50.60/',
        icon: <TrainIcon fontSize="large" />,
    },
    {
        title: 'BT搜索',
        href: 'http://192.168.50.60:8080/magnetw',
        icon: <PageviewIcon fontSize="large" />,
    },
    {
        title: 'OpenWrt',
        href: 'http://192.168.50.66',
        icon: <RouterIcon fontSize="large" />,
    },
    {
        title: '监控系统',
        href: 'http://192.168.50.130:8080/',
        icon: <SecurityIcon fontSize="large" />,
    },
    {
        title: 'Blog',
        href: 'http://blog.huzhihang.site/',
        icon: <BookIcon fontSize="large" />,
    },
    {
        title: '紧急翻墙',
        href: 'https://orange-sky-6799.cross.workers.dev/',
        icon: <DirectionsCarIcon fontSize="large" />,
    },
    {
        title: '下载大师',
        href: 'http://192.168.50.1:8081/downloadmaster/task.asp',
        icon: <CloudDownloadIcon fontSize="large" />,
    },
    {
        title: 'Aria2',
        href: 'http://192.168.50.66/ariang',
        icon: <CloudDownloadIcon fontSize="large" />,
    },
    {
        title: 'BaiduPcs',
        href: 'http://192.168.50.66:5299/',
        icon: <CloudDownloadIcon fontSize="large" />,
    },
    {
        title: 'OpenClash',
        href: 'http://192.168.50.66/luci-static/openclash/?hostname=192.168.50.66&port=9090&secret=123456#/proxies',
        icon: <RadioIcon fontSize="large" />,
    },
];

export default function Home() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.header}>
                <h1>FBI WARNING</h1>
            </div>
            <div className={classes.content}>
                <Grid container spacing={3}>
                    {apps.map(app => (
                        <Grid item xs={4} lg={1} key={app.title}>
                            <a className={classes.a} href={app.href}>
                                <Card className={classes.card}>{app.icon}</Card>
                                <div>{app.title}</div>
                            </a>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
}
