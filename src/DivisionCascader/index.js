import React from "react";
import { Cascader } from "antd";

const options = [
  { label: "北京", children: [{ label: "市辖区" }] },
  { label: "天津", children: [{ label: "市辖区" }] },
  {
    label: "河北",
    children: [
      { label: "石家庄" },
      { label: "唐山" },
      { label: "秦皇岛" },
      { label: "邯郸" },
      { label: "邢台" },
      { label: "保定" },
      { label: "张家口" },
      { label: "承德" },
      { label: "沧州" },
      { label: "廊坊" },
      { label: "衡水" }
    ]
  },
  {
    label: "山西",
    children: [
      { label: "太原" },
      { label: "大同" },
      { label: "阳泉" },
      { label: "长治" },
      { label: "晋城" },
      { label: "朔州" },
      { label: "晋中" },
      { label: "运城" },
      { label: "忻州" },
      { label: "临汾" },
      { label: "吕梁" }
    ]
  },
  {
    label: "内蒙古",
    children: [
      { label: "呼和浩特" },
      { label: "包头" },
      { label: "乌海" },
      { label: "赤峰" },
      { label: "通辽" },
      { label: "鄂尔多斯" },
      { label: "呼伦贝尔" },
      { label: "巴彦淖尔" },
      { label: "乌兰察布" },
      { label: "兴安盟" },
      { label: "锡林郭勒盟" },
      { label: "阿拉善盟" }
    ]
  },
  {
    label: "辽宁",
    children: [
      { label: "沈阳" },
      { label: "大连" },
      { label: "鞍山" },
      { label: "抚顺" },
      { label: "本溪" },
      { label: "丹东" },
      { label: "锦州" },
      { label: "营口" },
      { label: "阜新" },
      { label: "辽阳" },
      { label: "盘锦" },
      { label: "铁岭" },
      { label: "朝阳" },
      { label: "葫芦岛" }
    ]
  },
  {
    label: "吉林",
    children: [
      { label: "长春" },
      { label: "吉林" },
      { label: "四平" },
      { label: "辽源" },
      { label: "通化" },
      { label: "白山" },
      { label: "松原" },
      { label: "白城" },
      { label: "延边朝鲜族" }
    ]
  },
  {
    label: "黑龙江",
    children: [
      { label: "哈尔滨" },
      { label: "齐齐哈尔" },
      { label: "鸡西" },
      { label: "鹤岗" },
      { label: "双鸭山" },
      { label: "大庆" },
      { label: "伊春" },
      { label: "佳木斯" },
      { label: "七台河" },
      { label: "牡丹江" },
      { label: "黑河" },
      { label: "绥化" },
      { label: "大兴安岭" }
    ]
  },
  { label: "上海", children: [{ label: "市辖区" }] },
  {
    label: "江苏",
    children: [
      { label: "南京" },
      { label: "无锡" },
      { label: "徐州" },
      { label: "常州" },
      { label: "苏州" },
      { label: "南通" },
      { label: "连云港" },
      { label: "淮安" },
      { label: "盐城" },
      { label: "扬州" },
      { label: "镇江" },
      { label: "泰州" },
      { label: "宿迁" }
    ]
  },
  {
    label: "浙江",
    children: [
      { label: "杭州" },
      { label: "宁波" },
      { label: "温州" },
      { label: "嘉兴" },
      { label: "湖州" },
      { label: "绍兴" },
      { label: "金华" },
      { label: "衢州" },
      { label: "舟山" },
      { label: "台州" },
      { label: "丽水" }
    ]
  },
  {
    label: "安徽",
    children: [
      { label: "合肥" },
      { label: "芜湖" },
      { label: "蚌埠" },
      { label: "淮南" },
      { label: "马鞍山" },
      { label: "淮北" },
      { label: "铜陵" },
      { label: "安庆" },
      { label: "黄山" },
      { label: "滁州" },
      { label: "阜阳" },
      { label: "宿州" },
      { label: "六安" },
      { label: "亳州" },
      { label: "池州" },
      { label: "宣城" }
    ]
  },
  {
    label: "福建",
    children: [
      { label: "福州" },
      { label: "厦门" },
      { label: "莆田" },
      { label: "三明" },
      { label: "泉州" },
      { label: "漳州" },
      { label: "南平" },
      { label: "龙岩" },
      { label: "宁德" }
    ]
  },
  {
    label: "江西",
    children: [
      { label: "南昌" },
      { label: "景德镇" },
      { label: "萍乡" },
      { label: "九江" },
      { label: "新余" },
      { label: "鹰潭" },
      { label: "赣州" },
      { label: "吉安" },
      { label: "宜春" },
      { label: "抚州" },
      { label: "上饶" }
    ]
  },
  {
    label: "山东",
    children: [
      { label: "济南" },
      { label: "青岛" },
      { label: "淄博" },
      { label: "枣庄" },
      { label: "东营" },
      { label: "烟台" },
      { label: "潍坊" },
      { label: "济宁" },
      { label: "泰安" },
      { label: "威海" },
      { label: "日照" },
      { label: "莱芜" },
      { label: "临沂" },
      { label: "德州" },
      { label: "聊城" },
      { label: "滨州" },
      { label: "菏泽" }
    ]
  },
  {
    label: "河南",
    children: [
      { label: "郑州" },
      { label: "开封" },
      { label: "洛阳" },
      { label: "平顶山" },
      { label: "安阳" },
      { label: "鹤壁" },
      { label: "新乡" },
      { label: "焦作" },
      { label: "濮阳" },
      { label: "许昌" },
      { label: "漯河" },
      { label: "三门峡" },
      { label: "南阳" },
      { label: "商丘" },
      { label: "信阳" },
      { label: "周口" },
      { label: "驻马店" },
      { label: "省直辖县级行政区划" }
    ]
  },
  {
    label: "湖北",
    children: [
      { label: "武汉" },
      { label: "黄石" },
      { label: "十堰" },
      { label: "宜昌" },
      { label: "襄阳" },
      { label: "鄂州" },
      { label: "荆门" },
      { label: "孝感" },
      { label: "荆州" },
      { label: "黄冈" },
      { label: "咸宁" },
      { label: "随州" },
      { label: "恩施土家族" },
      { label: "省直辖县级行政区划" }
    ]
  },
  {
    label: "湖南",
    children: [
      { label: "长沙" },
      { label: "株洲" },
      { label: "湘潭" },
      { label: "衡阳" },
      { label: "邵阳" },
      { label: "岳阳" },
      { label: "常德" },
      { label: "张家界" },
      { label: "益阳" },
      { label: "郴州" },
      { label: "永州" },
      { label: "怀化" },
      { label: "娄底" },
      { label: "湘西土家族" }
    ]
  },
  {
    label: "广东",
    children: [
      { label: "广州" },
      { label: "韶关" },
      { label: "深圳" },
      { label: "珠海" },
      { label: "汕头" },
      { label: "佛山" },
      { label: "江门" },
      { label: "湛江" },
      { label: "茂名" },
      { label: "肇庆" },
      { label: "惠州" },
      { label: "梅州" },
      { label: "汕尾" },
      { label: "河源" },
      { label: "阳江" },
      { label: "清远" },
      { label: "东莞" },
      { label: "中山" },
      { label: "潮州" },
      { label: "揭阳" },
      { label: "云浮" }
    ]
  },
  {
    label: "广西",
    children: [
      { label: "南宁" },
      { label: "柳州" },
      { label: "桂林" },
      { label: "梧州" },
      { label: "北海" },
      { label: "防城港" },
      { label: "钦州" },
      { label: "贵港" },
      { label: "玉林" },
      { label: "百色" },
      { label: "贺州" },
      { label: "河池" },
      { label: "来宾" },
      { label: "崇左" }
    ]
  },
  {
    label: "海南",
    children: [
      { label: "海口" },
      { label: "三亚" },
      { label: "三沙" },
      { label: "儋州" },
      { label: "省直辖县级行政区划" }
    ]
  },
  { label: "重庆", children: [{ label: "市辖区" }, { label: "县" }] },
  {
    label: "四川",
    children: [
      { label: "成都" },
      { label: "自贡" },
      { label: "攀枝花" },
      { label: "泸州" },
      { label: "德阳" },
      { label: "绵阳" },
      { label: "广元" },
      { label: "遂宁" },
      { label: "内江" },
      { label: "乐山" },
      { label: "南充" },
      { label: "眉山" },
      { label: "宜宾" },
      { label: "广安" },
      { label: "达州" },
      { label: "雅安" },
      { label: "巴中" },
      { label: "资阳" },
      { label: "阿坝羌族" },
      { label: "甘孜" },
      { label: "凉山" }
    ]
  },
  {
    label: "贵州",
    children: [
      { label: "贵阳" },
      { label: "六盘水" },
      { label: "遵义" },
      { label: "安顺" },
      { label: "毕节" },
      { label: "铜仁" },
      { label: "黔西南" },
      { label: "黔东南" },
      { label: "黔南" }
    ]
  },
  {
    label: "云南",
    children: [
      { label: "昆明" },
      { label: "曲靖" },
      { label: "玉溪" },
      { label: "保山" },
      { label: "昭通" },
      { label: "丽江" },
      { label: "普洱" },
      { label: "临沧" },
      { label: "楚雄" },
      { label: "红河哈尼族" },
      { label: "文山" },
      { label: "西双版纳" },
      { label: "大理" },
      { label: "德宏" },
      { label: "怒江" },
      { label: "迪庆" }
    ]
  },
  {
    label: "西藏",
    children: [
      { label: "拉萨" },
      { label: "日喀则" },
      { label: "昌都" },
      { label: "林芝" },
      { label: "山南" },
      { label: "那曲" },
      { label: "阿里" }
    ]
  },
  {
    label: "陕西",
    children: [
      { label: "西安" },
      { label: "铜川" },
      { label: "宝鸡" },
      { label: "咸阳" },
      { label: "渭南" },
      { label: "延安" },
      { label: "汉中" },
      { label: "榆林" },
      { label: "安康" },
      { label: "商洛" }
    ]
  },
  {
    label: "甘肃",
    children: [
      { label: "兰州" },
      { label: "嘉峪关" },
      { label: "金昌" },
      { label: "白银" },
      { label: "天水" },
      { label: "武威" },
      { label: "张掖" },
      { label: "平凉" },
      { label: "酒泉" },
      { label: "庆阳" },
      { label: "定西" },
      { label: "陇南" },
      { label: "临夏" },
      { label: "甘南" }
    ]
  },
  {
    label: "青海",
    children: [
      { label: "西宁" },
      { label: "海东" },
      { label: "海北" },
      { label: "黄南" },
      { label: "海南" },
      { label: "果洛" },
      { label: "玉树" },
      { label: "海西族" }
    ]
  },
  {
    label: "宁夏",
    children: [
      { label: "银川" },
      { label: "石嘴山" },
      { label: "吴忠" },
      { label: "固原" },
      { label: "中卫" }
    ]
  },
  {
    label: "新疆",
    children: [
      { label: "乌鲁木齐" },
      { label: "克拉玛依" },
      { label: "吐鲁番" },
      { label: "哈密" },
      { label: "昌吉" },
      { label: "博尔塔拉" },
      { label: "巴音郭楞" },
      { label: "阿克苏" },
      { label: "克孜勒苏柯尔克孜" },
      { label: "喀什" },
      { label: "和田" },
      { label: "伊犁" },
      { label: "塔城" },
      { label: "阿勒泰" },
      { label: "自治区直辖县级行政区划" }
    ]
  }
];

const DivisionCascader = ({ value, onChange }) => {
  return (
    <Cascader
      fieldNames={{ value: "label" }}
      options={options}
      defaultValue={value}
      onChange={onChange}
      placeholder="请选择"
    />
  );
};

export default DivisionCascader;
