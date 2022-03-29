import { useNavigation } from '@react-navigation/native';
import {
  Box,
  Button,
  FlatList,
  Flex,
  HStack,
  Icon,
  NativeBaseProvider,
  PresenceTransition,
  Pressable,
  Text,
  useToast,
  View,
} from 'native-base';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { MaterialCommunityIcons } from "../../../assets/icons";
import { useDispatch, useSelector } from 'react-redux';
import { ToolBar } from '../../../components/tools/ToolBar';
import ViewBackGround from '../../../components/viewbackground';
import { NameScreen } from '../../../config';
import { LoadingContext } from '../../../context/LoadingContext';
import Helpers from '../../../helpers/helpers';
import { listWarnings, TypesWarning } from '../../../model/data';
import alertService from '../../../redux/services/alertService';
import { theme } from '../../../theme/theme';
import wordApp from '../../../utils/word';
const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};
function Container() {
  return (
    <NativeBaseProvider config={config}>
      <DetailScreen />
    </NativeBaseProvider>
  );
}
function DetailScreen() {
  const [state, setState] = React.useState({
    refreshing: false,
  });
  const store = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const { setLoading } = React.useContext(LoadingContext);
  const [records, setRecords] = React.useState<Array<any>>(store.Alert.alertsSent);
  const loadMore = React.useCallback(async (offset: number) => {
    setLoading(true);
    const dataMore = await alertService.loadMore(dispatch, offset)
      .finally(() => {
        setLoading(false);
      })
    if (dataMore) {
      const newRecords = records.concat(dataMore);
      setRecords(newRecords);
    }
  }, [])
  const waited = async () => {
    setState({ ...state, refreshing: true });
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 3000);
    }).then(d => {
      setState({ ...state, refreshing: false });
    });
  };

  const memorizedList = React.useMemo(() => records, [records]);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, paddingHorizontal: 10 }}>
        <ToolBar loading={state.refreshing} onRefresh={waited} />
        <FlatView listWarnings={memorizedList || listWarnings} loadMore={loadMore} />
      </View>
    </View>
  );
}
const FlatView = React.memo(({ listWarnings, loadMore }: any) => {
  console.log('reRender ', listWarnings.length);
  const memorized = React.useCallback(
    ({ item, index }) => <RenderItem item={item} index={index} />,
    [],
  );
  const keyMemoried = React.useCallback(item => `key-${item.id}`, []);
  const handleOnEndReached = () => {
    console.log("end");
    // loadMore(listWarnings.length)
  }

  return (
    <View style={{ flex: 1, marginVertical: 10 }}>
      <FlatList
        data={listWarnings}
        keyExtractor={keyMemoried}
        renderItem={memorized}
        onEndReached={handleOnEndReached}
      />
    </View>
  );
});
const RenderItem = React.memo(({ item, index }: { item: TypesWarning, index: number }) => {
  console.log("render ", index);

  const color = Helpers.recognizeColorFromSeverity(item.status);
  const navigation = useNavigation();
  const [state, setState] = React.useState({
    priority: item.priority,
    otherF: false,
  });
  const handleGoDetail = () => {
    navigation.navigate(NameScreen.InfoWarningScreen, { item: item });
  }
  return (
    <Pressable onLongPress={() => setState({ ...state, otherF: !state.otherF })} onPress={handleGoDetail}>
      <Flex flexDirection={'row'} flex={1} key={item.id}>
        <View
          style={{
            width: 6,
            height: '60%',
            backgroundColor: color || 'red',
            borderRadius: 5,
            alignSelf: 'center',
          }}
        />
        <Box
          pt="3"
          pl="3"
          pr="3"
          _text={{
            fontSize: 'md',
            fontWeight: 'medium',
            color: 'warmGray.50',
            textAlign: 'center',
          }}
          style={{
            borderBottomWidth: 2,
            borderColor: theme.colors.border,
            flex: 1,
          }}>
          <HStack flexDirection="row" style={{ justifyContent: 'space-between' }}>
            <Text
              style={{
                ...theme.fontSize.h3,
                color: color,
                fontWeight: 'bold',
                maxWidth: '90%'
              }}>
              {item.alert}
            </Text>
            <Icon
              as={<MaterialCommunityIcons name={'shield-alert'} />}
              size={6}
              color={state.priority ? 'amber.400' : 'muted.400'}
              onPress={() => setState({ ...state, priority: !state.priority })}
            />
          </HStack>
          <Text
            style={{
              ...theme.fontSize.h4,
              color: theme.colors.text,
              paddingVertical: 3,
            }}>
            {wordApp.ipAddress} :{item?.info?.detail?.source?.ip}
          </Text>
          <Flex flexDirection="row" style={{ justifyContent: 'space-between' }}>
            <Text style={{ ...theme.fontSize.h4, color: theme.colors.text }}>
              {wordApp.status}:{item.status}
            </Text>
            <Text style={{ ...theme.fontSize.h4, color: theme.colors.text }}>
              {item.time}
            </Text>
          </Flex>
          {state.otherF ? (
            <PresenceTransition
              visible={state.otherF}
              initial={{
                opacity: 0,
                translateX: 100,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 250,
                },
              }}>
              <HStack
                space={'1'}
                flexDirection="row"
                style={{ justifyContent: 'space-between', paddingVertical: 3 }}>
                <Button>{wordApp.wait}</Button>
                <Button variant={'outline'} size="sm">
                  {wordApp.doing}
                </Button>
                <Button variant={'subtle'}>{wordApp.verified}</Button>
              </HStack>
            </PresenceTransition>
          ) : (
            <View style={{ paddingBottom: 5 }} />
          )}
          {/* <PresenceTransition
            visible={state.otherF}
            initial={{
              opacity: 0,
              translateX:100,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 250,
              },
            }}>
            <HStack
              space={'1'}
              flexDirection="row"
              style={{justifyContent: 'space-between', paddingVertical: 3}}>
              <Button>{wordApp.wait}</Button>
              <Button variant={'outline'} size="sm">
                {wordApp.doing}
              </Button>
              <Button variant={'subtle'}>{wordApp.verified}</Button>
            </HStack>
          </PresenceTransition>*/}
        </Box>
      </Flex>
    </Pressable>
  );
});
export default React.memo(Container);
