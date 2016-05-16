//
//  RNPlayControls.h
//  SwiftRadio
//
//  Created by Gregory Laughlin on 2016-03-26.
//  Copyright © 2016 CodeMarket.io. All rights reserved.
//

#ifndef RNPlayControls_h
#define RNPlayControls_h


#endif /* RNPlayControls_h */


#import <UIKit/UIKit.h>
#import  "Playable.h"

@interface RNPlayControlsView : UIView<PlayableDlegate>

@property NSMutableDictionary *data;
- (void) initializeReactView: (NSDictionary*)currentStation;

@end