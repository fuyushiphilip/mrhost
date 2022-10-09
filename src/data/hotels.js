var hotelsData = {
  hotels: [
    {
      id: 1,
      name: "北行旅",
      description:
        "北行旅地理位置超棒，位於台北的中正區，距離臺北市中山堂 200 公尺，距離中華民國總統府 300 公尺，距離西門紅樓 700 公尺。這間住宿提供的設施與服務包括共用廚房、共用休息室以及全館 WiFi（免費）。住宿有旅遊諮詢台服務和行李寄放服務。 北行旅為住客提供空調客房。所有房型均有書桌、電熱水壺、冰箱、保險箱、平面電視以及附沖洗座的私人衛浴。這間住宿的每間客房都有寢具和毛巾。 北行旅附近的人氣景點包括剝皮寮老街、台北植物園和國立中正紀念堂。最近的機場是台北松山機場，距離 北行旅 5 公里。",
      scores: 5.4,
      feedback: "好極了",
      location: "台北市",
      price: 1120,
      imgUrl:
        "https://dkgzabag3frbh.cloudfront.net/attachments/property_photos/images/208349/800press-public-1.jpg",
      facilities: ["免費無線網路", "禁菸客房", "洗衣房"],
    },
    {
      id: 2,
      name: "ILLUME 茹曦酒店",
      description:
        "茹曦酒店座落於台北市中心，位於綠樹成蔭、車水馬龍的南京東路及敦化北路交叉口，面對台北小巨蛋、鄰近台北小巨蛋及南京復興捷運站，比鄰微風南京館，距離臺北松山機場僅1公里、臺北101僅3公里的路程，是商務洽公旅遊購物的首選。 所有客房和套房都配有空調、平面電視、冰箱和電熱水壺。部分房型包括咖啡機、迷你吧和沙發。私人衛浴內配有浴缸或淋浴設備，並備有免費盥洗用品和吹風機。全館提供免費 WiFi。 在入住期間，客人可以到設備齊全的健身中心鍛煉身體、或使用室外游泳池或選擇桑拿好好放鬆身心。茹曦酒店有2間挑高無柱的宴會廳及11間獨立可調整的會議室，可容納 8 至 1000 人，適合舉辦各式活動及會議。 酒店二樓的玉蘭軒中餐廳，以台菜、江浙菜及港式點心聞名；一樓自助餐廳SUNNY BUFFET 挑高16樓的寬敞空間，供應各國自助料理；一樓的SUNNY CAFE，提供輕食、下午茶、咖啡茶與麵包甜點。",
      scores: 4.0,
      feedback: "非常好",
      location: "台北市",
      price: 3104,
      imgUrl:
        "https://dkgzabag3frbh.cloudfront.net/attachments/property_photos/images/219546/Exterior_at_Illume_Taipei__1___1___1___1_.jpeg",
      facilities: ["免費無線網路", "停車場"],
    },
    {
      id: 3,
      name: "宮賞藝術大飯店",
      description:
        "宮賞藝術大飯店位於高雄，距離捷運美麗島站僅有短短的 7 分鐘步行路程，提供眾多客房和套房。公共區域提供免費 WiFi。館內可以停車（恕無法預訂）。 搭乘高雄捷運，1 站可輕鬆抵達高雄中央車站，6 站可輕鬆到達台灣高鐵－左營站，7 站可輕鬆到達高雄小港國際機場。住宿距離著名的六合觀光夜市有 5 分鐘的步行路程。 寬敞的客房和套房配有設計師家具，並設有舒適的休息區和寬敞的工作區。為了給客人帶來方便和舒適，還提供保險箱、冰箱、電熱水壺和平面電視。私人衛浴內附淋浴設施，並提供免費盥洗用品和吹風機。所有住宿單位都可欣賞高雄市的美景。 飯店工作人員很樂意為客人提供免費行李寄存服務，並在 24 小時接待櫃台提供當地旅遊資訊。",
      scores: 4.1,
      feedback: "非常好",
      location: "高雄市",
      price: 2319,
      imgUrl:
        "https://dkgzabag3frbh.cloudfront.net/attachments/room_type_photos/images/740203/740203/Kung_Shang_Design_Hotel-Executive_Family_Suite-2.jpg",
      facilities: ["免費無線網路", "禁菸客房", "洗衣房"],
    },
    {
      id: 4,
      name: "奇異果快捷旅店-高雄車站店",
      description:
        "奇異果快捷旅店－高雄車站店提供附免費 WiFi 的典雅客房。 客房設有空調、平面有線電視、電話和迷你吧。私人衛浴內配有淋浴和吹風機。 服務人員可協助行李寄存、套裝行程安排。櫃台提供全天候服務。",
      scores: 3.5,
      feedback: "還不錯",
      location: "高雄市",
      price: 1199,
      imgUrl:
        "https://dkgzabag3frbh.cloudfront.net/attachments/room_type_photos/images/749733/749733/Kiwi_Kaohsiung_Station-Two_Single_Bed_Room_1_.jpg",
      facilities: ["免費無線網路", "禁菸客房", "洗衣房", "寵物友善"],
    },
    {
      id: 5,
      name: "吉娃娃商旅",
      description:
        "吉娃娃商旅位於六合一路，距離高雄火車站有 8 分鐘的步行路程。飯店提供每日早餐、免費洗衣設施和 WiFi。客房內配有筆記型電腦。 飯店靠近當地的餐廳和購物場所，距離捷運美麗島站有 3 分鐘的步行路程，距離西子灣地區有 5 分鐘的捷運車程，距離高雄國際機場有 25 分鐘的車程。 色彩繽紛的主題客房設有空調，大部分客房均配有附圖案的壁紙和鞦韆。客房配有平面有線電視、筆記型電腦，私人衛浴附浴缸、淋浴設施和盥洗用品。 為了客人舒適和便利的住宿體驗，飯店提供免費洗衣和每日清潔服務。24 小時櫃台飯店工作人員很樂意協助客人行李寄存服務和旅遊建議。 此區為高雄的人氣推薦區域（依據真實住客評語）",
      scores: 4.3,
      feedback: "非常好",
      location: "高雄市",
      price: 1350,
      imgUrl:
        "https://dkgzabag3frbh.cloudfront.net/attachments/property_photos/images/193002/_DOU9033.jpg",
      facilities: ["免費無線網路", "禁菸客房", "洗衣房", "廚房", "停車場"],
    },
  ],
};
export { hotelsData };
