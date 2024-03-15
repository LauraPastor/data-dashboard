import React from 'react'
import DataChart from '@/components/DataChart'
import { Grid, Paper } from '@mui/material'
import scss from './TransactionBottomRow.module.scss'
import { doughnutChartData } from '@/components/mockData'

const TransactionBottomRow = () => {
    return (
        <Grid container className={scss.bottomRow}>
            <Grid>
                <Paper className={scss.dataCard}>
                    <p>Transactions per user type</p>
                    <DataChart type={"doughnut"} data={doughnutChartData} />
                </Paper>
            </Grid>
            <Grid>
                <Paper className={scss.dataCard}>
                    <p>Transactions per user type</p>
                    <DataChart type={"doughnut"} data={doughnutChartData} />
                </Paper>
            </Grid>
            <Grid>
                <Paper className={scss.dataCard}>
                    <p>Transactions per user type</p>
                    <DataChart type={"doughnut"} data={doughnutChartData} />
                </Paper>
            </Grid>
            <Grid>
                <Paper className={scss.dataCard}>
                    <p>Transactions per user type</p>
                    <DataChart type={"doughnut"} data={doughnutChartData} />
                </Paper>
            </Grid>
        </Grid>
    )
}

export default TransactionBottomRow