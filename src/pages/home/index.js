/** @format */
import React from 'react';
import { Card, Grid } from '@material-ui/core';
import { Cat } from 'react-kawaii';
import { makeStyles } from '@material-ui/core/styles';
import trainIcon from '../../assets/train.png';
import searchIcon from '../../assets/search.png';
import shieldIcon from '../../assets/shield.png';
import articleIcon from '../../assets/article.png';
import vpnIcon from '../../assets/vpn.png';
import routerIcon from '../../assets/router.png';
import downloadIcon from '../../assets/download.png';

const useStyles = makeStyles({
    card: {
        padding: 3,
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 90,
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
        color: '#555',
    },
    content: {
        padding: 20,
    },
});

const apps = [
    {
        title: '12306刷票',
        href: 'http://192.168.50.130/',
        icon: trainIcon,
    },
    {
        title: 'bt搜索',
        href: 'http://bt.huzhihang.site:8081/',
        icon: searchIcon,
    },
    {
        title: 'OpenWrt',
        href: 'http://192.168.50.131',
        icon: routerIcon,
    },
    {
        title: '监控系统',
        href: 'http://192.168.50.130:8080/',
        icon: shieldIcon,
    },
    {
        title: 'blog',
        href: 'http://blog.huzhihang.site/',
        icon: articleIcon,
    },
    {
        title: '紧急翻墙',
        href: 'https://orange-sky-6799.cross.workers.dev/',
        icon: vpnIcon,
    },
    {
        title: '离线下载',
        href: 'http://192.168.50.1:8081/downloadmaster/task.asp',
        icon: downloadIcon,
    },
];

export default function Home() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.header}>
                <Cat size={100} mood="happy" color="#596881" />
            </div>
            <div className={classes.content}>
                <Grid container spacing={3}>
                    {apps.map(app => (
                        <Grid item xs={4} lg={1} key={app.title}>
                            <a className={classes.a} href={app.href}>
                                <Card className={classes.card}>
                                    <img src={app.icon} className={classes.icon} />
                                </Card>
                                <div>{app.title}</div>
                            </a>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
}
