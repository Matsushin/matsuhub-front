import { BetaAnalyticsDataClient } from '@google-analytics/data';
import dayjs from 'dayjs';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  console.log('=== 1 ===')
  console.log('=== GOOGLE_APPLICATION_CREDENTIALS ===')
  console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS)
  console.log('=== GOOGLE_APPLICATION_CREDENTIALS_DATA ===')
  console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS_DATA)

  let analyticsReport: { [key: string]: { pageView: string; uniqueUser: string } } = {};
  // Module not found: Can't resolve 'fs' のエラー対応としてgetServerSidePropsの中でAPIを呼んでいます。できれば移動したい
  const analyticsDataClient = new BetaAnalyticsDataClient();
  const [analyticsResponse] = await analyticsDataClient.runReport({
    property: `properties/339801980`,
    dateRanges: [
      {
        startDate:
          dayjs().subtract(1, 'months').subtract(1, 'days').format('YYYY-MM-DD'),
        endDate: dayjs().subtract(1, 'days').format('YYYY-MM-DD'),
      },
    ],
    dimensions: [
      {
        name: 'date',
      },
    ],
    metrics: [
      {
        name: 'screenPageViews',
      },
      {
        name: 'activeUsers',
      },
    ],
    orderBys: [
      {
        dimension: {
          dimensionName: 'date',
        },
        desc: false,
      },
    ],
  });
  console.log(analyticsResponse)
  if (analyticsResponse && analyticsResponse.rows) {
    analyticsResponse.rows.forEach((row) => {
      if (row && row.dimensionValues && row.metricValues) {
        analyticsReport[row.dimensionValues[0].value as string] = {
          pageView: row.metricValues[0].value as string,
          uniqueUser: row.metricValues[1].value as string,
        };
      }
    });
  }

  return {
    props: {
      layout: 'notLogin',
      analyticsReport: analyticsReport,
    },
  };
};

type AdminReportsIndexProps = {
  analyticsReport: {
    [key: string]: { [key: string]: string; pageView: string; uniqueUser: string };
  };
};

const ANALYTICS_ITEMS = [
  { label: 'ページビュー', key: 'pageView', unit: 'PV' },
  { label: 'ユニークユーザー数', key: 'uniqueUser', unit: 'users' },
];

export default function AdminReportsIndex(props: AdminReportsIndexProps) {
  const analyticsReport = props.analyticsReport;
  const router = useRouter();
  const { siteCode } = router.query;
  const startDateQuery = router.query.startDate
    ? dayjs(router.query.startDate as string).toDate()
    : null;
  const endDateQuery = router.query.endDate ? dayjs(router.query.endDate as string).toDate() : null;
  const [startDate, setStartDate] = useState<Date>(
    startDateQuery || dayjs().subtract(1, 'months').subtract(1, 'days').toDate(),
  );
  const [endDate, setEndDate] = useState<Date>(
    endDateQuery || dayjs().subtract(1, 'days').toDate(),
  );
  const minDate = dayjs('2023-01-01').toDate();
  const dateRanges: string[] = [];
  for (
    let date = new Date(minDate < startDate ? startDate : minDate);
    date <= new Date(endDate);
    date.setDate(date.getDate() + 1)
  ) {
    dateRanges.push(dayjs(date).format('YYYYMMDD'));
  }

  return (
    <div>
      <div className='w-full bg-patina-500 text-2xl text-white py-4 text-center mb-[10px]'>
        <h1>分析・レポート</h1>
      </div>
      <div className='md:w-2/3 w-full mx-auto p-4 md:p-12 mb-40'>
        <div className='bg-white mt-6 px-2 md:px-16 py-4 md:py-12 bold text-gray-700'>
            {ANALYTICS_ITEMS.map((item) => {
                return (
                <div key={item.key} className='mb-8'>
                    <h3>{item.label}</h3>
                    <ul className='md:flex flex-wrap'>
                    {dateRanges.map((date: string) => {
                        return (
                        <li key={date}>
                            <div>{dayjs(date).format('YYYY年M月D日')}</div>
                            <div className='text-xl font-bold'>
                            {analyticsReport[date]
                                ? analyticsReport[date][item.key].toLocaleString()
                                : 0}
                            <span className='ml-1'>{item.unit}</span>
                            </div>
                        </li>
                        );
                    })}
                    </ul>
                </div>
                );
            })}
        </div>
      </div>
    </div>
  );
}
