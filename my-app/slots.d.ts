import {NullableJsonObject} from '@croct/plug/sdk/json';
import {HomeBanner} from './HomeBanner';

declare module '@croct/plug/fetch' {
    interface SlotMap extends Record<string, NullableJsonObject> {
        'home-banner': HomeBanner;
    }
}