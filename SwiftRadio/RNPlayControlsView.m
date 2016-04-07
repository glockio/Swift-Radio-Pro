//
//  RNPlayControls.m
//  SwiftRadio
//
//  Created by Gregory Laughlin on 2016-03-26.
//  Copyright © 2016 CodeMarket.io. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <MediaPlayer/MediaPlayer.h>

//
//  RNPlayControls.m
//
#import "SwiftRadio-Swift.h"
#import "RNPlayControlsView.h"
#import "RCTRootView.h"


@implementation RNPlayControlsView


-(void) initializeReactView: (NSDictionary*)currentStation {
    

    // We need a reference to the AppDelegate since that is where we stored our `RCTBridge`.
    AppDelegate *delegate = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    
    RCTBridge *bridge = delegate.reactNativeBridge;
    
    // Here we create a `RCTRootView` that initializes with the `RCTBridge` that we already pre-loaded.
    RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge  moduleName:@"PlayControls" initialProperties:currentStation];

    // We want RN View to take up entire controls view
    rootView.frame = self.bounds;
    
    rootView.backgroundColor = [UIColor colorWithWhite:0.0 alpha:0.0];
    
    // Each `ViewController` comes with it's own "base" view, here we just want to add our `RCTRootView`
    // to that "base" view so that it is visible on the screen.
    

    [self addSubview:rootView];
    

    
}
@end