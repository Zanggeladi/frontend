import * as echarts from 'echarts';
import {useEffect} from "react";

const Home = () =>{
    //保证dom可用，再进行图表的渲染
    useEffect(()=>{
        //获取渲染图表的dom节点(JS中的原生获取方法）也可以使用react的方法，即钩子函数useRef
        const chartDom = document.getElementById('main');
        //图表初始化，生成一个图表实例化对象
        const myChart = echarts.init(chartDom, 'dark');

        //准备图表的参数
        const option = {
            title: {
                text: 'Basic Graph'
            },
            tooltip: {},
            animationDurationUpdate: 1500,
            animationEasingUpdate: 'quinticInOut',
            series: [
                {
                    type: 'graph',
                    layout: 'none',
                    symbolSize: 50,
                    roam: true,
                    label: {
                        show: true
                    },
                    edgeSymbol: ['circle', 'arrow'],
                    edgeSymbolSize: [4, 10],
                    edgeLabel: {
                        fontSize: 20
                    },
                    data: [
                        {
                            name: 'Node 1',
                            x: 300,
                            y: 300
                        },
                        {
                            name: 'Node 2',
                            x: 800,
                            y: 300
                        },
                        {
                            name: 'Node 3',
                            x: 550,
                            y: 100
                        },
                        {
                            name: 'Node 4',
                            x: 550,
                            y: 500
                        }
                    ],
                    // links: [],
                    links: [
                        {
                            source: 0,
                            target: 1,
                            symbolSize: [5, 20],
                            label: {
                                show: true
                            },
                            lineStyle: {
                                width: 5,
                                curveness: 0.2
                            }
                        },
                        {
                            source: 'Node 2',
                            target: 'Node 1',
                            label: {
                                show: true
                            },
                            lineStyle: {
                                curveness: 0.2
                            }
                        },
                        {
                            source: 'Node 1',
                            target: 'Node 3'
                        },
                        {
                            source: 'Node 2',
                            target: 'Node 3'
                        },
                        {
                            source: 'Node 2',
                            target: 'Node 4'
                        },
                        {
                            source: 'Node 1',
                            target: 'Node 4'
                        }
                    ],
                    lineStyle: {
                        opacity: 0.9,
                        width: 2,
                        curveness: 0
                    }
                }
            ]
        };

        //根据图表参数进行渲染
        option && myChart.setOption(option);
    },[])
    return (
        <div>
            <div id='main' style={{ width: '400px', height: '300px' }}>

            </div>
        </div>
    )
}

export default Home