import React from 'react'
import { Box, Grid, Paper } from '@mui/material'
import scss from './Dashboard.module.scss'
import DataRibbon from '@/components/Dashboard/DataRibbon'
import TransactionBottomRow from '@/components/Dashboard/TransactionBottomRow'
import TransactionsPerDay from '@/components/Dashboard/TransactionsPerDay'


const Dashboard = () => {
    return (
        <Box>
            <Grid container gap={4} marginTop={2}>
                <DataRibbon />
                <TransactionsPerDay data={{
                    title: '',
                    value: '',
                    changeValue: ''
                }} />
            </Grid>
            <TransactionBottomRow />
        </Box>
    )
}

export default Dashboard