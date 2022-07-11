const software = [
  {
    id: 1,
    title: 'Easy POS',
    brand: 'POS',
    description: 'Point Of Sales desktop app compatible with touchscreen.',
  },
  {
    id: 2,
    title: 'Easy A',
    brand: 'A',
    description: 'Accounting management desktop app for your financial report.',
  },
  {
    id: 3,
    title: 'Easy AI',
    brand: 'AI',
    description:
      'Inventory management linked to accounting and customs (Bea Cukai).',
  },
  {
    id: 4,
    title: 'Easy H',
    brand: 'H',
    description:
      'Payroll management based on employee attendant using biometric device',
  },
  {
    id: 5,
    title: 'Easy HR',
    brand: 'HR',
    description:
      'Employee management to record all needed data of your employee.',
  },
  {
    id: 6,
    title: 'Groupware',
    brand: 'GR',
    description:
      'Mailing & Project management for business, cloud based system',
  },
]

const banner_2 = [
  {
    id: '01',
    title: 'Customer Support 24/7',

    description:
      "We're always ready to help our customer to solve their problem and give prevention solution.",
  },
  {
    id: '02',
    title: 'Easy to Operate',

    description:
      'Even the hardest thing on real-world job we can make easy by using our software.',
  },
  {
    id: '03',
    title: 'Comprehensive Report',

    description:
      'We build every our software with detailed report  to accomodate the need of any business.',
  },
]
const testimonial = [
  {
    id: '01',
    image: '/customers/p2@2x.png',
    customer: 'Mr. Park',
    ownership: 'Owner Of Chung Gi Hwa Restaurant',
    testimoni: '"Easy POS help to improve our business very well."',
  },

  {
    id: '02',
    image: '/customers/p1@2x.png',
    customer: 'Ms. Hyun',
    ownership: 'Head Of Accounting PT. Space',

    testimoni:
      '"Our accounting management really improved a lot using Easy A from Yubi."',
  },

  {
    id: '03',
    image: '/customers/p3@2x.png',
    customer: 'Mr. Baek Dong',
    ownership: 'Owner of Gala Pika',

    testimoni:
      '"Easier to manage inventory everywhere with Easy Inventory by Yubi"',
  },
]

const softwares_detail = [
  {
    id: '1',
    name: 'Easy POS',
    localesId: 'easy-pos',
    brand: 'POS',
    hero_section: {
      is_dark: true,
      image: '/products/easypos/bg-pos@2x.png',
      mobile_image: '/products/easypos/mobile-bg-pos.png',
      medium_image: '/products/easypos/medium-bg-pos.png',
      title: 'On point, to sell anything',
      description: 'Serve Faster and make your customer happy',
    },
    best_feature: [
      {
        title: 'Best Features',
        rtl: false,
        features: [
          {
            image: '/products/easypos/pos_1_feature@2x.png',
            subtitle: 'Order Management',
            description:
              'Easy to choose any items to check out and print out receipt/bills.',
          },
          {
            image: '/products/easypos/pos_2_feature@2x.png',
            subtitle: 'Table Management',
            description:
              'Managing table to fit your resto/cafe real world layout is getting easier.',
          },
          {
            image: '/products/easypos/pos_3_feature@2x.png',
            subtitle: 'Unlimited User Access',
            description:
              "There's no charge for adding user access to operate Easy POS.",
          },
        ],
      },
      {
        title: 'More Features',
        rtl: true,
        features: [
          {
            image: '/products/easypos/pos_1_feature@2x.png',
            subtitle: 'Booking Management',
            description:
              'Reserve table for customer? we have this feature to create appointment for your customer.',
          },
          {
            image: '/products/easypos/pos_2_feature@2x.png',
            subtitle: 'Report Management',
            description:
              'Daily and monthly sales report is available. You can send it by email to owner.',
          },
          {
            image: '/products/easypos/pos_3_feature@2x.png',
            subtitle: 'Membership',
            description:
              'You can sign your loyal customer and give them benefits such as price off, discount and etc.',
          },
        ],
      },
    ],

    testimonial: true,
  },
  {
    id: '2',
    name: 'Easy A',
    localesId: 'easy-a',
    brand: 'A',
    hero_section: {
      is_dark: false,
      image: '/products/easya/accounting@2x.png',
      mobile_image: '/products/easya/sm_accounting@2x.png',
      medium_image: '/products/easya/md_accounting@2x.png',
      title: 'Manage your Accounting more accurately',
      description:
        'Manage every financial report more details and more accurate',
    },
    best_feature: null,
    brief_feature: {
      purpose: [
        {
          slate: false,
          rtl: false,
          image: '/products/easya/acc_banner@2x.png',
          title: 'Our feature designed to meet business needs',
          description:
            'Easier to manage every finance activity and determine what action to do next.',
        },
      ],
      features: [
        {
          thumbs: '/products/s-erp/thumbs/dashboard.png',
          title: 'Master Menu & dashboard',
          description:
            'Easily manage user access, permission, customer, company information and more.',
        },
        {
          thumbs: '/products/easya/thumbs/journal.png',
          title: 'Ledgers Feature',
          description:
            'Easily manage your general ledger, history, expense, log create ledger, and account reference.',
        },
        {
          thumbs: '/products/easya/thumbs/quick_asset.png',
          title: 'Quick Assets Feature',
          description:
            'Easily manage your Daily cash matrix, Bank Book, Payment of Balance Account, Payment of Customer and more',
        },
        {
          thumbs: '/products/easya/thumbs/fix_asset.png',
          title: 'Fixed Assets Feature',
          description:
            'Easily manage register Fixed assets, Tangible fixed assets, accumulated depreciation, Type of Depreciation options.',
        },
        {
          thumbs: '/products/easya/thumbs/link_s-erp.png',
          title: 'Link to S-ERP',
          description:
            'Linked data to S-ERP such as Account Payable, Account Receivable, Due date Account Payable, and Customer Balance.',
        },
        {
          thumbs: '/products/easya/thumbs/report.png',
          title: 'Report Feature',
          description:
            'Generating Trial Balance, Profit & Lost, Balance Sheet, Income Statement, Cash Flow, and more.',
        },
      ],
    },
    banner: [
      {
        slate: false,
        rtl: true,
        image: '/products/easya/mock-easya@2x.png',
        title: 'Reliable financial statements',
        description:
          'Flexible data delivery that can be arranged with monthly, quarterly or yearly',
      },
      {
        slate: false,
        rtl: false,
        image: '/products/easya/mock-easya2@2x.png',
        title: 'Stable desktop application. Available for working offline',
        description:
          "We provide so many option while you're making invoice or you can define your own customizable option",
      },
    ],
    testimonial: true,
  },
  {
    id: '3',
    name: 'Easy AI',
    localesId: 'easy-ai',
    brand: 'A',
    hero_section: {
      is_dark: false,
      image: '/products/easyai/accounting2@2x.png',
      mobile_image: '/products/easyai/sm_accounting2@2x.png',
      medium_image: '/products/easyai/md_accounting2@2x.png',
      title: 'Control your export import goods faster',
      description:
        'We help your job doing export and import goods to be more controlled precisely',
    },
    best_feature: null,
    brief_feature: {
      purpose: [
        {
          slate: false,
          rtl: true,
          image: '/products/easyai/ai_1@2x.png',
          title: 'We offer the best solution for your inventory',
          description:
            "Maintaining inventory is a challenging job. We're here to assist you with solutions",
        },
        {
          slate: true,
          rtl: false,
          image: '/products/easyai/a1_2@2x.png',
          title: 'Inventory Report to the customs agency ',
          description:
            "Handling reports for customs agency will be more easier, you'll be able to provide real time data",
        },
      ],
      features: [
        {
          thumbs: '/products/s-erp/thumbs/dashboard.png',
          title: 'Order Management',
          description:
            'Start production based on order define style and production parameter.',
        },
        {
          thumbs: '/products/s-erp/thumbs/inventory.png',
          title: 'Inventory Management',
          description:
            'Manage your inventory activity by Inbound, Outbound and Purchase.',
        },
        {
          thumbs: '/products/s-erp/thumbs/purchase.png',
          title: 'Product Management',
          description:
            'Make your custom style and shipping registration right in this menu.',
        },
        {
          thumbs: '/products/easya/thumbs/journal.png',
          title: 'Ledger Book',
          description: 'Record assets based on inventory ingoing and outgoing.',
        },
        {
          thumbs: '/products/easyai/thumbs/customs.png',
          title: 'Compliant with Bea Cukai document',
          description: "we are following bea cukai's mandatory document.",
        },
        {
          thumbs: '/products/easyai/thumbs/trace.png',
          title: 'Tracing material',
          description:
            'Tracing material is a feature that helps you to track your material and its usage.',
        },
      ],
    },
    banner: [
      {
        slate: false,
        rtl: false,
        image: '/products/easyai/mock-easyai_1@2x.png',
        title: 'Built in ledger for accounting',
        description:
          'Every transaction is registered on ledger book to ease on auditing.',
      },

      {
        slate: false,
        rtl: true,
        image: '/products/easyai/mock-easyai_3@2x.png',
        title: 'Never miss calculate your stocks',
        description:
          'Keep your stock remain balance by registering every transaction.',
      },
    ],
    description:
      'We help your job doing export and import goods to be more controlled precisely',
    testimonial: true,
  },

  {
    id: '4',
    name: 'Easy H',
    localesId: 'easy-h',
    brand: 'H',
    hero_section: {
      is_dark: false,
      image: '/products/easyh/payroll@2x.png',
      mobile_image: '/products/easyh/sm_payroll.png',
      medium_image: '/products/easyh/md_payroll.png',
      title: 'Automate payroll calculation',
      description:
        'Define your salary component, Easy H will calculate it for you.',
    },
    best_feature: null,
    brief_feature: {
      purpose: [
        {
          slate: false,
          rtl: true,
          image: '/products/easyh/payroll_banner@2x.png',
          title: 'Easy H helps you to calculate payroll automatically',
          description:
            'Using employee attendance, salary compoenent such as basic salary, overtime, BPJS, Taxes and more',
        },
      ],
      features: [
        {
          thumbs: '/products/easyh/thumbs/personal.png',
          title: 'Personal basic information',
          description:
            'Registering employee data with ID, Phone number, BPJS TK, BPJS Kesehatan, NPWP, Bank account, working hours and more.',
        },
        {
          thumbs: '/products/easyh/thumbs/duty.png',
          title: 'Duty management',
          description:
            'configure every single employee Attendance and overtime data collection based on attendance device such fingerprint, face recognition, and more.',
        },
        {
          thumbs: '/products/easyh/thumbs/salary.png',
          title: 'Salary Management',
          description:
            'Calculated employee basic salary, incentives, and other salary components in one screen.',
        },
        {
          thumbs: '/products/easyh/thumbs/slip.png',
          title: 'Generate Salary Slip',
          description:
            'Our system providing salary slip print out for employee.',
        },
        {
          thumbs: '/products/easyh/thumbs/report_1.png',
          title: 'Summary report',
          description:
            'We provide summary report for entire employee based on basic salary and more.',
        },
        {
          thumbs: '/products/easyh/thumbs/bpjs.png',
          title: 'BPJS TKU & Kesehatan Report',
          description:
            'We provide BPJS TKU and BPJS Kesehatan summary report calculated automatically.',
        },
      ],
    },
    banner: [
      {
        slate: true,
        rtl: false,
        image: '/products/easyh/payroll_banner2@2x.png',
        title: 'Customizable salary component',
        description:
          'Each company have its own rule, we accomodate to define custom rules',
      },
      {
        slate: false,
        rtl: true,
        image: '/products/easyh/banner_hr.webp',
        title: 'Complete the payroll features with Easy HR',
        description:
          'Make Human Resource works easier to record employee data based on academic, Medical, education, career and much more.',
        cta: 'easy-hr',
      },
      {
        slate: false,
        rtl: false,
        image: '/products/easyh/finger_devices.webp',
        title: 'Looking for the attendance device?',
        description:
          'We have plenty of devices to fit your needs and working smoothly with Easy H Payroll.',
        cta_hw: 'access-control-attendance',
      },
    ],
    testimonial: true,
  },
  {
    id: '5',
    name: 'Easy HR',
    localesId: 'easy-hr',
    brand: 'HR',
    hero_section: {
      is_dark: false,
      image: '/products/easyhr/hr@2x.png',
      mobile_image: '/products/easyhr/sm_hr@2x.png',
      medium_image: '/products/easyhr/md_hr@2x.png',
      title: 'Simplify employee management',
      description:
        'Collecting employee data to see their history, perfomance and experience is getting easier',
    },
    best_feature: null,
    brief_feature: {
      purpose: [
        {
          slate: false,
          rtl: true,
          image: '/products/easyhr/hr_1@2x.png',
          title: 'Evaluating employee with complete data',
          description:
            'It will help you to decide which action to take for company growth.',
        },
      ],
      features: [
        {
          thumbs: '/products/easyhr/thumbs/personal_1.png',
          title: 'Personal Basic Info',
          description:
            'Complete record of employee data include family member, medical, training, academic, and reward/warning.',
        },
        {
          thumbs: '/products/easyhr/thumbs/users.png',
          title: 'Unlimited User Registration',
          description:
            'You are freely add or remove as much user as you want, and you can manage them with ease.',
        },
        {
          thumbs: '/products/easyhr/thumbs/org.png',
          title: 'Organization Management',
          description:
            'Manage your company structure and employee per departmenet structure.',
        },
        {
          thumbs: '/products/easyhr/thumbs/reward.png',
          title: 'Giving reward or warning in app',
          description:
            'No need to write a note, just give a reward or warning using out Reward/Warn Feature.',
        },
        {
          thumbs: '/products/easyhr/thumbs/cv.png',
          title: 'Personal Curriculum Vitae',
          description:
            'With this feature, you can see your personal curriculum vitae in one comprehensive report.',
        },
      ],
    },
    banner: [
      {
        slate: false,
        rtl: true,
        image: '/products/easyhr/easyh_ss.png',
        title: 'Manage payroll with Easy H',
        description:
          'Automatically calculate salary based on employee attendance.',
        cta: 'easy-h',
      },
    ],
    testimonial: true,
  },
  {
    id: '6',
    name: 'Groupware',
    localesId: 'groupware',
    brand: 'GR',
    hero_section: {
      image: '/products/groupware/gr@2x.png',
      mobile_image: '/products/groupware/sm_gr@2x.png',
      medium_image: '/products/groupware/md_gr@2x.png',
      is_dark: false,
      title: 'Maintain the entire team connected',
      description:
        'Distribute information to the entire team project to keep on track the progress',
    },
    best_feature: null,
    brief_feature: {
      purpose: [
        {
          slate: false,
          rtl: false,
          image: '/products/groupware/gr_banner2@2x.png',
          title: 'Broadcast to internal team for upcoming event',
          description:
            'Company bulletin will inform all the department for next project',
        },
      ],
      features: [
        {
          thumbs: '/products/s-erp/thumbs/dashboard.png',
          title: 'Master Menu & dashboard',
          description:
            'Easily manage user access, permission, warehouse, products, customer, company information and more.',
        },
        {
          thumbs: '/products/s-erp/thumbs/purchase.png',
          title: 'Purchase Management',
          description:
            'Easily manage your purchase order, invoice, payment, and more',
        },
        {
          thumbs: '/products/s-erp/thumbs/inventory.png',
          title: 'Inventory Management',
          description:
            'Easily manage your inventory, ingoing, outgoing, stock opname, inventory closing stock, stock card report and more',
        },
        {
          thumbs: '/products/s-erp/thumbs/sales.png',
          title: 'Order Management',
          description:
            'Easily manage your sales order, quotation, status report, and more',
        },
        {
          thumbs: '/products/s-erp/thumbs/invoice.png',
          title: 'Sales Management',
          description:
            'Easily manage your sales invoice, payment, advance and more',
        },
        {
          thumbs: '/products/s-erp/thumbs/accounting.png',
          title: 'Linked To Accounting',
          description:
            'Transfering data from S-ERP to Accounting is easy and fast',
        },
        {
          thumbs: '/products/s-erp/thumbs/report.png',
          title: 'Report Management',
          description:
            'Easily manage your daily sales report or monthly sales report, and more',
        },
      ],
    },
    banner: [
      {
        slate: true,
        rtl: true,
        image: '/products/groupware/gr_banner1@2x.png',
        title: 'Watching project progress with shared email',
        description:
          'Avoid miscommunication between team and handling task on demand.',
      },

      {
        slate: false,
        rtl: false,
        image: '/products/easyai/mock-easyai_1@2x.png',
        title: 'Built in ledger for accounting',
        description:
          'Every transaction is registered on ledger book to ease on auditing.',
      },
    ],
    testimonial: true,
  },
  {
    id: '7',
    name: 'S-ERP',
    localesId: 's-erp',
    brand: 'S-ERP',
    hero_section: {
      image: '/products/s-erp/s-erp.png',
      mobile_image: '/products/s-erp/sm_s-erp.png',
      medium_image: '/products/s-erp/md_s-erp.png',
      is_dark: true,
      title: 'For Enterprise to manage franchise everywhere',
      description:
        'S-ERP is a solution for enterprise to manage franchise everywhere.',
    },
    best_feature: null,
    brief_feature: {
      purpose: [
        {
          slate: false,
          rtl: false,
          image: '/products/s-erp/s-erp_banner@2x.png',
          title: 'For business owner to keep on track the business flow',
          description:
            'Keep following the progress of your business is essential, enabling you to make decision based on real time data',
        },
      ],
      features: [
        {
          thumbs: '/products/s-erp/thumbs/dashboard.png',
          title: 'Master Menu & dashboard',
          description:
            'Easily manage user access, permission, warehouse, products, customer, company information and more.',
        },
        {
          thumbs: '/products/s-erp/thumbs/purchase.png',
          title: 'Purchase Management',
          description:
            'Easily manage your purchase order, invoice, payment, and more',
        },
        {
          thumbs: '/products/s-erp/thumbs/inventory.png',
          title: 'Inventory Management',
          description:
            'Easily manage your inventory, ingoing, outgoing, stock opname, inventory closing stock, stock card report and more',
        },
        {
          thumbs: '/products/s-erp/thumbs/sales.png',
          title: 'Order Management',
          description:
            'Easily manage your sales order, quotation, status report, and more',
        },
        {
          thumbs: '/products/s-erp/thumbs/invoice.png',
          title: 'Sales Management',
          description:
            'Easily manage your sales invoice, payment, advance and more',
        },
        {
          thumbs: '/products/s-erp/thumbs/accounting.png',
          title: 'Linked To Accounting',
          description:
            'Transfering data from S-ERP to Accounting is easy and fast',
        },
        {
          thumbs: '/products/s-erp/thumbs/report.png',
          title: 'Report Management',
          description:
            'Easily manage your daily sales report or monthly sales report, and more',
        },
      ],
    },

    banner: [
      {
        slate: true,
        rtl: true,
        image: '/products/easya/acc_banner@2x.png',
        title: 'Link data to accounting for financial statement',
        description:
          'Easier to manage your financial statement and keep track of your business',
        cta: 'easy-a',
      },
      {
        slate: false,
        rtl: false,
        image: '/products/s-erp/s-erp_banner2@2x.png',
        title: 'Realtime data for business analysis',
        description:
          'Keep following the progress of your business is essential, enabling you to make decision based on real time data',
      },
      {
        slate: false,
        rtl: true,
        image: '/products/s-erp/s-erp_banner_3.png',
        title: 'Our Web apps is Cloud ready',
        description:
          'Keep following the progress of your business is essential, enabling you to make decision based on real time data',
      },
    ],
    testimonial: false,
  },
  {
    id: '8',
    name: 'P-ERP',
    localesId: 'p-erp',
    brand: 'P-ERP',
    hero_section: {
      image: '/products/p-erp/p-erp.png',
      mobile_image: '/products/p-erp/sm_p-erp.png',
      medium_image: '/products/p-erp/md_p-erp.png',
      is_dark: false,
      title: 'For Industry handling manufacturing process',
      description:
        'P-ERP is a solution for industry to manage manufacturing resources.',
    },
    best_feature: null,
    brief_feature: null,
    banner: null,
    testimonial: false,
  },
]

const hardware = [
  {
    category: 'Communication & Security',
    products: [
      {
        id: '1',
        name: 'Surveillance Camera (CCTV)',
        localesId: 'cctv',

        hero_section: {
          image: '/products/hardware/cctv/cctv_hero.webp',
          mobile_image: '/products/hardware/cctv/sm_cctv_hero.webp',
          medium_image: '/products/hardware/cctv/md_cctv_hero.webp',
          is_dark: true,
          disable_slider: true,
          title: 'Security Camera for monitoring',
          description: 'You can always monitoring anywhere, anytime.',
        },
        hardware_section: {
          title: 'We are providing the best hardware for optimal output',
          list_product: [
            {
              image: '/products/hardware/cctv/1.jpg',
              name: 'Hik vision IP camera DS-Series',
            },
            {
              image: '/products/hardware/cctv/2.jpg',
              name: 'Hik vision IP camera DS-Series',
            },
            {
              image: '/products/hardware/cctv/7.jpg',
              name: 'Hik vision PTZ camera DS-Series',
            },
            {
              image: '/products/hardware/cctv/4.jpg',
              name: 'Hik vision DVR/NVR DS-Series',
            },
            {
              image: '/products/hardware/cctv/5.jpg',
              name: 'Hik vision Encoder Multi core',
            },
            {
              image: '/products/hardware/cctv/6.jpg',
              name: 'Hik vision Encoder Pluggable',
            },
            {
              image: '/products/hardware/cctv/3.jpg',
              name: 'Hik vision Decoder High performance',
            },
          ],
        },
      },
      {
        id: '2',
        name: 'Access Control & Attendance Machine',
        localesId: 'access-control-attendance',
        hero_section: {
          image: '/products/hardware/access_control/ac_hero.webp',
          mobile_image: '/products/hardware/access_control/sm_ac_hero.webp',
          medium_image: '/products/hardware/access_control/sm_ac_hero.webp',
          is_dark: true,
          disable_slider: true,
          title: 'Control access with door lock and attendance devices',
          description:
            'Biometric device or digital devices for accessing control',
        },
        hardware_section: {
          title: 'Attendance Machine & Access Control devices',
          list_product: [
            {
              image: '/products/hardware/access_control/1.webp',
              name: 'Suprema Smart door lock',
            },
            {
              image: '/products/hardware/access_control/2.webp',
              name: 'Suprema Smart door lock R Series',
            },
            {
              image: '/products/hardware/access_control/3.webp',
              name: 'Doorma Mechanical door lock',
            },
            {
              image: '/products/hardware/access_control/4.webp',
              name: 'IDTECK Fingerprint',
            },
            {
              image: '/products/hardware/access_control/5.webp',
              name: 'IDTECK Fingerprint W-Series',
            },
            {
              image: '/products/hardware/access_control/6.webp',
              name: 'IDTECK RFID Card',
            },
          ],
        },
      },
      {
        id: '3',
        name: 'Office Telephone PABX',
        localesId: 'office-pabx',
        hero_section: {
          image: '/products/hardware/pabx/pabx_hero.webp',
          mobile_image: '/products/hardware/pabx/sm_pabx_hero.webp',
          medium_image: '/products/hardware/pabx/md_pabx_hero.webp',
          is_dark: true,
          disable_slider: true,
          title: 'Digital & IP telephone & PABX for office work',
          description: 'Connecting your office is easy with PABX and telephone',
        },
        hardware_section: {
          title: 'Analog and Digital telephone with PABX',
          list_product: [
            {
              image: '/products/hardware/pabx/1.webp',
              name: 'Yealink Digital & IP phone',
            },
            {
              image: '/products/hardware/pabx/2.webp',
              name: 'Yealink Digital & IP phone SP Series',
            },
            {
              image: '/products/hardware/pabx/3.webp',
              name: 'Yealink Digital & IP phone compact',
            },
            {
              image: '/products/hardware/pabx/7.webp',
              name: 'NEC Analog phone ATH Series',
            },
            {
              image: '/products/hardware/pabx/8.webp',
              name: 'NEC Analog phone DTH Series',
            },
            {
              image: '/products/hardware/pabx/4.webp',
              name: 'Yeastar PABX P-SERIES standard',
            },
            {
              image: '/products/hardware/pabx/5.webp',
              name: 'Yeastar PABX P-SERIES medium',
            },
            {
              image: '/products/hardware/pabx/6.webp',
              name: 'Yeastar PABX P-SERIES corporate',
            },
          ],
        },
      },
    ],
  },
  {
    category: 'PC Hardware & Network',
    products: [
      {
        id: '4',
        name: 'Point of Sales Hardware',
        localesId: 'pos-hardware-peripheral',
        hero_section: {
          image: '/products/hardware/pos/pos_hero.webp',
          mobile_image: '/products/hardware/pos/sm_pos_hero.webp',
          medium_image: '/products/hardware/pos/md_pos_hero.webp',
          is_dark: true,
          disable_slider: true,
          title: 'Optimize Yubi POS features',
          description: 'We are recommending the best POS hardware for Yubi POS',
        },
        hardware_section: {
          title: 'PC POS Hardware & Peripheral',
          list_product: [
            {
              image: '/products/hardware/pos/1.webp',
              name: 'Forsa Touchscreen POS',
            },
            {
              image: '/products/hardware/pos/2.webp',
              name: 'AIO Touchscreen PC',
            },
            {
              image: '/products/hardware/pos/3.webp',
              name: 'Custom PC POS',
            },
            {
              image: '/products/hardware/pos/4.webp',
              name: 'Touchindo PC POS',
            },
            {
              image: '/products/hardware/pos/5.webp',
              name: 'PC Tablet',
            },
            {
              image: '/products/hardware/pos/6.webp',
              name: 'Cash drawer (Mini/Regular)',
            },
            {
              image: '/products/hardware/pos/7.webp',
              name: 'Thermal printer',
            },
            {
              image: '/products/hardware/pos/8.webp',
              name: 'Dot matrix printer',
            },
            {
              image: '/products/hardware/pos/9.webp',
              name: 'ICA UPS 600va - 1200va',
            },
            {
              image: '/products/hardware/pos/10.webp',
              name: 'Ethernet HUB',
            },
            {
              image: '/products/hardware/pos/11.webp',
              name: 'Wireless Router',
            },
            {
              image: '/products/hardware/pos/12.webp',
              name: 'TV Display 32"',
            },
          ],
        },
      },
      {
        id: '5',
        name: 'Desktop & Server Computer',
        localesId: 'server-desktop-computer',
        hero_section: {
          image: '/products/hardware/server/server_hero.webp',
          mobile_image: '/products/hardware/server/sm_server_hero.webp',
          medium_image: '/products/hardware/server/md_server_hero.webp',
          is_dark: true,
          disable_slider: true,
          title: 'Custom build your own PC & Server',
          description: 'We are recommending the desktop & server hardware',
        },
        hardware_section: null,
      },
    ],
  },
]

export { software, banner_2, testimonial, softwares_detail, hardware }
