//
//  Routebale.m
//  SwiftRadio
//
//  Created by Gregory Laughlin on 2016-03-20.
//  Copyright © 2016 CodeMarket.io. All rights reserved.
//


//  Created by Dave Sibiski on 9/4/15.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

#import "Routeable.h"

@implementation Routeable

RCT_EXPORT_MODULE()

// This is an exported method that is available in JS.
RCT_EXPORT_METHOD(popRoute) {
    [self.delegate popRoute];
}
@end

