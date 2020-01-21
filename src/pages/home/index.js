/** @format */
import React from 'react';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import trainIcon from '../../assets/train.png';
import searchIcon from '../../assets/search.png';
import shieldIcon from '../../assets/shield.png';
import articleIcon from '../../assets/article.png';
import vpnIcon from '../../assets/vpn.png';

const useStyles = makeStyles({
    card: {
        padding: 8,
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 90,
        height: 90,
    },
    container: {
        display: 'flex',
    },
    cardBox: {
        padding: 30,
    },
    a: {
        textDecoration: 'none',
        textAlign: 'center',
        color: '#666',
        lineHeight: 2,
    },
});

export default function Home() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.cardBox}>
                <a className={classes.a} href="http://12306.huzhihang.site:8081/" target="__blank">
                    <Card className={classes.card}>
                        <img src={trainIcon} className={classes.icon} />
                    </Card>
                    <div>12306刷票</div>
                </a>
            </div>
            <div className={classes.cardBox}>
                <a className={classes.a} href="http://search.huzhihang.site:8081/" target="__blank">
                    <Card className={classes.card}>
                        <img src={searchIcon} className={classes.icon} />
                    </Card>
                    <div>bt搜索</div>
                </a>
            </div>
            <div className={classes.cardBox}>
                <a className={classes.a} href="http://monitor.huzhihang.site:8081/" target="__blank">
                    <Card className={classes.card}>
                        <img src={shieldIcon} className={classes.icon} />
                    </Card>
                    <div>监控系统</div>
                </a>
            </div>
            <div className={classes.cardBox}>
                <a className={classes.a} href="http://blog.huzhihang.site/" target="__blank">
                    <Card className={classes.card}>
                        <img src={articleIcon} className={classes.icon} />
                    </Card>
                    <div>blog</div>
                </a>
            </div>
            <div className={classes.cardBox}>
                <a className={classes.a} href="https://orange-sky-6799.cross.workers.dev/" target="__blank">
                    <Card className={classes.card}>
                        <img src={vpnIcon} className={classes.icon} />
                    </Card>
                    <div>紧急翻墙</div>
                </a>
            </div>
        </div>
    );
}
