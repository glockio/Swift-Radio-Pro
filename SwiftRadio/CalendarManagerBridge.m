//
//  CalendarManagerBridge.m
//  SwiftRadio
//
//  Created by Gregory Laughlin on 2016-03-16.
//  Copyright © 2016 CodeMarket.io. All rights reserved.
//

#import <Foundation/Foundation.h>

#import "RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(CalendarManager, NSObject)

RCT_EXTERN_METHOD(addEvent:(NSString *)name)

@end