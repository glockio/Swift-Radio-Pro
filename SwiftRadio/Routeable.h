//
//  Routeable.h
//  SwiftRadio
//
//  Created by Gregory Laughlin on 2016-03-20.
//  Copyright © 2016 CodeMarket.io. All rights reserved.
//

#ifndef Routeable_h
#define Routeable_h


#endif /* Routeable_h */


#import <Foundation/Foundation.h>
#import "RCTBridgeModule.h"


@protocol RouteableDelegate;

@interface Routeable : NSObject <RCTBridgeModule>

@property (nonatomic, weak) id<RouteableDelegate> delegate;

@end

// Here we define the delegate methods that could be overriden by any other object.
@protocol RouteableDelegate <NSObject>
@optional

- (void)popRoute;

@end