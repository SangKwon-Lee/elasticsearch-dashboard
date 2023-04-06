import Page from '../../commons/Page';
import { Grid } from '@mui/material';
import TPSWidget from 'src/components/widget/TPS.Widget.Container';
import IssueWidget from 'src/components/widget/Issue.Widget.Container';
import RowBarWidget from 'src/components/widget/RowBar.Widget.Container';
import TopThreeWidget from 'src/components/widget/TopThree.Widget.Container';
import LineGraphWidget from 'src/components/widget/LineGraph.Widget.Container';
import IssueGraphWidget from 'src/components/widget/IssueGraph.Widget.Container';
import MultiLineGraphWidget from 'src/components/widget/MultiLineGraph.Widget.Container';
import { DashboardPresenterProps } from './Dashboard.Type';

const DashboardPresenter = ({
  issue,
  allTPS,
  mciTPS,
  fepTPS,
  eaiTPS,
  mciBar,
  fepBar,
  eaiBar,
  dailyTPS,
  issueGraph,
  allResponse,
  mciResponse,
  fepResponse,
  eaiResponse,
  fepCpuTop,
  fepMemoryTop,
  mciCpuTop,
  mciMemoryTop,
  allCpu,
  networkIn,
  networkOut,
}: DashboardPresenterProps) => {
  return (
    <>
      <Page title={'대시보드'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={2}>
            <TPSWidget data={allTPS} response={allResponse} />
          </Grid>
          <Grid item xs={12} md={2}>
            <TPSWidget data={mciTPS} response={mciResponse} />
          </Grid>
          <Grid item xs={12} md={2}>
            <TPSWidget data={fepTPS} response={fepResponse} />
          </Grid>
          <Grid item xs={12} md={2}>
            <TPSWidget data={eaiTPS} response={eaiResponse} />
          </Grid>
          <Grid item xs={12} md={2}>
            <IssueGraphWidget data={issueGraph} />
          </Grid>
          <Grid item xs={12} md={2}>
            <IssueWidget data={issue} />
          </Grid>
          <Grid item xs={12} md={3}>
            <RowBarWidget data={mciBar} />
          </Grid>
          <Grid item xs={12} md={3}>
            <RowBarWidget data={fepBar} />
          </Grid>
          <Grid item xs={12} md={3}>
            <RowBarWidget data={eaiBar} />
          </Grid>
          <Grid item xs={12} md={3}>
            <LineGraphWidget data={dailyTPS} />
          </Grid>
          <Grid item xs={12} md={4}>
            <TopThreeWidget isPercent={true} data={[mciCpuTop, mciMemoryTop]} />
          </Grid>
          <Grid item xs={12} md={4}>
            <TopThreeWidget isPercent={true} data={[fepCpuTop, fepMemoryTop]} />
          </Grid>
          <Grid item xs={12} md={4}>
            <TopThreeWidget isPercent={true} data={[fepCpuTop, fepMemoryTop]} />
          </Grid>
          <Grid item xs={12} md={4}>
            <MultiLineGraphWidget data={networkIn} />
          </Grid>
          <Grid item xs={12} md={4}>
            <MultiLineGraphWidget data={networkOut} />
          </Grid>
          <Grid item xs={12} md={4}>
            <MultiLineGraphWidget data={allCpu} />
          </Grid>
        </Grid>
      </Page>
    </>
  );
};

export default DashboardPresenter;
