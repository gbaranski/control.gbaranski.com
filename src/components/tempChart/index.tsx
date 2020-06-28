import React, {useEffect} from 'react';
import {useTheme} from '@material-ui/core/styles';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';
import Title from '../../components/title';
import moment from 'moment';
import {getAlarmclockTemperatureArray} from '../../requests';

import {TempArray} from '@gbaranski/types';
// Generate Sales Data

export default function TempChart() {
  const theme = useTheme();
  const [tempArray, setTempArray] = React.useState<TempArray[]>();

  useEffect(() => {
    getAlarmclockTemperatureArray().then((res: TempArray[]) => {
      setTempArray(res);
      console.log(res);
    });
  }, []);
  return (
    <React.Fragment>
      <Title>Last 24 hours temperature</Title>
      <ResponsiveContainer>
        <LineChart
          data={tempArray}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}>
          <XAxis
            dataKey="unixTime"
            domain={['auto', 'auto']}
            name="Time"
            type="number"
            tickFormatter={(unixTime) => moment(unixTime).format('HH:mm')}
            stroke={theme.palette.text.secondary}>
            <Label
              position="bottom"
              style={{textAnchor: 'middle', fill: theme.palette.text.primary}}>
              Date (HH:mm)
            </Label>
          </XAxis>
          <YAxis
            dataKey="temp"
            name="Temperature"
            stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{textAnchor: 'middle', fill: theme.palette.text.primary}}>
              Temperature (°C)
            </Label>
          </YAxis>
          <Tooltip
            formatter={(text) => text + '°C'}
            labelFormatter={(unixTime) => moment(unixTime).format('HH:mm')}
          />
          <Legend formatter={() => 'Temperature °C'} align="right" />
          <Line
            type="monotone"
            dataKey="temp"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
