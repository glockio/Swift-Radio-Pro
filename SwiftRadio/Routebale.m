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
#import <UIKit/UIKit.h>


@implementation Routeable

RCT_EXPORT_MODULE()


// Set module to run on main IOS thread
- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

// This is an exported method that is available in JS.
RCT_EXPORT_METHOD(popRoute) {
    UINavigationController *navigationController = (UINavigationController *)[[[[UIApplication sharedApplication] delegate] window] rootViewController];
        
    [navigationController popViewControllerAnimated:YES];

}

// This is an exported method that is available in JS.
RCT_EXPORT_METHOD(closeModal) {
    [self.delegate dismissModal];
}


@end

