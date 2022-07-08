const contact_data = {
  id: '1',
  name: 'Contact Yubi technology',
  localesId: 'contact',
  brand: 'Yubi Technology Contact Page',
  hero_section: {
    is_dark: true,
    disable_slider: true,
    image: '/customers/contact_hero.webp',
    mobile_image: '/customers/sm_contact_hero.webp',
    medium_image: '/customers/md_contact_hero.webp',
    title: 'Hello, What can we help you with?',
    is_contact: true,
    description: "We'd like to assist you, so don't hesitate to contact us.",
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
  banner: [
    {
      slate: true,
      rtl: false,
      image: '/products/easyai/a1_2@2x.png',
      title: 'Inventory Report to the customs agency ',
      description:
        "Handling reports for Bea cukai agency will be more easier, you'll be able to provide real time data",

      cta: 'easy-ai',
    },

    {
      slate: false,
      rtl: true,
      image: '/products/easyh/payroll_banner@2x.png',
      title:
        'Manual Calculation for payroll? it can be painful and error prone',
      description:
        'Hence, we provide you payroll system to calculate automatically employee salary',

      cta: 'easy-h',
    },
    {
      slate: false,
      rtl: false,
      image: '/products/easyhr/hr_1@2x.png',
      title: 'Evaluating employee with complete data of Easy HR',
      description:
        'It will help you to decide which action to take for company growth',
      cta: 'easy-hr',
    },

    {
      slate: true,
      rtl: true,
      image: '/products/groupware/gr_banner2@2x.png',
      title: 'Maintain the entire team connected',
      description:
        'Distribute information to the entire team project to keep on track the progress with mailling system, bulletin, notifications and more',

      cta: 'groupware',
    },
  ],
  testimonial: true,
}

export default contact_data
