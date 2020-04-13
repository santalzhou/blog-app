import React, { Component } from 'react';
import { Wrapper, Title, Weather } from './style'



class Right extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: '',
            weat: '',
            tip: '',
            temp: '', // 当前温度
            tempInterval: '',
            city: '',
            week: ''
        }
    }

    render() {
        let { date, weat, tip, temp, tempInterval, city, week } = this.state;
        return (
            <Wrapper>
                <Title>个人博客  列表 搜索 链接</Title>
                {date !== '' ? <Weather>
                    <p>{`${date} ${week} ${city}  ${weat}`}</p>
                    <p>温度：{tempInterval} 当前：{temp} </p>
                </Weather> : null}
            </Wrapper>
        )
    }

    componentDidMount() {
        this.$axios.get('/weather').then(res => {
            console.log(res);
            this.setState({
                date: res.date,
                weat: res.wea,
                tip: res.air_tips,
                temp: res.tem + '℃',
                tempInterval: `${res.tem2}℃~${res.tem1}℃`,
                city: res.city,
                week: res.week
            })
        }).catch(res => {
            // console.log('获取天气信息失败');
        })
    }

}

export default Right