/**
 * 奖品设置
 * type: 唯一标识,0为特等奖
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 1,
    text: "特等奖",
    title: "神秘礼盒",
    img: "../img/0.jpg"
  },
  {
    type: 1,
    count: 1,
    text: "一等奖",
    title: "大疆Air",
    img: "../img/1.jpg"
  },
  {
    type: 2,
    count: 2,
    text: "二等奖",
    title: "大疆Marvic Min",
    img: "../img/2.jpg"
  },
  {
    type: 3,
    count: 3,
    text: "三等奖",
    title: " 小米滑板车",
    img: "../img/3.jpg"
  },
  {
    type: 4,
    count: 5,
    text: "小香手奖",
    title: "大疆Tello",
    img: "../img/4.jpg"
  },
  {
    type: 5,
    count: 10,
    text: "活力四射奖",
    title: "航拍飞行器",
    img: "../img/5.jpg"
  }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1,1, 2, 3, 5, 5];

/**
 * 卡片公司名称标识
 */
const COMPANY = "YOI";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
