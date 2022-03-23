import { ItemProps } from '../components/cards/cardGroupPie';
import { colorArray, theme } from '../theme/theme';
import wordApp from '../utils/word';
import helpers from './helpers';

class Converter {
  alertSeverity(data: Array<any>): Array<any> {
    return data.map(item => {
      const rt = {
        title: item.key ? item.key.charAt(0).toUpperCase() + item.key.slice(1) : 'key',
        value: helpers.numFormatter(item.value || item.doc_count),
        color: theme.colors.blue,
      };
      if (item.key === 'medium') rt.color = theme.colors.medium;
      if (item.key === 'high') rt.color = theme.colors.hight;
      if (item.key === 'low') rt.color = theme.colors.low;
      return rt;
    });
  }
  alertOverTime(data: Array<any>): Array<any> {
    const startTime = new Date(new Date().setHours(0)).getTime();
    const filter = data.filter(item => item.key >= startTime);
    const result = filter.map(item => {
      const time = new Date(item.key || new Date().getTime());
      return {
        x: `${time.getHours()}:${time.getMinutes()}`,
        // x: `${time.toLocaleTimeString().split(':')[0]}:${time.toLocaleTimeString().split(':')[1]}-${
        //   time.toLocaleDateString().split('/')[0]
        // }`,
        y: helpers.numFormatter(item.value || item.doc_count),
      };
    });
    return result;
  }
  getAggregations2Buckets(data: Array<any>): Array<any> {
    return data.map((item, index) => {
      return {
        id: index,
        title: item.key || item.title,
        value: item.value || item.doc_count,
      };
    });
  }
  getRuleNameQuality(data: Array<any>): Array<any> {
    return data.map((item, index) => {
      // id: number;
      // alert: string;
      // status: string;
      // description?:string;
      // time: number;
      // number: number;
      // priority: boolean;
      // info?: any;
      return {
        id: index,
        alert: item.key || item.title,
        number: item.value || item.doc_count,
        time: new Date().getTime(),
        status: index % 2 === 0 ? wordApp.wait : wordApp.done,
        description: item.key || item.title,
        priority: index % 2 === 0,
      };
    });
  }
  logsBySensor(data: Array<any>): Array<any> {
    // const colorsRandom = helpers.randomColorNotDuplicate(data.length);
    const sorted = data.sort((a, b) => a.doc_count - b.doc_count);
    return sorted.map((item, index) => {
      return {
        x: item.key || item.title,
        y: helpers.numFormatter(item.value || item.doc_count),
        colorScale: colorArray[index],
      };
    });
  }
  getRuleCategory(data: Array<any>): Array<any> {
    // const colorsRandom = helpers.randomColorNotDuplicate(data.length);
    return data.map((item, index) => {
      return {
        id: index,
        title: item.key || item.title,
        value: helpers.numFormatter(item.value || item.doc_count),
      };
    });
  }
  alertsSent(data: Array<any>): Array<any> {
    const filterNotNull = data.filter(item => item);
    // id: 0,
    // alert: 'Ket nối máy chủ mã độc',
    // number: 45,
    // status: 'Chờ xử lý',
    // description:'info Installing /Users/dinhphong/Library/Developer/Xcode/DerivedData/ReactNativeApp-gdvslehrovxazuaijsllqvmgzaql/Build/Products/Debug-iphonesimulator/ReactNativeApp.app',
    // time: new Date().getTime(),
    // priority: true,
    // info: {
    //   detail: {
    //     Icon: 'A',
    //     Status: 'string',
    //     Date: 1,
    //     Action: 'string',
    //     Type: 'string',
    //     Asset: 'string',
    //   },
    // },
    return filterNotNull.map((item, index) => {
      const data = item?.data;
      return {
        id: item?.id || index,
        alert: data?.rule?.name || "---",
        number: item?.number || 1,
        status: data?.event?.severity_label || "medium",
        description: data?.rule?.rule || "--",
        time: item?.timestamp || new Date().getTime(),
        priority: index % 2 === 0,
        info: {
          detail: {
            observer: data?.observer || "--",
            ecs: data?.ecs || "--",
            tags: data?.tags || "--",
            source: {
              ip: data?.source?.ip || "--",
              port: data?.source?.port || "--"
            },
            destination: {
              continent_name: data?.destination?.geo?.continent_name || "--",
              country_iso_code: data?.destination?.geo?.country_iso_code || "--",
              timezone: data?.destination?.geo?.timezone || "--",
              ip: data?.destination?.ip || "--",
              country_name: data?.destination?.geo?.country_name || "--",
              location: data?.destination?.geo?.location || {
                lon: "--",
                lat: "--"
              },
              port: data?.destination?.port || "--",
            },
            path: data?.log?.file?.path || "--",
            sub_category: data?.rule?.sub_category || "--",
            ruleset: data?.rule?.ruleset || "--",
            action: data?.rule?.action || "--",
            category: data?.rule?.category || "--"
          },
        }
      }
    })
  }
}
export default new Converter();
