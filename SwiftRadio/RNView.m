//
//  RNView.m
//  SwiftRadio
//
//  Created by Greg Laughlin on 3/23/16.
//  Copyright © 2016 CodeMarket.io. All rights reserved.
//

//  ReactNativeViewObjC.m
//

#import "RnView.h"
#import "RCTRootView.h"

@implementation RNView

-(void) initializeReactView {
    

    if (self.data == nil) {
        self.data = [@{} mutableCopy];
    }
    
    // this is a good place to pass configuration variables
//    [self.data setValuesForKeysWithDictionary:@{
//                                                @"DEV_MODE"            : [NSNumber numberWithBool:REACT_DEV_MODE],
//                                                @"API_KEY"             : @"ABCDEF123456",
//                                                @"AUTHORIZATION_TOKEN" : @"a8b6de25b5bf481824c9c4173c56231a"
//                                                }];
//    
//    NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios&dev=true"];
//    
//    if (!REACT_DEV_MODE) {
//        jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
//    }
//    
//    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
//                                                        moduleName:@"ReactNativeExample"
//                                                 initialProperties:self.data
//                                                     launchOptions:nil];
//    
//    rootView.translatesAutoresizingMaskIntoConstraints = NO;
//    [self addSubview:rootView];
//    
//    NSDictionary *views = @{@"rootView": rootView};
//    NSArray *constraints = @[];
//    constraints = [constraints arrayByAddingObjectsFromArray:[NSLayoutConstraint constraintsWithVisualFormat:@"V:|-0-[rootView]-0-|" options:0 metrics:nil views:views]];
//    constraints = [constraints arrayByAddingObjectsFromArray:[NSLayoutConstraint constraintsWithVisualFormat:@"H:|-0-[rootView]-0-|" options:0 metrics:nil views:views]];
//    
//    [self addConstraints:constraints];
//    [self layoutIfNeeded];
}

@end
