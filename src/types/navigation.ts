import { NavigatorScreenParams } from '@react-navigation/native';

export type AppTabParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
};

export type RootStackParamList = {
  AppTabs: NavigatorScreenParams<AppTabParamList>;
  PostDetail: { postId: string };
};

export type AppTabScreenProps<T extends keyof AppTabParamList> = {
  navigation: any;
  route: {
    params: AppTabParamList[T];
  };
}; 