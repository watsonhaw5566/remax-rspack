import * as ad from './Ad/node';
import * as audio from './Audio/node';
import * as button from './Button/node';
import * as camera from './Camera/node';
import * as canvas from './Canvas/node';
import * as checkboxGroup from './CheckboxGroup/node';
import * as checkbox from './Checkbox/node';
import * as coverImage from './CoverImage/node';
import * as coverView from './CoverView/node';
import * as editor from './Editor/node';
import * as form from './Form/node';
import * as functionalPageNavigator from './FunctionalPageNavigator/node';
import * as icon from './Icon/node';
import * as image from './Image/node';
import * as input from './Input/node';
import * as label from './Label/node';
import * as livePlayer from './LivePlayer/node';
import * as livePusher from './LivePusher/node';
import * as map from './Map/node';
import * as movableArea from './MovableArea/node';
import * as movableView from './MovableView/node';
import * as navigator from './Navigator/node';
import * as officialAccount from './OfficialAccount/node';
import * as openData from './OpenData/node';
import * as pickerViewColumn from './PickerViewColumn/node';
import * as pickerView from './PickerView/node';
import * as picker from './Picker/node';
import * as progress from './Progress/node';
import * as radioGroup from './RadioGroup/node';
import * as radio from './Radio/node';
import * as richText from './RichText/node';
import * as scrollView from './ScrollView/node';
import * as slider from './Slider/node';
import * as swiperItem from './SwiperItem/node';
import * as swiper from './Swiper/node';
import * as switchComponent from './Switch/node';
import * as text from './Text/node';
import * as textarea from './Textarea/node';
import * as video from './Video/node';
import * as view from './View/node';
import * as webView from './WebView/node';
import * as matchMedia from './MatchMedia/node';
import * as pageContainer from './PageContainer/node';
import * as shareElement from './ShareElement/node';
import * as keyboardAccessory from './KeyboardAccessory/node';
import * as voipRoom from './VoipRoom/node';
import * as adCustom from './AdCustom/node';
import * as pageMeta from './PageMeta/node';
import * as navigationBar from './NavigationBar/node';
import * as rootPortal from './RootPortal/node';
import * as channelLive from './ChannelLive';
import * as channelVideo from './ChannelVideo';
import * as snapshot from './Snapshot';

const hostComponents = new Map();

hostComponents.set('ad', ad);
hostComponents.set('audio', audio);
hostComponents.set('button', button);
hostComponents.set('camera', camera);
hostComponents.set('canvas', canvas);
hostComponents.set('checkbox-group', checkboxGroup);
hostComponents.set('checkbox', checkbox);
hostComponents.set('cover-image', coverImage);
hostComponents.set('cover-view', coverView);
hostComponents.set('editor', editor);
hostComponents.set('form', form);
hostComponents.set('functional-page-navigator', functionalPageNavigator);
hostComponents.set('icon', icon);
hostComponents.set('image', image);
hostComponents.set('input', input);
hostComponents.set('label', label);
hostComponents.set('live-player', livePlayer);
hostComponents.set('live-pusher', livePusher);
hostComponents.set('map', map);
hostComponents.set('movable-area', movableArea);
hostComponents.set('movable-view', movableView);
hostComponents.set('navigator', navigator);
hostComponents.set('official-account', officialAccount);
hostComponents.set('open-data', openData);
hostComponents.set('picker-view-column', pickerViewColumn);
hostComponents.set('picker-view', pickerView);
hostComponents.set('picker', picker);
hostComponents.set('progress', progress);
hostComponents.set('radio-group', radioGroup);
hostComponents.set('radio', radio);
hostComponents.set('rich-text', richText);
hostComponents.set('scroll-view', scrollView);
hostComponents.set('slider', slider);
hostComponents.set('swiper-item', swiperItem);
hostComponents.set('swiper', swiper);
hostComponents.set('switch', switchComponent);
hostComponents.set('text', text);
hostComponents.set('textarea', textarea);
hostComponents.set('video', video);
hostComponents.set('view', view);
hostComponents.set('web-view', webView);
hostComponents.set('match-media', matchMedia);
hostComponents.set('page-container', pageContainer);
hostComponents.set('share-element', shareElement);
hostComponents.set('keyboard-accessory', keyboardAccessory);
hostComponents.set('voip-room', voipRoom);
hostComponents.set('ad-custom', adCustom);
hostComponents.set('page-meta', pageMeta);
hostComponents.set('navigation-bar', navigationBar);
hostComponents.set('root-portal', rootPortal);
hostComponents.set('channel-live', channelLive);
hostComponents.set('channel-video', channelVideo);
hostComponents.set('snapshot', snapshot);

export default hostComponents;
