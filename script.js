/* --- BƯỚC 1: DỮ LIỆU CÂU HỎI (CẤU TRÚC MỚI) --- */
const quizData = [
  {
    question: "yêu",
    answers: [
      { text: "爱", correct: true },
      { text: "茶", correct: false },
      { text: "点", correct: false },
      { text: "狗", correct: false }
    ]
  },
  {
    question: "tám",
    answers: [
      { text: "八", correct: true },
      { text: "本", correct: false },
      { text: "多", correct: false },
      { text: "好", correct: false }
    ]
  },
  {
    question: "bố",
    answers: [
      { text: "爸爸", correct: true },
      { text: "分钟", correct: false },
      { text: "汉语", correct: false },
      { text: "后面", correct: false }
    ]
  },
  {
    question: "miền Bắc",
    answers: [
      { text: "北方", correct: true },
      { text: "电影", correct: false },
      { text: "东西", correct: false },
      { text: "儿子", correct: false }
    ]
  },
  {
    question: "cốc, chén ly, tách",
    answers: [
      { text: "杯子", correct: true },
      { text: "工作", correct: false },
      { text: "分钟", correct: false },
      { text: "饭馆", correct: false }
    ]
  },
  {
    question: "quyển, gốc, vốn, thân",
    answers: [
      { text: "本", correct: true },
      { text: "吃", correct: false },
      { text: "大", correct: false },
      { text: "点", correct: false }
    ]
  },
   {
    question: "không, chưa",
    answers: [
      { text: "不", correct: true },
      { text: "菜", correct: false },
      { text: "点", correct: false },
      { text: "狗", correct: false }
    ]
  },
  {
    question: "không có gì",
    answers: [
      { text: "不客气", correct: true },
      { text: "出租车", correct: false },
      { text: "多打电话", correct: false },
      { text: "对不起", correct: false }
    ]
  },
  {
    question: "món, thức ăn",
    answers: [
       { text: "菜", correct: true },
       { text: "分钟", correct: false },
      { text: "爱", correct: false },
      { text: "后面", correct: false }
    ]
  },
  {
    question: "trà ",
    answers: [
      { text: "茶", correct: true },
      { text: "喝", correct: false },
      { text: "的", correct: false },
      { text: "儿子", correct: false }
    ]
  },
  {
    question: "ăn",
    answers: [
      { text: "吃", correct: true },
      { text: "读", correct: false },
      { text: "都", correct: false },
      { text: "饭馆", correct: false }
    ]
  },
  {
    question: "to, lớn",
    answers: [
      { text: "大", correct: true },
      { text: "茶", correct: false },
      { text: "点", correct: false },
      { text: "狗", correct: false }
    ]
  },
  {
    question: "gọi điện thoại",
    answers: [
      { text: "打电话", correct: true },
      { text: "不客气", correct: false },
      { text: "对不起", correct: false },
      { text: "火车站", correct: false }
    ]
  },
  {
    question: "của",
    answers: [
      { text: "的", correct: true },
      { text: "分钟", correct: false },
      { text: "吃", correct: false },
      { text: "后面", correct: false }
    ]
  },
  {
    question: "máy tính",
    answers: [
      { text: "电脑", correct: true },
      { text: "电影", correct: false },
      { text: "东西", correct: false },
      { text: "儿子", correct: false }
    ]
  },
  {
    question: "ti vi",
    answers: [
      { text: "电视", correct: true },
      { text: "电脑", correct: false },
      { text: "电影", correct: false },
      { text: "饭馆", correct: false }
    ]
  },
  {
    question: "điểm, giờ",
    answers: [
      { text: "点", correct: true },
      { text: "吃", correct: false },
      { text: "大", correct: false },
      { text: "都", correct: false }
    ]
  },
   {
    question: "đều",
    answers: [
      { text: "都", correct: true },
      { text: "菜", correct: false },
      { text: "点", correct: false },
      { text: "狗", correct: false }
    ]
  },
  {
    question: "phim",
    answers: [
      { text: "电影", correct: true },
      { text: "出租车", correct: false },
      { text: "电视", correct: false },
      { text: "电脑", correct: false }
    ]
  },
  {
    question: "đồ đạc",
    answers: [
       { text: "东西", correct: true },
       { text: "分钟", correct: false },
      { text: "爱", correct: false },
      { text: "后面", correct: false }
    ]
  },
  {
    question: "đọc ",
    answers: [
      { text: "读", correct: true },
      { text: "喝", correct: false },
      { text: "的", correct: false },
      { text: "儿子", correct: false }
    ]
  },
  {
    question: "nhiều",
    answers: [
      { text: "多", correct: true },
      { text: "读", correct: false },
      { text: "都", correct: false },
      { text: "饭馆", correct: false }
    ]
  },
  {
    question: "con trai",
    answers: [
      { text: "儿子", correct: true },
      { text: "高兴", correct: false },
      { text: "东西", correct: false },
      { text: "饭馆", correct: false }
    ]
  },
  {
    question: "quán cơm",
    answers: [
      { text: "饭馆", correct: true },
      { text: "分钟", correct: false },
      { text: "高兴", correct: false },
      { text: "后面", correct: false }
    ]
  },
  {
    question: "máy bay",
    answers: [
      { text: "飞机", correct: true },
      { text: "分钟", correct: false },
      { text: "高兴", correct: false },
      { text: "后面", correct: false }
    ]
  },
  {
    question: "phút",
    answers: [
      { text: "分钟", correct: true },
      { text: "看见", correct: false },
      { text: "米饭", correct: false },
      { text: "后面", correct: false }
    ]
  },
  {
    question: "vui vẻ, vui mừng",
    answers: [
      { text: "高兴", correct: true },
      { text: "电影", correct: false },
      { text: "东西", correct: false },
      { text: "儿子", correct: false }
    ]
  },
  {
    question: "công việc",
    answers: [
      { text: "工作", correct: true },
      { text: "饭馆", correct: false },
      { text: "分钟", correct: false },
      { text: "饭馆", correct: false }
    ]
  },
  {
    question: "chó",
    answers: [
      { text: "狗", correct: true },
      { text: "吃", correct: false },
      { text: "大", correct: false },
      { text: "点", correct: false }
    ]
  },
   {
    question: "và, cùng",
    answers: [
      { text: "和", correct: true },
      { text: "菜", correct: false },
      { text: "点", correct: false },
      { text: "很", correct: false }
    ]
  },
  {
    question: "uống",
    answers: [
      { text: "喝", correct: true },
      { text: "和", correct: false },
      { text: "开", correct: false },
      { text: "会", correct: false }
    ]
  },
  {
    question: "rất, lắm",
    answers: [
       { text: "很", correct: true },
       { text: "看", correct: false },
      { text: "爱", correct: false },
      { text: "后块", correct: false }
    ]
  },
  {
    question: "phía sau, mặt sau, đằng sau ",
    answers: [
      { text: "后面", correct: true },
      { text: "喝", correct: false },
      { text: "看见", correct: false },
      { text: "儿子", correct: false }
    ]
  },
  {
    question: "lần, về,quay lại",
    answers: [
      { text: "回", correct: true },
      { text: "读", correct: false },
      { text: "都", correct: false },
      { text: "九", correct: false }
    ]
  },
  {
    question: "taxi",
    answers: [
      { text: "出租车", correct: true },
      { text: "打电话", correct: false },
      { text: "对不起", correct: false },
      { text: "火车站", correct: false }
    ]
  },
  {
    question: "mấy, vài",
    answers: [
      { text: "几", correct: true },
      { text: "九", correct: false },
      { text: "了", correct: false },
      { text: "开", correct: false }
    ]
  },
  {
    question: "nhà, gia đình",
    answers: [
      { text: "家", correct: true },
      { text: "学", correct: false },
      { text: "了", correct: false },
      { text: "开", correct: false }
    ]
  },
  {
    question: "gọi",
    answers: [
      { text: "叫", correct: true },
      { text: "开", correct: false },
      { text: "吃", correct: false },
      { text: "九", correct: false }
    ]
  },
  {
    question: "hôm nay",
    answers: [
      { text: "今天", correct: true },
      { text: "昨天", correct: false },
      { text: "明天", correct: false },
      { text: "天后", correct: false }
    ]
  },
  {
    question: "chín",
    answers: [
      { text: "九", correct: true },
      { text: "开", correct: false },
      { text: "几", correct: false },
      { text: "饭馆", correct: false }
    ]
  },
  {
    question: "mở, nở",
    answers: [
      { text: "开", correct: true },
      { text: "吃", correct: false },
      { text: "大", correct: false },
      { text: "都", correct: false }
    ]
  },
   {
    question: "nhìn, xem, thăm, khám",
    answers: [
      { text: "看", correct: true },
      { text: "开", correct: false },
      { text: "点", correct: false },
      { text: "回", correct: false }
    ]
  },
  {
    question: "giáo viên",
    answers: [
      { text: "老师", correct: true },
      { text: "妈妈", correct: false },
      { text: "电视", correct: false },
      { text: "电脑", correct: false }
    ]
  },
  {
    question: "lạnh",
    answers: [
       { text: "冷", correct: true },
       { text: "猫", correct: false },
      { text: "爱", correct: false },
      { text: "没", correct: false }
    ]
  },
  {
    question: "trong ",
    answers: [
      { text: "里", correct: true },
      { text: "喝", correct: false },
      { text: "的", correct: false },
      { text: "哪", correct: false }
    ]
  },
  {
    question: "sáu",
    answers: [
      { text: "六", correct: true },
      { text: "读", correct: false },
      { text: "都", correct: false },
      { text: "块", correct: false }
    ]
  },
  {
    question: "mua",
    answers: [
      { text: "买", correct: true },
      { text: "能", correct: false },
      { text: "卖", correct: false },
      { text: "去", correct: false }
    ]
  },
  {
    question: "bán",
    answers: [
      { text: "卖", correct: true },
      { text: "茶", correct: false },
      { text: "买", correct: false },
      { text: "去", correct: false }
    ]
  },
  {
    question: "mèo",
    answers: [
      { text: "猫", correct: true },
      { text: "本", correct: false },
      { text: "呢", correct: false },
      { text: "零", correct: false }
    ]
  },
  {
    question: "không, chưa",
    answers: [
      { text: "没", correct: true },
      { text: "那", correct: false },
      { text: "能", correct: false },
      { text: "年", correct: false }
    ]
  },
  {
    question: "không sao",
    answers: [
      { text: "没关系", correct: true },
      { text: "对不起", correct: false },
      { text: "东西", correct: false },
      { text: "出租车", correct: false }
    ]
  },
  {
    question: "cơm",
    answers: [
      { text: "米饭", correct: true },
      { text: "工作", correct: false },
      { text: "分钟", correct: false },
      { text: "饭馆", correct: false }
    ]
  },
  {
    question: "ngày mai",
    answers: [
      { text: "明天", correct: true },
      { text: "今天", correct: false },
      { text: "昨天", correct: false },
      { text: "点", correct: false }
    ]
  },
   {
    question: "tên",
    answers: [
      { text: "名字", correct: true },
      { text: "朋友", correct: false },
      { text: "漂亮", correct: false },
      { text: "苹果", correct: false }
    ]
  },
  {
    question: "kia, đó",
    answers: [
      { text: "那", correct: true },
      { text: "哪", correct: false },
      { text: "哪儿", correct: false },
      { text: "呢", correct: false }
    ]
  },
  {
    question: "đâu",
    answers: [
      { text: "哪", correct: true },
      { text: "那", correct: false },
      { text: "能", correct: false },
      { text: "呢", correct: false }
    ]
  },
  {
    question: "thế, nhỉ, vậy,nhé, cơ ",
    answers: [
      { text: "呢", correct: true },
      { text: "那", correct: false },
      { text: "的", correct: false },
      { text: "吗", correct: false }
    ]
  },
  {
    question: "năm",
    answers: [
      { text: "年", correct: true },
      { text: "苹", correct: false },
      { text: "都", correct: false },
      { text: "天", correct: false }
    ]
  },
  {
    question: "con gái",
    answers: [
      { text: "女儿", correct: true },
      { text: "哪儿", correct: false },
      { text: "那儿", correct: false },
      { text: "朋友", correct: false }
    ]
  },
  {
    question: "bạn ",
    answers: [
      { text: "朋友", correct: true },
      { text: "苹果", correct: false },
      { text: "前面", correct: false },
      { text: "女儿", correct: false }
    ]
  },
  {
    question: "xinh đẹp",
    answers: [
      { text: "漂亮", correct: true },
      { text: "商店", correct: false },
      { text: "认识", correct: false },
      { text: "前面", correct: false }
    ]
  },
  {
    question: "táo",
    answers: [
      { text: "苹果", correct: true },
      { text: "水果", correct: false },
      { text: "结果", correct: false },
      { text: "果实", correct: false }
    ]
  },
  {
    question: "số bảy",
    answers: [
      { text: "七", correct: true },
      { text: "电七", correct: false },
      { text: "九", correct: false },
      { text: "儿子", correct: false }
    ]
  },
  {
    question: "tiền",
    answers: [
      { text: "钱", correct: true },
      { text: "我", correct: false },
      { text: "请", correct: false },
      { text: "饭馆", correct: false }
    ]
  },
  {
    question: "xin, mời",
    answers: [
      { text: "请", correct: true },
      { text: "热", correct: false },
      { text: "钱", correct: false },
      { text: "商", correct: false }
    ]
  },
   {
    question: "nóng, nhiệt",
    answers: [
      { text: "热", correct: true },
      { text: "菜", correct: false },
      { text: "谁", correct: false },
      { text: "候", correct: false }
    ]
  },
  {
    question: "biết, nhận biết",
    answers: [
      { text: "认识", correct: true },
      { text: "商店", correct: false },
      { text: "前面", correct: false },
      { text: "时候", correct: false }
    ]
  },
  {
    question: "ngày",
    answers: [
       { text: "日", correct: true },
       { text: "白", correct: false },
      { text: "爱", correct: false },
      { text: "后面", correct: false }
    ]
  },
  {
    question: "lên ca, đi làm ",
    answers: [
      { text: "上班", correct: true },
      { text: "上", correct: false },
      { text: "上午", correct: false },
      { text: "上课", correct: false }
    ]
  },
  {
    question: "cửa hàng",
    answers: [
      { text: "商店", correct: true },
      { text: "酒店", correct: false },
      { text: "餐厅", correct: false },
      { text: "饭馆", correct: false }
    ]
  },
  {
    question: "ai",
    answers: [
      { text: "谁", correct: true },
      { text: "十", correct: false },
      { text: "人", correct: false },
      { text: "水", correct: false }
    ]
  },
  {
    question: "là",
    answers: [
      { text: "是", correct: true },
      { text: "请", correct: false },
      { text: "热", correct: false },
      { text: "书", correct: false }
    ]
  },
  {
    question: "lúc, khi",
    answers: [
      { text: "时候", correct: true },
      { text: "分钟", correct: false },
      { text: "高兴", correct: false },
      { text: "后面", correct: false }
    ]
  },
  {
    question: "sách",
    answers: [
      { text: "书", correct: true },
      { text: "午", correct: false },
      { text: "米饭", correct: false },
      { text: "水果", correct: false }
    ]
  },
  {
    question: "ngủ",
    answers: [
      { text: "睡觉", correct: true },
      { text: "说话", correct: false },
      { text: "东西", correct: false },
      { text: "商店", correct: false }
    ]
  },
  {
    question: "nói chuyện, nói ra",
    answers: [
      { text: "说话", correct: true },
      { text: "饭馆", correct: false },
      { text: "时候", correct: false },
      { text: "饭馆", correct: false }
    ]
  },
  {
    question: "tuổi",
    answers: [
      { text: "岁", correct: true },
      { text: "少", correct: false },
      { text: "多", correct: false },
      { text: "么", correct: false }
    ]
  },
   {
    question: "thời tiết",
    answers: [
      { text: "天气", correct: true },
      { text: "苹果", correct: false },
      { text: "漂亮", correct: false },
      { text: "商店", correct: false }
    ]
  },
  {
    question: "nghe",
    answers: [
      { text: "听", correct: true },
      { text: "喝", correct: false },
      { text: "和", correct: false },
      { text: "说", correct: false }
    ]
  },
  {
    question: "bạn học",
    answers: [
       { text: "同学", correct: true },
       { text: "学习", correct: false },
      { text: "学生", correct: false },
      { text: "太学", correct: false }
    ]
  },
  {
    question: "phía sau, mặt sau, đằng sau ",
    answers: [
      { text: "后面", correct: true },
      { text: "喝", correct: false },
      { text: "看见", correct: false },
      { text: "儿子", correct: false }
    ]
  },
  {
    question: "muốn",
    answers: [
      { text: "想", correct: true },
      { text: "读", correct: false },
      { text: "现", correct: false },
      { text: "九", correct: false }
    ]
  },
  {
    question: "tiên sinh, ngài",
    answers: [
      { text: "先生", correct: true },
      { text: "学生", correct: false },
      { text: "现在", correct: false },
      { text: "学校", correct: false }
    ]
  },
  {
    question: "hiện tại, bây giờ",
    answers: [
      { text: "现在", correct: true },
      { text: "先生", correct: false },
      { text: "在", correct: false },
      { text: "医生", correct: false }
    ]
  },
  {
    question: "mưa",
    answers: [
      { text: "下雨", correct: true },
      { text: "下午", correct: false },
      { text: "期", correct: false },
      { text: "医", correct: false }
    ]
  },
  {
    question: "viết",
    answers: [
      { text: "写", correct: true },
      { text: "吗", correct: false },
      { text: "马", correct: false },
      { text: "卖", correct: false }
    ]
  },
  {
    question: "một vài, một ít",
    answers: [
      { text: "些", correct: true },
      { text: "小", correct: false },
      { text: "喂", correct: false },
      { text: "有", correct: false }
    ]
  },
  {
    question: "tuần, thứ",
    answers: [
      { text: "星期", correct: true },
      { text: "谢谢", correct: false },
      { text: "医生", correct: false },
      { text: "医院", correct: false }
    ]
  },
  {
    question: "học sinh",
    answers: [
      { text: "学生", correct: true },
      { text: "学习", correct: false },
      { text: "学校", correct: false },
      { text: "医生", correct: false }
    ]
  },
   {
    question: "quần áo",
    answers: [
      { text: "衣服", correct: true },
      { text: "医院", correct: false },
      { text: "椅子", correct: false },
      { text: "星期", correct: false }
    ]
  },
  {
    question: "bác sỹ",
    answers: [
      { text: "医生", correct: true },
      { text: "现在", correct: false },
      { text: "医院", correct: false },
      { text: "再见", correct: false }
    ]
  },
  {
    question: "bệnh viện",
    answers: [
       { text: "医院", correct: true },
       { text: "医生", correct: false },
      { text: "现在", correct: false },
      { text: "椅子", correct: false }
    ]
  },
  {
    question: "ghế tựa ",
    answers: [
      { text: "椅子", correct: true },
      { text: "再见", correct: false },
      { text: "这儿", correct: false },
      { text: "月", correct: false }
    ]
  },
  {
    question: "có",
    answers: [
      { text: "有", correct: true },
      { text: "这", correct: false },
      { text: "在", correct: false },
      { text: "块", correct: false }
    ]
  },
  {
    question: "tháng",
    answers: [
      { text: "月", correct: true },
      { text: "五", correct: false },
      { text: "卖", correct: false },
      { text: "日", correct: false }
    ]
  },
  {
    question: "thế nào, sao, làm sao",
    answers: [
      { text: "怎么", correct: true },
      { text: "什么", correct: false },
      { text: "马", correct: false },
      { text: "时候", correct: false }
    ]
  },
  {
    question: "đây",
    answers: [
      { text: "这", correct: true },
      { text: "还", correct: false },
      { text: "没", correct: false },
      { text: "有", correct: false }
    ]
  },
  {
    question: "chữ",
    answers: [
      { text: "字", correct: true },
      { text: "学", correct: false },
      { text: "医", correct: false },
      { text: "期", correct: false }
    ]
  },
  {
    question: "ở, cư trú, sống",
    answers: [
      { text: "住", correct: true },
      { text: "在", correct: false },
      { text: "吧", correct: false },
      { text: "正", correct: false }
    ]
  },
   {
    question: "cái bàn",
    answers: [
      { text: "桌子", correct: true },
      { text: "再见", correct: false },
      { text: "衣服", correct: false },
      { text: "星期", correct: false }
    ]
  },
  {
    question: "làm",
    answers: [
      { text: "做", correct: true },
      { text: "院", correct: false },
      { text: "校", correct: false },
      { text: "雨", correct: false }
    ]
  },
  {
    question: "ngồi",
    answers: [
       { text: "坐", correct: true },
       { text: "做", correct: false },
      { text: "帮", correct: false },
      { text: "歌", correct: false }
    ]
  },
  {
    question: "hôm qua",
    answers: [
      { text: "昨天", correct: true },
      { text: "明天", correct: false },
      { text: "今天", correct: false },
      { text: "天前", correct: false }
    ]
  },
 
];

/* --- BƯỚC 2: LẤY CÁC THÀNH PHẦN HTML --- */
const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit-btn');
const resultsContainer = document.getElementById('results-container');

/* --- BƯỚC 3: HÀM XÁO TRỘN MẢNG (FISHER-YATES) --- */
// Hàm này dùng để xáo trộn cả câu hỏi VÀ câu trả lời
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/* --- BƯỚC 4: HÀM HIỂN THỊ CÂU HỎI (ĐÃ CẬP NHẬT) --- */
// Hàm này sẽ xáo trộn các câu trả lời (A, B, C, D)
function displayQuiz() {
    let output = [];
    const letters = ['A', 'B', 'C', 'D']; // Gán nhãn
    
    quizData.forEach((currentQuestion, questionIndex) => {
        let optionsOutput = [];

        // Xáo trộn mảng câu trả lời của câu hỏi hiện tại
        shuffleArray(currentQuestion.answers);

        // Lặp qua từng câu trả lời (đã xáo trộn)
        currentQuestion.answers.forEach((answer, answerIndex) => {
            optionsOutput.push(
                `<label class="option">
                    <input type="radio" name="question${questionIndex}" value="${answer.correct}">
                    ${letters[answerIndex]}: ${answer.text}
                </label>`
            );
        });

        // Thêm câu hỏi và các lựa chọn vào mảng output
        output.push(
            `<div class="question-block">
                <div class="question-text">${questionIndex + 1}. ${currentQuestion.question}</div>
                <div class="options">
                    ${optionsOutput.join('')}
                </div>
            </div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

/* --- BƯỚC 5: HÀM CHẤM ĐIỂM (ĐÃ CẬP NHẬT) --- */
// Hàm này chấm điểm và tô màu đúng/sai
function showResults() {
    let score = 0;
    const allQuestionBlocks = document.querySelectorAll('.question-block');

    quizData.forEach((currentQuestion, questionIndex) => {
        
        const selector = `input[name="question${questionIndex}"]:checked`;
        const userInputElement = document.querySelector(selector);
        const userAnswerValue = (userInputElement || {}).value; // Sẽ là "true" hoặc "false"

        // 1. Tính điểm
        if (userAnswerValue === "true") {
            score++;
        }

        // 2. Tô màu Đúng/Sai
        const inputs = allQuestionBlocks[questionIndex].querySelectorAll('input[type="radio"]');

        inputs.forEach(input => {
            const optionValue = input.value; // "true" hoặc "false"
            const optionLabel = input.parentElement; 

            input.disabled = true; // Vô hiệu hóa

            if (optionValue === "true") {
                optionLabel.classList.add('correct'); // Luôn tô xanh đáp án đúng
            } 
            else if (input.checked && optionValue === "false") {
                optionLabel.classList.add('incorrect'); // Tô đỏ cái bị chọn sai
            }
        });
    });

    // 3. Hiển thị kết quả
    resultsContainer.innerHTML = `Bạn đã trả lời đúng ${score} / ${quizData.length} câu!`;
    
    // 4. Vô hiệu hóa nút nộp bài
    submitButton.disabled = true;
    submitButton.style.backgroundColor = '#aaa';
}

/* --- BƯỚC 6: KHỞI TẠO VÀ GẮN SỰ KIỆN --- */

// Xáo trộn thứ tự CÂU HỎI
shuffleArray(quizData); 

// Hiển thị quiz lên trang
displayQuiz();

// Gắn sự kiện 'click' cho nút "Nộp bài"
submitButton.addEventListener('click', showResults);