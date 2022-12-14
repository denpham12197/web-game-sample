export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'web-game-sample',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Playfair Display',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/i18n',
  ],
  bootstrapVue: {
    icons: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true,
    },
  },
  i18n: {
    locales: ['en', 'vie'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          English: 'English',
          Vietnamese: 'Vietnamese',
          'ABOUT US': 'ABOUT US',
          GAMES: 'GAMES',
          PARTNERS: 'PARTNERS',
          'CONTACT US': 'CONTACT US',
          'We’re Getting Ready': 'We’re Getting Ready',
          Days: 'Days',
          Hours: 'Hours',
          Minutes: 'Minutes',
          Second: 'Second',
          'We will back to something amazing. Getting the latest updates about our games. Please sign up to our newsletter.':
            'We will back to something amazing. Getting the latest updates about our games. Please sign up to our newsletter.',
          'Enter your email': 'Enter your email',
          'About Us': 'About Us',
          'Browse our selection of free online games and have a great time without leaving the site! Our Kids Games option also includes game reviews, extensive game cheats and walkthroughs, and much more. We have exclusive free downloads, videos, and articles as well. Etech reviews the most popular kids games from all the most popular video gaming platforms, so you don’t need to search around for fun anywhere else on the Internet. Explore a whole new world of gaming on Etech.':
            'Browse our selection of free online games and have a great time without leaving the site! Our Kids Games option also includes game reviews, extensive game cheats and walkthroughs, and much more. We have exclusive free downloads, videos, and articles as well. Etech reviews the most popular kids games from all the most popular video gaming platforms, so you don’t need to search around for fun anywhere else on the Internet. Explore a whole new world of gaming on Etech.',
          Users: 'Users',
          Games: 'Games',
          '24 - Hour': '24 - Hour',
          "24/7 access ensures operators' businesses runs smoothly all year long.":
            "24/7 access ensures operators' businesses runs smoothly all year long.",
          Design: 'Design',
          'Combining imaginative universes, play dynamics, and unprecedented gameplay, our games transcend the boundaries of the virtual world by weaving innovative gameplay.':
            'Combining imaginative universes, play dynamics, and unprecedented gameplay, our games transcend the boundaries of the virtual world by weaving innovative gameplay.',
          Team: 'Team',
          'Etech is an award-winning, international studio of designers, artists, animators and producers that create content for the biggest names in film and video games.':
            'Etech is an award-winning, international studio of designers, artists, animators and producers that create content for the biggest names in film and video games.',
          'Our Games': 'Our Games',
          'As a pioneer of mobile app gamification, we take pride in originality and individuality, providing global players with state-of-the-art games that feature splendid storylines, sensational sound effects and magnificent animation that never cease to impress.':
            'As a pioneer of mobile app gamification, we take pride in originality and individuality, providing global players with state-of-the-art games that feature splendid storylines, sensational sound effects and magnificent animation that never cease to impress.',
          'Our Partners': 'Our Partners',
          Address: 'Address',
          'Valletta Buildings, South Street, Valletta - VLT 1103 Malta, US':
            'Valletta Buildings, South Street, Valletta - VLT 1103 Malta, US',
          '20 Phan Dang Luu street, Hai Chau District, Danang city, Vietnam':
            '20 Phan Dang Luu street, Hai Chau District, Danang city, Vietnam',
          '(+1) 555-0108-000 or (+236) 555-0108':
            '(+1) 555-0108-000 or (+236) 555-0108',
          Subscribe: 'Subscribe',
          'Subscribe to our newsletter and be the first to know about our updates':
            'Subscribe to our newsletter and be the first to know about our updates',
          '2017 Copyright. Policy.': '2017 Copyright. Policy.',
        },
        vie: {
          English: 'Tiếng Anh',
          Vietnamese: 'Tiếng Việt',
          'ABOUT US': 'VỀ CHÚNG TÔI',
          GAMES: 'TRÒ CHƠI',
          PARTNERS: 'ĐỐI TÁC',
          'CONTACT US': 'LIÊN HỆ',
          'We’re Getting Ready': 'Trò chơi sắp ra mắt',
          Days: 'Ngày',
          Hours: 'Giờ',
          Minutes: 'Phút',
          Second: 'Giây',
          'We will back to something amazing. Getting the latest updates about our games. Please sign up to our newsletter.':
            'Chúng tôi sẽ trở lại với một điều tuyệt vời. Để nhận các bản cập nhật mới nhất về trò chơi, vui lòng đăng ký nhận bản tin của chúng tôi.',
          'Enter your email': 'Địa chỉ email của bạn',
          'About Us': 'Về chúng tôi',
          'Browse our selection of free online games and have a great time without leaving the site! Our Kids Games option also includes game reviews, extensive game cheats and walkthroughs, and much more. We have exclusive free downloads, videos, and articles as well. Etech reviews the most popular kids games from all the most popular video gaming platforms, so you don’t need to search around for fun anywhere else on the Internet. Explore a whole new world of gaming on Etech.':
            'Duyệt qua tuyển chọn các trò chơi trực tuyến miễn phí của chúng tôi và có một khoảng thời gian tuyệt vời mà không cần rời khỏi trang web! Tùy chọn Trò chơi dành cho Trẻ em của chúng tôi cũng bao gồm các bài đánh giá trò chơi, các trò chơi gian lận và hướng dẫn mở rộng, và nhiều hơn nữa. Chúng tôi cũng có các bản tải xuống, video và bài báo miễn phí độc quyền. Etech đánh giá các trò chơi trẻ em phổ biến nhất từ tất cả các nền tảng trò chơi điện tử phổ biến nhất, vì vậy bạn không cần phải tìm kiếm niềm vui ở bất kỳ nơi nào khác trên Internet. Khám phá một thế giới trò chơi hoàn toàn mới trên Etech.',
          Users: 'Người chơi',
          Games: 'Trò chơi',
          '24 - Hour': 'Truy Cập 24/7',
          "24/7 access ensures operators' businesses runs smoothly all year long.":
            'Đảm bảo hoạt động kinh doanh của các nhà khai thác hoạt động trơn tru suốt cả năm.',
          Design: 'Thiết Kế',
          'Combining imaginative universes, play dynamics, and unprecedented gameplay, our games transcend the boundaries of the virtual world by weaving innovative gameplay.':
            'Kết hợp các vũ trụ giàu trí tưởng tượng, động lực chơi và lối chơi chưa từng có, trò chơi của chúng tôi vượt qua ranh giới của thế giới ảo bằng cách tạo ra lối chơi sáng tạo.',
          Team: 'Đội Ngũ',
          'Etech is an award-winning, international studio of designers, artists, animators and producers that create content for the biggest names in film and video games.':
            'Etech là một studio quốc tế, từng đoạt giải thưởng gồm các nhà thiết kế, nghệ sĩ, họa sĩ hoạt hình và nhà sản xuất chuyên tạo ra nội dung cho những tên tuổi lớn nhất trong lĩnh vực điện ảnh và trò chơi điện tử.',
          'Our Games': 'Trò chơi',
          'As a pioneer of mobile app gamification, we take pride in originality and individuality, providing global players with state-of-the-art games that feature splendid storylines, sensational sound effects and magnificent animation that never cease to impress.':
            'Là nhà tiên phong trong lĩnh vực trò chơi ứng dụng dành cho thiết bị di động, chúng tôi tự hào về tính độc đáo và cá tính, cung cấp cho người chơi toàn cầu những trò chơi hiện đại có cốt truyện tuyệt vời, hiệu ứng âm thanh giật gân và hoạt ảnh hoành tráng không ngừng gây ấn tượng.',
          'Our Partners': 'Đối tác',
          Address: 'Địa chỉ',
          'Valletta Buildings, South Street, Valletta - VLT 1103 Malta, US':
            'Valletta Buildings, South Street, Valletta - VLT 1103 Malta, Mỹ',
          '20 Phan Dang Luu street, Hai Chau District, Danang city, Vietnam':
            'Số 20 đường Phan Đăng Lưu, quận Hải Châu, thành phố Đà Nẵng, Việt Nam',
          '(+1) 555-0108-000 or (+236) 555-0108':
            '(+1) 555-0108-000 hoặc (+236) 555-0108',
          Subscribe: 'Theo dõi',
          'Subscribe to our newsletter and be the first to know about our updates':
            'Đăng ký nhận bản tin của chúng tôi và là người đầu tiên biết về các cập nhật của chúng tôi',
          '2017 Copyright. Policy.': '2017 Copyright. Policy.',
        },
      },
    },
  },
}
