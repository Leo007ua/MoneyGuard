import React from 'react';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title,
} from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import { Colors } from 'chart.js';
import { selectFinanceTotalBalance, selectSummary } from 'redux/selectors';
import { useSelector } from 'react-redux';

ChartJS.register(ArcElement, Tooltip, Legend, Title, Colors);
const StatisticsDiagram = () => {
    const summary = useSelector(selectSummary);
    const totalBalanceData = useSelector(selectFinanceTotalBalance);
    console.log(totalBalanceData);
    // <block:actions:2>
    // const actions = [
    //     {
    //         name: 'Randomize',
    //         handler(chart) {
    //             chart.data.datasets.forEach(dataset => {
    //                 dataset.data = Utils.numbers({
    //                     count: chart.data.labels.length,
    //                     min: 0,
    //                     max: 100,
    //                 });
    //             });
    //             chart.update();
    //         },
    //     },
    //     {
    //         name: 'Add Dataset',
    //         handler(chart) {
    //             const data = chart.data;
    //             const newDataset = {
    //                 label: 'Dataset ' + (data.datasets.length + 1),
    //                 backgroundColor: [],
    //                 data: [],
    //             };

    //             for (let i = 0; i < data.labels.length; i++) {
    //                 newDataset.data.push(
    //                     Utils.numbers({ count: 1, min: 0, max: 100 })
    //                 );

    //                 const colorIndex =
    //                     i % Object.keys(Utils.CHART_COLORS).length;
    //                 newDataset.backgroundColor.push(
    //                     Object.values(Utils.CHART_COLORS)[colorIndex]
    //                 );
    //             }

    //             chart.data.datasets.push(newDataset);
    //             chart.update();
    //         },
    //     },
    //     {
    //         name: 'Add Data',
    //         handler(chart) {
    //             const data = chart.data;
    //             if (data.datasets.length > 0) {
    //                 data.labels.push('data #' + (data.labels.length + 1));

    //                 for (let index = 0; index < data.datasets.length; ++index) {
    //                     data.datasets[index].data.push(Utils.rand(0, 100));
    //                 }

    //                 chart.update();
    //             }
    //         },
    //     },
    //     {
    //         name: 'Hide(0)',
    //         handler(chart) {
    //             chart.hide(0);
    //         },
    //     },
    //     {
    //         name: 'Show(0)',
    //         handler(chart) {
    //             chart.show(0);
    //         },
    //     },
    //     {
    //         name: 'Hide (0, 1)',
    //         handler(chart) {
    //             chart.hide(0, 1);
    //         },
    //     },
    //     {
    //         name: 'Show (0, 1)',
    //         handler(chart) {
    //             chart.show(0, 1);
    //         },
    //     },
    //     {
    //         name: 'Remove Dataset',
    //         handler(chart) {
    //             chart.data.datasets.pop();
    //             chart.update();
    //         },
    //     },
    //     {
    //         name: 'Remove Data',
    //         handler(chart) {
    //             chart.data.labels.splice(-1, 1); // remove the label first

    //             chart.data.datasets.forEach(dataset => {
    //                 dataset.data.pop();
    //             });

    //             chart.update();
    //         },
    //     },
    // ];

    // const DATA_COUNT = 5;
    // const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

    const data = {
        labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
        datasets: [
            {
                label: 'Dataset 1',
                // data: Utils.numbers(NUMBER_CFG),
                // backgroundColor: Object.values(Utils.CHART_COLORS),
                backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue'],
                data: [13, 3, 3, 4, 5],
                hoverOffset: 4,
            },
        ],
    };

    const options = {
        responsive: true,
        cutout: '65%',
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Doughnut Chart',
            },
        },
    };

    const textCenter = {
        id: 'textCenter',
        beforeDatasetsDraw(chart, args, pluginOptions) {
            const { ctx, data } = chart;
            ctx.save();
            ctx.font = 'bolder 20px sans-serif';
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(
                summary.periodTotal,
                chart.getDatasetMeta(0).data[0].x,
                chart.getDatasetMeta(0).data[0].y
            );
        },
    };
    return (
        <div style={{ width: '288px', height: '288px' }}>
            <Doughnut
                data={data}
                options={options}
                plugins={[textCenter]}
            ></Doughnut>
        </div>
    );
};

export default StatisticsDiagram;
