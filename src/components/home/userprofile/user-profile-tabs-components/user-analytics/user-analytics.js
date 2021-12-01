import "./user-analytics.scss";
import { Grid, Icon } from "@material-ui/core";
import Bag from '../../../../../images/Bag.svg'
import Uptrend from '../../../../../images/uptrend.svg'
import Downtrend from '../../../../../images/downtrend.svg'
import Earning from '../../../../../images/Earning.svg';
import Following from '../../../../../images/Folowing.svg';
import Collection from '../../../../../images/Collections.svg';
import Heart from '../../../../../images/Heart.svg';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis,Tooltip,Legend } from 'recharts';

const formatYAxis = (num) => {
  return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}

const UserAnalytics = (props) =>{
  const overview_data = [
    {
      icon: Bag,
      title : 'Purchased',
      value: '8.9k',
      percent: '12% vs last 7 days',
      trend: Downtrend
    },
    {
      icon: Following,
      title : 'Following',
      value: '240',
      percent: '25% vs last 7 days',
      trend: Uptrend
    },
    {
      icon: Heart,
      title : 'Favourites',
      value: '240',
      percent: '25% vs last 7 days',
      trend: Uptrend
    },
    {
      icon: Collection,
      title : 'Collection',
      value: '8.9k',
      percent: '25% vs last 7 days',
      trend: Uptrend
    },
    {
      icon: Earning,
      title : 'Wallrus Coins',
      value: '210 Coins',
      percent: '12% vs last 7 days',
      trend: Downtrend
    },
  ];

  let day = [];
  day = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun']

  const data = [
    {
      name: day[0],
      sold: 1000,
    },
    {
      name: day[1],
      sold: 2500,
    },
    {
      name: day[2],
      sold: 1800,
    },
    {
      name: day[3],
      sold: 8500,
    },
    {
      name: day[4],
      sold: 1000,
    },
    {
      name: day[5],
      sold: 6000,
    },
    {
      name: day[6],
      sold: 13000,
    },
  ];

  return(
    <div className="user-analytics">
      <Grid container direction="column" spacing={1}>
        <h3 className="user-overview-header">OVERVIEW</h3>
          <div className="user-overview">
          {
          overview_data.map((item,index)=>{
            return(
              <div className="overview-div">
                <div className='user-overview-header'>
                  <img src={item.icon} alt="icon" />
                  <p>{item.title}</p>
                </div>
                <div className='user-overview-trend'>
                  <h1>{item.value}</h1>
                  <img src={item.trend} alt="trend" />
                </div>
                <p className="percent-trend">{item.percent}</p>
              </div>
            )
          })
        }
        </div>

        <div className='analytics-graph'>
          <h3>STATS</h3>

          <ResponsiveContainer width = "95%" height = "80%">
                  <LineChart
                  data={data}
                  margin={{
                      top: 5,
                      right: 30,
                      left: 60,
                      bottom: 5,
                  }}
                  >
                  <CartesianGrid stroke="#F5F5F5" vertical={false}/>    
                  <XAxis axisLine={false}  dy={30}  dataKey="name" />
                  <YAxis tickCount={7} axisLine={false} label={{ value: 'number of orders', fill:"#6F6F6F", dx:-70,  angle: -90, position: 'center' }} tickFormatter={formatYAxis} dx={-20} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="sold" strokeWidth="1" stroke="#6F6F6F" activeDot={{ r: 8 }} dot={{ stroke: '#FADD4B', fill: '#FADD4B', strokeWidth: 6 }} />
                  </LineChart>
          </ResponsiveContainer>

        </div>
      </Grid>
    </div>
  )

};

export default UserAnalytics;