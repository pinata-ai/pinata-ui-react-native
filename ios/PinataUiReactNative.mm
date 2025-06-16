#import <React/RCTBridgeModule.h>

@interface PinataUiReactNative : NSObject <RCTBridgeModule>
@end

@implementation PinataUiReactNative

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(show:(NSString *)message
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  resolve(nil);
}

@end
