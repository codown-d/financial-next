import TzNextImage from "@/components/TzNextImage";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { getInvestmentList } from "@/fetch";
import { TzButton } from "@/components/TzButton";
import TzIcon from "@/components/TzIcon";
import Link from "next/link";

async function getServerSideProps(context) {
  const { page = 1, pageSize = 10 } = context;
  const res = await getInvestmentList();
  return {
    items: res.items,
    total: res.items.length,
  };
}
export default async function EquityInvestment() {
  let list = [
    [
      {
        img: "zcxw.png",
        title: "数据政策咨询",
      },
      {
        img: "zcqq.png",
        title: "数据资产确权登记",
      },
    ],
    [
      {
        img: "zlptdz.png",
        title: "数据治理平台打造",
      },
      {
        img: "zcrb.png",
        title: "数据资产入表",
      },
    ],
    [
      {
        img: "cpkf.png",
        title: "数据产品开发",
      },
      {
        img: "zclt.png",
        title: "数据资产流通",
      },
    ],
    [
      {
        img: "hgpg.png",
        title: "数据合规评估",
      },
      {
        img: "zcrz.png",
        title: "数据资产融资",
      },
    ],
    [
      {
        img: "zlpj.png",
        title: "数据质量评价",
      },
      {
        img: "rcpx.png",
        title: "数据人才培训",
      },
    ],
    [
      {
        img: "jzrd.png",
        title: "数据价值认定",
      },
      {
        img: "cypy.png",
        title: "数据产业培育",
      },
    ],
  ];
  return (
    <AntdRegistry>
      <div className="relative bg-white-500">
        <div
          className="h-[960px] relative flex  flex-col justify-center"
          style={{
            background: "url('/images/sjys-bg.png') no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <div className="flex flex-col items-center justify-center z-10">
            <TzNextImage
              src={"/images/sjys-title.png"}
              height={0}
              width={360}
              className="mt-3"
            />
          </div>
          <div className="max-w-screen-lg  mx-auto pb-[112px]">
            <div className="flex flex-col  items-center w-full">
              <div className="max-w-[840px] mt-[66px] mb-[40px] flex items-center justify-center text-center leading-[28px] text-[#666] text-[14px]">
                在市财政局与市政务服务与数据局指导下，依托全国性数据交易所在数据领域专业技术力量与深厚的行业经验建设的市本级数据要素工作站
                积极投身数字广元建设 丨 促进数据多源协同、多主体复用和多场景应用
                丨 探索数字经济未来发展新模式
                努力实现建立全市一体化数据要素流通市场
              </div>
              <TzButton
                className="!py-[10px] !px-[68px] leading-[14px] !text-white-500"
                style={{
                  background:
                    "linear-gradient( 270deg, #7B9DF1 0%, #3C5BF6 100%)",
                }}
                shape="round"
                icon={
                  <TzIcon className={"fa-arrow-right text-white-500 text-sm"} />
                }
                iconPosition={"end"}
              >
                <Link href="/equity-investment">查看详情</Link>
              </TzButton>
              <div className="flex justify-between w-full mt-[30px]">
                {list.map((item, index) => {
                  let d = 0;
                  if ([1, 4].includes(index)) {
                    d = 24;
                  } else if ([2, 3].includes(index)) {
                    d = 34;
                  }
                  return (
                    <div
                      className="flex flex-col "
                      style={{ paddingTop: `${d}px` }}
                      key={index}
                    >
                      {item.map((item) => {
                        return (
                          <div
                            key={item.title}
                            className="flex flex-col mx-[15px] justify-center items-center pt-5 pb-3 rounded-[16px] border-[2px] border-white-500 my-[10px] w-[160px]"
                            style={{
                              background:
                                "linear-gradient( rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 99%)",
                              boxShadow:
                                "0px 6px 10px 0px rgba(61,90,245,0.12)",
                              backdropFilter: "blur(4px)",
                            }}
                          >
                            <TzNextImage
                              src={`/images/${item.img}`}
                              height={52}
                              width={52}
                              className="mb-[10px]"
                            />
                            <div>{item.title}</div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AntdRegistry>
  );
}
