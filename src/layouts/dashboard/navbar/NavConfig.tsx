// components
import SvgIconStyle from '../../../components/commons/SvgIconStyle';
// ----------------------------------------------------------------------

const getIcon = (name: string) => (
  <SvgIconStyle src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  dashboard: getIcon('ic_dashboard'),
  user: getIcon('ic_user'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  invoice: getIcon('ic_invoice'),
  kanban: getIcon('ic_kanban'),
  mail: getIcon('ic_mail'),
  menu: getIcon('ic_menu_item'),
  banking: getIcon('ic_banking'),
};

const navConfig = [
  // Monitoring
  {
    subheader: '',
    items: [
      { title: '대시보드', path: '/dashboard', icon: ICONS.dashboard },
      { title: '토폴로지', path: '/topology', icon: ICONS.kanban },
      { title: '기관연계', path: '/interface', icon: ICONS.analytics },
      { title: '네트워크', path: '/network', icon: ICONS.mail },
      { title: '이상징후', path: '/anomaly', icon: ICONS.menu },
      { title: '트랜잭션', path: '/transaction', icon: ICONS.banking },
      { title: '서버', path: '/server', icon: ICONS.ecommerce },
    ],
  },
  // Detection
  // {
  //   subheader: '이슈',
  //   items: [],
  // }, // Detection
  // {
  //   subheader: '관리',
  //   items: [],
  // },
];

export default navConfig;
