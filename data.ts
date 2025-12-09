import { CategoryType, LinkItem, NavCategory } from './types';

export const CATEGORIES: NavCategory[] = [
  { 
    id: CategoryType.NATIONAL_PARKS, 
    label: '国家公园 & 景区', 
    description: '整合5A级景区、国家公园官网及科普预约平台' 
  },
  { 
    id: CategoryType.POLICY, 
    label: '政策 & 法规', 
    description: '文旅部、林草局官方端口及政策解读' 
  },
  { 
    id: CategoryType.ACADEMIC, 
    label: '学术 & 科研', 
    description: '核心期刊、数据库与高校科研平台' 
  },
  { 
    id: CategoryType.CAREER_NEWS, 
    label: '资讯 & 职涯', 
    description: '行业媒体、招聘信息与展会动态' 
  },
];

export const LINKS: LinkItem[] = [
  // National Parks
  {
    id: 'np-1',
    title: '三江源国家公园',
    url: '#',
    description: '中国首个国家公园体制试点，长江、黄河、澜沧江发源地。',
    tags: ['官方', '预约', '科普'],
    iconName: 'Tree',
    category: CategoryType.NATIONAL_PARKS
  },
  {
    id: 'np-2',
    title: '大熊猫国家公园',
    url: '#',
    description: '跨越川陕甘三省，保护国宝大熊猫的核心栖息地。',
    tags: ['官方', '生态'],
    iconName: 'Tree',
    category: CategoryType.NATIONAL_PARKS
  },
  {
    id: 'np-3',
    title: '故宫博物院 (5A)',
    url: '#',
    description: '中国最大的古代文化艺术博物馆，世界文化遗产。',
    tags: ['5A', '预约', '文旅'],
    iconName: 'Globe',
    category: CategoryType.NATIONAL_PARKS
  },
  {
    id: 'np-4',
    title: '国家公园管理局',
    url: '#',
    description: '国家林业和草原局（国家公园管理局）官方站点。',
    tags: ['行政', '管理'],
    iconName: 'Award',
    category: CategoryType.NATIONAL_PARKS
  },

  // Policy
  {
    id: 'pol-1',
    title: '中华人民共和国文化和旅游部',
    url: '#',
    description: '发布文化和旅游行业最新政策、标准与数据。',
    tags: ['部委', '权威'],
    iconName: 'FileText',
    category: CategoryType.POLICY
  },
  {
    id: 'pol-2',
    title: '国家林业和草原局',
    url: '#',
    description: '主管林业和草原事务，监督管理自然保护地。',
    tags: ['部委', '自然资源'],
    iconName: 'FileText',
    category: CategoryType.POLICY
  },
  {
    id: 'pol-3',
    title: '自然资源部',
    url: '#',
    description: '负责自然资源的调查、登记、评价和利用管理。',
    tags: ['部委', '规划'],
    iconName: 'FileText',
    category: CategoryType.POLICY
  },

  // Academic
  {
    id: 'aca-1',
    title: 'Tourism Management',
    url: '#',
    description: '国际旅游管理领域顶尖期刊 (Elsevier)。',
    tags: ['SSCI', 'Top期刊', '英文'],
    iconName: 'BookOpen',
    category: CategoryType.ACADEMIC
  },
  {
    id: 'aca-2',
    title: '旅游学刊',
    url: '#',
    description: '中国旅游学术界权威期刊，CSSCI来源期刊。',
    tags: ['CSSCI', '核心', '中文'],
    iconName: 'BookOpen',
    category: CategoryType.ACADEMIC
  },
  {
    id: 'aca-3',
    title: 'CNKI 中国知网',
    url: '#',
    description: '中国最大的学术文献数据库。',
    tags: ['数据库', '工具'],
    iconName: 'BookOpen',
    category: CategoryType.ACADEMIC
  },
  {
    id: 'aca-4',
    title: 'ScienceDirect',
    url: '#',
    description: '全球领先的科学、技术和医学全文数据库。',
    tags: ['数据库', '英文'],
    iconName: 'BookOpen',
    category: CategoryType.ACADEMIC
  },

  // Career
  {
    id: 'car-1',
    title: '中国旅游报',
    url: '#',
    description: '文化和旅游部主管的行业权威媒体。',
    tags: ['媒体', '资讯'],
    iconName: 'Globe',
    category: CategoryType.CAREER_NEWS
  },
  {
    id: 'car-2',
    title: '文旅中国',
    url: '#',
    description: '聚焦文旅产业发展的综合性资讯平台。',
    tags: ['资讯', '产业'],
    iconName: 'Globe',
    category: CategoryType.CAREER_NEWS
  },
  {
    id: 'car-3',
    title: '高校人才网 - 旅游',
    url: '#',
    description: '主要发布高校、科研机构的旅游专业招聘信息。',
    tags: ['招聘', '学术'],
    iconName: 'Briefcase',
    category: CategoryType.CAREER_NEWS
  },
];
