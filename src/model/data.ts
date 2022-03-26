import Ionicons from 'react-native-vector-icons/Ionicons';



export interface TypesWarning {
  id: number;
  alert: string;
  status: string;
  description?:string;
  time: number;
  number: number;
  priority: boolean;
  info?: any;
}
export const listWarnings: Array<TypesWarning> = [
  {
    id: 0,
    alert: 'Ket nối máy chủ mã độc',
    number: 45,
    status: 'Chờ xử lý',
    description:'info Installing /Users/dinhphong/Library/Developer/Xcode/DerivedData/ReactNativeApp-gdvslehrovxazuaijsllqvmgzaql/Build/Products/Debug-iphonesimulator/ReactNativeApp.app',
    time: new Date().getTime(),
    priority: true,
    info: {
      detail: {
        Icon: 'A',
        Status: 'string',
        Date: 1,
        Action: 'string',
        Type: 'string',
        Asset: 'string',
      },
    },
  },
  {
    id: 1,
    alert: 'Tấn công DDos',
    number: 14,
    status: 'Chờ xử lý',
    time: new Date().getTime(),
    priority: false,
    info: {
      detail: {
        Icon: 'A',
        Status: 'string',
        Date: 1,
        Action: 'string',
        Type: 'string',
        Asset: 'string',
      },
    },
  },
  {
    id: 2,
    alert: 'Tấn công rà quyét',
    number: 124,
    status: 'Đã xử lý',
    time: new Date().getTime(),
    priority: true,
    info: {
      detail: {
        Icon: 'A',
        Status: 'string',
        Date: 1,
        Action: 'string',
        Type: 'string',
        Asset: 'string',
      },
    },
  },
  {
    id: 3,
    alert: 'Window Logon Success',
    number: 20,
    status: 'Đang xác minh',
    time: new Date().getTime(),
    priority: true,
    info: {
      detail: {
        Icon: 'A',
        Status: 'string',
        Date: 1,
        Action: 'string',
        Type: 'string',
        Asset: 'string',
      },
    },
  },
  {
    id: 4,
    alert: 'Window Logon Success',
    number: 450,
    status: 'Đang xác minh',
    time: new Date().getTime(),
    priority: false,
  },
  {
    id: 10,
    alert: 'Window Logon Success',
    number: 20,
    status: 'Đang xác minh',
    time: new Date().getTime(),
    priority: true,
  },
  {
    id: 5,
    alert: 'Window Logon Success',
    number: 40,
    status: 'Chờ xử lý',
    time: new Date().getTime(),
    priority: false,
  },
  {
    id: 6,
    alert: 'Window Logon Success',
    number: 50,
    status: 'Đang xác minh',
    time: new Date().getTime(),
    priority: true,
  },
  {
    id: 7,
    alert: 'Địa chỉ IP không xác định',
    number: 200,
    status: 'Chờ xử lý',
    time: new Date().getTime(),
    priority: false,
  },
];

