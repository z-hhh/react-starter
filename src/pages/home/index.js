/** @format */
import React from 'react';
import { Card, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HeaderBgImg from '../../assets/nasa_tim_peake_spacewalk.jpg';

const useStyles = makeStyles({
    card: {
        padding: 3,
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 90,
        fontSize: 35,
    },
    a: {
        textDecoration: 'none',
        textAlign: 'center',
        color: '#666',
        lineHeight: 2,
    },
    header: {
        width: '100%',
        height: 200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${HeaderBgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#ffd500',
        textShadow: '1px 1px 0 #fff, -1px -1px 0 #666',
    },
    content: {
        padding: 20,
    },
});

const apps = [
    {
        title: 'ESXI',
        href: 'http://192.168.50.68/',
        icon: '🏠',
    },
    {
        title: '12306刷票',
        href: 'http://192.168.50.60/',
        icon: '🚄',
    },
    {
        title: 'BT搜索',
        href: 'http://192.168.50.60:8080/magnetw',
        icon: '🔍',
    },
    {
        title: 'OpenWrt',
        href: 'http://192.168.50.66',
        icon: '🕹️',
    },
    {
        title: '监控系统',
        href: 'http://192.168.50.60:8081/',
        icon: '👮',
    },
    {
        title: 'Blog',
        href: 'http://blog.huzhihang.site/',
        icon: '📓',
    },
    {
        title: '紧急翻墙',
        href: 'https://orange-sky-6799.cross.workers.dev/',
        icon: '🏎️',
    },
    {
        title: '下载大师',
        href: 'http://192.168.50.1:8081/downloadmaster/task.asp',
        icon: '📥',
    },
    {
        title: 'Aria2',
        href: 'http://192.168.50.60/ariang',
        icon: '📥',
    },
    {
        title: 'BaiduPcs',
        href: 'http://192.168.50.66:5299/',
        icon: '📥',
    },
    {
        title: 'OpenClash',
        href: 'http://192.168.50.66/luci-static/openclash/?hostname=192.168.50.66&port=9090&secret=123456#/proxies',
        icon: '🎛️',
    },
    {
        title: 'AllTube',
        href: 'https://hzh-alltube.herokuapp.com',
        icon: '📽️',
    },
    {
        title: 'SS配置转换',
        href: 'http://192.168.50.60:10086',
        icon: '⚙️',
    },
];

export default function Home() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.header}>
                <h1>UNIVERSE HUB</h1>
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
